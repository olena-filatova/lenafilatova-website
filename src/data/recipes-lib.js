import { personRef, personNode, breadcrumb } from './schema-lib.js';

// Server-side helpers shared by the recipe hub + detail template.
// Label maps mirror the originals (recipe.html + recipes/index.html); the
// JSON-LD builder is ported from Website/recipes/build-recipe-pages.mjs so the
// structured data is identical to the current live pages (+ HowToStep name/url).
export const SITE = 'https://lenafilatova.co.uk';

// Category label — singular (detail page) and plural (hub chips/cards).
export const CAT_PAGE = {
  main: { en: 'Main course', ua: 'Основна страва' }, dessert: { en: 'Dessert', ua: 'Десерт' },
  baking: { en: 'Baking', ua: 'Випічка' }, snack: { en: 'Snack', ua: 'Перекус' },
  breakfast: { en: 'Breakfast', ua: 'Сніданок' }, bread: { en: 'Bread', ua: 'Хліб' },
  sauce: { en: 'Sauce', ua: 'Соус' }, drink: { en: 'Drink', ua: 'Напій' },
};
export const CAT_HUB = {
  main: { en: 'Mains', ua: 'Основні' }, dessert: { en: 'Desserts', ua: 'Десерти' },
  baking: { en: 'Baking', ua: 'Випічка' }, snack: { en: 'Snacks', ua: 'Перекуси' },
  breakfast: { en: 'Breakfast', ua: 'Сніданки' }, bread: { en: 'Bread', ua: 'Хліб' },
  sauce: { en: 'Sauces', ua: 'Соуси' }, drink: { en: 'Drinks', ua: 'Напої' },
};
export const DIET = {
  'sugar-free': { en: 'Sugar-free', ua: 'Без цукру' }, 'gluten-free': { en: 'Gluten-free', ua: 'Без глютену' },
  'low-carb': { en: 'Low carb', ua: 'Низьковуглеводне' }, vegetarian: { en: 'Vegetarian', ua: 'Вегетаріанське' },
  'dairy-free': { en: 'Dairy-free', ua: 'Без молочного' },
};

export const isHeader = (s) => /^—/.test(s);
export const clip = (s, n) => { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; };

/* ---------- SEO <title> for a recipe detail page ----------
   Google truncates result titles at roughly 600px — about 60 characters. The
   recipe names are Lena's own and are also the on-page H1, so they aren't
   rewritten to fit; the keyword suffix shrinks instead. Longest suffix that
   still fits wins, and if none do the bare name is used (the longest name is
   57 chars, so a recipe title is never truncated). A per-recipe `seoTitle:
   { en, ua }` always wins — same escape hatch as `seoTitle` in blog.js.
   The UA suffix is 6 chars longer than the EN one, which is why UA titles
   overflow far more often (23 of 86 vs 5 of 86 before this change). */
export const TITLE_MAX = 60;
const TITLE_SUFFIXES = {
  en: [' — Low-GI Recipe', ' — Low-GI'],
  ua: [' — Рецепт з низьким ГІ', ' — Низький ГІ', ' — Рецепт'],
};
export function seoTitle(R, lang = 'en') {
  if (R.seoTitle?.[lang]) return R.seoTitle[lang];
  const name = R.title[lang];
  const fitting = (TITLE_SUFFIXES[lang] || TITLE_SUFFIXES.en).find((s) => (name + s).length <= TITLE_MAX);
  return fitting ? name + fitting : name;
}

/* ---------- SEO <meta name="description"> for a recipe detail page ----------
   The default is `why` clipped to 155 chars. `why` is written as on-page body
   copy explaining the blood-sugar rationale, so clipping it mid-sentence gives
   a snippet that trails off in an ellipsis — 7 of the 10 recipes ranking on
   page 1 in the Jul 25–31 GSC data ended that way. A per-recipe `metaDesc:
   { en, ua }` wins, same escape hatch as `seoTitle`, and lets the snippet be
   written for the query the page actually ranks for. Kept under DESC_MAX so
   Google shows the whole thing rather than truncating it again. */
