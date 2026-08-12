(() => {
    const LAND = [
        [[-168, 66], [-154, 58], [-140, 59], [-132, 52], [-125, 49], [-124, 40], [-117, 32], [-106, 23], [-97, 18], [-88, 19], [-83, 25], [-80, 31], [-75, 39], [-66, 45], [-58, 51], [-63, 59], [-78, 62], [-92, 74], [-119, 75], [-142, 70]],
        [[-81, 12], [-75, 8], [-68, 10], [-61, 6], [-52, -1], [-48, -15], [-54, -27], [-60, -38], [-68, -55], [-75, -50], [-72, -34], [-76, -18]],
        [[-53, 59], [-43, 61], [-28, 70], [-23, 80], [-44, 83], [-61, 76]],
        [[-17, 36], [-6, 43], [10, 45], [24, 40], [34, 35], [43, 12], [51, 11], [50, -12], [40, -26], [31, -35], [18, -35], [10, -25], [2, -5], [-10, 7]],
        [[-10, 36], [-9, 44], [2, 51], [18, 55], [31, 70], [58, 72], [83, 73], [105, 77], [137, 71], [171, 66], [180, 54], [161, 49], [146, 43], [131, 32], [121, 23], [111, 20], [104, 10], [95, 6], [84, 9], [77, 20], [67, 25], [55, 27], [45, 36], [31, 41], [22, 37], [13, 43], [3, 43]],
        [[113, -11], [130, -11], [145, -17], [153, -28], [145, -39], [130, -35], [116, -30]],
        [[47, -13], [51, -17], [49, -26], [44, -24]],
        [[129, 32], [136, 35], [142, 44], [145, 40], [140, 33]],
        [[166, -34], [178, -38], [174, -47], [166, -45]]
    ];

    const state = new WeakMap();

    function project(lon, lat, width, height) {
        return [((lon + 180) / 360) * width, ((90 - lat) / 180) * height];
    }

    function countryName(code) {
        if (!code) return '';
        try {
            return new Intl.DisplayNames([document.documentElement.lang || 'en'], { type: 'region' }).of(code);
        } catch (_) {
            return code;
        }
    }

    function placeName(point) {
        return [point.city, point.region, countryName(point.countryCode)].filter(Boolean).join(', ');
    }

    function draw(widget) {
        const canvas = widget.querySelector('[data-visitor-canvas]');
        const data = state.get(widget) || { points: [] };
        const bounds = canvas.getBoundingClientRect();
        const width = Math.max(300, Math.round(bounds.width));
        const height = Math.round(width / 2);
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        const context = canvas.getContext('2d');
        context.scale(ratio, ratio);
        context.clearRect(0, 0, width, height);

        const ocean = context.createLinearGradient(0, 0, 0, height);
        ocean.addColorStop(0, '#4c86a6');
        ocean.addColorStop(0.52, '#326f93');
        ocean.addColorStop(1, '#245777');
        context.fillStyle = ocean;
        context.fillRect(0, 0, width, height);

        const oceanGlow = context.createRadialGradient(
            width * 0.38, height * 0.32, 0,
            width * 0.38, height * 0.32, width * 0.62
        );
        oceanGlow.addColorStop(0, 'rgba(213, 237, 240, 0.12)');
        oceanGlow.addColorStop(0.58, 'rgba(102, 171, 190, 0.04)');
        oceanGlow.addColorStop(1, 'rgba(8, 40, 61, 0.22)');
        context.fillStyle = oceanGlow;
        context.fillRect(0, 0, width, height);

        context.lineCap = 'round';
        for (let band = 0; band < 14; band += 1) {
            const baseY = ((band + 0.7) / 14.5) * height;
            context.beginPath();
            for (let x = -12; x <= width + 12; x += 8) {
                const wave = Math.sin(x * 0.028 + band * 1.71) * (2.2 + (band % 3));
                const drift = Math.sin(x * 0.009 - band * 0.84) * 3.5;
                const y = baseY + wave + drift;
                if (x === -12) context.moveTo(x, y);
                else context.lineTo(x, y);
            }
            context.strokeStyle = band % 3 === 0
                ? 'rgba(210, 235, 239, 0.075)'
                : 'rgba(10, 49, 72, 0.065)';
            context.lineWidth = band % 3 === 0 ? 1.1 : 0.75;
            context.stroke();
        }

        LAND.forEach((polygon, polygonIndex) => {
            context.beginPath();
            polygon.forEach(([lon, lat], index) => {
                const [x, y] = project(lon, lat, width, height);
                if (index === 0) context.moveTo(x, y);
                else context.lineTo(x, y);
            });
            context.closePath();
            context.strokeStyle = 'rgba(151, 205, 190, 0.28)';
            context.lineWidth = 3;
            context.stroke();
            const terrain = context.createLinearGradient(0, 0, width, height);
            terrain.addColorStop(0, polygonIndex % 2 ? '#73915d' : '#6f8b57');
            terrain.addColorStop(0.48, polygonIndex % 2 ? '#58794b' : '#66834f');
            terrain.addColorStop(1, '#425f3d');
            context.fillStyle = terrain;
            context.fill();
            context.strokeStyle = 'rgba(223, 235, 204, 0.76)';
            context.lineWidth = 0.8;
            context.stroke();

            context.save();
            context.clip();
            context.globalAlpha = 0.13;
            context.strokeStyle = '#173b28';
            context.lineWidth = 1;
            for (let offset = -height; offset < width + height; offset += 15) {
                context.beginPath();
                context.moveTo(offset, height);
                context.lineTo(offset + height, 0);
                context.stroke();
            }
            context.restore();
        });

        data.renderedPoints = data.points.map(point => {
            const [x, y] = project(Number(point.longitude), Number(point.latitude), width, height);
            const radius = Math.min(11, 2.5 + Math.log2(Number(point.visits) + 1) * 1.35);
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(190, 36, 46, 0.68)';
            context.fill();
            context.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            context.lineWidth = 1;
            context.stroke();
            return { ...point, x, y, radius };
        });
        state.set(widget, data);
    }

    function showTooltip(widget, event) {
        const canvas = widget.querySelector('[data-visitor-canvas]');
        const tooltip = widget.querySelector('[data-visitor-tooltip]');
        const data = state.get(widget);
        if (!data || !data.renderedPoints) return;
        const bounds = canvas.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const point = data.renderedPoints.find(item => Math.hypot(item.x - x, item.y - y) <= Math.max(7, item.radius + 2));
        if (!point) {
            tooltip.hidden = true;
            return;
        }
        tooltip.textContent = `${placeName(point) || 'Approximate location'} · ${point.visits} ${Number(point.visits) === 1 ? 'visit' : 'visits'}`;
        tooltip.style.left = `${Math.min(widget.clientWidth - 180, Math.max(8, x + 12))}px`;
        tooltip.style.top = `${Math.max(36, y)}px`;
        tooltip.hidden = false;
    }

    function visitorId() {
        const key = 'visitor-map-anonymous-id';
        try {
            let value = localStorage.getItem(key);
            if (!value) {
                value = crypto.randomUUID();
                localStorage.setItem(key, value);
            }
            return value;
        } catch (_) {
            return crypto.randomUUID();
        }
    }

    async function requestStats(endpoint) {
        const shouldRecord = navigator.doNotTrack !== '1';
        if (shouldRecord) {
            const response = await fetch(`${endpoint}/api/visit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ visitorId: visitorId() }),
                credentials: 'omit'
            });
            if (response.ok) return response.json();
        }
        const response = await fetch(`${endpoint}/api/stats`, { credentials: 'omit' });
        if (!response.ok) throw new Error(`Visitor API returned ${response.status}`);
        return response.json();
    }

    async function initialize(widget) {
        if (widget.dataset.initialized === 'true') return;
        widget.dataset.initialized = 'true';
        const canvas = widget.querySelector('[data-visitor-canvas]');
        const summary = widget.querySelector('[data-visitor-summary]');
        state.set(widget, { points: [] });
        draw(widget);
        canvas.addEventListener('mousemove', event => showTooltip(widget, event));
        canvas.addEventListener('mouseleave', () => {
            widget.querySelector('[data-visitor-tooltip]').hidden = true;
        });
        new ResizeObserver(() => draw(widget)).observe(canvas);

        const endpoint = widget.dataset.endpoint.replace(/\/$/, '');
        if (!endpoint) {
            summary.textContent = 'Backend setup required';
            return;
        }

        try {
            const result = await requestStats(endpoint);
            state.set(widget, {
                points: Array.isArray(result.locations) ? result.locations : []
            });
            const visits = Number(result.totalVisits || 0).toLocaleString();
            const countries = Number(result.totalCountries || 0).toLocaleString();
            summary.textContent = `Total visits: ${visits} · Countries: ${countries}`;
            draw(widget);
        } catch (error) {
            console.warn('Visitor map unavailable:', error);
            summary.textContent = 'Map temporarily unavailable';
        }
    }

    document.querySelectorAll('[data-visitor-map]').forEach(initialize);
})();
