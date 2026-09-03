// OPS-304 — generate the 1200x630 share cards for the ten standalone tool pages.
//
// The tool pages sit in public/ outside the Astro bundle, so they cannot import
// anything; their <head> is hand-maintained HTML. Until now all ten pointed
// og:image at lena-filatova-womens-health-coach-over-40.jpg, a 675x1200
// portrait. A 9:16 image correctly forces twitter:card=summary, so a filterable
// 22-sensor table shared as a small square headshot.
//
// These cards are generated rather than drawn so the numbers on them cannot go
// stale: the counts are read out of each page's own data array at build time by
// tool-page-schema.mjs, which writes counts.json, and this script renders from
// that. Re-run both after adding a sensor, a pump or a trial.
//
//   node scripts/tool-page-schema.mjs      # counts + JSON-LD + meta tags
//   node scripts/tool-social-cards.mjs     # the card images
//
// Rendering uses headless Chrome (no extra dependency — the fonts are the
// site's own woff2 files, embedded as data URIs so the render never depends on
// a network fetch), then ffmpeg to convert to JPEG. PNG at this size is ~200 KB
// a card; JPEG at q3 is under 90 KB, and the deploy artifact has a hard size
// budget (OPS-217/OPS-205).

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public/images/cards');
const TMP = join(ROOT, '.card-build');

// Both binaries are overridable, because neither lives at a guaranteed path.
const CHROME = process.env.CHROME_PATH
  || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function findFfmpeg() {
  if (process.env.FFMPEG_PATH) return process.env.FFMPEG_PATH;
  try {
    return execFileSync('which', ['ffmpeg'], { encoding: 'utf8' }).trim();
  } catch {
    // Playwright ships one; the filename has changed between versions, so try
    // the two spellings rather than pinning to whichever is installed today.
    for (const name of ['ffmpeg-mac', 'ffmpeg-mac-arm64']) {
      const p = join(process.env.HOME, 'Library/Caches/ms-playwright/ffmpeg-1011', name);
      if (existsSync(p)) return p;
    }
  }
  throw new Error('ffmpeg not found — install it or set FFMPEG_PATH');
}
const FFMPEG = findFfmpeg();

const b64 = (p) => readFileSync(join(ROOT, p)).toString('base64');
const MANROPE_LATIN = b64('public/fonts/manrope-latin-var.woff2');
const MANROPE_CYR = b64('public/fonts/manrope-cyrillic-var.woff2');

const counts = JSON.parse(readFileSync(join(ROOT, 'scripts/tool-counts.json'), 'utf8'));