export const DESC_MAX = 155;

/* Clip to the last complete sentence that fits, rather than mid-word. Falls
   back to a whole-word cut with an ellipsis when the first sentence is itself
   longer than `n` (or when there's no sentence break at all), and returns the
   text untouched when it already fits. The lookbehind guards decimals — "1.5
   g of protein" must not read as a sentence end — and the terminator has to be
   followed by whitespace, so "GI 19." mid-sentence doesn't split either.
   Sentence-ending punctuation is the same in EN and UA, so one rule covers
   both. MIN_KEEP stops a stray early full stop leaving a two-word snippet. */
const MIN_KEEP = 80;
export function clipSentence(s, n) {
  s = String(s).replace(/\s+/g, ' ').trim();
  if (s.length <= n) return s;
  const head = s.slice(0, n + 1);
  let cut = -1;
  for (const m of head.matchAll(/(?<!\d)[.!?](?=\s)/g)) cut = m.index + 1;
  if (cut >= MIN_KEEP) return head.slice(0, cut).trim();
  // No usable sentence break: cut at the last whole word instead of mid-word,
  // leaving room for the ellipsis.
  const word = s.slice(0, n - 1).lastIndexOf(' ');
  return word >= MIN_KEEP ? s.slice(0, word).trimEnd() + '…' : clip(s, n);
}

export function metaDesc(R, lang = 'en') {
  return R.metaDesc?.[lang] || clipSentence(R.why[lang], DESC_MAX);
}

// GI band → { label, color } for the meta row + card pill.
export function giBand(gi, lang) {
  if (typeof gi !== 'number') return null;
  const label = gi <= 55 ? (lang === 'ua' ? 'Низький' : 'Low')
    : gi <= 69 ? (lang === 'ua' ? 'Середній' : 'Medium')
    : (lang === 'ua' ? 'Високий' : 'High');
  const color = gi <= 55 ? 'var(--green)' : gi <= 69 ? 'var(--amber)' : 'var(--accent)';
  return { label, color };
}

/* ---------- nutrition line → a stat block (OPS-275) ----------
   `nutrition` is one free-text line per language, written to a house format:
   "Per slice (est.): ~270 kcal · Carbs 18 g · Fat 19 g · Protein 8 g", and in
   UA "На 100 г (прибл.): ~270 ккал · Вуглеводи 18 г · Жири 19 г · Білки 8 г"
   (decimals with a comma). All 86 recipes follow it in both languages.

   Splitting it lets the detail page set the figures as a proper stat block
   instead of a sentence. This is presentation only — the JSON-LD keeps its own
   parser above, which reads the same line for schema.org fields.

   A line that does NOT match comes back as `{ raw }` and is rendered as the
   plain sentence it always was, so a future recipe written to a different shape
   degrades instead of losing its nutrition figures. Anything trailing the last
   value (one recipe carries "(varies by colour)") is kept as `note`. */
const NUTRI_LINE = new RegExp(
  '^(.*?):\\s*~?\\s*([\\d.,]+)\\s*(?:kcal|ккал)' +
  '\\s*·\\s*(?:carbs?|вуглеводи)\\s*([\\d.,]+)\\s*(?:g|г)' +
  '\\s*·\\s*(?:fat|жири)\\s*([\\d.,]+)\\s*(?:g|г)' +
  '\\s*·\\s*(?:protein|білки)\\s*([\\d.,]+)\\s*(?:g|г)\\s*(.*)$', 'i');

export function nutritionStats(R, lang = 'en') {
  const raw = R.nutrition?.[lang];
  if (!raw) return null;
  const m = String(raw).replace(/\s+/g, ' ').trim().match(NUTRI_LINE);
  if (!m) return { raw };
  return { raw, basis: m[1].trim(), kcal: m[2], carbs: m[3], fat: m[4], protein: m[5], note: m[6].trim() };
}

