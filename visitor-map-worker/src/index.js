const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

function allowedOrigins(env) {
    return (env.ALLOWED_ORIGINS || '')
        .split(',')
        .map(value => value.trim())
        .filter(Boolean);
}

function isAllowedOrigin(origin, env) {
    if (allowedOrigins(env).includes(origin)) return true;
    try {
        const url = new URL(origin);
        return url.protocol === 'http:' &&
            (url.hostname === 'localhost' || url.hostname === '127.0.0.1');
    } catch (_) {
        return false;
    }
}

function corsHeaders(request, env) {
    const origin = request.headers.get('Origin') || '';
    const origins = allowedOrigins(env);
    return {
        'Access-Control-Allow-Origin': isAllowedOrigin(origin, env) ? origin : origins[0] || 'null',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
    };
}

function json(request, env, value, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(value), {
        status,
        headers: { ...JSON_HEADERS, ...corsHeaders(request, env), ...extraHeaders }
    });
}

function isAllowedWriteOrigin(request, env) {
    const origin = request.headers.get('Origin');
    return Boolean(origin && isAllowedOrigin(origin, env));
}

async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)]
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

function roundedCoordinate(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return 0;
    return Math.round(number * 2) / 2;
}

function safeText(value, maxLength) {
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isLikelyBot(request) {
    const agent = request.headers.get('User-Agent') || '';
    return /bot|crawler|spider|preview|headless|lighthouse|pagespeed/i.test(agent);
}

async function getStats(env) {
    const [totals, locations] = await env.DB.batch([
        env.DB.prepare(`
            SELECT
                COALESCE(SUM(visits), 0) AS total_visits,
                COUNT(DISTINCT CASE WHEN country_code != '' THEN country_code END) AS total_countries
            FROM locations
        `),
        env.DB.prepare(`
            SELECT country_code, region, city, latitude, longitude, visits
            FROM locations
            ORDER BY visits DESC, last_seen DESC
            LIMIT 1000
        `)
    ]);
    const total = totals.results[0] || {};
    return {
        totalVisits: Number(total.total_visits || 0),
        totalCountries: Number(total.total_countries || 0),
        locations: locations.results.map(row => ({
            countryCode: row.country_code,
            region: row.region,
            city: row.city,
            latitude: Number(row.latitude),
            longitude: Number(row.longitude),
            visits: Number(row.visits)
        }))
    };
}

async function recordVisit(request, env) {
    if (!isAllowedWriteOrigin(request, env)) {
        return json(request, env, { error: 'Origin is not allowed' }, 403);
    }
    if (!env.HASH_SALT) {
        return json(request, env, { error: 'Worker secret HASH_SALT is not configured' }, 503);
    }
    if (isLikelyBot(request)) {
        return json(request, env, await getStats(env));
    }

    let body;
    try {
        body = await request.json();
    } catch (_) {
        return json(request, env, { error: 'Invalid JSON' }, 400);
    }
    const anonymousId = safeText(body.visitorId, 100);
    if (anonymousId.length < 16) {
        return json(request, env, { error: 'Invalid anonymous visitor ID' }, 400);
    }

    const now = new Date();
    const day = now.toISOString().slice(0, 10);
    const timestamp = now.toISOString();
    const visitorHash = await sha256(`${env.HASH_SALT}:${day}:${anonymousId}`);
    const inserted = await env.DB.prepare(`
        INSERT OR IGNORE INTO visitor_days (day, visitor_hash, created_at)
        VALUES (?, ?, ?)
    `).bind(day, visitorHash, timestamp).run();

    if (Number(inserted.meta?.changes || 0) > 0) {
        const cf = request.cf || {};
        const countryCode = safeText(cf.country, 2);
        const region = safeText(cf.region, 80);
        const city = safeText(cf.city, 80);
        const latitude = roundedCoordinate(cf.latitude);
        const longitude = roundedCoordinate(cf.longitude);
        const locationKey = await sha256(`${countryCode}|${region}|${city}|${latitude}|${longitude}`);

        await env.DB.batch([
            env.DB.prepare(`
                INSERT INTO locations (
                    location_key, country_code, region, city, latitude, longitude,
                    visits, first_seen, last_seen
                ) VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?)
                ON CONFLICT(location_key) DO UPDATE SET
                    visits = visits + 1,
                    last_seen = excluded.last_seen
            `).bind(locationKey, countryCode, region, city, latitude, longitude, timestamp, timestamp),
            env.DB.prepare(`
                INSERT INTO daily_locations (day, location_key, visits)
                VALUES (?, ?, 1)
                ON CONFLICT(day, location_key) DO UPDATE SET visits = visits + 1
            `).bind(day, locationKey)
        ]);
    }

    return json(request, env, await getStats(env), 200, { 'Cache-Control': 'no-store' });
}

async function exportData(request, env) {
    const authorization = request.headers.get('Authorization') || '';
    if (!env.EXPORT_TOKEN || authorization !== `Bearer ${env.EXPORT_TOKEN}`) {
        return json(request, env, { error: 'Unauthorized' }, 401);
    }
    const [locations, daily] = await env.DB.batch([
        env.DB.prepare('SELECT * FROM locations ORDER BY first_seen'),
        env.DB.prepare('SELECT * FROM daily_locations ORDER BY day, location_key')
    ]);
    const date = new Date().toISOString().slice(0, 10);
    return json(request, env, {
        schemaVersion: 1,
        exportedAt: new Date().toISOString(),
        locations: locations.results,
        dailyLocations: daily.results
    }, 200, {
        'Cache-Control': 'no-store',
        'Content-Disposition': `attachment; filename="visitor-map-${date}.json"`
    });
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders(request, env) });
        }
        if (url.pathname === '/api/visit' && request.method === 'POST') {
            return recordVisit(request, env);
        }
        if (url.pathname === '/api/stats' && request.method === 'GET') {
            return json(request, env, await getStats(env), 200, {
                'Cache-Control': 'public, max-age=60'
            });
        }
        if (url.pathname === '/api/export' && request.method === 'GET') {
            return exportData(request, env);
        }
        if (url.pathname === '/health') {
            return json(request, env, { ok: true });
        }
        return json(request, env, { error: 'Not found' }, 404);
    },

    async scheduled(_controller, env) {
        await env.DB.prepare(`
            DELETE FROM visitor_days
            WHERE day < date('now', '-8 days')
        `).run();
    }
};
