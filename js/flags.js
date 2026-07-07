// Inline flag SVGs (data URIs) — replaces external flagcdn.com requests.
// Keeping them here as reusable constants so both the language dropdown and the
// i18n language rows can share a single source of truth (zero network requests).

const FLAGS = {
  // United Kingdom
  gb: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3CclipPath id='a'%3E%3Cpath d='M0 0v30h60V0z'/%3E%3C/clipPath%3E%3CclipPath id='b'%3E%3Cpath d='M30 15h30v15zv15H0zH0V0zV0h30z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M0 0v30h60V0z' fill='%23012169'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' clip-path='url(%23b)' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/g%3E%3C/svg%3E",

  // Russia
  ru: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 6'%3E%3Crect fill='%23fff' width='9' height='6'/%3E%3Crect fill='%230039A6' y='2' width='9' height='4'/%3E%3Crect fill='%23D52B1E' y='4' width='9' height='2'/%3E%3C/svg%3E",

  // Uzbekistan
  uz: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'%3E%3Crect fill='%231EB53A' width='500' height='250'/%3E%3Crect fill='%230099B5' width='500' height='83'/%3E%3Crect fill='%23fff' y='85' width='500' height='80'/%3E%3Crect fill='%23CE1126' y='83' width='500' height='2'/%3E%3Crect fill='%23CE1126' y='165' width='500' height='2'/%3E%3Cg fill='%23fff'%3E%3Ccircle cx='70' cy='42' r='30'/%3E%3Ccircle cx='82' cy='42' r='30' fill='%230099B5'/%3E%3C/g%3E%3C/svg%3E",
};