// Units for the stat block. `kcal` is its own label; the macros share "g".
export const NUTRI_LABELS = {
  en: { kcal: 'kcal', carbs: 'Carbs', fat: 'Fat', protein: 'Protein', g: 'g' },
  ua: { kcal: 'ккал', carbs: 'Вуглеводи', fat: 'Жири', protein: 'Білки', g: 'г' },
};

export const GI_DISCLAIMER = {
  en: 'Nutrition and glycaemic index (GI) values are estimates, calculated from the ingredients. Please double-check meals before cooking if it matters for your diet.',
  ua: 'Значення поживності та глікемічного індексу (ГІ) приблизні — розраховані з інгредієнтів. Будь ласка, перевіряйте страви перед приготуванням, якщо це важливо для вашого раціону.',
};

// Every recipe carries one primary `img`; `imgs` (optional) drives the slider.
export const imagesOf = (R) => (Array.isArray(R.imgs) && R.imgs.length ? R.imgs : [R.img]);

// Alt text for the recipe photos (OPS-361). Hand-written per image and per
// language in `imgAlt` / `stepImgsAlt`; both fall back to the old
// title-as-alt behaviour, so a recipe without them still renders sensibly.
//
// Only two kinds of recipe image are ever displayed: the hero (imagesOf(R)[0])
// and any step photos. The remaining entries in the `imgs` array are never
// rendered — they exist solely to populate the Recipe JSON-LD `image` array,
// which takes URLs and carries no alt — so those files deliberately have none.
//
// Card thumbnails on the hub and in "More recipes" take alt="" instead. They
// sit beside a caption that already names the recipe, so describing the photo
// as well makes a screen reader announce every card twice across an 86-card
// grid. That is why the blog hub has always used an empty alt there.
export const heroAlt = (R, lang) => R.imgAlt?.[lang] || R.title[lang];

export const stepAlt = (R, lang, n) =>
  R.stepImgsAlt?.[n]?.[lang] || `${R.title[lang]} — ${lang === 'ua' ? 'крок' : 'step'} ${n}`;

// Build-time image check (OPS-360), the recipes counterpart of warnAssetGaps()
// in blog-lib.js. A recipe photo that is missing shows a broken image on the
// hub grid — where the photography is the whole draw — and again on the recipe
// page and in its Recipe JSON-LD `image` array.
//
// Checks `image-dims.json` rather than the filesystem, so an absent key means
// either the file was never added or the manifest was not regenerated after
// adding it. Both need fixing before deploy, so one check covers both and this
// module stays free of node:fs. Regenerate with scripts/generate-image-dims.sh
// in a CLEAN worktree.
//
// Runs over PUBLISHED, not RECIPES: 64 of the 150 are hidden drafts and would
// otherwise drown the real signal.
//
// Deliberately NOT checked here: alt text. Recipe images render with
// `alt={R.title[lang]}`, and "Lemon and thyme cookies" is a fair description of
// a photo of lemon and thyme cookies — unlike a blog headline, which is often a
// question or a claim and describes nothing (that gap is OPS-360's other half).
//
// PHOTOS ARE SUPPLIED BY HAND, like every image on this site — the fix for a
// missing one is to ask Lena for the file, never to generate a substitute.

let warnedRecipeAssets = false;

