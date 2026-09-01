// Shared UI strings + About-page content, EN + UA.
// This is the "data" half of the data+template split: pages render from here,
// so translating or editing copy never means touching layout code.

// The share image used by any page that has none of its own. A blog post whose
// hero has not been supplied yet falls back to this rather than pointing
// og:image at a file that does not exist (OPS-315).
export const DEFAULT_SHARE_IMAGE = '/images/lena-filatova-womens-health-coach-over-40.jpg';

export const NAV = {
  en: { blog: 'Blog', resources: 'Resources', recipes: 'Recipes', about: 'About', contact: 'Contact', subscribe: 'Subscribe' },
  ua: { blog: 'Блог', resources: 'Ресурси', recipes: 'Рецепти', about: 'Про мене', contact: 'Контакти', subscribe: 'Підписатися' },
};

export const FOOTER = {
  en: {
    blurb: 'Evidence-based women’s health after 40 — nutrition, fitness and calm, practical guidance.',
    follow: 'Follow', explore: 'Explore', categories: 'Categories', legal: 'Legal', contact: 'Contact',
    cats: ['Perimenopause', 'Nutrition', 'Fitness 40+', 'Diabetes'],
    legalLinks: ['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Refund & Cancellation Policy', 'Accessibility'],
    company: '© 2026 Selfound Ltd. Registered in England and Wales · Company No. 16450921',
    disclaimer: 'The information on this site is for educational purposes only and is not medical advice. When in doubt, please consult your healthcare provider.',
    // OPS-336 — site-wide AI notice. Split around the link so the contact
    // page keeps the deploy base prefix the rest of the footer uses.
    aiNotice: {
      pre: 'This website is produced with the help of AI, which can make mistakes. If you spot one, please tell me through the ',
      link: 'contact form',
      post: '.',
    },
  },
  ua: {
    blurb: 'Науково обґрунтоване жіноче здоров’я після 40 — харчування, фітнес і спокійні, практичні поради.',
    follow: 'Соцмережі', explore: 'Розділи', categories: 'Категорії', legal: 'Правова інформація', contact: 'Контакти',
    cats: ['Перименопауза', 'Харчування', 'Фітнес 40+', 'Діабет'],
    legalLinks: ['Політика конфіденційності', 'Політика cookie', 'Умови використання', 'Повернення та скасування', 'Доступність'],
    company: '© 2026 Selfound Ltd. Registered in England and Wales · Company No. 16450921',
    disclaimer: 'Інформація на цьому сайті має лише освітній характер і не є медичною порадою. За наявності сумнівів, будь ласка, зверніться до свого лікаря.',
    aiNotice: {
      pre: 'Цей вебсайт створюється за допомогою штучного інтелекту, який може помилятися. Якщо ви помітили помилку, будь ласка, повідомте мені через ',
      link: 'контактну форму',
      post: '.',
    },
  },
};

export const ABOUT = {
  en: {
    seoTitle: 'About Lena Filatova — writer & coach with type 1 diabetes',
    seoDesc: 'Meet Lena Filatova — evidence-based writer and coach on women’s health after 40, living with type 1 diabetes for over two decades.',
    ogImage: '/images/lena-filatova-womens-health-coach-over-40.jpg',
    kicker: 'About',
    h1: 'Hi, I’m Lena.',
    lead: 'I’ve lived with type 1 diabetes since 2003 — and spent those years learning what almost no one explains: how diabetes, insulin resistance and perimenopause collide for women over 40. My work is to make that clearer, and help you feel like yourself again.',
    // The first three numbers are the homepage's trust band verbatim (HOME.trust),
    // so the two pages state the same credentials — they had drifted to
    // "Hundreds" and "dia.school" here (OPS-277). The fourth is About-only: the
    // homepage uses that slot for "Recommended by clinicians" instead.
    stats: [
      { n: '23 years', l: 'living with type 1 diabetes' },
      { n: '1200+', l: 'women & families supported through coaching, webinars & programmes' },
      { n: 'Founder', l: 'of the School of Diabetes, and co-founder of AI-powered health & wellness solutions' },
      { n: '2022', l: 'humanitarian mission for Ukraine' },
    ],
    storyLabel: 'The story',
    story: [
      'I was diagnosed with type 1 diabetes in 2003. More than twenty years of managing it every single day taught me what actually works when a chronic condition is part of ordinary life — and how much steadier you feel once fear gives way to understanding.',
      'I’ve hosted webinars and led wellness programmes on living well with diabetes, and founded the School of Diabetes — an online school — to bring that knowledge to more people. Between the school and my programmes I’ve supported more than 1,200 women and families in taking calm, confident control of their health, and I now co-found AI-powered health and wellness products built on the same thinking.',
      'During the full-scale invasion of Ukraine in 2022, I joined a humanitarian mission supplying Ukrainians with vital diabetic supplies — coordinating resources and support for people who suddenly had none. Today I bring that same practical, no-panic approach to helping women over 40 feel strong through every change.',
    ],
    valuesLabel: 'How I work',
    values: [
      { h: 'Evidence first', p: 'Guidance grounded in research, not trends or quick fixes.' },
      { h: 'Realistic', p: 'Plans built around your actual time, not an ideal week.' },
      { h: 'Sustainable', p: 'Habits you can keep long after a program ends.' },
    ],
    ctaTitle: 'Ready to start?',
    ctaText: 'Book a coaching call or explore the digital products whenever you’re ready.',
    ctaBtn: 'Work with me',
  },
  ua: {
    seoTitle: 'Про Лену Філатову — авторка та коуч із діабетом 1 типу',
    seoDesc: 'Знайомтесь із Леною Філатовою — авторка та коуч із науковим підходом до жіночого здоров’я після 40, живе з діабетом 1 типу понад два десятиліття.',
    ogImage: '/images/lena-filatova-womens-health-coach-over-40.jpg',
    kicker: 'Про мене',
    h1: 'Привіт, я Лена.',
    lead: 'Я живу з діабетом 1 типу з 2003 року — і всі ці роки допомагаю іншим жити з ним повноцінно. Усе, чого я навчаю, — з реального досвіду, а не з теорії.',
    // Same three numbers as HOME.trust — see the EN note above.
    stats: [
      { n: '23 роки', l: 'життя з діабетом 1 типу' },
      { n: '1200+', l: 'жінок і родин підтримано через коучинг, вебінари та програми' },
      { n: 'Засновниця', l: 'Школи діабету та співзасновниця продуктів для здоров’я й велнесу на основі AI' },
      { n: '2022', l: 'гуманітарна місія для України' },
    ],
    storyLabel: 'Історія',
    story: [
      'Мені діагностували діабет 1 типу у 2003 році. Понад двадцять років щоденного контролю навчили мене, що справді працює, коли хронічний стан — частина звичайного життя, і наскільки спокійніше стає, коли страх поступається розумінню.',
      'Я проводила вебінари та вела велнес-програми про життя з діабетом і заснувала Школу діабету — онлайн-школу, щоб донести ці знання ширше. Через школу та програми я підтримала понад 1200 жінок і родин у спокійному та впевненому контролі свого здоров’я, а сьогодні є співзасновницею продуктів для здоров’я й велнесу на основі AI, побудованих на тому самому підході.',
      'Під час повномасштабного вторгнення в Україну у 2022 році я долучилася до гуманітарної місії з постачання українцям життєво важливих діабетичних засобів — координувала ресурси та підтримку для тих, хто раптово залишився без них. Сьогодні я застосовую цей самий практичний підхід без паніки, щоб допомагати жінкам після 40 бути сильними у кожній зміні.',
    ],
    valuesLabel: 'Як я працюю',
    values: [
      { h: 'Спершу докази', p: 'Поради, засновані на дослідженнях, а не на трендах.' },
      { h: 'Реалістично', p: 'Плани навколо вашого реального часу, а не ідеального тижня.' },
      { h: 'Стабільно', p: 'Звички, які лишаються з вами після завершення програми.' },
    ],
    ctaTitle: 'Готові почати?',
    ctaText: 'Забронюйте коучинговий дзвінок або перегляньте цифрові продукти, коли будете готові.',
    ctaBtn: 'Працювати зі мною',
  },
};

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/lena.filatova/' },
  { name: 'Facebook', href: 'https://www.facebook.com/lenafilatovablog' },
  { name: 'Threads', href: 'https://www.threads.com/@lena.filatova' },
];

// Brand glyphs for the follow row (OPS-153) — inline so they cost no request
// and inherit the link colour, and so we don't pull in an icon font: the site
// self-hosts its two faces precisely to avoid extra font fetches (OPS-211).
// Paths are Simple Icons (CC0), drawn on a 24×24 box. Keyed by the lowercased
// SOCIALS name; a platform added without a glyph falls back to its initial,
// which is what every link showed before this change.
export const SOCIAL_ICONS = {
  instagram: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  // The bare "f", not the roundel — the circle here is drawn in CSS, and a
  // second filled disc inside it read as a blob next to the two line glyphs.
  facebook: 'M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z',
  threads: 'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z',
};

// Google Calendar appointment scheduler — copied verbatim from the live site.
export const BOOKING_EMBED = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nzMnvnKmd4nOx0E1T86EQuRdnoBbYmTEXc-FEtQo9fWvhk-cz4eM8PSSvA7K-BxUJb-F9TBEg?gv=true';

