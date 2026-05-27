'use strict';

// ==============================
// MENU DATA
// ==============================

const pizzaData = [
  { nr: 1,  name: 'Al Capone',         zutaten: 'Tomaten, Mozzarella, Schinken, Speck, Pfefferoni, Zwiebeln',                    preis: 11.50, tags: ['fleisch'] },
  { nr: 2,  name: 'Al Tonno',          zutaten: 'Tomaten, Mozzarella, Thunfisch, Zwiebeln, Paprika',                              preis: 11.50, tags: ['fisch'] },
  { nr: 3,  name: 'Bauernpizza',       zutaten: 'Tomaten, Mozzarella, Salami, Schinken, Speck, Zwiebeln, Pfefferoni',             preis: 11.50, tags: ['fleisch'] },
  { nr: 4,  name: 'Calzone (gefaltet)',zutaten: 'Tomaten, Mozzarella, Schinken, Champignons',                                    preis: 11.50, tags: ['fleisch'] },
  { nr: 5,  name: 'Capricciosa',       zutaten: 'Tomaten, Mozzarella, Schinken, Champignons, Oliven',                            preis: 11.50, tags: ['fleisch'] },
  { nr: 6,  name: 'Cardinale',         zutaten: 'Tomaten, Mozzarella, Schinken, Zwiebeln',                                       preis: 11.50, tags: ['fleisch'] },
  { nr: 7,  name: 'Chefpizza',         zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Speck, Zwiebeln, Ei, Pfefferoni',        preis: 12.00, tags: ['fleisch', 'special'] },
  { nr: 8,  name: 'Diavolo',           zutaten: 'Tomaten, Mozzarella, Salami, Zwiebeln, Pfefferoni',                             preis: 11.50, tags: ['fleisch', 'spicy'] },
  { nr: 9,  name: 'Gigante',           zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Thunfisch, Mais',                        preis: 11.50, tags: ['fleisch', 'fisch'] },
  { nr: 10, name: 'Hauspizza',         zutaten: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, Pfefferoni',              preis: 12.00, tags: ['fleisch', 'special'] },
  { nr: 11, name: 'Hawaii',            zutaten: 'Tomaten, Mozzarella, Schinken, Ananas',                                        preis: 11.50, tags: ['fleisch'] },
  { nr: 12, name: 'Helin Pizza',       zutaten: 'Tomaten, Mozzarella, Salami, Mais',                                            preis: 11.50, tags: ['fleisch'] },
  { nr: 13, name: 'Jesolo',            zutaten: 'Tomaten, Mozzarella, Schinken, Ei, Zwiebeln, Pfefferoni',                      preis: 11.50, tags: ['fleisch'] },
  { nr: 14, name: 'Kathrin',           zutaten: 'Tomaten, Mozzarella, Salami, Knoblauch, Zwiebeln, scharfe Pfefferoni',         preis: 11.50, tags: ['fleisch', 'spicy'] },
  { nr: 15, name: 'Musti Pizza',       zutaten: 'Tomaten, Mozzarella, Salami, Ei',                                              preis: 11.50, tags: ['fleisch'] },
  { nr: 16, name: 'King Pizza',        zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Zwiebeln',                              preis: 11.50, tags: ['fleisch', 'special'] },
  { nr: 17, name: 'Lavamba',           zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Ei',                                    preis: 11.50, tags: ['fleisch'] },
  { nr: 18, name: 'Lodos Pizza',       zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Zwiebeln, Pfefferoni',                  preis: 11.50, tags: ['fleisch'] },
  { nr: 19, name: 'Maradonna',         zutaten: 'Tomaten, Mozzarella, Schinken, Mais, Pfefferoni',                              preis: 11.50, tags: ['fleisch'] },
  { nr: 20, name: 'Mexicana',          zutaten: 'Tomaten, Mozzarella, Salami, Mais, scharfe Pfefferoni',                        preis: 11.50, tags: ['fleisch', 'spicy'] },
  { nr: 21, name: 'Napoli',            zutaten: 'Tomaten, Mozzarella, Spinat, Speck, Mais',                                     preis: 11.50, tags: ['fleisch'] },
  { nr: 22, name: 'Altare',            zutaten: 'Tomaten, Mozzarella, Spinat, Thunfisch, Zwiebeln, Meeresfrüchte, Knoblauch',   preis: 12.50, tags: ['fisch', 'special'] },
  { nr: 23, name: 'Juliet',            zutaten: 'Tomaten, Mozzarella, Spinat, Artischoken, Oliven',                             preis: 11.50, tags: ['vegetarisch'] },
  { nr: 24, name: 'Provenciale',       zutaten: 'Tomaten, Mozzarella, Salami, Speck, Zwiebeln, Pfefferoni',                     preis: 11.50, tags: ['fleisch'] },
  { nr: 25, name: 'Pizza nach Wunsch', zutaten: 'Tomaten, Mozzarella + Zutaten nach Auswahl',                                   preis: 14.00, tags: ['special'] },
  { nr: 26, name: 'Prosciutto',        zutaten: 'Tomaten, Mozzarella, Prosciutto',                                              preis: 11.50, tags: ['fleisch'] },
  { nr: 27, name: 'Regina',            zutaten: 'Tomaten, Mozzarella, Schinken',                                                preis: 11.50, tags: ['fleisch'] },
  { nr: 28, name: 'Romana',            zutaten: 'Tomaten, Mozzarella, Schinken, Champignons',                                   preis: 11.50, tags: ['fleisch'] },
  { nr: 29, name: 'Rustica',           zutaten: 'Tomaten, Mozzarella, Schinken, Artischoken, Mais',                             preis: 11.50, tags: ['fleisch'] },
  { nr: 30, name: 'Salami',            zutaten: 'Tomaten, Mozzarella, Salami',                                                  preis: 11.50, tags: ['fleisch'] },
  { nr: 31, name: 'Alla Cippola',      zutaten: 'Tomaten, Mozzarella, Zwiebeln, Paprika, Mais',                                 preis: 11.50, tags: ['vegetarisch'] },
  { nr: 32, name: 'Funghi',            zutaten: 'Tomaten, Mozzarella, Champignons',                                             preis: 11.50, tags: ['vegetarisch'] },
  { nr: 33, name: 'Gemüsepizza',       zutaten: 'Tomaten, Mozzarella, Champignons, Mais, Paprika, Tomatenscheiben, Oliven',     preis: 11.50, tags: ['vegetarisch'] },
  { nr: 34, name: 'Griechische Pizza', zutaten: 'Tomaten, Mozzarella, Weichkäse, Zwiebeln, Tomatenscheiben, Oliven',            preis: 11.50, tags: ['vegetarisch'] },
  { nr: 35, name: 'Kaiserpizza',       zutaten: 'Tomaten, Mozzarella, Spinat, Ei, Zwiebeln',                                    preis: 11.50, tags: ['vegetarisch'] },
  { nr: 36, name: 'Margherita',        zutaten: 'Tomaten, Mozzarella',                                                          preis: 10.00, tags: ['vegetarisch'] },
  { nr: 37, name: 'Pide',              zutaten: 'Tomaten, Mozzarella, Spinat, Weichkäse',                                       preis: 11.50, tags: ['vegetarisch'] },
  { nr: 38, name: 'Pide mit Salat',    zutaten: 'Tomaten, Mozzarella, Spinat, Weichkäse (inkl. Salat)',                         preis: 16.50, tags: ['vegetarisch', 'special'] },
  { nr: 39, name: 'Spinatpizza',       zutaten: 'Tomaten, Mozzarella, Spinat, Weichkäse, Mais',                                 preis: 11.00, tags: ['vegetarisch'] },
  { nr: 40, name: 'Zidana Pizza',      zutaten: 'Tomaten, Mozzarella, Ei, Zwiebeln, Oliven',                                    preis: 11.00, tags: ['vegetarisch'] },
  { nr: 41, name: 'Quattro Formaggi',  zutaten: 'Tomaten, Mozzarella, Gorgonzola, Weichkäse',                                   preis: 11.00, tags: ['vegetarisch'] },
  { nr: 42, name: 'Ruccola Pizza',     zutaten: 'Tomaten, Mozzarella, Ruccola, Knoblauchsoße',                                  preis: 11.00, tags: ['vegetarisch'] },
  { nr: 43, name: 'Vegetaria',         zutaten: 'Tomaten, Mozzarella, Champignons, Paprika, Zwiebeln',                          preis: 11.00, tags: ['vegetarisch'] },
  { nr: 44, name: 'Veggo Pizza',       zutaten: 'Tomaten, Mozzarella, Ruccola, Mais, Zwiebeln, Paprika, Oliven',                preis: 11.00, tags: ['vegetarisch'] },
  { nr: 45, name: 'Meeresfrüchte',     zutaten: 'Tomaten, Mozzarella, Meeresfrüchte, Knoblauchsoße',                            preis: 11.00, tags: ['fisch'] },
  { nr: 46, name: 'Maxi Pizza',        zutaten: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, scharfe Pfefferoni',     preis: 11.50, tags: ['fleisch', 'spicy'] },
  { nr: 47, name: 'Quattro Stagioni',  zutaten: 'Tomaten, Mozzarella, Schinken, Salami, Artischoken',                           preis: 11.00, tags: ['fleisch'] },
  { nr: 48, name: 'Siziliana',         zutaten: 'Tomaten, Mozzarella, Sardellen, Kapern, Oliven',                               preis: 11.00, tags: ['fisch'] },
  { nr: 49, name: 'Palermo',           zutaten: 'Tomaten, Mozzarella, Schinken, Mais, Ei',                                      preis: 11.00, tags: ['fleisch'] },
  { nr: 50, name: 'Sucuk-Pizza',       zutaten: 'Tomaten, Mozzarella, Sucuk, Ei',                                               preis: 11.50, tags: ['fleisch'] },
];

const speisenData = [
  { nr: 59, name: 'Kebap',                    zutaten: 'Im Brot mit Salat & Soße',                                             preis: 7.00 },
  { nr: 60, name: 'Kebap mit Weichkäse',      zutaten: 'Im Brot mit Salat, Soße & Weichkäse',                                 preis: 7.50 },
  { nr: 61, name: 'Kebap nur Fleisch',         zutaten: 'Im Brot nur Kebapfleisch',                                            preis: 8.00 },
  { nr: 62, name: 'Kebap vegetarisch',         zutaten: 'Im Brot vegetarisch',                                                  preis: 6.50 },
  { nr: 63, name: 'Dürüm Kebap',              zutaten: 'Im Dürüm-Wrap mit Salat & Soße',                                       preis: 8.00 },
  { nr: 64, name: 'Dürüm Kebap mit Käse',     zutaten: 'Im Dürüm-Wrap mit Käse',                                              preis: 8.50 },
  { nr: 65, name: 'Dürüm Vegetarisch',         zutaten: 'Im Dürüm-Wrap vegetarisch',                                           preis: 7.00 },
  { nr: 66, name: 'Dürüm Kebap nur Fleisch',  zutaten: 'Im Dürüm-Wrap nur Fleisch',                                            preis: 9.00 },
  { nr: 67, name: 'Kebap Teller – nur Salat', zutaten: 'Kebap auf Teller mit Salat',                                           preis: 11.50 },
  { nr: 68, name: 'Kebap Teller – nur Pommes',zutaten: 'Kebap auf Teller mit Pommes Frites',                                   preis: 11.50 },
  { nr: 69, name: 'Kebap Teller',             zutaten: 'Mit Salat & Pommes Frites',                                            preis: 11.50 },
  { nr: 70, name: 'Kebap Teller Käse',        zutaten: 'Mit Salat, Pommes Frites & Käse',                                      preis: 12.00 },
  { nr: 71, name: 'Bosna',                    zutaten: 'Klassische österreichische Bosna',                                     preis: 7.00 },
  { nr: 72, name: 'Bosna Spezial',            zutaten: 'Bosna mit Extra-Belag',                                                preis: 7.50 },
  { nr: 73, name: 'Käsekrainer',              zutaten: 'Mit Salat & Pommes Frites',                                            preis: 11.50 },
  { nr: 74, name: 'Chicken Wings',            zutaten: 'Mit Salat & Pommes Frites',                                            preis: 11.50 },
  { nr: 75, name: 'Kebap Box',                zutaten: 'Mit Salat & Pommes Frites',                                            preis: 9.50 },
  { nr: 76, name: 'Kebap Box mit Käse',       zutaten: 'Mit Salat, Pommes Frites & Käse',                                      preis: 10.00 },
  { nr: 77, name: 'Kebap Box nur Fleisch',    zutaten: 'Box nur mit Kebapfleisch',                                             preis: 12.00 },
  { nr: 78, name: 'Chili Cheese Kebap',       zutaten: 'Kebap mit Chili & Käse',                                               preis: 7.50 },
  { nr: 79, name: 'Teller Nach Wunsch',       zutaten: 'Teller nach Ihrer Auswahl',                                            preis: 13.50 },
  { nr: 80, name: 'King Burger',              zutaten: 'Rindfleisch, Salat, Zwiebeln, Tomaten',                                preis: 7.50 },
  { nr: 81, name: 'King Burger mit Pommes',   zutaten: 'Rindfleisch, Salat, Zwiebeln, Tomaten + Pommes Frites',               preis: 10.00 },
  { nr: 82, name: 'Chickenburger',            zutaten: 'Hühnchenfleisch, Salat, Zwiebeln, Tomaten',                           preis: 7.50 },
  { nr: 83, name: 'Chickenburger mit Pommes', zutaten: 'Hühnchenfleisch, Salat, Zwiebeln, Tomaten + Pommes Frites',           preis: 10.00 },
  { nr: 84, name: 'Falafel vegetarisch',      zutaten: 'Falafel im Brot',                                                     preis: 7.00 },
  { nr: 85, name: 'Falafel-Teller',           zutaten: 'Falafel auf Teller, vegetarisch',                                     preis: 11.50 },
  { nr: 86, name: 'Pommes klein',             zutaten: 'Pommes Frites klein',                                                   preis: 4.50 },
  { nr: 87, name: 'Pommes groß',              zutaten: 'Pommes Frites groß',                                                   preis: 6.50 },
];

const getraenkeData = [
  {
    gruppe: 'Alkoholfrei',
    items: [
      { name: 'Dosengetränke', sub: '0,33 l', preis: 3.00 },
      { name: 'Red Bull',      sub: '250 ml', preis: 3.50 },
      { name: 'Ayran',         sub: 'frisch', preis: 2.60 },
    ]
  },
  {
    gruppe: 'Alkoholisch',
    items: [
      { name: 'Bier', sub: '0,5 l', preis: 2.60 },
    ]
  }
];

// ==============================
// RENDER FUNCTIONS
// ==============================

function formatPrice(p) {
  return '€ ' + p.toFixed(2).replace('.', ',');
}

const tagLabels = {
  vegetarisch: 'Vegetarisch',
  spicy: 'Scharf',
  fisch: 'Mit Fisch',
  fleisch: 'Mit Fleisch',
  special: 'Hausspecial',
};

function buildTagsHTML(tags) {
  if (!tags || !tags.length) return '';
  const relevant = tags.filter(t => t !== 'fleisch');
  return relevant.map(t => `<span class="tag tag-${t}">${tagLabels[t] || t}</span>`).join('');
}

function renderPizzaGrid(filter = 'all') {
  const grid = document.getElementById('pizzaGrid');
  grid.innerHTML = '';
  pizzaData.forEach((item, i) => {
    const show = filter === 'all' || item.tags.includes(filter);
    const tagsHTML = buildTagsHTML(item.tags);
    const card = document.createElement('div');
    card.className = 'menu-card reveal' + (show ? '' : ' hidden');
    card.style.transitionDelay = `${(i % 12) * 30}ms`;
    card.innerHTML = `
      <div class="card-left">
        <div class="card-number">Nr. ${item.nr}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-ingredients">${item.zutaten}</div>
        ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ''}
      </div>
      <div class="card-right">
        <div class="card-price">${formatPrice(item.preis)}</div>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveal();
}

function renderSpeisenGrid() {
  const grid = document.getElementById('speisenGrid');
  grid.innerHTML = '';
  speisenData.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card reveal';
    card.style.transitionDelay = `${(i % 12) * 30}ms`;
    card.innerHTML = `
      <div class="card-left">
        <div class="card-number">Nr. ${item.nr}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-ingredients">${item.zutaten}</div>
      </div>
      <div class="card-right">
        <div class="card-price">${formatPrice(item.preis)}</div>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveal();
}

function renderGetraenkeGrid() {
  const grid = document.getElementById('getraenkeGrid');
  grid.innerHTML = '';
  getraenkeData.forEach(gruppe => {
    const div = document.createElement('div');
    div.className = 'getraenke-group reveal';
    let itemsHTML = gruppe.items.map(it => `
      <div class="getraenke-item">
        <div>
          <div class="getraenke-name">${it.name}</div>
          ${it.sub ? `<div class="getraenke-sub">${it.sub}</div>` : ''}
        </div>
        <div class="getraenke-price">${formatPrice(it.preis)}</div>
      </div>
    `).join('');
    div.innerHTML = `
      <div class="getraenke-group-header">
        <div class="getraenke-group-title">${gruppe.gruppe}</div>
      </div>
      ${itemsHTML}
    `;
    grid.appendChild(div);
  });
  observeReveal();
}

// ==============================
// SCROLL REVEAL
// ==============================

let revealObserver;

function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.observed)');
  els.forEach(el => {
    el.classList.add('observed');
    revealObserver.observe(el);
  });
}

function initRevealObserver() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
}

// ==============================
// NAVBAR
// ==============================

function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ==============================
// FILTER
// ==============================

function initPizzaFilter() {
  document.getElementById('pizzaFilter').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    renderPizzaGrid(filter);
  });
}

// ==============================
// CATEGORY TABS (smooth scroll)
// ==============================

function initCategoryTabs() {
  document.getElementById('categoryTabs').addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.target);
    if (target) {
      const offset = 90;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
}

// ==============================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ==============================

function initScrollSpy() {
  const sections = ['pizza', 'speisen', 'getraenke', 'info'].map(id => document.getElementById(id));
  const tabs = document.querySelectorAll('.category-tabs .tab');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (!sec) return;
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    tabs.forEach(t => {
      t.classList.toggle('active', t.dataset.target === current);
    });
  }, { passive: true });
}

// ==============================
// INIT
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  initRevealObserver();
  renderPizzaGrid();
  renderSpeisenGrid();
  renderGetraenkeGrid();
  initNavbar();
  initPizzaFilter();
  initCategoryTabs();
  initScrollSpy();

  // Reveal static elements
  document.querySelectorAll('.section-header, .highlights-bar, .section-intro, .filter-bar').forEach(el => {
    el.classList.add('reveal', 'observed');
    revealObserver.observe(el);
  });
});
