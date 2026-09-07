// Search UI strings and result-kind labels (OPS-288), split out of
// search-lib.js by OPS-414.
//
// **This module must never import anything.** It is the half of the search
// data that plain-node scripts need — `scripts/build-tool-chrome.mjs` writes
// the search affordance into the ten standalone tool pages and wants nothing
// but these strings. It used to reach them through `search-lib.js`, which
// imports `blog.js`, whose `import.meta.glob` only exists under Vite; the
// script therefore died the moment posts moved to one file each (PR #209),
// taking the tool-page chrome build with it and going unnoticed because
// nothing in CI ran it.
//
// So: strings and labels here, anything that reads posts or recipes in
// search-lib.js. search-lib re-exports all three names, so every existing
// `import { SEARCH_UI } from './search-lib.js'` keeps working.

// Result kinds, in the order their filter chips appear. `all` is prepended by
// the UI. Keys are also written into each doc as `k`.
export const KINDS = [
  { key: 'article', en: 'Articles', ua: 'Статті' },
  { key: 'recipe', en: 'Recipes', ua: 'Рецепти' },
  { key: 'tool', en: 'Tools', ua: 'Інструменти' },
  { key: 'page', en: 'Pages', ua: 'Сторінки' },
];

// Singular label shown on an individual result row.
export const KIND_LABEL = {
  article: { en: 'Article', ua: 'Стаття' },
  recipe: { en: 'Recipe', ua: 'Рецепт' },
  tool: { en: 'Tool', ua: 'Інструмент' },
  page: { en: 'Page', ua: 'Сторінка' },
};

export const SEARCH_UI = {
  en: {
    kicker: 'Search',
    h1: 'Search the site',
    lead: 'Articles, recipes, tools and pages — everything on lenafilatova.co.uk in one place.',
    seoTitle: 'Search — Lena Filatova',
    seoDesc: 'Search the articles, low-GI recipes and free tools on lenafilatova.co.uk.',
    label: 'Search',
    placeholder: 'Search articles, recipes, tools…',
    open: 'Search',
    close: 'Close search',
    submit: 'Search',
    all: 'All',
    resultsOne: '1 result for',
    resultsMany: 'results for',
    none: 'Nothing matched',
    noneHint: 'Try a single word — “insulin”, “porridge”, “HRT” — or browse the journal and the recipe index.',
    more: 'Show more',
    prompt: 'Type to search',
    promptHint: 'Articles, recipes, tools and pages — all searched at once.',
    loading: 'Searching…',
    failed: 'Search is unavailable right now. Please try again, or browse the journal and recipe index.',
    seeAll: 'See all results',
    noscript:
      'Search needs JavaScript. Without it, the journal and recipe indexes are browsable by category.',
    popular: 'Try',
    popularTerms: ['perimenopause', 'insulin resistance', 'low GI', 'HRT', 'protein'],
  },
  ua: {
    kicker: 'Пошук',
    h1: 'Пошук по сайту',
    lead: 'Статті, рецепти, інструменти та сторінки — усе з lenafilatova.co.uk в одному місці.',
    seoTitle: 'Пошук — Lena Filatova',
    seoDesc: 'Шукайте серед статей, рецептів з низьким ГІ та безкоштовних інструментів на lenafilatova.co.uk.',
    label: 'Пошук',
    placeholder: 'Шукати статті, рецепти, інструменти…',
    open: 'Пошук',
    close: 'Закрити пошук',
    submit: 'Шукати',
    all: 'Усі',
    resultsOne: 'результат за запитом',
    resultsMany: 'результатів за запитом',
    none: 'Нічого не знайдено',
    noneHint: 'Спробуйте одне слово — «інсулін», «каша», «ЗГТ» — або перегляньте журнал і всі рецепти.',
    more: 'Показати ще',
    prompt: 'Почніть вводити',
    promptHint: 'Статті, рецепти, інструменти та сторінки — пошук одразу скрізь.',
    loading: 'Шукаю…',
    failed: 'Пошук зараз недоступний. Спробуйте ще раз або перегляньте журнал і рецепти.',
    seeAll: 'Усі результати',
    noscript:
      'Пошук потребує JavaScript. Без нього журнал і рецепти можна переглядати за категоріями.',
    popular: 'Спробуйте',
    popularTerms: ['перименопауза', 'інсулінорезистентність', 'низький ГІ', 'ЗГТ', 'білок'],
  },
};