// The Google Apps Script endpoint the contact and newsletter forms post to
// (type=message → emails Lena; same script handles signups → Mailchimp) now
// lives in src/scripts/form-guard.js, where it is assembled at runtime instead
// of being rendered into the HTML for spam scrapers to harvest (OPS-235).

// Newsletter signups post straight to the Mailchimp audience's public post-json
// endpoint — no API key anywhere, double opt-in still applies, and unlike the
// Apps Script relay the response is readable so real errors reach the visitor.
// Audience "Lena Filatova" lives in the us11 (BaristaCard) account.
// Language is NEVER chosen by the visitor: Newsletter.astro derives it from the
// page tree ('/' = en, '/ua/' = ua) and writes the matching hidden group field.
// Interest group 34186 "Language": 1 = EN, 2 = UA.
export const MAILCHIMP = {
  endpoint: 'https://baristacard.us11.list-manage.com/subscribe/post-json',
  u: '1e50ad3293720baaf82abb8b3',
  list: 'b6e0bf1c2b',
  langGroup: 34186,
  langValue: { en: 1, ua: 2 },
  // Mailchimp's anti-bot honeypot: must stay empty, name is b_<u>_<list>.
  botField: 'b_1e50ad3293720baaf82abb8b3_b6e0bf1c2b',
  // Tags let one audience hold several lists' worth of intent — a Dia.School
  // waitlist signup has to be findable later without a second audience.
  // Newsletter.astro renders `<input type="hidden" name="tags">` only when a
  // page passes a `tag`, so the plain newsletter form is unchanged.
  //
  // ⚠️ UNVERIFIED VALUE (OPS-264). Mailchimp's own embed builder emits the tag's
  // NUMERIC id here, not its name; a name is accepted by some accounts and
  // silently ignored by others. Nothing else depends on it — the signup, the
  // double opt-in and the Language group all work regardless — so the worst case
  // is an untagged contact, not a lost one. To confirm: sign up once on
  // /ua/dia-school/, confirm the email, and look at the contact in Mailchimp. If
  // the tag is missing, open Audience → Signup forms → Embedded form, tick the
  // `dia-school-waitlist` tag, and copy the numeric value it writes into
  // `name="tags"` here. This is the only Mailchimp-side step the site can't do
  // for itself.
  tags: { diaSchoolWaitlist: 'dia-school-waitlist' },
};

// Homepage. Featured recipe + blog cards are slug-based (both sections live in
// this repo now); HomeBody builds the language-scoped href and base-prefixes
// the local image. Newsletter posts to the same Apps Script as all signups
// (source=newsletter → Mailchimp double opt-in).
export const HOME = {
  en: {
    seoTitle: 'Lena Filatova — Evidence-based women’s health after 40',
    seoDesc: 'Evidence-based guidance for women 40+ with diabetes, insulin resistance and perimenopause — plus free tools, low-GI recipes and a science-backed newsletter.',
    heroKicker: 'Diabetes · Perimenopause · Nutrition · Movement · After 40',
    // The headline is split so the second half can be set in italic magenta.
    heroH1: 'Perimenopause changed your blood sugar rules.',
    heroH1b: 'No one warned you.',
    heroLead: 'I live it — type 1 diabetes since 2003, perimenopause now. I explain what’s actually happening where hormones and blood sugar collide after 40. Evidence-based information, lived experience and tools to manage in your hardest times.',
    heroCta1: 'Try the free calculator', heroCta2: 'Get the free workbook',
    heroNote: 'I founded the School of Diabetes and co-founded a family of AI-powered health & wellness solutions. Living with type 1 diabetes for 23 years.',
    disclaimer: 'Not medical guidance. Please consult your healthcare provider.',
    trustLabel: 'Why women trust me',
    trust: [
      { n: '23 years', l: 'living with type 1 diabetes' },
      { n: '1200+', l: 'women & families supported through coaching, webinars & programmes' },
      { n: 'Founder', l: 'of the School of Diabetes, and co-founder of AI-powered health & wellness solutions' },
      { n: 'Recommended', l: 'by people with diabetes, practising endocrinologists, nutritionists and psychologists' },
    ],
    // Social proof. Member quotes are anonymised at Lena's request; the two
    // clinicians are named because their titles are the point.
    voicesTitle: 'Women who finally got an answer.',
    voicesSub: 'Real messages from coaching clients and School of Diabetes members, shared with permission.',
    voicesLabel: 'In their words',
    voices: [
      { q: 'I reached my target numbers for the first time. You can’t imagine what that means — after two years of chaos, my motivation to live is coming back.', hl: 'for the first time', who: 'Coaching client · Type 1 diabetes' },
      { q: 'After 11 years with diabetes, not one doctor had explained the obvious things your consultations did. I finally understand my own body.', hl: 'not one doctor', who: 'Coaching client · T1D for 11 years' },
      { q: 'For the first time in 10 years I wake up happy. I stopped fearing my high sugars — now I know exactly what I did, and what to do next.', hl: 'I wake up happy', who: 'School of Diabetes member · T1D for 10 years' },
      { q: 'I stopped measuring twice a month because it felt pointless. Now it’s a question of who wins today — me or diabetes.', hl: 'measuring twice a month', who: 'School of Diabetes member' },
    ],
    clinicianLabel: 'Recommended by clinicians',
    clinicianQuote: 'This is the best diabetes school I know.',
    clinicianWho: 'Dr Tkachenko · Endocrinologist',
    recipeDoc: 'Wonderful recipes.',
    recipeDocWho: 'Natalia Silina · Gynaecologist-endocrinologist',
    toolsFree: 'No sign-up · No paywall',
    waitlistTitle: 'Courses and guides are coming.',
    waitlistText: 'Newsletter subscribers get first access — and founding prices.',
    waitlistCta: 'Join the list',
    helpTitle: 'What I help with',
    helpSub: 'Where hormones, blood sugar and midlife meet — explained clearly, in one place.',
    help: [
      { h: 'Perimenopause', p: 'Night sweats, unpredictable readings, doses that stopped working — understand why, and what helps.' },
      { h: 'Nutrition', p: 'Eating that fits your real life and your blood sugar — not another diet to fail at.' },
      { h: 'Fitness 40+', p: 'Train for strength and energy without the crashes — smart movement for changing hormones.' },
      { h: 'Diabetes', p: '23 years of type 1 taught me what the leaflets don’t. Practical, lived-in guidance.' },
    ],
    recipesTitle: 'From my kitchen',
    recipesSub: 'A reader-favourite, low-GI recipe — no sugar, no white flour.',
    recipesAll: 'All recipes', carbs: 'carbs', recipeCta: 'View the recipe →',
    resourcesTitle: 'Free tools & guides',
    resourcesSub: 'Interactive calculators, comparisons and guides — free to use, no sign-up.',
    resourcesAll: 'All resources',
    blogTitle: 'From the blog', blogSub: 'Just published — my latest article.',
    blogAll: 'All articles', blogCta: 'Read the full article →', readMin: 'min read',
    nlTitle: 'Diabetes & Perimenopause',
    nlTitleKicker: 'Free 26-page workbook',
    nlSub: 'What actually changes in managing type 1 diabetes after 40, what helps, and how to be taken seriously by your care team. Sent the moment you confirm your email. Plus occasional science-backed notes — no fads, unsubscribe anytime.',
    nlConsent: 'I agree to receive emails and accept the <a href="/privacy/">Privacy Policy</a>. I can unsubscribe at any time.',
    nlEmail: 'Your email address', nlBtn: 'Send me the workbook',
    nlTrap: 'Leave this field empty',
    nlSent: 'Almost there — check your inbox to confirm your subscription.',
    nlDupe: 'You’re already on the list — nothing more to do.',
    nlErr: 'Something went wrong. Please try again, or email lena@lenafilatova.co.uk.',
    nlBusy: 'Subscribing…',
  },
  ua: {
    seoTitle: 'Lena Filatova — Науково обґрунтоване жіноче здоров’я після 40',
    seoDesc: 'Науково обґрунтовані поради для жінок 40+ із діабетом, інсулінорезистентністю та перименопаузою — безкоштовні інструменти, рецепти з низьким ГІ та розсилка.',
    heroKicker: 'Діабет · Перименопауза · Харчування · Рух · Після 40',
    // Заголовок розділено, щоб другу частину набрати курсивом.
    heroH1: 'Перименопауза змінила логіку вашої глюкози крові.',
    heroH1b: 'Вас ніхто не попередив.',
    heroLead: 'Я живу з цим — діабет 1 типу з 2003 року, і зараз перименопауза. Пояснюю, що насправді відбувається там, де нестабільні гормони й цукор крові стикаються після 40. Доказова інформація, власний досвід і інструменти, щоб упоратися в найважчі часи.',
    heroCta1: 'Спробувати калькулятор', heroCta2: 'Отримати воркбук',
    heroNote: 'Я заснувала Школу діабету та стала співзасновницею розумних цифрових продуктів для здоров’я із застосуванням AI. Живу з діабетом 1 типу 23 роки.',
    disclaimer: 'Це не медична порада. Будь ласка, консультуйтеся зі своїм лікарем.',
    trustLabel: 'Чому мені довіряють',
    trust: [
      { n: '23 роки', l: 'життя з діабетом 1 типу' },
      { n: '1200+', l: 'жінок і родин підтримано через коучинг, вебінари та програми' },
      { n: 'Засновниця', l: 'Школи діабету та співзасновниця продуктів для здоров’я й велнесу на основі AI' },
      { n: 'Рекомендують', l: 'люди з діабетом, практикуючі ендокринологи, нутриціологи та психологи' },
    ],
    voicesTitle: 'Жінки, які нарешті отримали відповідь.',
    voicesSub: 'Справжні повідомлення від клієнток коучингу та учасниць Школи діабету, опубліковані з дозволу.',
    voicesLabel: 'Їхніми словами',
    voices: [
      { q: 'Уперше досягла цільових значень. Ви навіть не уявляєте, що це для мене означає — після двох років хаосу до мене повертається мотивація жити.', hl: 'Уперше', who: 'Клієнтка коучингу · Діабет 1 типу' },
      { q: 'За 11 років із діабетом жоден лікар не пояснив мені очевидних речей, які пояснили ваші консультації. Я нарешті розумію власне тіло.', hl: 'жоден лікар', who: 'Клієнтка коучингу · Діабет 1 типу, 11 років' },
      { q: 'Уперше за 10 років я прокидаюся щасливою. Я перестала боятися високих цукрів — тепер я точно знаю, що зробила і що робити далі.', hl: 'я прокидаюся щасливою', who: 'Учасниця Школи діабету · Діабет 1 типу, 10 років' },
      { q: 'Я міряла цукор двічі на місяць, бо це здавалося безглуздим. Тепер це питання, хто сьогодні переможе — я чи діабет.', hl: 'двічі на місяць', who: 'Учасниця Школи діабету' },
    ],
    clinicianLabel: 'Рекомендують лікарі',
    clinicianQuote: 'Це найкраща школа діабету, яку я знаю.',
    clinicianWho: 'Лікарка Ткаченко · Ендокринологиня',
    recipeDoc: 'Чудові рецепти.',
    recipeDocWho: 'Наталія Сіліна · Гінекологиня-ендокринологиня',
    toolsFree: 'Без реєстрації · Без оплати',
    waitlistTitle: 'Курси та посібники вже готуються.',
    waitlistText: 'Підписники розсилки отримають доступ першими — і за стартовою ціною.',
    waitlistCta: 'Приєднатися',

    helpTitle: 'Чим я допомагаю',
    helpSub: 'Де гормони, цукор у крові та середній вік перетинаються — зрозуміло, в одному місці.',
    help: [
      { h: 'Перименопауза', p: 'Нічна пітливість, непередбачувані цукри, дози, які перестали працювати — зрозумійте чому і що допомагає.' },
      { h: 'Харчування', p: 'Їжа, що вписується у ваше справжнє життя і ваш цукор — а не чергова дієта, з якої зриваються.' },
      { h: 'Фітнес 40+', p: 'Тренування заради сили та енергії без падінь цукру — розумний рух для гормонів, що змінюються.' },
      { h: 'Діабет', p: '23 роки з діабетом 1 типу навчили мене того, чого немає в брошурах. Практично, з життя.' },
    ],
    recipesTitle: 'З моєї кухні',
    recipesSub: 'Улюблений рецепт читачів з низьким ГІ — без цукру та білого борошна.',
    recipesAll: 'Усі рецепти', carbs: 'г вугл.', recipeCta: 'Дивитися рецепт →',
    resourcesTitle: 'Безкоштовні інструменти та гайди',
    resourcesSub: 'Інтерактивні калькулятори, порівняння та гайди — безкоштовно, без реєстрації.',
    resourcesAll: 'Усі ресурси',
    blogTitle: 'З блогу', blogSub: 'Щойно опубліковано — моя остання стаття.',
    blogAll: 'Усі статті', blogCta: 'Читати статтю повністю →', readMin: 'хв читання',
    nlTitle: 'Діабет і перименопауза',
    nlTitleKicker: 'Безкоштовний воркбук, 26 сторінок',
    nlSub: 'Що насправді змінюється в компенсації діабету 1 типу після 40, що допомагає і як домогтися, щоб вас почули лікарі. Надішлю одразу після підтвердження пошти. Плюс час від часу — науково обґрунтовані нотатки. Відписатися можна будь-коли.',
    nlConsent: 'Погоджуюся отримувати листи та приймаю <a href="/ua/privacy/">Політику конфіденційності</a>. Відписатися можна будь-коли.',
    nlEmail: 'Ваш email', nlBtn: 'Надішліть воркбук',
    nlTrap: 'Залиште це поле порожнім',
    nlSent: 'Майже готово — перевірте пошту, щоб підтвердити підписку.',
    nlDupe: 'Ви вже підписані — нічого робити не потрібно.',
    nlErr: 'Щось пішло не так. Спробуйте ще раз або напишіть на lena@lenafilatova.co.uk.',
    nlBusy: 'Підписуємо…',
  },
  // Topic-card tints and their matching accents. The tints used to sit at
  // roughly 1.03:1 against the page background — technically four colours,
  // visually one. These are ~1.15:1, still soft but actually present; body
  // copy on them stays at 6:1 or better. The accent doubles as the numeral
  // fill (white on each of these is 4.9–6.0:1) and, mixed down, the border.
  helpColors: ['#f0d8e4', '#e4def2', '#d5e7db', '#d8e2f1'],
  helpNums: ['#a24b76', '#5a5e9c', '#3f7d54', '#4d61a0'],
  // Single hand-picked recipe featured on the homepage (also one of the
  // hub's hand-picked FEATURED_SLUGS — see RecipeHubBody.astro).
  recipe: {
    cat: { en: 'Main', ua: 'Основне' },
    title: { en: 'Zucchini Spaghetti with Salmon', ua: 'Спагеті з кабачка з лососем' },
    desc: {
      en: 'Ribbons of courgette stand in for pasta, cutting the carbs to almost nothing while keeping the shape and feel of spaghetti. Salmon adds protein and omega-3, for a quick low-GI main.',
      ua: 'Стрічки кабачка замінюють макарони, зводячи вуглеводи майже до нуля, але зберігаючи форму й відчуття спагеті. Лосось додає білок та омега-3 — швидка основна страва з низьким ГІ.',
    },
    gi: 15, carbs: 6, slug: 'zucchini-spaghetti-salmon', img: '/recipes/images/93-zucchini-spaghetti-salmon.jpg',
  },
};

