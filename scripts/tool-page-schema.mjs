// OPS-304 — structured data and share-card meta for the ten standalone tool pages.
//
// Before this, `application/ld+json` count across all ten was zero, which is
// the wrong way round: a filterable table of 22 sensors is the most
// schema-eligible thing on the site, and the 58 blog posts (which already have
// Article markup, OPS-301) are the least surprising.
//
// The pages live in public/ outside the Astro bundle, so they cannot import
// src/data/schema-lib.js. The Person @id and the breadcrumb shape are mirrored
// here deliberately — every page still resolves its author to the one canonical
// node at ${SITE}/#person rather than to a stranger with the same name.
//
// Everything is generated from each page's own data array, so the counts in the
// markup and on the share cards cannot drift from the counts in the table.
// Re-run after adding a sensor, a pump, a food or a trial:
//
//   node scripts/tool-page-schema.mjs
//   node scripts/tool-social-cards.mjs
//
// The script is idempotent: it replaces whatever sits between the OPS-304
// markers rather than appending, and rewrites the four meta tags in place.
//
// No FAQPage. The audit suggested it "where the page already answers questions
// in prose" — none of the ten do. Their headings are rendered by JavaScript and
// there is no static Q&A in the HTML, so FAQPage markup would describe content
// a crawler cannot see, which is exactly what Google's structured-data policy
// forbids. If a written FAQ is ever added to a tool page, add it then.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://lenafilatova.co.uk';
const PERSON_ID = `${SITE}/#person`;

const personRef = () => ({ '@id': PERSON_ID });
const personNode = () => ({
  '@type': 'Person', '@id': PERSON_ID, name: 'Lena Filatova',
  url: `${SITE}/`, image: `${SITE}/images/lena-filatova-author.jpg`,
});

const HOME = { en: { name: 'Home', url: `${SITE}/` }, ua: { name: 'Головна', url: `${SITE}/ua/` } };
const RESOURCES = {
  en: { name: 'Resources', url: `${SITE}/resources/` },
  ua: { name: 'Ресурси', url: `${SITE}/ua/resources/` },
};

function breadcrumb(lang, leaf, url) {
  return {
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
    itemListElement: [HOME[lang], RESOURCES[lang], { name: leaf }].map((s, i) => {
      const item = { '@type': 'ListItem', position: i + 1, name: s.name };
      if (s.url) item.item = s.url;
      return item;
    }),
  };
}

/** Pull a top-level array literal out of a page and evaluate it. */
function dataArray(html, name) {
  const m = new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*\\[`).exec(html);
  if (!m) throw new Error(`array ${name} not found`);
  let i = html.indexOf('[', m.index), depth = 0, j = i;
  for (; j < html.length; j++) {
    const c = html[j];
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { depth--; if (!depth) break; }
    else if (c === '"' || c === "'" || c === '`') {
      const q = c; j++;
      while (j < html.length && html[j] !== q) { if (html[j] === '\\') j++; j++; }
    }
  }
  return (0, eval)(html.slice(i, j + 1));
}

const itemList = (id, name, items) => ({
  '@type': 'ItemList', '@id': id, name, numberOfItems: items.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: items.map((it, i) => {
    const el = { '@type': 'ListItem', position: i + 1, name: it.name };
    if (it.url) el.url = it.url;
    return el;
  }),
});