// One entry per rendered card. `count` names a key in tool-counts.json so the
// figure on the image is always the figure in the table.
export const CARDS = [
  {
    file: 'cgm-comparison', count: 'cgm-comparison',
    kicker: 'Comparison · 2026', unit: 'CGM sensors',
    title: 'Every sensor, side by side',
    sub: 'Wear time · warm-up · calibration · alerts · pump compatibility · cost',
  },
  {
    file: 'cgm-comparison-ua', lang: 'ua', count: 'cgm-comparison-ua',
    kicker: 'Порівняння · 2026', unit: 'CGM-сенсорів',
    title: 'Усі сенсори поряд',
    sub: 'Час носіння · прогрів · калібрування · сповіщення · сумісність · ціна',
  },
  {
    file: 'aid-comparison', count: 'aid-comparison',
    kicker: 'Comparison · 2026', unit: 'pumps & AID systems',
    title: 'Automated insulin delivery, compared',
    sub: 'Filter by type, algorithm, AID support and availability',
  },
  {
    file: 'aid-comparison-ua', lang: 'ua', count: 'aid-comparison-ua',
    kicker: 'Порівняння · 2026', unit: 'помп і систем AID',
    title: 'Автоматична подача інсуліну',
    sub: 'Фільтри за типом, алгоритмом, підтримкою AID і доступністю',
  },
  {
    file: 'carb-gi-table', count: 'carb-gi-table',
    kicker: 'Interactive table', unit: 'foods',
    title: 'Carbs and glycaemic index',
    sub: 'Ukrainian and British staples · filter, search and sort',
  },
  {
    file: 'carb-gi-table-ua', lang: 'ua', count: 'carb-gi-table-ua',
    kicker: 'Інтерактивна таблиця', unit: 'продуктів',
    title: 'Вуглеводи та глікемічний індекс',
    sub: 'Українські та британські страви · фільтр, пошук і сортування',
  },
  {
    file: 't1d-cure-trials', count: 't1d-cure-trials',
    kicker: 'Tracker · 2026', unit: 'type 1 cure trials',
    title: 'Who can join, and where',
    sub: 'Filter by country, phase, approach, recruiting and cost to take part',
  },
  {
    file: 't1d-cure-trials-ua', lang: 'ua', count: 't1d-cure-trials-ua',
    kicker: 'Трекер · 2026', unit: 'досліджень лікування',
    title: 'Хто може взяти участь і де',
    sub: 'Фільтри за країною, фазою, підходом, набором і оплатою',
  },
  {
    file: 'blood-sugar-investigator',
    kicker: 'Interactive', big: 'Blood Sugar\nInvestigator',
    title: 'Why was that high? Why was that low?',
    sub: 'Answer a few questions · get the likely cause and a summary for your team',
  },
  {
    file: 'blood-sugar-investigator-ua', lang: 'ua',
    kicker: 'Інтерактивний', big: 'Дослідник\nцукру в крові',
    title: 'Чому був підйом? Чому було гіпо?',
    sub: 'Кілька запитань · імовірна причина та підсумок для вашої команди',
  },
  // OPS-415 — the meal-plan guide's landing pages. Not a tool page: these two
  // live in the Astro bundle (/meal-plan/ and /ua/meal-plan/) and name the card
  // through BaseLayout's ogImage rather than a hand-written <head>. They are
  // rendered here anyway so the site has one card generator, not two, and so
  // the pair stays in the same visual family as the rest.
  {
    file: 'meal-plan-ua', lang: 'ua',
    kicker: 'Безкоштовний гайд', big: '200 страв,\nплан на 28 днів',
    title: 'Гнучка система харчування на 4 тижні',
    sub: 'Готувати раз на день · інсулінорезистентність, діабет, перименопауза',
  },
  {
    file: 'meal-plan',
    kicker: 'Free guide · in Ukrainian', big: '200 meals,\na 28-day plan',
    title: 'The 4-week meal plan guide',
    sub: 'Cook once a day · insulin resistance, type 1 diabetes, perimenopause',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(card) {
  const n = card.count ? counts[card.count] : null;
  // The numeral carries the card; where there is no count (the investigator is
  // a flow, not a table) the product name takes its place at a smaller size.
  const headline = n !== null
    ? `<div class="num">${n}</div><div class="unit">${esc(card.unit)}</div>`
    : `<div class="name">${esc(card.big).replace(/\n/g, '<br>')}</div>`;

  return `<!doctype html><html lang="${card.lang === 'ua' ? 'uk' : 'en'}"><meta charset="utf-8"><style>
@font-face{font-family:Manrope;font-weight:200 800;font-display:block;
  src:url(data:font/woff2;base64,${MANROPE_LATIN}) format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+20AC,U+2122,U+2212,U+FEFF,U+FFFD;}
@font-face{font-family:Manrope;font-weight:200 800;font-display:block;
  src:url(data:font/woff2;base64,${MANROPE_CYR}) format('woff2');
  unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}
:root{--accent:#B23A63;--accent-deep:#7C2144;--ink:#2A1424;--muted:#5A4152;--bg:#F5EFE8;--card:#FFFCF7}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px}
.card{width:1200px;height:630px;background:var(--bg);position:relative;overflow:hidden;
  font-family:Manrope,system-ui,sans-serif;display:flex;flex-direction:column;
  justify-content:space-between;padding:64px 72px 56px 88px}
/* the accent spine, and a soft bloom bottom-right so the cream never reads flat */
.card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:16px;background:var(--accent)}
.card::after{content:'';position:absolute;right:-160px;bottom:-220px;width:620px;height:620px;
  border-radius:50%;background:radial-gradient(circle,rgba(178,58,99,.13),rgba(178,58,99,0) 70%)}
.kicker{font-size:22px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);z-index:1}
.mid{z-index:1}
.num{font-size:190px;font-weight:800;line-height:.86;color:var(--accent-deep);letter-spacing:-.04em}
.unit{font-size:40px;font-weight:700;color:var(--ink);margin-top:10px;letter-spacing:-.01em}
.name{font-size:88px;font-weight:800;line-height:1.06;color:var(--accent-deep);letter-spacing:-.03em}
.title{font-size:40px;font-weight:700;color:var(--ink);margin-top:26px;line-height:1.2;
  letter-spacing:-.015em;max-width:960px}
.sub{font-size:25px;font-weight:500;color:var(--muted);margin-top:16px;line-height:1.45;max-width:940px}
.foot{display:flex;align-items:center;gap:18px;z-index:1}
.rule{height:3px;flex:1;background:linear-gradient(90deg,var(--accent),rgba(178,58,99,.12))}
.site{font-size:25px;font-weight:700;color:var(--ink);letter-spacing:-.01em;white-space:nowrap}
</style><div class="card">
  <div class="kicker">${esc(card.kicker)}</div>
  <div class="mid">
    ${headline}
    <div class="title">${esc(card.title)}</div>
    <div class="sub">${esc(card.sub)}</div>
  </div>
  <div class="foot"><span class="site">lenafilatova.co.uk</span><span class="rule"></span></div>
</div></html>`;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

for (const card of CARDS) {
  const src = join(TMP, `${card.file}.html`);
  const png = join(TMP, `${card.file}.png`);
  const jpg = join(OUT, `${card.file}.jpg`);
  writeFileSync(src, html(card));
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
    `--screenshot=${png}`, '--window-size=1200,630', `file://${src}`,
  ], { stdio: 'ignore' });
  // -q:v 3 is the first rung that holds the 190px numeral's edges clean.
  execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', png, '-q:v', '3', jpg], { stdio: 'inherit' });
  const kb = Math.round(readFileSync(jpg).length / 1024);
  console.log(`${card.file}.jpg  ${kb} KB`);
}

rmSync(TMP, { recursive: true, force: true });
console.log(`\n${CARDS.length} cards written to public/images/cards/`);