// Person claims that go into the homepage @graph. Every line here is a public
// statement about Lena, so each one is held to what the site itself evidences:
//   - jobTitle mirrors ABOUT.seoTitle ("writer & coach"). It used to read
//     "Women's health & nutrition coach" — dropped, because "nutrition coach"
//     reads as a nutrition qualification and no page claims one. She writes
//     about food; she is not a nutritionist or dietitian.
//   - knowsAbout is subject expertise, not credentials, and every entry has
//     pages behind it: the blog (type 1, perimenopause, insulin resistance),
//     /recipes/ + the carb/GI table (low-GI eating) and the CGM/AID
//     comparisons (glucose monitoring).
// Anything unverifiable — awards, memberships, alumniOf, an Organization node
// for the School of Diabetes while its relaunch is unsettled — stays out.
const PERSON = {
  en: {
    jobTitle: 'Women’s health coach and writer',
    description:
      'Writer and coach on women’s health after 40, living with type 1 diabetes since 2003.',
    knowsAbout: [
      'Type 1 diabetes',
      'Perimenopause',
      'Insulin resistance',
      'Low-glycaemic eating',
      'Continuous glucose monitoring',
      'Women’s health after 40',
    ],
  },
  ua: {
    jobTitle: 'Коуч із жіночого здоров’я та авторка',
    description:
      'Авторка та коуч із жіночого здоров’я після 40, живе з діабетом 1 типу з 2003 року.',
    knowsAbout: [
      'Діабет 1 типу',
      'Перименопауза',
      'Інсулінорезистентність',
      'Харчування з низьким глікемічним індексом',
      'Безперервний моніторинг глюкози',
      'Жіноче здоров’я після 40',
    ],
  },
};

// Homepage structured data — a WebSite + Person @graph. Uses the live absolute
// domain because JSON-LD @ids must be stable canonical URLs, not base-relative.
export function homeJsonLd(lang = 'en') {
  const SITE = 'https://lenafilatova.co.uk';
  const base = lang === 'ua' ? '/ua/' : '/';
  const t = HOME[lang];
  const p = PERSON[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // Language-specific @id: the two homepages are different documents with
        // different urls, so they must not both claim the same node.
        '@type': 'WebSite',
        '@id': `${SITE}${base}#website`,
        url: `${SITE}${base}`,
        name: 'Lena Filatova',
        description: t.seoDesc,
        inLanguage: lang === 'ua' ? 'uk' : 'en',
        publisher: { '@id': `${SITE}/#person` },
        // Declares how to query the site search added in OPS-288. Google
        // retired the sitelinks search box rich result in Nov 2024, so this
        // renders nothing in Google — it is only a machine-readable hint for
        // other engines and AI crawlers. /search/ is noindex, which is fine:
        // this describes how to run a query, not a page to index.
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE}${base}search/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        // One person, one @id across both languages — only the human-readable
        // fields are localised, so the two pages never disagree on a URL.
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: 'Lena Filatova',
        url: `${SITE}/`,
        image: `${SITE}/images/lena-filatova-author.jpg`,
        description: p.description,
        jobTitle: p.jobTitle,
        knowsAbout: p.knowsAbout,
        sameAs: SOCIALS.map((s) => s.href),
      },
    ],
  };
}

