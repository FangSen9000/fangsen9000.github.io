(function () {
  'use strict';

  const DATA_URL = 'static/data/text-wall.json';
  let textWallDataPromise;

  function setRevealed(wall, revealed) {
    wall.classList.toggle('is-intro', revealed);
    wall.querySelector('[data-text-wall-banner]')?.setAttribute('aria-hidden', String(revealed));
  }

  function renderTextWall(wall, data) {
    const content = wall.querySelector('[data-text-wall-content]');
    const name = wall.querySelector('[data-text-wall-name]');
    const link = wall.querySelector('[data-text-wall-link]');
    const closeButton = wall.querySelector('[data-text-wall-close]');
    const modes = {
      closable: 'show-text-wall-with-close-button',
      fixed: 'show-text-wall-without-close-button',
      introductionOnly: 'hide-text-wall-and-show-introduction'
    };
    const supportedModes = new Set(Object.values(modes));
    const mode = supportedModes.has(data.mode) ? data.mode : modes.closable;

    if (content) content.textContent = (data.statements || []).join(' ');
    if (name) name.textContent = data.overlayName || 'Sen Fang';
    if (link) link.href = data.documentUrl || '#';
    wall.dataset.textWallMode = mode;
    setRevealed(wall, mode === modes.introductionOnly);

    if (closeButton) {
      closeButton.hidden = mode !== modes.closable;
      if (mode === modes.closable) {
        closeButton.addEventListener('click', () => setRevealed(wall, true));
      }
    }
  }

  async function initializeTextWalls(container) {
    const walls = container.querySelectorAll('[data-text-wall]');
    if (!walls.length) return;

    try {
      textWallDataPromise ||= fetch(DATA_URL).then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      });
      const data = await textWallDataPromise;
      walls.forEach(wall => renderTextWall(wall, data));
    } catch (error) {
      textWallDataPromise = null;
      console.error('Could not load the text wall:', error);
      walls.forEach(wall => setRevealed(wall, true));
    }
  }

  window.initializeTextWalls = initializeTextWalls;
})();
