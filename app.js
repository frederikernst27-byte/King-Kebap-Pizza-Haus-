'use strict';

// ==============================
// COMPLETE MENU DATA
// ==============================

const MENU_SECTIONS = [
  {
    id: 'sk-menues',
    name: 'Menüs',
    items: [
      { nr: '1', name: 'Menü 1', ing: 'Pizza nach Wahl + Salat nach Wahl + Getränk (ausgen. Red Bull)', p: 22.00 },
      { nr: '2', name: 'Menü 2', ing: 'Kebap + Pommes + Getränk (ausgen. Red Bull)', p: 12.00 },
      { nr: '3', name: 'Menü 3', ing: 'Dürüm Kebap + Pommes + Getränk (ausgen. Red Bull)', p: 12.50 },
      { nr: '4', name: 'Menü 4', ing: 'King Burger + Pommes + Getränk (ausgen. Red Bull)', p: 12.00 },
      { nr: '5', name: 'Menü 5', ing: 'Chickenburger + Pommes + Getränk (ausgen. Red Bull)', p: 12.00 },
      { nr: '6', name: 'Menü 6', ing: 'Kebap Teller + Pommes + Salat + Getränk (ausgen. Red Bull)', p: 14.00 },
      { nr: '7', name: 'Menü 7', ing: 'Chicken Wings + Pommes + Getränk (ausgen. Red Bull)', p: 13.00 },
    ]
  },
  {
    id: 'sk-pizza',
    name: 'Pizza',
    note: 'Alle Pizzen auf Tomatensauce & Mozzarella · Allergene: A, G, L',
    items: [
      { nr: '1',  name: 'Al Capone',          ing: 'Tomaten, Mozzarella, Schinken, Speck, Pfefferoni, Zwiebeln',                     p: 11.50 },
      { nr: '2',  name: 'Al Tonno',            ing: 'Tomaten, Mozzarella, Thunfisch, Zwiebeln, Paprika',                              p: 11.50 },
      { nr: '3',  name: 'Bauernpizza',         ing: 'Tomaten, Mozzarella, Salami, Schinken, Speck, Zwiebeln, Pfefferoni',             p: 11.50 },
      { nr: '4',  name: 'Calzone (gefaltet)',  ing: 'Tomaten, Mozzarella, Schinken, Champignons',                                    p: 11.50 },
      { nr: '5',  name: 'Capricciosa',         ing: 'Tomaten, Mozzarella, Schinken, Champignons, Oliven',                            p: 11.50 },
      { nr: '6',  name: 'Cardinale',           ing: 'Tomaten, Mozzarella, Schinken, Zwiebeln',                                       p: 11.50 },
      { nr: '7',  name: 'Chefpizza',           ing: 'Tomaten, Mozzarella, Schinken, Salami, Speck, Zwiebeln, Ei, Pfefferoni',        p: 12.00 },
      { nr: '8',  name: 'Diavolo',             ing: 'Tomaten, Mozzarella, Salami, Zwiebeln, Pfefferoni',                             p: 11.50 },
      { nr: '9',  name: 'Gigante',             ing: 'Tomaten, Mozzarella, Schinken, Salami, Thunfisch, Mais',                        p: 11.50 },
      { nr: '10', name: 'Hauspizza',           ing: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, Pfefferoni',               p: 12.00 },
      { nr: '11', name: 'Hawaii',              ing: 'Tomaten, Mozzarella, Schinken, Ananas',                                         p: 11.50 },
      { nr: '12', name: 'Helin Pizza',         ing: 'Tomaten, Mozzarella, Salami, Mais',                                             p: 11.50 },
      { nr: '13', name: 'Jesolo',              ing: 'Tomaten, Mozzarella, Schinken, Ei, Zwiebeln, Pfefferoni',                       p: 11.50 },
      { nr: '14', name: 'Kathrin',             ing: 'Tomaten, Mozzarella, Salami, Knoblauch, Zwiebeln, scharfe Pfefferoni',          p: 11.50 },
      { nr: '15', name: 'Musti Pizza',         ing: 'Tomaten, Mozzarella, Salami, Ei',                                               p: 11.50 },
      { nr: '16', name: 'King Pizza',          ing: 'Tomaten, Mozzarella, Schinken, Salami, Zwiebeln',                               p: 11.50 },
      { nr: '17', name: 'Lavamba',             ing: 'Tomaten, Mozzarella, Schinken, Salami, Ei',                                     p: 11.50 },
      { nr: '18', name: 'Lodos Pizza',         ing: 'Tomaten, Mozzarella, Schinken, Salami, Zwiebeln, Pfefferoni',                   p: 11.50 },
      { nr: '19', name: 'Maradonna',           ing: 'Tomaten, Mozzarella, Schinken, Mais, Pfefferoni',                               p: 11.50 },
      { nr: '20', name: 'Mexicana',            ing: 'Tomaten, Mozzarella, Salami, Mais, scharfe Pfefferoni',                         p: 11.50 },
      { nr: '21', name: 'Napoli',              ing: 'Tomaten, Mozzarella, Spinat, Speck, Mais',                                      p: 11.50 },
      { nr: '22', name: 'Altare',              ing: 'Tomaten, Mozzarella, Spinat, Tonno, Zwiebeln, Meeresfrüchte, Knoblauch',        p: 12.50 },
      { nr: '23', name: 'Juliet',              ing: 'Tomaten, Mozzarella, Spinat, Artischocken, Oliven',                             p: 11.50 },
      { nr: '24', name: 'Provinciale',         ing: 'Tomaten, Mozzarella, Salami, Speck, Zwiebeln, Pfefferoni',                      p: 11.50 },
      { nr: '25', name: 'Pizza nach Wunsch',   ing: 'Tomaten, Mozzarella + Zutaten nach Auswahl',                                    p: 14.00 },
      { nr: '26', name: 'Prosciutto',          ing: 'Tomaten, Mozzarella, Prosciutto',                                               p: 11.50 },
      { nr: '27', name: 'Regina',              ing: 'Tomaten, Mozzarella, Schinken',                                                 p: 11.50 },
      { nr: '28', name: 'Romana',              ing: 'Tomaten, Mozzarella, Schinken, Champignons',                                    p: 11.50 },
      { nr: '29', name: 'Rustica',             ing: 'Tomaten, Mozzarella, Schinken, Artischocken, Mais',                             p: 11.50 },
      { nr: '30', name: 'Salami',              ing: 'Tomaten, Mozzarella, Salami',                                                   p: 11.50 },
      { nr: '31', name: 'Alla Cippola',        ing: 'Tomaten, Mozzarella, Zwiebeln, Paprika, Mais',                                  p: 11.50 },
      { nr: '32', name: 'Funghi',              ing: 'Tomaten, Mozzarella, Champignons',                                              p: 11.50 },
      { nr: '33', name: 'Gemüsepizza',         ing: 'Tomaten, Mozzarella, Champignons, Mais, Paprika, Tomatenscheiben, Oliven',      p: 11.50 },
      { nr: '34', name: 'Griechische Pizza',   ing: 'Tomaten, Mozzarella, Weichkäse, Zwiebeln, Tomatenscheiben, Oliven',             p: 11.50 },
      { nr: '35', name: 'Kaiserpizza',         ing: 'Tomaten, Mozzarella, Spinat, Ei, Zwiebeln',                                     p: 11.50 },
      { nr: '36', name: 'Margherita',          ing: 'Tomaten, Mozzarella',                                                           p: 10.00 },
      { nr: '37', name: 'Pide',                ing: 'Tomaten, Mozzarella, Spinat, Weichkäse',                                        p: 11.50 },
      { nr: '38', name: 'Pide mit Salat',      ing: 'Tomaten, Mozzarella, Spinat, Weichkäse (inkl. Salat)',                          p: 16.50 },
      { nr: '39', name: 'Spinatpizza',         ing: 'Tomaten, Mozzarella, Spinat, Weichkäse, Mais',                                  p: 11.00 },
      { nr: '40', name: 'Zidana Pizza',        ing: 'Tomaten, Mozzarella, Ei, Zwiebeln, Oliven',                                     p: 11.00 },
      { nr: '41', name: 'Quattro Formaggi',    ing: 'Tomaten, Mozzarella, Gorgonzola, Weichkäse',                                    p: 11.00 },
      { nr: '42', name: 'Ruccola Pizza',       ing: 'Tomaten, Mozzarella, Ruccola, Knoblauchsoße',                                   p: 11.00 },
      { nr: '43', name: 'Vegetaria',           ing: 'Tomaten, Mozzarella, Champignons, Paprika, Zwiebeln',                           p: 11.00 },
      { nr: '44', name: 'Veggo Pizza',         ing: 'Tomaten, Mozzarella, Ruccola, Mais, Zwiebeln, Paprika, Oliven',                 p: 11.00 },
      { nr: '45', name: 'Meeresfrüchte Pizza', ing: 'Tomaten, Mozzarella, Meeresfrüchte, Knoblauchsoße',                             p: 11.00 },
      { nr: '46', name: 'Maxi Pizza',          ing: 'Tomaten, Mozzarella, Kebapfleisch, Zwiebeln, Paprika, scharfe Pfefferoni',      p: 11.50 },
      { nr: '47', name: 'Quattro Stagioni',    ing: 'Tomaten, Mozzarella, Schinken, Salami, Artischocken',                           p: 11.00 },
      { nr: '48', name: 'Siziliana',           ing: 'Tomaten, Mozzarella, Sardellen, Kapern, Oliven',                                p: 11.00 },
      { nr: '49', name: 'Palermo',             ing: 'Tomaten, Mozzarella, Schinken, Mais, Ei',                                       p: 11.00 },
      { nr: '50', name: 'Sucuk-Pizza',         ing: 'Tomaten, Mozzarella, Sucuk, Ei',                                                p: 11.50 },
    ]
  },
  {
    id: 'sk-salate',
    name: 'Salate',
    items: [
      { nr: '51', name: 'King Salat',        ing: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Weichkäse, Oliven, Paprika, Dressing',  p: 8.00 },
      { nr: '52', name: 'Gemischter Salat',  ing: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Paprika, Dressing',                    p: 7.00 },
      { nr: '53', name: 'Griechischer Salat',ing: 'Grüner Salat, Tomaten, Mozzarella, Zwiebeln, Paprika, Oliven, Dressing',        p: 8.00 },
      { nr: '54', name: 'Tonnosalat',        ing: 'Grüner Salat, Tomaten, Thunfisch, Gurken, Paprika, Zwiebeln, Ei, Dressing',     p: 9.00 },
      { nr: '55', name: 'Kebapsalat',        ing: 'Grüner Salat, Tomaten, Gurken, Paprika, Zwiebeln, Kebapfleisch, Dressing',      p: 10.00 },
      { nr: '56', name: 'Kaisersalat',       ing: 'Grüner Salat, Tomaten, Zwiebeln, Gurken, Paprika, Dressing',                    p: 7.00 },
      { nr: '57', name: 'Bauernsalat',       ing: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Oliven, Paprika, Ei',                  p: 9.00 },
      { nr: '58', name: 'Chefsalat',         ing: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Oliven, Weichkäse, Mais',              p: 9.00 },
    ]
  },
  {
    id: 'sk-kebap',
    name: 'Kebap im Brot',
    note: 'Allergene: A, G',
    items: [
      { nr: '59', name: 'Kebap',                  ing: 'Im Brot mit Salat & Soße',            p: 7.00 },
      { nr: '60', name: 'Kebap mit Weichkäse',    ing: 'Im Brot mit Weichkäse',               p: 7.50 },
      { nr: '61', name: 'Kebap nur Fleisch',       ing: 'Im Brot, nur Fleisch',                p: 8.00 },
      { nr: '62', name: 'Kebap vegetarisch',       ing: 'Im Brot, vegetarisch',                p: 6.50 },
      { nr: '78', name: 'Chili Cheese Kebap',      ing: 'Im Brot mit Chili & Käse',            p: 7.50 },
    ]
  },
  {
    id: 'sk-duerum',
    name: 'Dürüm Wrap',
    note: 'Allergene: A, G',
    items: [
      { nr: '63', name: 'Dürüm Kebap',             ing: 'Im Wrap mit Salat & Soße',            p: 8.00 },
      { nr: '64', name: 'Dürüm Kebap mit Käse',    ing: 'Im Wrap mit Käse',                    p: 8.50 },
      { nr: '65', name: 'Dürüm Vegetarisch',        ing: 'Im Wrap, vegetarisch',                p: 7.00 },
      { nr: '66', name: 'Dürüm Kebap nur Fleisch',  ing: 'Im Wrap, nur Fleisch',               p: 9.00 },
    ]
  },
  {
    id: 'sk-teller',
    name: 'Kebap Teller',
    note: 'Allergene: A, G',
    items: [
      { nr: '67', name: 'Kebap Teller – nur Salat',              ing: 'Kebap auf Teller mit Salat',                  p: 11.50 },
      { nr: '68', name: 'Kebap Teller – nur Pommes',             ing: 'Kebap auf Teller mit Pommes Frites',          p: 11.50 },
      { nr: '69', name: 'Kebap Teller mit Salat & Pommes',       ing: 'Kebap auf Teller mit Salat & Pommes Frites',  p: 11.50 },
      { nr: '70', name: 'Kebap Teller mit Salat, Pommes & Käse', ing: 'Kebap auf Teller, komplett mit Käse',         p: 12.00 },
      { nr: '79', name: 'Teller Nach Wunsch',                    ing: 'Teller nach Ihrer persönlichen Auswahl',      p: 13.50 },
    ]
  },
  {
    id: 'sk-box',
    name: 'Kebap Box',
    note: 'Allergene: A, G',
    items: [
      { nr: '75', name: 'Kebap Box mit Salat & Pommes',          ing: 'Box mit Salat & Pommes Frites',               p: 9.50 },
      { nr: '76', name: 'Kebap Box mit Salat, Pommes & Käse',    ing: 'Box mit Salat, Pommes Frites & Käse',         p: 10.00 },
      { nr: '77', name: 'Kebap Box nur Fleisch',                 ing: 'Box nur mit Kebapfleisch',                    p: 12.00 },
    ]
  },
  {
    id: 'sk-grill',
    name: 'Grill & Burger',
    note: 'Allergene: A, G',
    items: [
      { nr: '71', name: 'Bosna',                      ing: 'Österreichische Bosna',                                     p: 7.00 },
      { nr: '72', name: 'Bosna Spezial',               ing: 'Bosna mit Extra-Belag',                                     p: 7.50 },
      { nr: '73', name: 'Käsekrainer',                 ing: 'Mit Salat & Pommes Frites',                                 p: 11.50 },
      { nr: '74', name: 'Chicken Wings',               ing: 'Mit Salat & Pommes Frites',                                 p: 11.50 },
      { nr: '80', name: 'King Burger',                 ing: 'Rindfleisch, Salat, Zwiebeln, Tomaten',                     p: 7.50 },
      { nr: '81', name: 'King Burger mit Pommes',      ing: 'Rindfleisch, Salat, Zwiebeln, Tomaten + Pommes Frites',     p: 10.00 },
      { nr: '82', name: 'Chickenburger',               ing: 'Hühnerfleisch, Salat, Zwiebeln, Tomaten',                  p: 7.50 },
      { nr: '83', name: 'Chickenburger mit Pommes',    ing: 'Hühnerfleisch, Salat, Zwiebeln, Tomaten + Pommes Frites',  p: 10.00 },
      { nr: '84', name: 'Falafel vegetarisch',         ing: 'Im Brot, vegetarisch',                                      p: 7.00 },
      { nr: '85', name: 'Falafel-Teller vegetarisch',  ing: 'Auf Teller, vegetarisch',                                   p: 11.50 },
    ]
  },
  {
    id: 'sk-pommes',
    name: 'Pommes Frites',
    note: 'Allergene: A, G',
    items: [
      { nr: '86', name: 'Pommes klein', ing: 'Pommes Frites klein', p: 4.50 },
      { nr: '87', name: 'Pommes groß',  ing: 'Pommes Frites groß',  p: 6.50 },
    ]
  },
  {
    id: 'sk-getraenke',
    name: 'Getränke',
    items: [
      { nr: '—', name: 'Dosengetränke', ing: 'Alkoholfrei · 0,33 l', p: 3.00 },
      { nr: '—', name: 'Red Bull',      ing: 'Alkoholfrei · 250 ml',  p: 3.50 },
      { nr: '—', name: 'Ayran',         ing: 'Alkoholfrei · frisch',  p: 2.60 },
      { nr: '—', name: 'Bier',          ing: 'Alkoholisch · 0,5 l',   p: 2.60 },
    ]
  },
];

// ==============================
// RENDER
// ==============================

function fmt(p) {
  return p.toFixed(2).replace('.', ',') + ' €';
}

function renderMenu() {
  const main = document.getElementById('skMain');
  main.innerHTML = '';

  MENU_SECTIONS.forEach(section => {
    const sec = document.createElement('div');
    sec.className = 'sk-section';
    sec.id = section.id;

    let noteHtml = section.note ? `<p class="sk-section-note">${section.note}</p>` : '';

    sec.innerHTML = `
      <div class="sk-section-header">
        <h2 class="sk-section-title">${section.name}</h2>
        ${noteHtml}
      </div>
      <table class="sk-table">
        <thead>
          <tr>
            <th class="sk-th-nr">Nr.</th>
            <th>Gericht</th>
            <th class="sk-th-price">Preis</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>`;

    const tbody = sec.querySelector('tbody');
    section.items.forEach(item => {
      const row = document.createElement('tr');
      row.className = 'sk-item';
      row.dataset.search = (item.name + ' ' + item.ing + ' ' + item.nr).toLowerCase();
      row.innerHTML = `
        <td class="sk-item-nr">${item.nr}</td>
        <td class="sk-item-body">
          <div class="sk-item-name">${item.name}</div>
          <div class="sk-item-ing">${item.ing}</div>
        </td>
        <td class="sk-item-price">${fmt(item.p)}</td>`;
      tbody.appendChild(row);
    });

    main.appendChild(sec);
  });
}

// ==============================
// CATEGORY SWITCHING (one category visible at a time)
// ==============================

let activeCategory = null;

function showCategory(catId) {
  activeCategory = catId;
  document.querySelectorAll('.sk-section').forEach(sec => {
    const visible = sec.id === catId;
    sec.style.display = visible ? '' : 'none';
    sec.querySelectorAll('.sk-item').forEach(item => { item.style.display = ''; });
  });
  document.querySelectorAll('.sk-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.cat === catId);
  });
}

function initMenuNav() {
  const links = document.querySelectorAll('.sk-nav-link');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('skSearch').value = '';
      showCategory(link.dataset.cat);
      if (window.innerWidth <= 900) {
        const target = document.getElementById('speisekarte');
        const offset = 90;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
  if (MENU_SECTIONS.length) showCategory(MENU_SECTIONS[0].id);
}

// ==============================
// SEARCH
// ==============================

function initSearch() {
  const input = document.getElementById('skSearch');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const allSections = document.querySelectorAll('.sk-section');

    if (!q) {
      showCategory(activeCategory);
      return;
    }

    allSections.forEach(sec => {
      const items = sec.querySelectorAll('.sk-item');
      let anyVisible = false;
      items.forEach(item => {
        const match = item.dataset.search.includes(q);
        item.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      sec.style.display = anyVisible ? '' : 'none';
    });
  });
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
// SLIDESHOW
// ==============================

function initSlideshow() {
  const track = document.getElementById('slideTrack');
  const dotsWrap = document.getElementById('slideDots');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  let index = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Bild ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
    restart();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => { index = (index + 1) % slides.length; update(); }, 5000);
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  restart();
}

// ==============================
// INIT
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initSearch();
  initMenuNav();
  initNavbar();
  initSlideshow();
});