// Resources hub. Cards currently link to the live tools (absolute URLs) so every card
// works from the preview; repoint `href`/`hrefUa` to internal paths as each tool migrates.
export const RESOURCES = {
  en: {
    seoTitle: 'Tools & guides — Lena Filatova',
    seoDesc: 'Practical, evidence-based resources to support women’s health after 40 — free to use, no strings.',
    kicker: 'Free resources', h1: 'Tools & guides',
    lead: 'Practical, evidence-based resources to support women’s health after 40 — free to use, no strings.',
    listLabel: 'All tools',
  },
  ua: {
    seoTitle: 'Інструменти та гайди — Lena Filatova',
    seoDesc: 'Практичні, науково обґрунтовані ресурси для жіночого здоров’я після 40 — безкоштовно, без умов.',
    kicker: 'Безкоштовні ресурси', h1: 'Інструменти та гайди',
    lead: 'Практичні, науково обґрунтовані ресурси для жіночого здоров’я після 40 — безкоштовно, без умов.',
    listLabel: 'Усі інструменти',
  },
  cards: [
    {
      band: '#eaf4ec', head: '#37704a',
      href: '/resources/food-calculator/', hrefUa: '/ua/resources/food-calculator/',
      en: { band: 'Food & blood sugar', kicker: 'Interactive tool', title: 'Metabolic food calculator', desc: 'See how any food is likely to affect your blood sugar — glycaemic load, carbs and protein. Built for Type 1, insulin resistance and PMOS (previously PCOS).', cta: 'Open the calculator' },
      ua: { band: 'Їжа та цукор у крові', kicker: 'Інтерактивний інструмент', title: 'Калькулятор впливу їжі на метаболізм', desc: 'Подивіться, як конкретна їжа впливає на рівень цукру — глікемічне навантаження, вуглеводи та білок. Для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ).', cta: 'Відкрити калькулятор' },
    },
    {
      band: '#fbeee1', head: '#96602c',
      href: '/resources/exercise-calculator/', hrefUa: '/ua/resources/exercise-calculator/',
      en: { band: 'Exercise & blood sugar', kicker: 'Interactive tool', title: 'Exercise & blood sugar calculator', desc: 'See how cardio, strength and everyday movement are likely to affect your blood sugar. Built for Type 1, insulin resistance and PMOS (previously PCOS).', cta: 'Open the calculator' },
      ua: { band: 'Активність та цукор у крові', kicker: 'Інтерактивний інструмент', title: 'Калькулятор впливу фізичних навантажень на цукор', desc: 'Подивіться, як кардіо, силові та щоденний рух впливають на рівень цукру. Для діабету 1 типу, інсулінорезистентності та ПМОС (раніше СПКЯ).', cta: 'Відкрити калькулятор' },
    },
    {
      band: '#f0ecf7', head: '#6e5aa6',
      href: '/resources/insulin-pump-doses/', hrefUa: '/ua/resources/insulin-pump-doses/',
      en: { band: 'Insulin pump starting doses', kicker: 'Interactive tool', title: 'Insulin pump starting-dose calculator', desc: 'Estimate starting pump settings — basal, carb ratio and correction factor — when moving from pens or starting out. Adjusts for age and activity level.', cta: 'Open the calculator' },
      ua: { band: 'Стартові дози інсулінової помпи', kicker: 'Інтерактивний інструмент', title: 'Калькулятор стартових доз інсулінової помпи', desc: 'Оцініть стартові налаштування помпи — базал, вуглеводний коефіцієнт і фактор корекції — під час переходу зі шприц-ручок або на початку. Враховує вік та активність.', cta: 'Відкрити калькулятор' },
    },
    {
      band: '#f5eaf1', head: '#a24b76',
      href: '/aid-comparison/', hrefUa: '/aid-comparison-ua/',
      en: { band: 'Pumps & AID systems', kicker: 'Comparison', title: 'AID (Automated Insulin Delivery) system comparison (2026)', desc: 'Every major insulin pump and Automated Insulin Delivery system side by side — available now and in the pipeline. Filter by type, AID and status.', cta: 'Open the comparison' },
      ua: { band: 'Помпи та системи AID', kicker: 'Порівняння', title: 'Порівняння систем AID (автоматична подача інсуліну) (2026)', desc: 'Усі основні інсулінові помпи та системи автоматичної подачі інсуліну поряд — доступні зараз і в розробці. Фільтри за типом, AID і статусом.', cta: 'Відкрити порівняння' },
    },
    {
      band: '#e4f1f0', head: '#337670',
      href: '/cgm-comparison/', hrefUa: '/cgm-comparison-ua/',
      en: { band: 'CGM sensors', kicker: 'Comparison', title: 'CGM sensor comparison (2026)', desc: 'Every major continuous glucose monitor side by side — Abbott, Dexcom, Medtronic and more. Compare wear time, calibration, alerts and AID compatibility.', cta: 'Open the comparison' },
      ua: { band: 'Сенсори CGM', kicker: 'Порівняння', title: 'Порівняння CGM-сенсорів (2026)', desc: 'Усі основні монітори глюкози безперервної дії поряд — Abbott, Dexcom, Medtronic та інші. Порівняйте час носіння, калібрування, сповіщення й сумісність з AID.', cta: 'Відкрити порівняння' },
    },
    {
      band: '#fbf0f4', head: '#af4874',
      href: '/blood-sugar-investigator/', hrefUa: '/blood-sugar-investigator-ua/',
      en: { band: 'Troubleshooter', kicker: 'Interactive', title: 'Blood Sugar Investigator', desc: 'A guided troubleshooter for an unexpected high or low. Answer simple questions and get the most likely cause, what to do, and a summary to share with your diabetes team.', cta: 'Start the investigation' },
      ua: { band: 'Помічник', kicker: 'Інтерактивний', title: 'Дослідник цукру в крові', desc: 'Покроковий помічник для несподіваного підйому чи гіпо. Дайте відповіді на прості запитання й отримайте найімовірнішу причину, що робити, і підсумок для діабетичної команди.', cta: 'Почати дослідження' },
    },
    {
      band: '#eaf0f6', head: '#4d61a0',
      href: '/carb-gi-table/', hrefUa: '/carb-gi-table-ua/',
      en: { band: 'Carbs & GI', kicker: 'Interactive table', title: 'Carbohydrate & glycaemic index table', desc: '200+ foods with carbs per 100g and glycaemic index — Ukrainian and British staples included. Filter, search and sort to see how each food is likely to affect blood sugar.', cta: 'Open the table' },
      ua: { band: 'Вуглеводи та ГІ', kicker: 'Інтерактивна таблиця', title: 'Таблиця вуглеводів і глікемічного індексу', desc: 'Понад 200 продуктів із вуглеводами на 100 г і глікемічним індексом — з українськими та британськими стравами. Фільтруйте, шукайте й сортуйте, щоб побачити ймовірний вплив на цукор.', cta: 'Відкрити таблицю' },
    },
    {
      // OPS-290 filed the trials tracker under tools instead of the Journal —
      // it is a filterable tool, not an article — and pointed this card at the
      // ARTICLE, which keeps its /blog/ address because it is the site's
      // best-ranking EN page (Google page 1, position ~7) and a static host can
      // only meta-refresh. (`filedUnder: 'tools'` in blog.js is what takes it
      // out of the Journal hub, the RSS feed and the homepage's latest slot.)
      //
      // The side effect was that the TRACKER — /t1d-cure-trials/, a 200 URL in
      // the sitemap — ended up with one editorial inbound link on the whole
      // site, the prose mention inside that article, against 6-9 for every
      // other tool, and no link at all from the hub whose job is listing tools.
      // So the card now opens the tracker, and the article hangs off it as the
      // guide. One card, two destinations: the hub still shows this topic once,
      // and the tool it lists is the tool.
      //
      // The secondary link is a SIBLING of the card's <a>, not inside it — a
      // link cannot be nested in a link. See ResourcesBody.astro.
      // Graphite is the one neutral in the set — the seven chromatic tints were
      // all spoken for, and it clears 4.5:1 on the paper at 7.8:1.
      band: '#e9eaee', head: '#3f4a63',
      href: '/t1d-cure-trials/', hrefUa: '/t1d-cure-trials-ua/',
      guideHref: '/blog/type-1-diabetes-cure-trials/', guideHrefUa: '/ua/blog/type-1-diabetes-cure-trials/',
      en: { band: 'Type 1 cure research', kicker: 'Tracker & guide', title: 'Type 1 diabetes cure trials tracker', desc: '20 cure and disease-modifying trials side by side — filter by country, phase, approach, and whether each is recruiting or free to join. With an honest guide to what is actually working.', cta: 'Open the tracker', guide: 'Read the guide: what is actually working in 2026' },
      ua: { band: 'Дослідження лікування діабету 1 типу', kicker: 'Трекер і гайд', title: 'Трекер досліджень щодо лікування діабету 1 типу', desc: '20 досліджень щодо лікування та модифікації перебігу поряд — фільтри за країною, фазою, підходом і тим, чи триває набір та чи безкоштовна участь. Плюс чесний путівник тим, що справді працює.', cta: 'Відкрити трекер', guide: 'Читати гайд: що справді працює у 2026 році' },
    },
  ],
};

