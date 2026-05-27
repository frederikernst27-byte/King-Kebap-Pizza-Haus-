'use strict';

// ==============================
// DATA
// ==============================

const PIZZA_CATS = [
  {
    id: 'klassiker',
    name: 'Klassiker',
    icon: '🍕',
    items: [
      { nr: 1,  name: 'Al Capone',         ing: 'Tomaten, Mozzarella, Schinken, Speck, Pfefferoni, Zwiebeln',           p: 11.50, tags: ['fleisch'] },
      { nr: 3,  name: 'Bauernpizza',        ing: 'Tomaten, Mozzarella, Salami, Schinken, Speck, Zwiebeln, Pfefferoni',   p: 11.50, tags: ['fleisch'] },
      { nr: 5,  name: 'Capricciosa',        ing: 'Tomaten, Mozzarella, Schinken, Champignons, Oliven',                  p: 11.50, tags: ['fleisch'] },
      { nr: 6,  name: 'Cardinale',          ing: 'Tomaten, Mozzarella, Schinken, Zwiebeln',                             p: 11.50, tags: ['fleisch'] },
      { nr: 7,  name: 'Chefpizza',          ing: 'Tomaten, Mozzarella, Schinken, Salami, Speck, Zwiebeln, Ei, Pfefferoni', p: 12.00, tags: ['fleisch', 'special'] },
      { nr: 8,  name: 'Diavolo',            ing: 'Tomaten, Mozzarella, Salami, Zwiebeln, Pfefferoni',                   p: 11.50, tags: ['fleisch', 'spicy'] },
      { nr: 11, name: 'Hawaii',             ing: 'Tomaten, Mozzarella, Schinken, Ananas',                               p: 11.50, tags: ['fleisch'] },
      { nr: 16, name: 'King Pizza',         ing: 'Tomaten, Mozzarella, Schinken, Salami, Zwiebeln',                     p: 11.50, tags: ['fleisch', 'special'] },
      { nr: 24, name: 'Provenciale',        ing: 'Tomaten, Mozzarella, Salami, Speck, Zwiebeln, Pfefferoni',            p: 11.50, tags: ['fleisch'] },
      { nr: 26, name: 'Prosciutto',         ing: 'Tomaten, Mozzarella, Prosciutto',                                     p: 11.50, tags: ['fleisch'] },
      { nr: 27, name: 'Regina',             ing: 'Tomaten, Mozzarella, Schinken',                                       p: 11.50, tags: ['fleisch'] },
      { nr: 28, name: 'Romana',             ing: 'Tomaten, Mozzarella, Schinken, Champignons',                          p: 11.50, tags: ['fleisch'] },
      { nr: 30, name: 'Salami',             ing: 'Tomaten, Mozzarella, Salami',                                         p: 11.50, tags: ['fleisch'] },
      { nr: 47, name: 'Quattro Stagioni',   ing: 'Tomaten, Mozzarella, Schinken, Salami, Artischoken',                  p: 11.00, tags: ['fleisch'] },
      { nr: 50, name: 'Sucuk-Pizza',        ing: 'Tomaten, Mozzarella, Sucuk, Ei',                                      p: 11.50, tags: ['fleisch'] },
    ]
  },
  {
    id: 'vegetarisch',
    name: 'Vegetarisch',
    icon: '🌿',
    items: [
      { nr: 36, name: 'Margherita',         ing: 'Tomaten, Mozzarella',                                                  p: 10.00, tags: ['vegetarisch'] },
      { nr: 32, name: 'Funghi',             ing: 'Tomaten, Mozzarella, Champignons',                                    p: 11.50, tags: ['vegetarisch'] },
      { nr: 37, name: 'Pide',               ing: 'Tomaten, Mozzarella, Spinat, Weichkäse',                              p: 11.50, tags: ['vegetarisch'] },
      { nr: 39, name: 'Spinatpizza',        ing: 'Tomaten, Mozzarella, Spinat, Weichkäse, Mais',                        p: 11.00, tags: ['vegetarisch'] },
      { nr: 41, name: 'Quattro Formaggi',   ing: 'Tomaten, Mozzarella, Gorgonzola, Weichkäse',                          p: 11.00, tags: ['vegetarisch'] },
      { nr: 42, name: 'Ruccola Pizza',      ing: 'Tomaten, Mozzarella, Ruccola, Knoblauchsoße',                         p: 11.00, tags: ['vegetarisch'] },
      { nr: 43, name: 'Vegetaria',          ing: 'Tomaten, Mozzarella, Champignons, Paprika, Zwiebeln',                 p: 11.00, tags: ['vegetarisch'] },
      { nr: 44, name: 'Veggo Pizza',        ing: 'Tomaten, Mozzarella, Ruccola, Mais, Zwiebeln, Paprika, Oliven',       p: 11.00, tags: ['vegetarisch'] },
      { nr: 31, name: 'Alla Cippola',       ing: 'Tomaten, Mozzarella, Zwiebeln, Paprika, Mais',                        p: 11.50, tags: ['vegetarisch'] },
      { nr: 33, name: 'Gemüsepizza',        ing: 'Tomaten, Mozzarella, Champignons, Mais, Paprika, Tomatenscheiben, Oliven', p: 11.50, tags: ['vegetarisch'] },
      { nr: 34, name: 'Griechische Pizza',  ing: 'Tomaten, Mozzarella, Weichkäse, Zwiebeln, Tomatenscheiben, Oliven',   p: 11.50, tags: ['vegetarisch'] },
      { nr: 35, name: 'Kaiserpizza',        ing: 'Tomaten, Mozzarella, Spinat, Ei, Zwiebeln',                           p: 11.50, tags: ['vegetarisch'] },
      { nr: 40, name: 'Zidana Pizza',       ing: 'Tomaten, Mozzarella, Ei, Zwiebeln, Oliven',                           p: 11.00, tags: ['vegetarisch'] },
      { nr: 23, name: 'Juliet',             ing: 'Tomaten, Mozzarella, Spinat, Artischoken, Oliven',                    p: 11.50, tags: ['vegetarisch'] },
    ]
  },
  {
    id: 'fisch',
    name: 'Fisch & Meeresfrüchte',
    icon: '🐟',
    items: [
      { nr: 2,  name: 'Al Tonno',           ing: 'Tomaten, Mozzarella, Thunfisch, Zwiebeln, Paprika',                   p: 11.50, tags: ['fisch'] },
      { nr: 45, name: 'Meeresfrüchte Pizza',ing: 'Tomaten, Mozzarella, Meeresfrüchte, Knoblauchsoße',                   p: 11.00, tags: ['fisch'] },
      { nr: 48, name: 'Siziliana',          ing: 'Tomaten, Mozzarella, Sardellen, Kapern, Oliven',                      p: 11.00, tags: ['fisch'] },
      { nr: 22, name: 'Altare',             ing: 'Tomaten, Mozzarella, Spinat, Thunfisch, Zwiebeln, Meeresfrüchte, Knoblauch', p: 12.50, tags: ['fisch', 'special'] },
      { nr: 9,  name: 'Gigante',            ing: 'Tomaten, Mozzarella, Schinken, Salami, Thunfisch, Mais',              p: 11.50, tags: ['fleisch', 'fisch'] },
    ]
  },
  {
    id: 'special',
    name: 'Hausspecials',
    icon: '⭐',
    items: [
      { nr: 10, name: 'Hauspizza',          ing: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, Pfefferoni',    p: 12.00, tags: ['fleisch', 'special'] },
      { nr: 46, name: 'Maxi Pizza',         ing: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, scharfe Pfefferoni', p: 11.50, tags: ['fleisch', 'spicy', 'special'] },
      { nr: 14, name: 'Kathrin',            ing: 'Tomaten, Mozzarella, Salami, Knoblauch, Zwiebeln, scharfe Pfefferoni', p: 11.50, tags: ['fleisch', 'spicy'] },
      { nr: 20, name: 'Mexicana',           ing: 'Tomaten, Mozzarella, Salami, Mais, scharfe Pfefferoni',               p: 11.50, tags: ['fleisch', 'spicy'] },
      { nr: 25, name: 'Pizza nach Wunsch',  ing: 'Tomaten, Mozzarella + Zutaten nach Auswahl',                          p: 14.00, tags: ['special'] },
      { nr: 38, name: 'Pide mit Salat',     ing: 'Tomaten, Mozzarella, Spinat, Weichkäse (inkl. Salat)',                p: 16.50, tags: ['vegetarisch', 'special'] },
    ]
  },
];

const SPEISEN_CATS = [
  {
    id: 'kebap-brot',
    name: 'Kebap im Brot',
    icon: '🥙',
    items: [
      { nr: 59, name: 'Kebap',                   ing: 'Im Brot mit Salat & Soße',               p: 7.00 },
      { nr: 60, name: 'Kebap mit Weichkäse',     ing: 'Im Brot mit Weichkäse',                  p: 7.50 },
      { nr: 61, name: 'Kebap nur Fleisch',        ing: 'Im Brot, nur Fleisch',                   p: 8.00 },
      { nr: 62, name: 'Kebap vegetarisch',        ing: 'Im Brot, vegetarisch',                   p: 6.50 },
      { nr: 78, name: 'Chili Cheese Kebap',       ing: 'Mit Chili & Käse',                       p: 7.50 },
    ]
  },
  {
    id: 'duerum',
    name: 'Dürüm Wrap',
    icon: '🌯',
    items: [
      { nr: 63, name: 'Dürüm Kebap',             ing: 'Im Wrap mit Salat & Soße',               p: 8.00 },
      { nr: 64, name: 'Dürüm Kebap mit Käse',    ing: 'Im Wrap mit Käse',                       p: 8.50 },
      { nr: 65, name: 'Dürüm Vegetarisch',        ing: 'Im Wrap, vegetarisch',                   p: 7.00 },
      { nr: 66, name: 'Dürüm nur Fleisch',        ing: 'Im Wrap, nur Fleisch',                   p: 9.00 },
    ]
  },
  {
    id: 'teller',
    name: 'Kebap Teller',
    icon: '🍽️',
    items: [
      { nr: 67, name: 'Kebap Teller – Salat',    ing: 'Kebap auf Teller mit Salat',              p: 11.50 },
      { nr: 68, name: 'Kebap Teller – Pommes',   ing: 'Kebap auf Teller mit Pommes',             p: 11.50 },
      { nr: 69, name: 'Kebap Teller',            ing: 'Mit Salat & Pommes Frites',               p: 11.50 },
      { nr: 70, name: 'Kebap Teller mit Käse',   ing: 'Mit Salat, Pommes & Käse',                p: 12.00 },
      { nr: 79, name: 'Teller Nach Wunsch',      ing: 'Teller nach Ihrer Auswahl',               p: 13.50 },
    ]
  },
  {
    id: 'box',
    name: 'Kebap Box',
    icon: '📦',
    items: [
      { nr: 75, name: 'Kebap Box',               ing: 'Mit Salat & Pommes Frites',               p: 9.50 },
      { nr: 76, name: 'Kebap Box mit Käse',      ing: 'Mit Salat, Pommes & Käse',                p: 10.00 },
      { nr: 77, name: 'Kebap Box nur Fleisch',   ing: 'Nur Kebapfleisch',                        p: 12.00 },
    ]
  },
  {
    id: 'grill',
    name: 'Grill & Snacks',
    icon: '🔥',
    items: [
      { nr: 71, name: 'Bosna',                   ing: 'Österreichische Bosna',                   p: 7.00 },
      { nr: 72, name: 'Bosna Spezial',           ing: 'Bosna mit Extra-Belag',                   p: 7.50 },
      { nr: 73, name: 'Käsekrainer',             ing: 'Mit Salat & Pommes Frites',               p: 11.50 },
      { nr: 74, name: 'Chicken Wings',           ing: 'Mit Salat & Pommes Frites',               p: 11.50 },
      { nr: 80, name: 'King Burger',             ing: 'Rindfleisch, Salat, Zwiebeln, Tomaten',   p: 7.50 },
      { nr: 81, name: 'King Burger mit Pommes',  ing: 'Rindfleisch, Salat, Zwiebeln, Tomaten',   p: 10.00 },
      { nr: 82, name: 'Chickenburger',           ing: 'Hühnchen, Salat, Zwiebeln, Tomaten',      p: 7.50 },
      { nr: 83, name: 'Chickenburger mit Pommes',ing: 'Hühnchen, Salat, Zwiebeln, Tomaten',      p: 10.00 },
      { nr: 84, name: 'Falafel',                 ing: 'Vegetarisch, im Brot',                    p: 7.00 },
      { nr: 85, name: 'Falafel-Teller',          ing: 'Vegetarisch, auf Teller',                 p: 11.50 },
      { nr: 86, name: 'Pommes klein',            ing: 'Pommes Frites',                           p: 4.50 },
      { nr: 87, name: 'Pommes groß',             ing: 'Pommes Frites groß',                      p: 6.50 },
    ]
  },
];

const GETRAENKE = [
  { gruppe: 'Alkoholfrei', items: [
    { name: 'Dosengetränke', sub: '0,33 l',  p: 3.00 },
    { name: 'Red Bull',      sub: '250 ml',  p: 3.50 },
    { name: 'Ayran',         sub: 'frisch',  p: 2.60 },
  ]},
  { gruppe: 'Alkoholisch', items: [
    { name: 'Bier',          sub: '0,5 l',   p: 2.60 },
  ]},
];

// ==============================
// HELPERS
// ==============================

const SHOW_INITIAL = 6;

function fmt(p) { return '€ ' + p.toFixed(2).replace('.', ','); }

function priceRange(items) {
  const ps = items.map(i => i.p);
  const lo = Math.min(...ps), hi = Math.max(...ps);
  return lo === hi ? fmt(lo) : `ab ${fmt(lo)}`;
}

const tagMeta = {
  vegetarisch: { label: 'Vegetarisch', cls: 'tag-veg' },
  spicy:       { label: 'Scharf',      cls: 'tag-spicy' },
  fisch:       { label: 'Fisch',       cls: 'tag-fisch' },
  special:     { label: 'Special',     cls: 'tag-special' },
};

function buildCard(item, dark) {
  const tagsH = (item.tags || [])
    .filter(t => t !== 'fleisch')
    .map(t => tagMeta[t] ? `<span class="tag ${tagMeta[t].cls}">${tagMeta[t].label}</span>` : '')
    .join('');

  const el = document.createElement('div');
  el.className = 'menu-card reveal';
  el.innerHTML = `
    <div class="card-left">
      <div class="card-nr">NR. ${item.nr}</div>
      <div class="card-name">${item.name}</div>
      <div class="card-ing">${item.ing}</div>
      ${tagsH ? `<div class="card-tags">${tagsH}</div>` : ''}
    </div>
    <div class="card-right">
      <div class="card-price">${fmt(item.p)}</div>
    </div>`;
  return el;
}

// ==============================
// RENDER CATEGORY BLOCKS
// ==============================

function renderCategories(cats, containerId, dark) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const wrapClass = dark ? 'page-section-dark' : '';

  cats.forEach((cat, ci) => {
    const block = document.createElement('div');
    block.className = 'category-block reveal';
    block.style.transitionDelay = `${ci * 60}ms`;

    const header = document.createElement('button');
    header.className = 'category-header';
    header.setAttribute('aria-expanded', ci === 0 ? 'true' : 'false');
    header.innerHTML = `
      <div class="category-header-left">
        <div class="category-icon">${cat.icon}</div>
        <div>
          <div class="category-name">${cat.name}</div>
          <div class="category-count">${cat.items.length} Gerichte</div>
        </div>
      </div>
      <div class="category-header-right">
        <div class="category-price-range">${priceRange(cat.items)}</div>
        <div class="category-toggle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>`;

    const gridWrap = document.createElement('div');
    gridWrap.className = 'category-grid-wrap' + (ci === 0 ? ' open' : '');

    const grid = document.createElement('div');
    grid.className = 'category-grid';

    cat.items.forEach((item, ii) => {
      const card = buildCard(item, dark);
      if (ii >= SHOW_INITIAL) {
        card.classList.add('card-hidden');
      }
      card.style.transitionDelay = `${ii * 20}ms`;
      grid.appendChild(card);
    });

    const showWrap = document.createElement('div');
    showWrap.className = 'show-more-wrap';
    const hidden = cat.items.length - SHOW_INITIAL;

    const showBtn = document.createElement('button');
    showBtn.className = 'show-more-btn' + (hidden > 0 ? ' visible' : '');
    showBtn.textContent = `+ ${hidden} weitere anzeigen`;
    showBtn.setAttribute('data-expanded', 'false');

    showBtn.addEventListener('click', () => {
      const expanded = showBtn.getAttribute('data-expanded') === 'true';
      if (!expanded) {
        grid.querySelectorAll('.card-hidden').forEach(c => c.classList.add('card-revealed'));
        showBtn.textContent = 'Weniger anzeigen';
        showBtn.setAttribute('data-expanded', 'true');
      } else {
        grid.querySelectorAll('.card-hidden').forEach(c => c.classList.remove('card-revealed'));
        showBtn.textContent = `+ ${hidden} weitere anzeigen`;
        showBtn.setAttribute('data-expanded', 'false');
        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    showWrap.appendChild(showBtn);
    gridWrap.appendChild(grid);
    gridWrap.appendChild(showWrap);

    // Toggle accordion
    header.addEventListener('click', () => {
      const open = gridWrap.classList.contains('open');
      gridWrap.classList.toggle('open', !open);
      header.setAttribute('aria-expanded', !open ? 'true' : 'false');
    });

    block.appendChild(header);
    block.appendChild(gridWrap);
    container.appendChild(block);
  });

  observeNew();
}

function renderGetraenke() {
  const wrap = document.getElementById('getraenkeGrid');
  wrap.innerHTML = '';
  GETRAENKE.forEach(g => {
    const el = document.createElement('div');
    el.className = 'getraenke-group reveal';
    el.innerHTML = `
      <div class="getraenke-head"><div class="getraenke-title">${g.gruppe}</div></div>
      ${g.items.map(it => `
        <div class="getraenke-item">
          <div><div class="g-name">${it.name}</div><div class="g-sub">${it.sub}</div></div>
          <div class="g-price">${fmt(it.p)}</div>
        </div>`).join('')}`;
    wrap.appendChild(el);
  });
  observeNew();
}

// ==============================
// SCROLL REVEAL
// ==============================

let observer;

function observeNew() {
  document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
    el.classList.add('observed');
    observer.observe(el);
  });
}

function initObserver() {
  observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
}

// ==============================
// NAVBAR
// ==============================

function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  document.getElementById('burgerBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
}

// ==============================
// INIT
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  initObserver();
  renderCategories(PIZZA_CATS, 'pizzaCategories', false);
  renderCategories(SPEISEN_CATS, 'speisenCategories', true);
  renderGetraenke();
  initNavbar();

  // Reveal static elements
  document.querySelectorAll('.section-intro, .split-hero, .info-card, .hero-left, .hero-right, .hero-stats')
    .forEach(el => { el.classList.add('reveal', 'observed'); observer.observe(el); });
});
