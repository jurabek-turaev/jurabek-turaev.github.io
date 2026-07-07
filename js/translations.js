// i18n content (EN / RU / UZ). Default: English.
// Values may contain inline HTML (flag icons) injected via innerHTML.

const langFlag = (code, label) =>
  `<img src="${FLAGS[code]}" class="flag" alt="${label}"> `;

const translations = {
  /* ===================== ENGLISH ===================== */
  en: {
    name: "English",
    eyebrow: "Backend · AI · Infrastructure",
    role: "Backend &amp; AI Engineer",
    intro:
      "I build and operate production backends — from database and real-time systems to Docker deployment on servers I run myself.",
    available: "Open to work",

    // hero chips
    c_location: "Tashkent, UZ",

    // stats
    stat_years_label: "yr building",
    stat_projects_label: "shipped projects",
    stat_live_label: "in production",
    stat_solo_label: "solo backend",

    // section labels
    sec_skills: "Stack",
    sec_experience: "Experience",
    sec_projects: "Projects",
    sec_education: "Education",

    // skills
    sk_ai: "AI &amp; Data",
    sk_backend: "Backend",
    sk_devops: "DevOps &amp; Infra",

    // experience
    exp_pawura_role: "Backend Developer",
    exp_pawura_org: "Pawura · Remote",
    exp_pawura_date: "05/2026 — Present",
    exp_pawura_desc:
      "Building the full backend and infrastructure for a pet social + marketplace platform for the EU market, and running the server myself.",
    exp_tz_role: "AI Engineer",
    exp_tz_org: "Tenzorsoft · Tashkent",
    exp_tz_date: "08/2025 — 03/2026",
    exp_tz_desc:
      "Built LangGraph-based AI systems for the chemical industry of Uzbekistan — text-to-SQL analytics, RAG document analysis and more.",

    // education
    edu_deg: "B.Sc. Agribusiness &amp; Digital Economy",
    edu_uni: "Andijan Institute of Agriculture and Agrotechnologies",
    edu_date: "2021 — 2025",
    langs_label: "Languages",
    lang_uz: langFlag("uz", "UZ") + "Uzbek",
    lang_en: langFlag("gb", "EN") + "English",
    lang_ru: langFlag("ru", "RU") + "Russian",
    lvl_native: "Native",

    // Pawura flagship
    pw_title: "Pawura",
    pw_kind: "Flagship · Solo",
    pw_tagline: "// pet social network + marketplace · EU market",
    pw_desc:
      "A production platform combining a pet social network with an integrated marketplace and payments. I designed and built the entire backend and infrastructure alone, and I self-host and operate the server.",
    pw_visit: "Open pawura.net",
    pw_docs: "API Docs",
    pw_f1_t: "Real-time messaging",
    pw_f1_d: "Direct messages & live chat over WebSockets with Django Channels + Daphne (ASGI) and Redis as the channel layer.",
    pw_f2_t: "Geolocation & maps",
    pw_f2_d: "Find nearby vets, parks and pet-friendly places using PostGIS spatial queries on PostgreSQL.",
    pw_f3_t: "Marketplace & payments",
    pw_f3_d: "Full commerce flow — catalog, cart, orders, shipping — with Stripe payments and EUR checkout.",
    pw_f4_t: "Self-hosted DevOps",
    pw_f4_d: "Dockerized multi-container stack (web, DB, Redis, Nginx), SSL via Certbot, health checks & resource limits — deployed and maintained by me.",

    // Chemical AI
    ch_title: "Chemical Industry AI Assistant",
    ch_kind: "AI Agent · Tenzorsoft",
    ch_desc:
      "A natural-language business analytics assistant for Uzbekistan's Chemical Industry platform: users ask questions in plain language and get data-driven answers instantly.",
    ch_p1: "LangGraph workflow classifies intent, generates SQL with an LLM, runs it on PostgreSQL and writes a clear answer.",
    ch_p2: "Role-based access (public / organization / farmer), session chat memory and multilingual replies.",
    ch_p3: "Extra flows: voice input via a speech-to-text proxy, and automatic DOCX report generation.",

    // AI Lawyer
    lw_title: "AI Lawyer",
    lw_kind: "RAG · Legal",
    lw_desc:
      "An AI contract-analysis platform focused on Uzbekistan legislation — it reviews contracts for compliance, rights violations and risks.",
    lw_p1: "RAG pipeline over local laws using LangChain, Chroma and Gemini embeddings for grounded answers.",
    lw_p2: "Parses PDF, DOCX and TXT contracts; multi-mode analysis (compliance + price benchmarking).",
    lw_p3: "Live web price search with LLM fallback to deliver decision-ready summaries.",

    // Face Matching
    fc_title: "Face Match Auth",
    fc_kind: "CV · Production",
    fc_desc:
      "A face-verification API used by a mobile dating app: it confirms a live camera photo belongs to the same person as their profile picture.",
    fc_p1: "Built with InsightFace (ArcFace / buffalo) and ONNX Runtime to extract facial embeddings.",
    fc_p2: "Compares two images by cosine similarity and returns a clear same-person verdict with a confidence percent.",
    fc_p3: "Lightweight FastAPI service, containerized with Docker — currently live in production.",

    footer: "Designed & built by Jurabek Turaev · 2026",
  },

  /* ===================== O'ZBEK ===================== */
  uz: {
    name: "O'zbek",
    eyebrow: "Backend · AI · Infratuzilma",
    role: "Backend va AI Muhandisi",
    intro:
      "Men ishlab chiqarishga tayyor backend tizimlarini quraman va boshqaraman — ma'lumotlar bazasi va real-time tizimlardan tortib o'zim boshqaradigan serverga Docker orqali joylashtirishgacha.",
    available: "Ish qidiryapman",

    c_location: "Toshkent, UZ",

    stat_years_label: "yil tajriba",
    stat_projects_label: "tayyor loyiha",
    stat_live_label: "ishlab turibdi",
    stat_solo_label: "yakka backend",

    sec_skills: "Texnologiyalar",
    sec_experience: "Tajriba",
    sec_projects: "Loyihalar",
    sec_education: "Ta'lim",

    sk_ai: "AI va Ma'lumot",
    sk_backend: "Backend",
    sk_devops: "DevOps va Infra",

    exp_pawura_role: "Backend Dasturchi",
    exp_pawura_org: "Pawura · Masofaviy",
    exp_pawura_date: "05/2026 — Hozirgacha",
    exp_pawura_desc:
      "Yevropa bozori uchun pet ijtimoiy tarmoq va marketplace platformasining butun backend va infratuzilmasini quryapman hamda serverni o'zim boshqaraman.",
    exp_tz_role: "AI Muhandisi",
    exp_tz_org: "Tenzorsoft · Toshkent",
    exp_tz_date: "08/2025 — 03/2026",
    exp_tz_desc:
      "O'zbekiston kimyo sanoati uchun LangGraph asosidagi AI tizimlar qurdim — text-to-SQL tahlil, RAG hujjat tahlili va boshqalar.",

    edu_deg: "Bakalavr: Agrobiznes va Raqamli Iqtisodiyot",
    edu_uni: "Andijon Qishloq Xo'jaligi va Agrotexnologiyalar Instituti",
    edu_date: "2021 — 2025",
    langs_label: "Tillar",
    lang_uz: langFlag("uz", "UZ") + "O'zbek tili",
    lang_en: langFlag("gb", "EN") + "Ingliz tili",
    lang_ru: langFlag("ru", "RU") + "Rus tili",
    lvl_native: "Ona tili",

    pw_title: "Pawura",
    pw_kind: "Asosiy · Yakka",
    pw_tagline: "// pet ijtimoiy tarmoq + marketplace · Yevropa bozori",
    pw_desc:
      "Pet ijtimoiy tarmog'ini integratsiyalangan marketplace va to'lovlar bilan birlashtiruvchi ishlayotgan platforma. Butun backend va infratuzilmani yolg'iz o'zim loyihalashtirdim va qurdim, serverni ham o'zim boshqaraman.",
    pw_visit: "pawura.net ni ochish",
    pw_docs: "API Hujjatlar",
    pw_f1_t: "Real-time xabarlashuv",
    pw_f1_d: "Django Channels + Daphne (ASGI) va Redis channel layer asosida WebSocket orqali shaxsiy xabarlar va jonli chat.",
    pw_f2_t: "Geolokatsiya va xaritalar",
    pw_f2_d: "PostgreSQL ustidagi PostGIS spatial so'rovlari bilan yaqin vetklinika, park va pet-friendly joylarni topish.",
    pw_f3_t: "Marketplace va to'lovlar",
    pw_f3_d: "To'liq savdo oqimi — katalog, savat, buyurtma, yetkazish — Stripe to'lovlari va EUR checkout bilan.",
    pw_f4_t: "Self-hosted DevOps",
    pw_f4_d: "Dockerlashtirilgan ko'p-konteynerli tizim (web, DB, Redis, Nginx), Certbot orqali SSL, health check va resurs limitlari — o'zim joylashtiraman va boshqaraman.",

    ch_title: "Kimyo Sanoati AI Yordamchisi",
    ch_kind: "AI Agent · Tenzorsoft",
    ch_desc:
      "O'zbekiston kimyo sanoati platformasi uchun tabiiy tildagi biznes-analitika yordamchisi: foydalanuvchi oddiy tilda savol beradi va ma'lumotga asoslangan javob oladi.",
    ch_p1: "LangGraph ish oqimi maqsadni aniqlaydi, LLM bilan SQL yozadi, uni PostgreSQL'da bajaradi va aniq javob tayyorlaydi.",
    ch_p2: "Rol-asosidagi kirish (public / tashkilot / fermer), sessiyali chat xotira va ko'p tilli javoblar.",
    ch_p3: "Qo'shimcha oqimlar: speech-to-text proxy orqali ovozli kirish va avtomatik DOCX hisobot yaratish.",

    lw_title: "AI Yurist",
    lw_kind: "RAG · Huquq",
    lw_desc:
      "O'zbekiston qonunchiligiga asoslangan shartnoma tahlili platformasi — shartnomalarni huquqiy moslik, huquq buzilishi va xavflar bo'yicha tekshiradi.",
    lw_p1: "Mahalliy qonunlar ustida LangChain, Chroma va Gemini embeddings bilan RAG tizimi — asoslangan javoblar.",
    lw_p2: "PDF, DOCX va TXT shartnomalarni o'qiydi; ko'p rejimli tahlil (moslik + narx solishtirish).",
    lw_p3: "Jonli veb narx qidiruvi va LLM zaxira rejimi bilan qarorga tayyor xulosalar.",

    fc_title: "Yuz orqali Autentifikatsiya",
    fc_kind: "CV · Production",
    fc_desc:
      "Mobil tanishuv (dating) app uchun yuzni tekshiruvchi API: kameradagi jonli rasm profildagi rasm bilan bir odammi yoki yo'qligini tasdiqlaydi.",
    fc_p1: "InsightFace (ArcFace / buffalo) va ONNX Runtime bilan yuz embeddinglarini ajratadi.",
    fc_p2: "Ikki rasmni kosinus o'xshashligi bo'yicha solishtiradi va ishonch foizi bilan aniq xulosa qaytaradi.",
    fc_p3: "Yengil FastAPI xizmati, Docker bilan konteynerlashtirilgan — hozir ishlab turibdi.",

    footer: "Jurabek Turaev tomonidan ishlab chiqilgan · 2026",
  },

  /* ===================== РУССКИЙ ===================== */
  ru: {
    name: "Русский",
    eyebrow: "Backend · AI · Инфраструктура",
    role: "Backend и AI Инженер",
    intro:
      "Я создаю и обслуживаю production-бэкенды — от базы данных и real-time систем до развёртывания в Docker на серверах, которыми управляю сам.",
    available: "Открыт к работе",

    c_location: "Ташкент, UZ",

    stat_years_label: "год опыта",
    stat_projects_label: "проектов",
    stat_live_label: "в проде",
    stat_solo_label: "соло backend",

    sec_skills: "Стек",
    sec_experience: "Опыт",
    sec_projects: "Проекты",
    sec_education: "Образование",

    sk_ai: "AI и Данные",
    sk_backend: "Backend",
    sk_devops: "DevOps и Инфра",

    exp_pawura_role: "Backend-разработчик",
    exp_pawura_org: "Pawura · Удалённо",
    exp_pawura_date: "05/2026 — н.в.",
    exp_pawura_desc:
      "Создаю весь бэкенд и инфраструктуру соцсети и маркетплейса для питомцев для рынка ЕС и сам управляю сервером.",
    exp_tz_role: "AI Инженер",
    exp_tz_org: "Tenzorsoft · Ташкент",
    exp_tz_date: "08/2025 — 03/2026",
    exp_tz_desc:
      "Разрабатывал AI-системы на LangGraph для химической промышленности Узбекистана — text-to-SQL аналитика, RAG-анализ документов и др.",

    edu_deg: "Бакалавр: Агробизнес и Цифровая Экономика",
    edu_uni: "Андижанский институт сельского хозяйства и агротехнологий",
    edu_date: "2021 — 2025",
    langs_label: "Языки",
    lang_uz: langFlag("uz", "UZ") + "Узбекский",
    lang_en: langFlag("gb", "EN") + "Английский",
    lang_ru: langFlag("ru", "RU") + "Русский",
    lvl_native: "Родной",

    pw_title: "Pawura",
    pw_kind: "Флагман · Соло",
    pw_tagline: "// соцсеть + маркетплейс для питомцев · рынок ЕС",
    pw_desc:
      "Работающая платформа, объединяющая соцсеть для питомцев с маркетплейсом и платежами. Весь бэкенд и инфраструктуру я спроектировал и построил самостоятельно, сервером управляю сам.",
    pw_visit: "Открыть pawura.net",
    pw_docs: "API Документация",
    pw_f1_t: "Real-time сообщения",
    pw_f1_d: "Личные сообщения и живой чат по WebSocket на Django Channels + Daphne (ASGI) с Redis в качестве channel layer.",
    pw_f2_t: "Геолокация и карты",
    pw_f2_d: "Поиск ближайших ветклиник, парков и pet-friendly мест через пространственные запросы PostGIS на PostgreSQL.",
    pw_f3_t: "Маркетплейс и платежи",
    pw_f3_d: "Полный торговый цикл — каталог, корзина, заказы, доставка — с платежами Stripe и оформлением в EUR.",
    pw_f4_t: "Self-hosted DevOps",
    pw_f4_d: "Многоконтейнерный стек в Docker (web, БД, Redis, Nginx), SSL через Certbot, health-check и лимиты ресурсов — развёрнут и обслуживается мной.",

    ch_title: "AI-ассистент для химпрома",
    ch_kind: "AI Agent · Tenzorsoft",
    ch_desc:
      "Ассистент бизнес-аналитики на естественном языке для платформы химической промышленности РУз: пользователь задаёт вопрос простыми словами и получает ответ на основе данных.",
    ch_p1: "LangGraph определяет намерение, генерирует SQL с помощью LLM, выполняет его в PostgreSQL и пишет понятный ответ.",
    ch_p2: "Ролевой доступ (public / организация / фермер), память сессии чата и мультиязычные ответы.",
    ch_p3: "Доп. потоки: голосовой ввод через speech-to-text прокси и автоматическая генерация DOCX-отчётов.",

    lw_title: "AI Юрист",
    lw_kind: "RAG · Право",
    lw_desc:
      "Платформа анализа контрактов на основе законодательства РУз — проверяет договоры на соответствие, нарушения прав и риски.",
    lw_p1: "RAG по локальным законам на LangChain, Chroma и Gemini embeddings — обоснованные ответы.",
    lw_p2: "Обрабатывает контракты PDF, DOCX и TXT; многорежимный анализ (соответствие + бенчмаркинг цен).",
    lw_p3: "Живой веб-поиск цен с LLM-фолбэком для готовых к решению резюме.",

    fc_title: "Аутентификация по лицу",
    fc_kind: "CV · Production",
    fc_desc:
      "API верификации лица для мобильного дейтинг-приложения: подтверждает, что живое фото с камеры принадлежит тому же человеку, что и на фото профиля.",
    fc_p1: "Построен на InsightFace (ArcFace / buffalo) и ONNX Runtime для извлечения эмбеддингов лица.",
    fc_p2: "Сравнивает два изображения по косинусному сходству и возвращает чёткий вердикт с процентом уверенности.",
    fc_p3: "Лёгкий сервис на FastAPI, контейнеризован в Docker — сейчас работает в проде.",

    footer: "Разработано Jurabek Turaev · 2026",
  },
};
