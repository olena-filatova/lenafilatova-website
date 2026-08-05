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

export const GI_DISCLAIMER = {
  en: 'Nutrition and glycaemic index (GI) values are estimates, calculated from the ingredients. Please double-check meals before cooking if it matters for your diet.',
  ua: 'Значення поживності та глікемічного індексу (ГІ) приблизні — розраховані з інгредієнтів. Будь ласка, перевіряйте страви перед приготуванням, якщо це важливо для вашого раціону.',
};

// Every recipe carries one primary `img`; `imgs` (optional) drives the slider.
export const imagesOf = (R) => (Array.isArray(R.imgs) && R.imgs.length ? R.imgs : [R.img]);

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
    '@context': 'https://schema.org/', '@type': 'Recipe',
    name: R.title[lang],
    image: imgs.map((f) => `${SITE}/recipes/images/${f}`),
    author: { '@type': 'Person', name: 'Lena Filatova' },
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
  return ld;
}