// ── the ten pages ────────────────────────────────────────────────────────────
const PAGES = [
  {
    dir: 'cgm-comparison', lang: 'en', array: 'SENSORS', crumb: 'CGM sensor comparison',
    name: 'CGM sensor comparison (2026)',
    desc: 'Wear time, warm-up, calibration, alerts, iCGM status, pump compatibility and cost for every major continuous glucose monitor, filterable by brand and country.',
    kind: 'dataset',
    measured: ['Wear time (days)', 'Warm-up time (minutes)', 'Calibration requirement',
               'Reading interval (minutes)', 'Alerts', 'iCGM status', 'AID compatibility',
               'Availability by country', 'Cost'],
  },
  {
    dir: 'cgm-comparison-ua', lang: 'ua', array: 'SENSORS', crumb: 'Порівняння CGM-сенсорів',
    name: 'Порівняння CGM-сенсорів (2026)',
    desc: 'Час носіння, прогрів, калібрування, сповіщення, статус iCGM, сумісність із помпами та ціна для кожного основного монітора глюкози, з фільтрами за брендом і країною.',
    kind: 'dataset',
    measured: ['Час носіння (дні)', 'Час прогріву (хвилини)', 'Потреба в калібруванні',
               'Інтервал зчитування (хвилини)', 'Сповіщення', 'Статус iCGM',
               'Сумісність з AID', 'Доступність за країнами', 'Ціна'],
  },
  {
    dir: 'aid-comparison', lang: 'en', array: 'DATA', crumb: 'AID system comparison',
    name: 'Insulin pump and AID system comparison (2026)',
    desc: 'Every major insulin pump and automated insulin delivery system side by side — tubed or tubeless, which algorithm, which sensors it pairs with, reservoir size, availability and cost.',
    kind: 'list',
  },
  {
    dir: 'aid-comparison-ua', lang: 'ua', array: 'DATA', crumb: 'Порівняння систем AID',
    name: 'Порівняння інсулінових помп і систем AID (2026)',
    desc: 'Усі основні інсулінові помпи та системи автоматичної подачі інсуліну поряд — з трубкою чи без, який алгоритм, з якими сенсорами працює, обсяг резервуара, доступність і ціна.',
    kind: 'list',
  },
  {
    dir: 'carb-gi-table', lang: 'en', array: 'FOODS', crumb: 'Carbohydrate & GI table',
    name: 'Carbohydrate and glycaemic index table',
    desc: 'Carbohydrate per 100 g and glycaemic index for foods including Ukrainian and British staples, filterable by category and cuisine and sortable by either measure.',
    kind: 'dataset',
    measured: ['Carbohydrate per 100 g (grams)', 'Glycaemic index', 'Glycaemic index band',
               'Food category', 'Cuisine'],
  },
  {
    dir: 'carb-gi-table-ua', lang: 'ua', array: 'FOODS', crumb: 'Таблиця вуглеводів і ГІ',
    name: 'Таблиця вуглеводів і глікемічного індексу',
    desc: 'Вуглеводи на 100 г і глікемічний індекс для продуктів, зокрема українських і британських страв, з фільтрами за категорією та кухнею й сортуванням за обома показниками.',
    kind: 'dataset',
    measured: ['Вуглеводи на 100 г (грами)', 'Глікемічний індекс', 'Рівень глікемічного індексу',
               'Категорія продукту', 'Кухня'],
  },
  {
    dir: 't1d-cure-trials', lang: 'en', array: 'DATA', crumb: 'Type 1 cure trials tracker',
    name: 'Type 1 diabetes cure trials tracker',
    desc: 'Cure and disease-modifying trials for type 1 diabetes side by side — filter by country, phase, approach, whether each is recruiting and whether it is free to take part.',
    kind: 'list', linked: true,
  },
  {
    dir: 't1d-cure-trials-ua', lang: 'ua', array: 'DATA', crumb: 'Трекер досліджень лікування',
    name: 'Трекер досліджень щодо лікування діабету 1 типу',
    desc: 'Дослідження щодо лікування та модифікації перебігу діабету 1 типу поряд — фільтри за країною, фазою, підходом, набором учасників і тим, чи безкоштовна участь.',
    kind: 'list', linked: true,
  },
  {
    dir: 'blood-sugar-investigator', lang: 'en', crumb: 'Blood Sugar Investigator',
    name: 'Blood Sugar Investigator',
    desc: 'A guided troubleshooter for an unexpected high or low. Answer simple questions and get the most likely cause, what to do about it, and a summary to share with your diabetes team.',
    kind: 'app',
  },
  {
    dir: 'blood-sugar-investigator-ua', lang: 'ua', crumb: 'Дослідник цукру в крові',
    name: 'Дослідник цукру в крові',
    desc: 'Покроковий помічник для несподіваного підйому чи гіпоглікемії. Дайте відповіді на прості запитання й отримайте найімовірнішу причину, що робити та підсумок для діабетичної команди.',
    kind: 'app',
  },
];

const BEGIN = '<!-- OPS-304 structured data — generated by scripts/tool-page-schema.mjs, do not hand-edit -->';
const END = '<!-- /OPS-304 -->';

const counts = {};

