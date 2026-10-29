(function () {
  'use strict';

  const DATA_URL = 'static/data/publications.json';
  let publicationDataPromise;

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function renderInline(markdown, md) {
    return markdown ? md.renderInline(markdown) : '';
  }

  function renderAuthors(authors) {
    return authors.map(author => {
      const name = escapeHtml(author.name);
      const marker = escapeHtml(author.marker || '');
      return author.self ? `<strong>${name}</strong>${marker}` : `${name}${marker}`;
    }).join(', ');
  }

  function renderLinks(links) {
    return links.map(link => {
      const label = escapeHtml(link.label);
      return `<a href="${escapeHtml(link.url)}">[${label}]</a>`;
    }).join(' ');
  }

  function renderCover(cover) {
    const image = `<img src="${escapeHtml(cover.src)}" alt="${escapeHtml(cover.alt || '')}">`;
    if (!cover.overlayText) return image;
    return `<div class="pub-cover-overlay" data-overlay-text="${escapeHtml(cover.overlayText)}">${image}</div>`;
  }

  function renderPublication(publication, md) {
    const heightClass = publication.cover.height === 'auto'
      ? ' pub-image-auto-height-true'
      : publication.cover.height === 'fixed'
        ? ' pub-image-auto-height-false'
        : '';
    const icon = publication.highlight?.icon
      ? `<span class="pub-highlight-icon">${escapeHtml(publication.highlight.icon)}</span> `
      : '';
    const highlight = publication.highlight?.text
      ? `<div class="pub-highlight">${icon}${renderInline(publication.highlight.text, md)}</div>`
      : '';
    const note = publication.note
      ? `<div class="pub-note"><strong>Note:</strong> ${renderInline(publication.note, md)}</div>`
      : '';

    return `
      <div class="pub-item${heightClass}" data-publication-id="${escapeHtml(publication.id)}"
        data-primary-category="${escapeHtml(publication.primaryCategory)}">
        ${renderCover(publication.cover)}
        <div class="pub-content">
          <div class="pub-title"><strong>${escapeHtml(publication.title)}</strong></div>
          <div class="pub-authors">${renderAuthors(publication.authors)}</div>
          <div class="pub-venue">${publication.publication || ''}</div>
          <div class="pub-links">${renderLinks(publication.links || [])}</div>
          ${highlight}
          ${note}
        </div>
      </div>`;
  }

  function newestFirst(a, b) {
    return String(b.date || '').localeCompare(String(a.date || ''));
  }

  function renderPanel(tab, publications, md, active) {
    const items = publications
      .filter(publication => publication.tags.includes(tab.id))
      .sort(newestFirst)
      .map(publication => renderPublication(publication, md))
      .join('');
    const intro = tab.intro ? `<div class="pub-tab-intro">${md.render(tab.intro)}</div>` : '';

    return `
      <section class="tab-content pub-tab-content${active ? ' active' : ''}" data-pub-panel="${escapeHtml(tab.id)}">
        <div class="pub-all-heading" hidden>${escapeHtml(tab.heading || tab.label)}</div>
        <div class="pub-container">${intro}${items}</div>
      </section>`;
  }

  function selectTab(root, selectedId) {
    const showAll = selectedId === 'all';
    root.querySelectorAll('[data-pub-tab]').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.pubTab === selectedId);
      tab.setAttribute('aria-selected', String(tab.dataset.pubTab === selectedId));
    });
    root.querySelectorAll('[data-pub-panel]').forEach(panel => {
      panel.classList.toggle('active', showAll || panel.dataset.pubPanel === selectedId);
      const heading = panel.querySelector('.pub-all-heading');
      if (heading) heading.hidden = !showAll;
      panel.querySelectorAll('[data-publication-id]').forEach(publication => {
        publication.hidden = showAll
          && publication.dataset.primaryCategory !== panel.dataset.pubPanel;
      });
    });
    requestAnimationFrame(() => {
      if (typeof window.activateDeferredImages === 'function') {
        window.activateDeferredImages(root);
      }
    });
  }

  function renderPublicationBrowser(root, data, md) {
    const firstTab = data.tabs[0]?.id;
    if (!firstTab) return;
    const tabs = [...data.tabs, { id: 'all', label: 'All' }];
    const tabButtons = tabs.map((tab, index) => `
      <span class="tab${index === 0 ? ' active' : ''}" role="tab" tabindex="0"
        aria-selected="${index === 0}" data-pub-tab="${escapeHtml(tab.id)}">${escapeHtml(tab.label)}</span>`).join('');
    const panels = data.tabs
      .map((tab, index) => renderPanel(tab, data.publications, md, index === 0))
      .join('');

    root.innerHTML = `<div class="tabs pub-tabs" role="tablist">${tabButtons}</div>${panels}`;
    root.addEventListener('click', event => {
      const button = event.target.closest('[data-pub-tab]');
      if (button) selectTab(root, button.dataset.pubTab);
    });
    root.addEventListener('keydown', event => {
      const tab = event.target.closest('[data-pub-tab]');
      if (tab && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        selectTab(root, tab.dataset.pubTab);
      }
    });
  }

  async function initializePublications(container, md) {
    const browsers = container.querySelectorAll('[data-publications]');
    if (!browsers.length) return;

    try {
      publicationDataPromise ||= fetch(DATA_URL).then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      });
      const data = await publicationDataPromise;
      browsers.forEach(browser => renderPublicationBrowser(browser, data, md));
    } catch (error) {
      publicationDataPromise = null;
      console.error('Could not load publications:', error);
      browsers.forEach(browser => {
        browser.innerHTML = '<p class="pub-error">Publications could not be loaded.</p>';
      });
    }
  }

  window.initializePublications = initializePublications;
})();
