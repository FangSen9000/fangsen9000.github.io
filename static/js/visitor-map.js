(() => {
    const state = new WeakMap();
    const MAP = {
        radius: 6381372,
        meridian: 11.5,
        minX: -20004297.151525836,
        maxX: 20026572.39474939,
        minY: -12671671.123330014,
        maxY: 6930392.02513512
    };
    const ZOOM_LEVELS = [1, 1.6, 2.56];

    function project(longitude, latitude, width, height) {
        let lon = Number(longitude);
        const lat = Number(latitude);
        if (-180 + MAP.meridian > lon) lon += 360;
        const x = MAP.radius * (lon - MAP.meridian) * Math.PI / 180;
        const y = -MAP.radius * Math.log(Math.tan((45 + .4 * lat) * Math.PI / 180)) / .8;
        return [
            (x - MAP.minX) / (MAP.maxX - MAP.minX) * width,
            (y - MAP.minY) / (MAP.maxY - MAP.minY) * height
        ];
    }

    function draw(widget) {
        const canvas = widget.querySelector('[data-visitor-canvas]');
        const data = state.get(widget) || { points: [] };
        const width = Math.max(300, Math.round(canvas.clientWidth));
        const height = Math.round(width * 218 / 446);
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        const context = canvas.getContext('2d');
        context.scale(ratio, ratio);
        context.clearRect(0, 0, width, height);

        data.renderedPoints = data.points.map(point => {
            const [x, y] = project(point.longitude, point.latitude, width, height);
            const radius = Math.min(4, 2 + Math.floor(Math.log2(Number(point.visits) + 1) / 2));
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(255, 0, 0, .7)';
            context.fill();
            context.strokeStyle = '#fff';
            context.lineWidth = .5;
            context.stroke();
            return { ...point, x, y, radius };
        });
        data.width = width;
        data.height = height;
        state.set(widget, data);
    }

    function placeName(point) {
        let country = point.countryCode || '';
        try {
            country = new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country;
        } catch (_) {}
        return [point.city, point.region, country].filter(Boolean).join(', ');
    }

    function showTooltip(widget, event) {
        const canvas = widget.querySelector('[data-visitor-canvas]');
        const tooltip = widget.querySelector('[data-visitor-tooltip]');
        const data = state.get(widget);
        const bounds = canvas.getBoundingClientRect();
        const x = (event.clientX - bounds.left) * data.width / bounds.width;
        const y = (event.clientY - bounds.top) * data.height / bounds.height;
        const point = data?.renderedPoints?.find(item => Math.hypot(item.x - x, item.y - y) <= Math.max(7, item.radius + 2));
        if (!point) return void (tooltip.hidden = true);
        tooltip.textContent = `${placeName(point) || 'Approximate location'} · ${point.visits} ${Number(point.visits) === 1 ? 'visit' : 'visits'}`;
        const widgetBounds = widget.getBoundingClientRect();
        tooltip.style.left = `${Math.min(widget.clientWidth - 180, Math.max(8, event.clientX - widgetBounds.left + 12))}px`;
        tooltip.style.top = `${Math.max(36, event.clientY - widgetBounds.top)}px`;
        tooltip.hidden = false;
    }

    function clampPan(widget, data) {
        const viewport = widget.querySelector('[data-visitor-viewport]');
        const stage = widget.querySelector('[data-visitor-stage]');
        const zoom = ZOOM_LEVELS[data.zoomIndex || 0];
        if (zoom === 1) {
            data.panX = 0;
            data.panY = 0;
            return;
        }
        const scaledWidth = stage.clientWidth * zoom;
        const scaledHeight = stage.clientHeight * zoom;
        const maxX = (scaledWidth - stage.clientWidth) / 2;
        const minY = viewport.clientHeight - stage.offsetTop - (stage.clientHeight + scaledHeight) / 2;
        const maxY = -stage.offsetTop + (scaledHeight - stage.clientHeight) / 2;
        data.panX = Math.max(-maxX, Math.min(maxX, data.panX || 0));
        data.panY = Math.max(minY, Math.min(maxY, data.panY || 0));
    }

    function applyTransform(widget, data) {
        clampPan(widget, data);
        const zoom = ZOOM_LEVELS[data.zoomIndex || 0];
        widget.querySelector('[data-visitor-stage]').style.transform = `translate(${data.panX}px, ${data.panY}px) scale(${zoom})`;
    }

    function setZoom(widget, direction) {
        const data = state.get(widget);
        data.zoomIndex = Math.max(0, Math.min(ZOOM_LEVELS.length - 1, (data.zoomIndex || 0) + direction));
        applyTransform(widget, data);
        widget.querySelector('[data-visitor-zoom="in"]').disabled = data.zoomIndex === ZOOM_LEVELS.length - 1;
        widget.querySelector('[data-visitor-zoom="out"]').disabled = data.zoomIndex === 0;
        widget.querySelector('[data-visitor-tooltip]').hidden = true;
        state.set(widget, data);
    }

    function enableDragging(widget, canvas) {
        const stage = widget.querySelector('[data-visitor-stage]');
        let drag = null;
        canvas.addEventListener('pointerdown', event => {
            const data = state.get(widget);
            drag = { x: event.clientX, y: event.clientY, panX: data.panX || 0, panY: data.panY || 0 };
            data.wasDragged = false;
            stage.classList.add('is-dragging');
            canvas.setPointerCapture(event.pointerId);
        });
        canvas.addEventListener('pointermove', event => {
            if (!drag) return;
            const data = state.get(widget);
            const dx = event.clientX - drag.x;
            const dy = event.clientY - drag.y;
            if (Math.hypot(dx, dy) > 3) data.wasDragged = true;
            data.panX = drag.panX + dx;
            data.panY = drag.panY + dy;
            applyTransform(widget, data);
            state.set(widget, data);
        });
        const finish = event => {
            if (!drag) return;
            drag = null;
            stage.classList.remove('is-dragging');
            if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
        };
        canvas.addEventListener('pointerup', finish);
        canvas.addEventListener('pointercancel', finish);
    }

    function renderLocations(widget) {
        const list = widget.querySelector('[data-visitor-location-list]');
        list.replaceChildren();
        const points = [...(state.get(widget)?.points || [])].sort((a, b) => Number(b.visits) - Number(a.visits));
        points.forEach(point => {
            const row = document.createElement('div');
            row.className = 'visitor-map-location';
            const location = document.createElement('span');
            location.textContent = placeName(point) || 'Approximate location';
            const count = document.createElement('span');
            count.className = 'visitor-map-location-count';
            count.textContent = `${point.visits} ${Number(point.visits) === 1 ? 'visit' : 'visits'}`;
            row.append(location, count);
            list.append(row);
        });
    }

    function visitorId() {
        try {
            const key = 'visitor-map-anonymous-id';
            let value = localStorage.getItem(key);
            if (!value) localStorage.setItem(key, value = crypto.randomUUID());
            return value;
        } catch (_) {
            return crypto.randomUUID();
        }
    }

    function ordinalDate(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        const day = date.getUTCDate();
        const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
        return `${date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })}. ${day}${suffix}, ${date.getUTCFullYear()}`;
    }

    async function requestStats(endpoint) {
        if (navigator.doNotTrack !== '1') {
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
        const dateRange = widget.querySelector('[data-visitor-date]');
        state.set(widget, { points: [], zoomIndex: 0, panX: 0, panY: 0 });
        draw(widget);
        canvas.addEventListener('mousemove', event => showTooltip(widget, event));
        canvas.addEventListener('mouseleave', () => { widget.querySelector('[data-visitor-tooltip]').hidden = true; });
        canvas.addEventListener('click', () => {
            const data = state.get(widget);
            if (data.wasDragged) {
                data.wasDragged = false;
                return;
            }
            const details = widget.querySelector('[data-visitor-details]');
            details.hidden = !details.hidden;
        });
        enableDragging(widget, canvas);
        widget.querySelectorAll('[data-visitor-zoom]').forEach(button => {
            button.addEventListener('click', () => setZoom(widget, button.dataset.visitorZoom === 'in' ? 1 : -1));
        });
        setZoom(widget, 0);
        new ResizeObserver(() => draw(widget)).observe(canvas);

        try {
            const result = await requestStats(widget.dataset.endpoint.replace(/\/$/, ''));
            state.set(widget, { ...state.get(widget), points: Array.isArray(result.locations) ? result.locations : [] });
            summary.textContent = `${Number(result.totalVisits || 0).toLocaleString()} Pageviews`;
            const firstSeen = result.firstSeen || widget.dataset.startDate;
            dateRange.textContent = firstSeen ? `${ordinalDate(firstSeen)} - ${ordinalDate(new Date())}` : '';
            renderLocations(widget);
            draw(widget);
        } catch (error) {
            console.warn('Visitor map unavailable:', error);
            summary.textContent = 'Map temporarily unavailable';
            dateRange.textContent = '';
        }
    }

    document.querySelectorAll('[data-visitor-map]').forEach(initialize);
})();