for (const p of PAGES) {
  const file = join(ROOT, 'public', p.dir, 'index.html');
  let html = readFileSync(file, 'utf8');

  const url = `${SITE}/${p.dir}/`;
  const inLanguage = p.lang === 'ua' ? 'uk' : 'en';
  const graph = [];

  const webPage = {
    '@type': 'WebPage', '@id': `${url}#webpage`, url,
    name: p.name, description: p.desc, inLanguage,
    isPartOf: { '@id': `${SITE}${p.lang === 'ua' ? '/ua/' : '/'}#website` },
    creator: personRef(),
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };

  if (p.kind === 'app') {
    graph.push(webPage, {
      '@type': ['WebApplication', 'MedicalWebPage'], '@id': `${url}#app`, url,
      name: p.name, description: p.desc, inLanguage,
      applicationCategory: 'HealthApplication',
      browserRequirements: 'Requires JavaScript.',
      operatingSystem: 'Any',
      // Free, and no account — worth saying in the markup, because "free tool"
      // is exactly the qualifier an answer engine looks for.
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      isAccessibleForFree: true,
      creator: personRef(),
    });
  } else {
    const items = dataArray(html, p.array);
    counts[p.dir] = items.length;
    const listId = `${url}#list`;

    if (p.kind === 'dataset') {
      webPage.mainEntity = { '@id': `${url}#dataset` };
      graph.push(webPage, {
        '@type': 'Dataset', '@id': `${url}#dataset`, url,
        name: p.name, description: p.desc, inLanguage,
        creator: personRef(), license: `${SITE}/terms/`,
        isAccessibleForFree: true,
        variableMeasured: p.measured,
        distribution: {
          '@type': 'DataDownload', encodingFormat: 'text/html', contentUrl: url,
        },
        hasPart: { '@id': listId },
      });
      // The 215-row food table is a dataset, not a list of 215 named things —
      // enumerating every row would bloat the page for no gain. The sensor and
      // pump tables are short enough that naming the rows is the point.
      if (items.length <= 40) graph.push(itemList(listId, p.name, items));
    } else {
      webPage.mainEntity = { '@id': listId };
      graph.push(webPage, itemList(listId, p.name,
        p.linked ? items.map((it) => ({ name: it.name, url: it.url })) : items));
    }
  }

  graph.push(breadcrumb(p.lang, p.crumb, url), personNode());

  const block = [
    BEGIN,
    '<script type="application/ld+json">',
    JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2),
    '</script>',
    END,
  ].join('\n');

  const existing = new RegExp(`${BEGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END}`);
  html = existing.test(html)
    ? html.replace(existing, block)
    : html.replace('</head>', `${block}\n</head>`);

  // ── share card ────────────────────────────────────────────────────────────
  // The old default was a 675x1200 portrait, whose 9:16 ratio forces
  // twitter:card=summary. A 1200x630 card is what summary_large_image needs.
  const card = `${SITE}/images/cards/${p.dir}.jpg`;

  // Assert the tag was present rather than that it changed — on a second run
  // every value is already correct, and "nothing changed" must not read as
  // "nothing matched". A silently missing og:image is the failure worth
  // catching; a no-op re-run is the normal case.
  const setMeta = (attr, key, value) => {
    const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
    if (!re.test(html)) throw new Error(`${p.dir}: no ${key} meta tag`);
    html = html.replace(re, `$1${value}$2`);
  };
  setMeta('property', 'og:image', card);
  setMeta('name', 'twitter:image', card);
  setMeta('name', 'twitter:card', 'summary_large_image');

  if (!/<meta property="og:image:width"/.test(html)) {
    html = html.replace(
      /(<meta property="og:image" content="[^"]*">)/,
      '$1\n<meta property="og:image:width" content="1200">'
      + '\n<meta property="og:image:height" content="630">'
      + `\n<meta property="og:image:alt" content="${p.name}">`,
    );
  }

  writeFileSync(file, html);
  console.log(`${p.dir.padEnd(28)} ${p.kind.padEnd(8)} ${counts[p.dir] ?? '—'}`);
}

writeFileSync(join(ROOT, 'scripts/tool-counts.json'), JSON.stringify(counts, null, 2) + '\n');
console.log('\nscripts/tool-counts.json written');