export function warnRecipeAssetGaps(recipes, dims) {
  if (warnedRecipeAssets) return;
  warnedRecipeAssets = true;

  const noField = [];
  const missing = new Map(); // file -> slugs, so a shared photo is reported once

  for (const r of recipes) {
    const files = [...imagesOf(r), ...Object.values(r.stepImgs || {})];
    for (const f of files) {
      if (!f) {
        noField.push(r.slug);
        continue;
      }
      if (dims[`/recipes/images/${f}`]) continue;
      if (!missing.has(f)) missing.set(f, []);
      missing.get(f).push(r.slug);
    }
  }

  if (noField.length) {
    console.warn(
      `[recipes] ${noField.length} published recipe(s) have no \`img\` at all, so the hub card and ` +
        `the recipe hero render an empty <img>: ${noField.join(', ')}`
    );
  }

  // Hand-written alt is expected on every published recipe (OPS-361). The
  // fallback keeps the page valid, but "Lemon and thyme cookies" as the alt for
  // a photo of lemon and thyme cookies, directly under a heading of the same
  // name, tells a screen-reader user nothing they have not already heard.
  const noAlt = recipes.filter((r) => !r.imgAlt?.en || !r.imgAlt?.ua);
  if (noAlt.length) {
    console.warn(
      `[recipes] ${noAlt.length} published recipe(s) have no hand-written \`imgAlt\`, so the hero ` +
        'falls back to repeating the recipe title. Write it from the photo — what is in the frame, ' +
        'how it is plated, what it is served in or on.' +
        (noAlt.length <= 8
          ? '\n' + noAlt.map((r) => `           ${r.slug}`).join('\n')
          : `\n         e.g. ${noAlt.slice(0, 3).map((r) => r.slug).join(', ')} …`)
    );
  }

  if (missing.size) {
    console.warn(
      `[recipes] ${missing.size} recipe photo(s) are not in image-dims.json, so each is either ` +
        'missing from public/recipes/images or the manifest is stale. A missing file shows a ' +
        'broken image on the hub grid, on the recipe page and in its Recipe JSON-LD:\n' +
        [...missing]
          .map(([f, slugs]) => `           ${f}  (${slugs.join(', ')})`)
          .join('\n') +
        '\n         Fix: if the files are there, run scripts/generate-image-dims.sh in a CLEAN ' +
        'worktree. If not, ask Lena for the photo — images are supplied by hand, never generated.'
    );
  }
}

/* ---------- JSON-LD Recipe (ported from build-recipe-pages.mjs) ---------- */
const CAT_EN = { main: 'Main course', dessert: 'Dessert', baking: 'Baking', snack: 'Snack', breakfast: 'Breakfast', bread: 'Bread', sauce: 'Sauce', drink: 'Drink' };
const DIET_EN = { 'sugar-free': 'Sugar-free', 'gluten-free': 'Gluten-free', 'low-carb': 'Low carb', vegetarian: 'Vegetarian', 'dairy-free': 'Dairy-free' };
const DIET_SCHEMA = { 'gluten-free': 'GlutenFreeDiet', vegetarian: 'VegetarianDiet' };

