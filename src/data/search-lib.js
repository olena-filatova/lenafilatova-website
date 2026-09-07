// Site-wide search (OPS-288) — index builder + UI strings.
//
// The index is BUILT from the same data modules the pages render from
// (blog.js, recipes.js, site.js, calculators.js) rather than crawled from the
// built output. A new post or recipe is therefore searchable the moment it
// ships, with no separate indexing step to forget — the failure mode of a
// crawl-based index (Pagefind, Algolia) on a site whose content lives in data
// files is that it silently goes stale when someone skips the extra command.
//
// `search-index-en.json.js` / `search-index-ua.json.js` emit one file per
// language. The client fetches only its own, and only when the visitor
// actually reaches for search, so nobody pays for it on a normal page view.
//
// SEO. The results page is `noindex` (see src/pages/search.astro) and is
// deliberately absent from sitemap.xml: an internal search page is thin,
// near-duplicate content, and Google's own guidance is to keep site-search
// results out of the index. It stays crawlable — a Disallow in robots.txt
// would stop Googlebot ever reading the noindex. The SEO value of search is
// indirect and real: fewer dead ends for visitors who land on the wrong page,
// and a GA4 `search_term` stream that says what people came looking for and
// didn't find (see the search page's tracking call).

import { POSTS } from './blog.js';
import { PUBLISHED } from './recipes.js';
import { CAT_HUB, DIET } from './recipes-lib.js';
import { UI as BLOG_UI } from './blog-lib.js';
import { CALCULATORS } from './calculators.js';
import { HOME, ABOUT, CONTACT, RESOURCES, LEGAL, LEGAL_SLUGS } from './site.js';

// Result kinds, kind labels and the UI strings live in search-ui.js — a leaf
// module with no imports, so plain-node scripts can read them without pulling
// in the post index (OPS-414). Re-exported here so existing call sites are
// unchanged.
export { KINDS, KIND_LABEL, SEARCH_UI } from './search-ui.js';

// Titles for the static pages as they appear in results. Taken here rather
// than from each page's H1 because several H1s are editorial rather than
// nominal — the homepage's is "Perimenopause changed your blood sugar rules",
// which is a fine headline and a useless search result label.
const PAGE_TITLES = {
  en: {
    home: 'Home',
    blog: 'Journal — all articles',
    recipes: 'Low-GI recipes',
    resources: 'Tools & guides',
    about: 'About Lena Filatova',
    contact: 'Contact',
  },
  ua: {
    home: 'Головна',
    blog: 'Журнал — усі статті',
    recipes: 'Рецепти з низьким ГІ',
    resources: 'Інструменти та гайди',
    about: 'Про Лену Філатову',
    contact: 'Контакти',
  },
};

const RECIPE_HUB_LEAD = {
  en: 'Sugar-free bakes, low-carb mains and desserts — every recipe with a GI estimate and UK metric measures.',
  ua: 'Випічка без цукру, низьковуглеводні страви та десерти — кожен рецепт з оцінкою ГІ та метричними мірами.',
};

