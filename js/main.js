// Behaviour: language switching, theme toggle, scroll reveal.
// Depends on flags.js and translations.js. The animated background is pure CSS.

/* ---------- Language dropdown ---------- */
const dd = document.getElementById('lang-dd');
const langBtn = document.getElementById('lang-btn');
const langCurrent = document.getElementById('lang-current');
const langItems = document.querySelectorAll('.dd-menu li');

function openDropdown(open) {
  dd.classList.toggle('open', open);
  langBtn.setAttribute('aria-expanded', String(open));
}

langBtn.addEventListener('click', () => openDropdown(!dd.classList.contains('open')));
document.addEventListener('click', (e) => {
  if (!dd.contains(e.target)) openDropdown(false);
});

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  langCurrent.textContent = dict.name;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio_lang', lang);
}

langItems.forEach((item) => {
  const choose = () => {
    setLanguage(item.getAttribute('data-lang'));
    openDropdown(false);
  };
  item.addEventListener('click', choose);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); }
  });
});

setLanguage(localStorage.getItem('portfolio_lang') || 'en');

/* ---------- Theme toggle ---------- */
const themeBtn = document.getElementById('theme-btn');
const root = document.documentElement;

if ((localStorage.getItem('portfolio_theme') || 'dark') === 'light') {
  root.setAttribute('data-theme', 'light');
}

themeBtn.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('portfolio_theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('portfolio_theme', 'light');
  }
});

/* ---------- Scroll reveal (staggered) ---------- */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Slight stagger so cells cascade in rather than snapping together.
          entry.target.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}