export const CONTACT = {
  en: {
    seoTitle: 'Work with me — Lena Filatova',
    seoDesc: 'Tell me where you are and what you’d like to change. I’ll reply with how I can help and the best next step for you.',
    kicker: 'Coaching & contact',
    h1: 'Work with me',
    lead: 'Tell me where you are and what you’d like to change. I’ll reply with how I can help and the best next step for you.',
    disclaimer: 'Coaching is a wellness and educational service — not a medical service, diagnosis or treatment. Please consult your healthcare provider for medical advice.',
    stepsTitle: 'How coaching works',
    steps: [
      { h: 'Apply', p: 'Send a short message about your goals and where you’re starting.' },
      { h: 'Intro call', p: 'We map your situation, routine and what’s realistic for you.' },
      { h: 'Your plan', p: 'A personalised menu and movement routine built around your week.' },
      { h: 'Check-ins', p: 'Weekly support and adjustments so the plan keeps working.' },
    ],
    instagram: 'Or reach me on Instagram',
    emailLabel: 'Email:',
    tabCall: 'Book a free call',
    tabMsg: 'Send a message',
    callHeading: 'Free 20-minute intro call',
    fName: 'Name', fEmail: 'Email', fMsg: 'What would you like help with?', fSubmit: 'Send message',
    fSent: 'Thanks — your message has been sent. I’ll reply to you soon.',
    fTrap: 'Leave this field empty',
    fNoScript: 'This form needs JavaScript. You can email me directly at',
  },
  ua: {
    seoTitle: 'Працюймо разом — Lena Filatova',
    seoDesc: 'Розкажіть, де ви зараз і що хочете змінити. Я відповім, чим можу допомогти та який найкращий наступний крок для вас.',
    kicker: 'Коучинг і контакти',
    h1: 'Працюймо разом',
    lead: 'Розкажіть, де ви зараз і що хочете змінити. Я відповім, чим можу допомогти та який найкращий наступний крок для вас.',
    disclaimer: 'Коучинг — це велнес- та освітня послуга, а не медична послуга, діагностика чи лікування. З питань здоров’я, будь ласка, звертайтеся до свого лікаря.',
    stepsTitle: 'Як працює коучинг',
    steps: [
      { h: 'Заявка', p: 'Надішліть коротке повідомлення про ваші цілі та відправну точку.' },
      { h: 'Вступний дзвінок', p: 'Разом визначаємо ситуацію, режим і що реально для вас.' },
      { h: 'Ваш план', p: 'Персональне меню та режим руху навколо вашого тижня.' },
      { h: 'Зустрічі', p: 'Щотижнева підтримка та коригування, щоб план працював.' },
    ],
    instagram: 'Або напишіть мені в Instagram',
    emailLabel: 'Email:',
    tabCall: 'Записатися на дзвінок',
    tabMsg: 'Написати',
    callHeading: 'Безкоштовний вступний дзвінок, 20 хв',
    fName: 'Ім’я', fEmail: 'Email', fMsg: 'З чим вам допомогти?', fSubmit: 'Надіслати повідомлення',
    fSent: 'Дякую — ваше повідомлення надіслано. Я скоро відповім.',
    fTrap: 'Залиште це поле порожнім',
    fNoScript: 'Ця форма потребує JavaScript. Ви можете написати мені напряму:',
  },
};

// ── Legal pages ──────────────────────────────────────────────
// Five documents (Privacy, Cookies, Terms, Refund, Accessibility),
// EN + UA. Each doc: { seoTitle, seoDesc, h1, updated, intro, sections }.
// A section's `body` is an array of blocks: a string = <p> (inline HTML
// allowed), an { ul: [...] } = bullet list. LegalBody renders it and
// base-prefixes any href="/…". Slugs are shared across languages.
export const LEGAL_SLUGS = {
  privacy: 'privacy',
  cookies: 'cookies',
  terms: 'terms',
  refunds: 'refunds',
  accessibility: 'accessibility',
};

const COMPANY_LINE = 'Selfound Ltd, registered in England and Wales, Company No. 16450921';
const COMPANY_LINE_UA = 'Selfound Ltd, зареєстрована в Англії та Уельсі, реєстраційний номер 16450921';