const squash = (s) => String(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

// Every human-readable string in a nested data object, in document order.
// Used for the static pages, whose copy lives as arbitrarily-shaped objects in
// site.js — walking them means a page stays fully searchable when its data
// grows a new field, instead of quietly indexing only the parts someone
// remembered to list. Plumbing values (URLs, hex colours, image paths) are
// skipped: no query is ever looking for them, and they only pad the index.
function texts(node, out = []) {
  if (typeof node === 'string') {
    if (!/^(#|https?:|\/|data:|mailto:|tel:)/.test(node)) out.push(node);
  } else if (Array.isArray(node)) {
    for (const v of node) texts(v, out);
  } else if (node && typeof node === 'object') {
    for (const v of Object.values(node)) texts(v, out);
  }
  return out;
}

// A blog post's body as one searchable string. Every block type in blog.js is
// handled explicitly; the fallback picks up the common text-bearing fields so
// a block type added later is indexed rather than silently dropped.
function postBody(a) {
  return (a.blocks || [])
    .map((b) => {
      switch (b.t) {
        case 'p':
        case 'h':
        case 'quote':
        case 'bio':
          return b.text || '';
        case 'refs':
          return (b.items || []).map((i) => `${i.claim || ''} ${i.detail || ''}`).join(' ');
        case 'links':
          return (b.items || []).map((i) => `${i.name || ''} ${i.desc || ''}`).join(' ');
        case 'table':
          return [...(b.head || []), ...(b.rows || []).flat()].join(' ');
        case 'img':
        case 'graph':
        case 'embed':
          return `${b.title || ''} ${b.cap || ''}`;
        default:
          return `${b.text || ''} ${b.cap || ''} ${b.title || ''}`;
      }
    })
    .join(' ');
}

function recipeBody(r, lang) {
  const pick = (v) => (v && v[lang]) || '';
  const list = (v) => ((v && v[lang]) || []).map((x) => (typeof x === 'string' ? x : texts(x).join(' '))).join(' ');
  const meta = r.meta ? [pick(r.meta.prep), pick(r.meta.cook), pick(r.meta.serves)].join(' ') : '';
  return [pick(r.why), pick(r.nutrition), list(r.ingredients), list(r.method), pick(r.note), meta].join(' ');
}

/**
 * The search documents for one language.
 *
 * `u` is site-absolute and base-less (`/blog/x/`); the client prefixes
 * `import.meta.env.BASE_URL` so a preview deploy under a subpath still links
 * correctly. Keys are one character because they repeat ~130 times each and
 * this file is shipped over the wire.
 *
 *   u url · t title · k kind · c kicker/category · x excerpt (shown)
 *   g extra keywords (tags, diet labels) · b body text · d date · i thumbnail
 */
export function buildDocs(lang = 'en') {
  const L = lang === 'ua' ? 'ua/' : '';
  const docs = [];
  const push = (d) => docs.push({ ...d, t: squash(d.t), x: squash(d.x || ''), b: squash(d.b || '') });

  // --- articles -------------------------------------------------------------
  for (const p of POSTS) {
    const a = p[lang];
    if (!a) continue;
    // A post filed under tools (OPS-290) is indexed once, by the tools loop
    // below, under the kind its filter chip and its card both claim. Indexing
    // it here too would put one URL in the results twice.
    if (p.filedUnder === 'tools') continue;
    push({
      u: `/${L}blog/${p.slug}/`,
      t: a.title,
      k: 'article',
      c: a.cat,
      x: a.excerpt,
      g: (p.cats || []).join(' '),
      b: `${a.lead || ''} ${postBody(a)}`,
      d: p.date,
      i: p.image,
    });
  }

  // --- recipes --------------------------------------------------------------
  for (const r of PUBLISHED) {
    const diet = (r.tags || []).map((t) => (DIET[t] ? DIET[t][lang] : t)).join(' ');
    push({
      u: `/${L}recipes/${r.slug}/`,
      t: r.title[lang],
      k: 'recipe',
      c: CAT_HUB[r.cat] ? CAT_HUB[r.cat][lang] : r.cat,
      x: (r.why && r.why[lang]) || '',
      // The GI number is written out as text so "GI 12" and "ГІ 12" match.
      g: `${diet} ${r.tags ? r.tags.join(' ') : ''} GI ${r.gi} ГІ ${r.gi}`,
      b: recipeBody(r, lang),
      d: r.dateAdded,
      i: `/recipes/images/${Array.isArray(r.imgs) && r.imgs.length ? r.imgs[0] : r.img}`,
    });
  }

  // --- tools ----------------------------------------------------------------
  // RESOURCES.cards is the single list behind the resources hub and already
  // covers both the embedded calculators (/resources/<slug>/) and the
  // standalone tool pages that live in public/ (/carb-gi-table/ etc.), each
  // with its own EN and UA href — so tools stay in step with the hub.
  for (const card of RESOURCES.cards) {
    const c = card[lang];
    const href = lang === 'ua' ? card.hrefUa : card.href;
    // The three embedded calculators have a page of their own copy in
    // calculators.js; fold it in so a query can hit the tool's own wording.
    const slug = (href.match(/^\/(?:ua\/)?resources\/([^/]+)\//) || [])[1];
    const calc = slug && CALCULATORS.find((x) => x.slug === slug);
    // A card can also point at a post filed under tools (OPS-290) — one that
    // wraps a standalone tool in the writing that explains it. Its article body
    // is the searchable text here, so the tool's own words still match even
    // though the articles loop skipped it.
    const postSlug = (href.match(/^\/(?:ua\/)?blog\/([^/]+)\//) || [])[1];
    const post = postSlug && POSTS.find((x) => x.slug === postSlug);
    const pa = post && post[lang];
    push({
      u: href,
      t: c.title,
      k: 'tool',
      c: c.kicker || c.band,
      x: c.desc,
      g: `${c.band || ''} ${post ? (post.cats || []).join(' ') : ''}`.trim(),
      b: calc ? texts(calc[lang]).join(' ') : pa ? `${pa.lead || ''} ${postBody(pa)}` : '',
    });
  }

  // --- pages ----------------------------------------------------------------
  const pt = PAGE_TITLES[lang];
  const home = HOME[lang];
  const about = ABOUT[lang];
  const contact = CONTACT[lang];
  const resources = RESOURCES[lang];
  const blogUi = BLOG_UI[lang];

  push({ u: `/${L}`, t: pt.home, k: 'page', c: '', x: home.seoDesc, b: texts(home).join(' ') });
  push({ u: `/${L}about/`, t: pt.about, k: 'page', c: about.kicker, x: about.lead, b: texts(about).join(' ') });
  push({ u: `/${L}contact/`, t: pt.contact, k: 'page', c: contact.kicker, x: contact.lead, b: texts(contact).join(' ') });
  push({
    u: `/${L}resources/`,
    t: pt.resources,
    k: 'page',
    c: resources.kicker,
    x: resources.lead,
    b: texts(resources).join(' '),
  });
  push({ u: `/${L}blog/`, t: pt.blog, k: 'page', c: blogUi.hubKicker, x: blogUi.hubLead, b: blogUi.hubH1 });
  // The hub's own copy is in the component rather than a data file, so its
  // body is the vocabulary the page filters by — a search for "desserts" or
  // "gluten-free" should be able to land on the filtered index, not only on
  // the individual recipes.
  push({
    u: `/${L}recipes/`,
    t: pt.recipes,
    k: 'page',
    c: '',
    x: RECIPE_HUB_LEAD[lang],
    b: [...Object.values(CAT_HUB), ...Object.values(DIET)].map((v) => v[lang]).join(' '),
  });

  for (const slug of Object.values(LEGAL_SLUGS)) {
    const l = LEGAL[slug][lang];
    push({ u: `/${L}${slug}/`, t: l.h1, k: 'page', c: l.kicker, x: l.seoDesc, b: texts(l).join(' ') });
  }

  return docs;
}