const parseDur = (t) => { if (!t) return null; const m = String(t).match(/(\d+)\s*(min|хв|hour|hours|hr|год)/i); if (!m) return null; const n = +m[1]; return /min|хв/i.test(m[2]) ? `PT${n}M` : `PT${n}H`; };
const toMinutes = (t) => { if (!t) return 0; const s = String(t); const h = s.match(/(\d+)\s*(hour|hours|hr|год)/i); const m = s.match(/(\d+)\s*(min|хв)/i); return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0); };
const isoDuration = (mins) => { if (!mins) return null; const h = Math.floor(mins / 60), m = mins % 60; return 'PT' + (h ? `${h}H` : '') + (m ? `${m}M` : ''); };
// The nutrition line is free text and differs by language — "~270 kcal · Carbs
// 18 g" in EN, "~270 ккал · Вуглеводи 18 г" in UA. Matching only the English
// units silently dropped `nutrition` from the JSON-LD of all 86 UA recipe
// pages, so they were the only ones shipping structured data without it.
function parseNutrition(t) {
  const s = String(t || ''); const num = (re) => { const m = s.match(re); return m ? m[1] : null; };
  const n = {
    calories: num(/([\d.]+)\s*(?:kcal|ккал)/i),
    carbs: num(/(?:carbs?|вуглеводи)\s*([\d.]+)\s*(?:g|г)/i),
    fat: num(/(?:fat|жири)\s*([\d.]+)\s*(?:g|г)/i),
    protein: num(/(?:protein|білки)\s*([\d.]+)\s*(?:g|г)/i),
  };
  if (!n.calories && !n.carbs) return null;
  const out = { '@type': 'NutritionInformation' };
  if (n.calories) out.calories = `${n.calories} calories`;
  if (n.carbs) out.carbohydrateContent = `${n.carbs} g`;
  if (n.fat) out.fatContent = `${n.fat} g`;
  if (n.protein) out.proteinContent = `${n.protein} g`;
  return out;
}
// Short step name for HowToStep: text before a leading ':' (≤60), else first sentence, clipped.
function stepName(text) {
  const s = String(text).replace(/\s+/g, ' ').trim();
  const colon = s.indexOf(':');
  if (colon > 0 && colon <= 60) return s.slice(0, colon).trim();
  const m = s.match(/^(.+?[.!?])(?=\s|$)/);
  return clip(m ? m[1] : s, 60);
}

export function buildJsonLd(R, lang = 'en') {
  const imgs = imagesOf(R);
  const path = lang === 'ua' ? `${SITE}/ua/recipes/${R.slug}/` : `${SITE}/recipes/${R.slug}/`;
  const ld = {
    '@type': 'Recipe',
    name: R.title[lang],
    image: imgs.map((f) => `${SITE}/recipes/images/${f}`),
    // OPS-301: one Person entity across the site rather than an anonymous
    // author inlined on all 86 recipes. See schema-lib.js.
    author: personRef(),
    description: clip(R.why[lang], 300),
    recipeCategory: CAT_EN[R.cat] || R.cat,
    keywords: ['low GI', CAT_EN[R.cat] || R.cat, ...(R.tags || []).map((t) => DIET_EN[t] || t)].join(', '),
    recipeYield: R.meta?.serves?.[lang],
    recipeIngredient: (R.ingredients[lang] || []).filter((s) => !isHeader(s)),
    recipeInstructions: (R.method[lang] || []).map((s, i) => ({
      '@type': 'HowToStep', name: stepName(s), text: s, url: `${path}#step-${i + 1}`,
    })),
  };
  const pt = parseDur(R.meta?.prep?.[lang]), ct = parseDur(R.meta?.cook?.[lang]);
  if (pt) ld.prepTime = pt;
  if (ct) ld.cookTime = ct;
  const total = isoDuration(toMinutes(R.meta?.prep?.[lang]) + toMinutes(R.meta?.cook?.[lang]));
  if (total) ld.totalTime = total;
  const nutrition = parseNutrition(R.nutrition?.[lang]);
  if (nutrition) ld.nutrition = nutrition;
  ld.suitableForDiet = ['https://schema.org/DiabeticDiet',
    ...(R.tags || []).map((t) => DIET_SCHEMA[t]).filter(Boolean).map((d) => `https://schema.org/${d}`)];
  // OPS-301: `dateAdded` already existed in the data and was going unused.
  if (R.dateAdded) ld.datePublished = R.dateAdded;

  // OPS-301: recipes now carry a BreadcrumbList, which blog posts have always
  // had — the two templates disagreed for no reason. Returning a @graph rather
  // than a bare Recipe object; BaseLayout stringifies whatever it is given, so
  // the shape change is contained here and in the recipe detail templates.
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ld,
      breadcrumb(lang, [
        { name: lang === 'ua' ? 'Рецепти' : 'Recipes', url: `${SITE}${lang === 'ua' ? '/ua' : ''}/recipes/` },
        { name: R.title[lang], url: path },
      ]),
      personNode(),
    ],
  };
}