export const LEGAL = {
  privacy: {
    en: {
      seoTitle: 'Privacy Policy — Lena Filatova',
      seoDesc: 'How Selfound Ltd collects, uses and protects your personal data on lenafilatova.co.uk, under UK GDPR and the Data Protection Act 2018.',
      kicker: 'Legal',
      h1: 'Privacy Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy explains how <strong>Selfound Ltd</strong> (“we”, “us”, “our”) collects and uses your personal data when you visit <strong>lenafilatova.co.uk</strong>, subscribe to our newsletter, or get in touch. We are the data controller under the UK GDPR and the Data Protection Act 2018.',
      sections: [
        { h: 'Who we are', body: [
          `${COMPANY_LINE}. You can reach us about anything in this policy at <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'What data we collect', body: [
          'We only collect what we need:',
          { ul: [
            '<strong>Newsletter details</strong> — your name (if given) and email address when you subscribe.',
            '<strong>Messages</strong> — your name, email and the content of any message you send us through the contact form or by email.',
            '<strong>Booking details</strong> — your name, email and anything you choose to share when you book an introductory or coaching call.',
            '<strong>Usage data</strong> — if (and only if) you accept analytics cookies: approximate location, device and browser type, and the pages you view. See our <a href="/cookies/">Cookie Policy</a>.',
          ]},
        ]},
        { h: 'How and why we use it', body: [
          'We rely on these legal bases:',
          { ul: [
            '<strong>Consent</strong> — to send you the newsletter and to run website analytics. You can withdraw consent at any time.',
            '<strong>Legitimate interests</strong> — to respond to your enquiries and keep the site secure and working.',
            '<strong>Performance of a contract</strong> — to deliver any paid coaching or digital products you purchase.',
            '<strong>Legal obligation</strong> — to keep records we are required by law to keep.',
          ]},
        ]},
        { h: 'Who we share it with', body: [
          'We never sell your data. We use a small number of trusted providers who process it on our behalf:',
          { ul: [
            '<strong>Mailchimp</strong> (Intuit Inc., USA) — to manage the newsletter.',
            '<strong>Google</strong> (Google Ireland Ltd / Google LLC) — for our email, contact-form handling (Google Apps Script), call bookings (Google Calendar) and website analytics (Google Analytics).',
            '<strong>GitHub</strong> (GitHub, Inc., a Microsoft company) — to host the website.',
          ]},
          'We may also disclose data if required to do so by law.',
        ]},
        { h: 'International transfers', body: [
          'Some of these providers are based outside the UK (for example, in the USA). Where your data is transferred internationally, we rely on appropriate safeguards — such as UK adequacy regulations or the International Data Transfer Agreement / Standard Contractual Clauses — to keep it protected.',
        ]},
        { h: 'How long we keep it', body: [
          { ul: [
            'Newsletter data — until you unsubscribe.',
            'Enquiry emails — for a reasonable period after we have dealt with your query.',
            'Customer and booking records — for as long as needed to provide the service and to meet legal and accounting obligations (usually up to 6 years).',
          ]},
        ]},
        { h: 'Your rights', body: [
          'Under UK data protection law you have the right to:',
          { ul: [
            'access the personal data we hold about you;',
            'have inaccurate data corrected;',
            'have your data erased;',
            'restrict or object to how we use it;',
            'receive your data in a portable format;',
            'withdraw consent at any time.',
          ]},
          'To exercise any of these, email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. If you are unhappy with how we handle your data, you can complain to the Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.',
        ]},
        { h: 'Children', body: [
          'This website is not directed at children under 16, and we do not knowingly collect their personal data.',
        ]},
        { h: 'Changes to this policy', body: [
          'We may update this policy from time to time. The date at the top shows when it was last revised.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика конфіденційності — Лена Філатова',
      seoDesc: 'Як Selfound Ltd збирає, використовує та захищає ваші персональні дані на lenafilatova.co.uk згідно з UK GDPR та Data Protection Act 2018.',
      kicker: 'Правова інформація',
      h1: 'Політика конфіденційності',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика пояснює, як <strong>Selfound Ltd</strong> («ми», «нас», «наш») збирає та використовує ваші персональні дані, коли ви відвідуєте <strong>lenafilatova.co.uk</strong>, підписуєтесь на розсилку або звертаєтесь до нас. Ми є контролером даних згідно з UK GDPR та Data Protection Act 2018.',
      sections: [
        { h: 'Хто ми', body: [
          `${COMPANY_LINE_UA}. З будь-яких питань щодо цієї політики пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Які дані ми збираємо', body: [
          'Ми збираємо лише те, що потрібно:',
          { ul: [
            '<strong>Дані для розсилки</strong> — ваше ім’я (якщо вказано) та email, коли ви підписуєтесь.',
            '<strong>Повідомлення</strong> — ваше ім’я, email і зміст будь-якого повідомлення через форму контакту або електронною поштою.',
            '<strong>Дані бронювання</strong> — ваше ім’я, email і те, чим ви вирішите поділитися, коли записуєтесь на вступний чи коучинговий дзвінок.',
            '<strong>Дані про використання</strong> — якщо (і тільки якщо) ви приймаєте аналітичні файли cookie: приблизне місцезнаходження, тип пристрою й браузера та переглянуті сторінки. Див. нашу <a href="/ua/cookies/">Політику cookie</a>.',
          ]},
        ]},
        { h: 'Як і навіщо ми їх використовуємо', body: [
          'Ми спираємось на такі правові підстави:',
          { ul: [
            '<strong>Згода</strong> — щоб надсилати розсилку та вести аналітику сайту. Ви можете відкликати згоду будь-коли.',
            '<strong>Законні інтереси</strong> — щоб відповідати на ваші запити й підтримувати роботу та безпеку сайту.',
            '<strong>Виконання договору</strong> — щоб надати придбаний вами коучинг або цифрові продукти.',
            '<strong>Юридичний обов’язок</strong> — щоб зберігати записи, яких вимагає закон.',
          ]},
        ]},
        { h: 'З ким ми ділимося', body: [
          'Ми ніколи не продаємо ваші дані. Ми користуємось кількома надійними постачальниками, які обробляють дані від нашого імені:',
          { ul: [
            '<strong>Mailchimp</strong> (Intuit Inc., США) — для керування розсилкою.',
            '<strong>Google</strong> (Google Ireland Ltd / Google LLC) — для нашої пошти, обробки форми контакту (Google Apps Script), бронювання дзвінків (Google Calendar) та аналітики сайту (Google Analytics).',
            '<strong>GitHub</strong> (GitHub, Inc., компанія Microsoft) — для хостингу сайту.',
          ]},
          'Ми також можемо розкрити дані, якщо цього вимагає закон.',
        ]},
        { h: 'Міжнародна передача даних', body: [
          'Деякі з цих постачальників розташовані за межами Великої Британії (наприклад, у США). Коли ваші дані передаються за кордон, ми застосовуємо належні гарантії — такі як рішення про адекватність або International Data Transfer Agreement / Standard Contractual Clauses — щоб зберегти їх захищеними.',
        ]},
        { h: 'Скільки ми зберігаємо дані', body: [
          { ul: [
            'Дані розсилки — доки ви не відпишетесь.',
            'Листи-запити — розумний період після того, як ми опрацювали ваше звернення.',
            'Записи клієнтів і бронювань — стільки, скільки потрібно для надання послуги та виконання юридичних і бухгалтерських зобов’язань (зазвичай до 6 років).',
          ]},
        ]},
        { h: 'Ваші права', body: [
          'Згідно із законодавством Великої Британії про захист даних ви маєте право:',
          { ul: [
            'отримати доступ до персональних даних, які ми зберігаємо;',
            'виправити неточні дані;',
            'видалити ваші дані;',
            'обмежити використання або заперечити проти нього;',
            'отримати дані у придатному для перенесення форматі;',
            'відкликати згоду будь-коли.',
          ]},
          'Щоб скористатися будь-яким із цих прав, напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. Якщо вас не влаштовує, як ми поводимося з вашими даними, ви можете подати скаргу до Information Commissioner’s Office (ICO) на <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.',
        ]},
        { h: 'Діти', body: [
          'Цей сайт не призначений для дітей віком до 16 років, і ми свідомо не збираємо їхні персональні дані.',
        ]},
        { h: 'Зміни до цієї політики', body: [
          'Ми можемо час від часу оновлювати цю політику. Дата вгорі показує, коли її востаннє переглядали.',
        ]},
      ],
    },
  },

  cookies: {
    en: {
      seoTitle: 'Cookie Policy — Lena Filatova',
      seoDesc: 'How lenafilatova.co.uk uses cookies. We keep it minimal: an essential consent cookie and optional analytics only after you agree.',
      kicker: 'Legal',
      h1: 'Cookie Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy explains how <strong>lenafilatova.co.uk</strong> uses cookies and similar technologies. It should be read alongside our <a href="/privacy/">Privacy Policy</a>.',
      sections: [
        { h: 'What cookies are', body: [
          'Cookies are small text files placed on your device when you visit a website. They let a site remember your actions and preferences, and help owners understand how their site is used.',
        ]},
        { h: 'How we use cookies', body: [
          'We deliberately keep this to a minimum:',
          { ul: [
            '<strong>Essential</strong> — one cookie that remembers your cookie-consent choice, so we don’t ask on every page.',
            '<strong>Analytics (optional)</strong> — Google Analytics (GA4) helps us understand how the site is used. These are set <em>only</em> after you accept them.',
          ]},
          'We do <strong>not</strong> use advertising or cross-site tracking cookies.',
        ]},
        { h: 'Managing your consent', body: [
          'When you first visit, a banner lets you accept or decline analytics cookies. You can change your mind at any time by clearing cookies for this site in your browser, which will bring the banner back. Declining analytics does not affect your use of the site.',
        ]},
        { h: 'Third-party cookies', body: [
          'Our contact page includes a Google Calendar booking widget. If you interact with it to book a call, Google may set its own cookies. These are governed by Google’s own privacy and cookie policies.',
        ]},
        { h: 'Controlling cookies in your browser', body: [
          'All major browsers let you block or delete cookies through their settings. Doing so may affect how some websites work. Guidance for each browser is available on its help pages.',
        ]},
        { h: 'Changes and contact', body: [
          `We may update this policy from time to time. Questions? Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. ${COMPANY_LINE}.`,
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика cookie — Лена Філатова',
      seoDesc: 'Як lenafilatova.co.uk використовує файли cookie. Мінімум: необхідний cookie згоди та опційна аналітика лише після вашої згоди.',
      kicker: 'Правова інформація',
      h1: 'Політика cookie',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика пояснює, як <strong>lenafilatova.co.uk</strong> використовує файли cookie та подібні технології. Її слід читати разом із нашою <a href="/ua/privacy/">Політикою конфіденційності</a>.',
      sections: [
        { h: 'Що таке cookie', body: [
          'Cookie — це невеликі текстові файли, які зберігаються на вашому пристрої під час відвідування сайту. Вони дозволяють сайту запам’ятовувати ваші дії та налаштування й допомагають власникам розуміти, як використовується сайт.',
        ]},
        { h: 'Як ми використовуємо cookie', body: [
          'Ми свідомо зводимо це до мінімуму:',
          { ul: [
            '<strong>Необхідні</strong> — один cookie, який запам’ятовує ваш вибір щодо згоди, щоб ми не запитували на кожній сторінці.',
            '<strong>Аналітичні (опційні)</strong> — Google Analytics (GA4) допомагає зрозуміти, як використовується сайт. Вони встановлюються <em>лише</em> після вашої згоди.',
          ]},
          'Ми <strong>не</strong> використовуємо рекламні файли cookie чи міжсайтове відстеження.',
        ]},
        { h: 'Керування згодою', body: [
          'Під час першого візиту банер дозволяє прийняти або відхилити аналітичні cookie. Ви можете змінити рішення будь-коли, очистивши cookie цього сайту у своєму браузері — тоді банер з’явиться знову. Відмова від аналітики не впливає на користування сайтом.',
        ]},
        { h: 'Сторонні cookie', body: [
          'Сторінка контактів містить віджет бронювання Google Calendar. Якщо ви взаємодієте з ним, щоб записатися на дзвінок, Google може встановити власні cookie. Вони регулюються власними політиками Google щодо конфіденційності та cookie.',
        ]},
        { h: 'Керування cookie в браузері', body: [
          'Усі основні браузери дозволяють блокувати або видаляти cookie через налаштування. Це може вплинути на роботу деяких сайтів. Інструкції для кожного браузера доступні на його сторінках довідки.',
        ]},
        { h: 'Зміни та контакти', body: [
          `Ми можемо час від часу оновлювати цю політику. Питання? Пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>. ${COMPANY_LINE_UA}.`,
        ]},
      ],
    },
  },

  terms: {
    en: {
      seoTitle: 'Terms & Conditions — Lena Filatova',
      seoDesc: 'The terms governing your use of lenafilatova.co.uk, including an important health and medical disclaimer.',
      kicker: 'Legal',
      h1: 'Terms & Conditions',
      updated: 'Last updated 10 July 2026',
      intro: 'These terms govern your use of <strong>lenafilatova.co.uk</strong>. By using the site you agree to them. Please read the health disclaimer below carefully.',
      sections: [
        { h: 'About us', body: [
          `The site is operated by ${COMPANY_LINE}. Contact: <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Using the website', body: [
          'You may use this site for your own personal, non-commercial use. Please don’t misuse it, attempt to disrupt it, or use it in any unlawful way.',
        ]},
        { h: 'Health disclaimer — please read', body: [
          'The content on this site — including articles, recipes, nutrition information and tools — is provided for <strong>general education and information only. It is not medical advice</strong> and is not a substitute for professional care.',
          'Using this site does not create a doctor–patient or clinician relationship. Always seek the advice of your GP or a qualified healthcare professional before making changes to your diet, exercise, medication or insulin, or if you have any concerns about a medical condition — this is especially important if you live with diabetes.',
          'Never disregard professional medical advice or delay seeking it because of something you have read here. <strong>In a medical emergency call 999</strong> (or your local emergency number); for urgent non-emergency advice in the UK call 111.',
        ]},
        { h: 'Recipes and nutrition information', body: [
          'Glycaemic index, carbohydrate and other nutritional figures are estimates and can vary with ingredients, brands and preparation. Individual responses differ. Please check ingredient labels for allergens and suitability for your own needs.',
        ]},
        { h: 'Intellectual property', body: [
          'All content on this site is owned by us or our licensors and is protected by copyright. You may view and download it for your own personal use, but you may not reproduce, republish or distribute it without our permission.',
        ]},
        { h: 'Paid services and products', body: [
          'Where we offer paid coaching or digital products, additional terms and our <a href="/refunds/">Refund & Cancellation Policy</a> apply. Full details are given at the point of purchase.',
        ]},
        { h: 'Links to other sites', body: [
          'This site may link to third-party websites. We provide those links for convenience and are not responsible for their content or practices.',
        ]},
        { h: 'Availability and changes', body: [
          'The site is provided on an “as is” basis. We may change, suspend or withdraw all or part of it at any time without notice.',
        ]},
        { h: 'Our liability', body: [
          'To the fullest extent permitted by law, we are not liable for any loss arising from your reliance on the educational content of this site. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.',
        ]},
        { h: 'Governing law', body: [
          'These terms are governed by the laws of England and Wales, and any disputes are subject to the courts of England and Wales.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Умови використання — Лена Філатова',
      seoDesc: 'Умови користування сайтом lenafilatova.co.uk, включно з важливою заявою про здоров’я та медичну інформацію.',
      kicker: 'Правова інформація',
      h1: 'Умови використання',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ці умови регулюють користування сайтом <strong>lenafilatova.co.uk</strong>. Користуючись сайтом, ви погоджуєтесь із ними. Будь ласка, уважно прочитайте заяву про здоров’я нижче.',
      sections: [
        { h: 'Про нас', body: [
          `Сайтом керує ${COMPANY_LINE_UA}. Контакт: <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
        { h: 'Користування сайтом', body: [
          'Ви можете користуватися цим сайтом для власних особистих, некомерційних цілей. Будь ласка, не зловживайте ним, не намагайтеся порушити його роботу та не використовуйте незаконним чином.',
        ]},
        { h: 'Заява про здоров’я — прочитайте', body: [
          'Контент на цьому сайті — зокрема статті, рецепти, інформація про харчування та інструменти — надається <strong>лише для загальної освіти та інформації. Це не медична порада</strong> і не замінює професійну допомогу.',
          'Користування сайтом не створює відносин «лікар–пацієнт». Завжди звертайтеся до свого сімейного лікаря або кваліфікованого медичного фахівця, перш ніж змінювати харчування, фізичну активність, ліки чи інсулін, або якщо у вас є будь-які занепокоєння щодо стану здоров’я — це особливо важливо, якщо ви живете з діабетом.',
          'Ніколи не нехтуйте професійною медичною порадою та не відкладайте звернення по неї через щось прочитане тут. <strong>У разі невідкладного стану телефонуйте 999</strong> (або місцевий номер екстреної допомоги); для термінових неекстрених порад у Великій Британії телефонуйте 111.',
        ]},
        { h: 'Рецепти та інформація про харчування', body: [
          'Глікемічний індекс, вміст вуглеводів та інші показники харчування є приблизними й можуть змінюватися залежно від інгредієнтів, брендів і способу приготування. Індивідуальні реакції відрізняються. Будь ласка, перевіряйте етикетки на наявність алергенів і придатність для ваших потреб.',
        ]},
        { h: 'Інтелектуальна власність', body: [
          'Весь контент на цьому сайті належить нам або нашим ліцензіарам і захищений авторським правом. Ви можете переглядати й завантажувати його для власного особистого використання, але не можете відтворювати, повторно публікувати чи поширювати без нашого дозволу.',
        ]},
        { h: 'Платні послуги та продукти', body: [
          'Коли ми пропонуємо платний коучинг або цифрові продукти, застосовуються додаткові умови та наша <a href="/ua/refunds/">Політика повернення та скасування</a>. Повні деталі надаються на етапі покупки.',
        ]},
        { h: 'Посилання на інші сайти', body: [
          'Цей сайт може містити посилання на сторонні вебсайти. Ми надаємо їх для зручності й не відповідаємо за їхній вміст чи практики.',
        ]},
        { h: 'Доступність і зміни', body: [
          'Сайт надається на умовах «як є». Ми можемо змінювати, призупиняти або припиняти роботу всього сайту чи його частини будь-коли без попередження.',
        ]},
        { h: 'Наша відповідальність', body: [
          'У межах, дозволених законом, ми не несемо відповідальності за будь-які збитки, що виникли внаслідок вашої опори на освітній контент цього сайту. Ніщо в цих умовах не виключає й не обмежує нашу відповідальність за смерть чи травми, спричинені недбалістю, за шахрайство або за будь-що інше, що не може бути законно виключене.',
        ]},
        { h: 'Застосовне право', body: [
          'Ці умови регулюються законодавством Англії та Уельсу, а будь-які спори підлягають розгляду в судах Англії та Уельсу.',
        ]},
      ],
    },
  },

  refunds: {
    en: {
      seoTitle: 'Refund & Cancellation Policy — Lena Filatova',
      seoDesc: 'Our refund and cancellation terms for coaching sessions and digital products, in line with UK consumer law.',
      kicker: 'Legal',
      h1: 'Refund & Cancellation Policy',
      updated: 'Last updated 10 July 2026',
      intro: 'This policy applies to paid coaching sessions and digital products purchased from Selfound Ltd. <em>These offerings are in preparation; this policy will apply once they are available.</em> It sits alongside your rights under UK consumer law.',
      sections: [
        { h: 'Your statutory rights', body: [
          'Nothing in this policy affects your legal rights under the Consumer Contracts Regulations 2013 and the Consumer Rights Act 2015. For most purchases you have a 14-day cooling-off period, subject to the exceptions for digital content below.',
        ]},
        { h: 'Digital products and downloads', body: [
          'You have 14 days to cancel a digital product for a full refund — <strong>unless</strong> you have asked for immediate access and acknowledged that you lose this right once the download or streaming begins. We request that consent at checkout. If a product is faulty or not as described, you are entitled to a refund or replacement.',
        ]},
        { h: 'Coaching sessions', body: [
          { ul: [
            'Cancel or reschedule at least <strong>48 hours</strong> before your session for a full refund or a free reschedule.',
            'Within 48 hours, sessions are non-refundable, but we will try to offer one reschedule at our discretion.',
            'Missed sessions (no-shows) are non-refundable.',
          ]},
        ]},
        { h: 'Programmes and multi-session packages', body: [
          'For multi-session packages, the specific cancellation terms are set out at the point of purchase. Where a refund applies after a programme has started, it is normally calculated pro-rata for sessions not yet taken.',
        ]},
        { h: 'How to request a refund', body: [
          'Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a> with your order details within the relevant period. We aim to respond within 5 business days, and approved refunds are made to your original payment method within 14 days.',
        ]},
        { h: 'Exceptions', body: [
          'Digital content that you have already accessed or downloaded after waiving your cancellation right is non-refundable, except where it is faulty or not as described.',
        ]},
        { h: 'Contact', body: [
          `${COMPANY_LINE}. Questions about this policy? Email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
      ],
    },
    ua: {
      seoTitle: 'Політика повернення та скасування — Лена Філатова',
      seoDesc: 'Умови повернення коштів і скасування для коучингових сесій та цифрових продуктів відповідно до споживчого законодавства Великої Британії.',
      kicker: 'Правова інформація',
      h1: 'Повернення та скасування',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ця політика застосовується до платних коучингових сесій і цифрових продуктів, придбаних у Selfound Ltd. <em>Ці пропозиції готуються; політика набуде чинності, щойно вони стануть доступними.</em> Вона доповнює ваші права за споживчим законодавством Великої Британії.',
      sections: [
        { h: 'Ваші законні права', body: [
          'Ніщо в цій політиці не впливає на ваші законні права згідно з Consumer Contracts Regulations 2013 та Consumer Rights Act 2015. Для більшості покупок ви маєте 14-денний період на роздуми з урахуванням винятків для цифрового контенту нижче.',
        ]},
        { h: 'Цифрові продукти та завантаження', body: [
          'Ви маєте 14 днів, щоб скасувати цифровий продукт і отримати повне повернення — <strong>крім випадків</strong>, коли ви попросили негайний доступ і підтвердили, що втрачаєте це право, щойно почнеться завантаження або відтворення. Ми запитуємо цю згоду під час оформлення. Якщо продукт має дефект або не відповідає опису, ви маєте право на повернення коштів чи заміну.',
        ]},
        { h: 'Коучингові сесії', body: [
          { ul: [
            'Скасуйте або перенесіть сесію щонайменше за <strong>48 годин</strong> — і отримаєте повне повернення або безкоштовне перенесення.',
            'Протягом 48 годин до сесії кошти не повертаються, але ми намагатимемось запропонувати одне перенесення на власний розсуд.',
            'Пропущені сесії (неявка) не підлягають поверненню.',
          ]},
        ]},
        { h: 'Програми та пакети з кількох сесій', body: [
          'Для пакетів із кількох сесій конкретні умови скасування визначаються на етапі покупки. Якщо повернення застосовується після початку програми, воно зазвичай розраховується пропорційно до ще не проведених сесій.',
        ]},
        { h: 'Як подати запит на повернення', body: [
          'Напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>, вказавши деталі замовлення, у відповідний період. Ми прагнемо відповісти протягом 5 робочих днів, а схвалені повернення здійснюються на ваш початковий спосіб оплати протягом 14 днів.',
        ]},
        { h: 'Винятки', body: [
          'Цифровий контент, до якого ви вже отримали доступ або який завантажили після відмови від права на скасування, не підлягає поверненню, окрім випадків дефекту чи невідповідності опису.',
        ]},
        { h: 'Контакти', body: [
          `${COMPANY_LINE_UA}. Питання щодо цієї політики? Пишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>.`,
        ]},
      ],
    },
  },

  accessibility: {
    en: {
      seoTitle: 'Accessibility Statement — Lena Filatova',
      seoDesc: 'Our commitment to making lenafilatova.co.uk usable for as many people as possible, aiming for WCAG 2.1 AA.',
      kicker: 'Legal',
      h1: 'Accessibility Statement',
      updated: 'Last updated 10 July 2026',
      intro: 'We want <strong>lenafilatova.co.uk</strong> to be usable and welcoming for as many people as possible, whatever their abilities or technology.',
      sections: [
        { h: 'Our commitment', body: [
          'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA, and we treat accessibility as an ongoing part of how we build the site.',
        ]},
        { h: 'What we do', body: [
          { ul: [
            'Use clear, semantic HTML with a logical heading structure.',
            'Aim for sufficient colour contrast and readable font sizes.',
            'Keep the site navigable by keyboard.',
            'Make the layout responsive so it works on phones, tablets and desktops.',
            'Provide descriptive alternative text for meaningful images.',
          ]},
        ]},
        { h: 'Known limitations', body: [
          'Some third-party embeds — such as the Google Calendar booking widget — and some older content may not fully meet our standards. We are working to improve these over time.',
        ]},
        { h: 'Feedback and help', body: [
          'If you have trouble accessing any part of this site, or need information in a different format, email <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a> and we will help. We aim to respond within 5 business days.',
        ]},
        { h: 'Alternative formats', body: [
          'We are happy to provide the content of this site in another format on request wherever we reasonably can.',
        ]},
      ],
    },
    ua: {
      seoTitle: 'Заява про доступність — Лена Філатова',
      seoDesc: 'Наше прагнення зробити lenafilatova.co.uk зручним для якомога більшої кількості людей із орієнтиром на WCAG 2.1 AA.',
      kicker: 'Правова інформація',
      h1: 'Заява про доступність',
      updated: 'Оновлено 10 липня 2026',
      intro: 'Ми хочемо, щоб <strong>lenafilatova.co.uk</strong> був зручним і привітним для якомога більшої кількості людей, незалежно від їхніх можливостей чи технологій.',
      sections: [
        { h: 'Наше зобов’язання', body: [
          'Ми прагнемо відповідати Web Content Accessibility Guidelines (WCAG) 2.1 рівня AA і вважаємо доступність постійною частиною того, як створюємо сайт.',
        ]},
        { h: 'Що ми робимо', body: [
          { ul: [
            'Використовуємо зрозумілий, семантичний HTML із логічною структурою заголовків.',
            'Прагнемо достатнього контрасту кольорів і читабельного розміру шрифтів.',
            'Забезпечуємо навігацію сайтом за допомогою клавіатури.',
            'Робимо макет адаптивним, щоб він працював на телефонах, планшетах і комп’ютерах.',
            'Надаємо описовий альтернативний текст для змістовних зображень.',
          ]},
        ]},
        { h: 'Відомі обмеження', body: [
          'Деякі сторонні вставки — наприклад, віджет бронювання Google Calendar — і частина старішого контенту можуть не повністю відповідати нашим стандартам. Ми працюємо над їх покращенням.',
        ]},
        { h: 'Відгуки та допомога', body: [
          'Якщо у вас виникають труднощі з доступом до будь-якої частини сайту або потрібна інформація в іншому форматі, напишіть на <a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a>, і ми допоможемо. Ми прагнемо відповісти протягом 5 робочих днів.',
        ]},
        { h: 'Альтернативні формати', body: [
          'Ми з радістю надамо контент цього сайту в іншому форматі на запит, коли це можливо.',
        ]},
      ],
    },
  },
};

// Dia.School (OPS-264). The programme is paused and being rebuilt, but people
// still search for it by name — /dia-school/ on the old .com site is that site's
// second most-visited page, and until now those visitors were captured nowhere.
//
// UA is the real page: one sentence, one email field, nothing else. Deliberately
// NOT a sales page — no prices, no dates, no outcome claims. The 2026-08-05
// mockup (docs/dia-school-landing-mockup-2026-08-05.html) has tiers, a syllabus
// and a "next поток" date; none of it can be published until Lena has decided
// the price, the start date and the format, so only its opening moves is used
// here. The old site's "80%+ досягли відмінних результатів" claim and the
// before/after glucose photos must never come back: they belong to the
// doctor-supported version of the programme, and co.uk is UK-based, where health
// outcome claims are held to a stricter standard.
//
// EN is not a translation. The programme is taught in Ukrainian, so the English
// page says exactly that and points at the UA page — promising an English intake
// that does not exist would be the one thing worse than no page at all.
export const DIA_SCHOOL = {
  en: {
    seoTitle: 'Dia.School — type 1 diabetes programme',
    seoDesc: 'Dia.School is a type 1 diabetes education programme taught in Ukrainian. It is being rebuilt — join the waitlist on the Ukrainian page.',
    kicker: 'Dia.School',
    h1: 'Dia.School is taught in Ukrainian',
    lead: 'Dia.School is my type 1 diabetes education programme. It runs in Ukrainian, and it is currently being rebuilt — there is no English intake planned.',
    ctaLead: 'If you read Ukrainian, you can join the waitlist and you’ll hear first when the new intake opens.',
    cta: 'Go to the Ukrainian page',
    toolsTitle: 'In English, right now',
    toolsLead: 'Everything else here is in English and free — no sign-up, no paywall.',
    tools: [
      { href: '/carb-gi-table/', label: 'Carb & GI table' },
      { href: '/resources/food-calculator/', label: 'Metabolic food calculator' },
      { href: '/cgm-comparison/', label: 'CGM comparison' },
      { href: '/aid-comparison/', label: 'Insulin pump & AID comparison' },
    ],
    note: 'Dia.School is an education project. Nothing here is medical advice and none of it replaces care from your own clinical team.',
  },
  ua: {
    seoTitle: 'Dia.School — школа діабету 1 типу',
    seoDesc: 'Школу діабету 1 типу Dia.School зараз перебудовуємо. Залиште пошту — напишемо першим, щойно відкриємо новий набір.',
    kicker: 'Dia.School',
    h1: 'Школу діабету 1 типу перебудовуємо',
    lead: 'Dia.School зараз не набирає групу: ми переробляємо програму. Залиште пошту — напишемо вам першим, щойно відкриємо новий набір.',
    // Waitlist form copy — overrides the workbook wording the shared newsletter
    // band uses everywhere else. Everything the visitor is promised here is
    // something we can actually keep: one letter, when there is news.
    nlTitle: 'Список очікування',
    nlTitleKicker: 'Новий набір',
    nlSub: 'Один лист — коли відкриємо набір. Без спаму, відписатися можна будь-коли.',
    nlBtn: 'Записатися',
    nlSent: 'Майже готово — перевірте пошту та підтвердьте підписку.',
    nlDupe: 'Ви вже в списку — більше нічого робити не потрібно.',
    toolsTitle: 'Поки що — безкоштовні інструменти',
    toolsLead: 'Ними можна користуватися вже зараз: без реєстрації та оплати.',
    tools: [
      { href: '/carb-gi-table-ua/', label: 'Таблиця вуглеводів і ГІ' },
      { href: '/ua/resources/food-calculator/', label: 'Метаболічний калькулятор їжі' },
      { href: '/cgm-comparison-ua/', label: 'Порівняння сенсорів (CGM)' },
      { href: '/aid-comparison-ua/', label: 'Порівняння помп і систем АПІ' },
    ],
    note: 'Dia.School — освітній проєкт. Матеріали не є медичною консультацією і не замінюють спостереження у вашого лікаря.',
  },
};
