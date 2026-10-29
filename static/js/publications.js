(function () {
  'use strict';

  const DATA_URL = 'static/data/publications.json';
  const SELF_AUTHOR_NAMES = new Set(['sen fang']);
  const PUBLICATION_BADGES = [
    { symbol: '💥', label: '1–3× Improvement over SOTA', className: 'pub-legend-impact-1' },
    { symbol: '🦄', label: 'over 3~10x SOTA / New Concept', className: 'pub-legend-impact-2' },
    { symbol: '🏆', label: 'Paper Award', className: 'pub-legend-award' },
    { symbol: '🐉', label: 'Impacts 100+ Domains / Paradigm Shift', className: 'pub-legend-impact-3' },
    {
      symbol: '♾️',
      label: 'Impacts 1000+ Domains / Paradigm Emperor',
      className: 'pub-legend-impact-4',
      footnote: 'e.g., LLM killed 900+ NLP tasks'
    },
    { symbol: '*', label: 'Equal contribution', className: 'pub-legend-authorship', breakBefore: true },
    { symbol: '†', label: 'Corresponding author', className: 'pub-legend-authorship' }
  ];
  const PUBLICATION_BADGE_BY_SYMBOL = new Map(
    PUBLICATION_BADGES.map(badge => [badge.symbol, badge])
  );
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

  function renderLegendBadge(badge) {
    const footnote = badge.footnote ? `<fn>${escapeHtml(badge.footnote)}</fn>` : '';
    return `<span class="pub-legend-chip ${escapeHtml(badge.className)}"><span class="pub-legend-symbol">${escapeHtml(badge.symbol)}</span> ${escapeHtml(badge.label)}${footnote}</span>`;
  }

  function renderPublicationLegend(root) {
    root.innerHTML = PUBLICATION_BADGES.map(badge => {
      const lineBreak = badge.breakBefore
        ? '<span class="pub-legend-line-break" aria-hidden="true"></span>'
        : '';
      return lineBreak + renderLegendBadge(badge);
    }).join('');
  }

  function renderHighlightBadge(icon) {
    const badge = PUBLICATION_BADGE_BY_SYMBOL.get(icon);
    if (!badge) return `<span class="pub-highlight-icon">${escapeHtml(icon)}</span>`;
    return `<span class="pub-legend-chip pub-highlight-badge ${escapeHtml(badge.className)}" tabindex="0" aria-label="${escapeHtml(badge.label)}"><span class="pub-legend-symbol">${escapeHtml(badge.symbol)}</span><span class="pub-highlight-badge-label">${escapeHtml(badge.label)}</span></span>`;
  }

  function renderAuthors(authors) {
    return authors.map(author => {
      const name = escapeHtml(author.name);
      const marker = escapeHtml(author.marker || '');
      const isSelf = author.self || SELF_AUTHOR_NAMES.has(String(author.name).trim().toLowerCase());
      const authorName = isSelf ? `<strong>${name}</strong>` : name;
      const authorClass = isSelf ? 'pub-author-self' : 'pub-author-other';
      return `<span class="pub-author ${authorClass}">${authorName}${marker}</span>`;
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
    const titleBadge = publication.highlight?.icon
      ? renderHighlightBadge(publication.highlight.icon)
      : '';
    const highlight = publication.highlight?.text
      ? `<div class="pub-highlight">${renderInline(publication.highlight.text, md)}</div>`
      : '';
    const note = publication.note
      ? `<div class="pub-note"><strong>Note:</strong> ${renderInline(publication.note, md)}</div>`
      : '';

    return `
      <div class="pub-item${heightClass}" data-publication-id="${escapeHtml(publication.id)}"
        data-primary-category="${escapeHtml(publication.primaryCategory)}">
        ${renderCover(publication.cover)}
        <div class="pub-content">
          <div class="pub-title"><strong>${escapeHtml(publication.title)}</strong>${titleBadge}</div>
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
    container.querySelectorAll('[data-publication-legend]').forEach(renderPublicationLegend);
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
