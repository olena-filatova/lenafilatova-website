// Blog helpers: category filters, UI strings, inline-link rendering and
// per-post JSON-LD. Companion to blog.js (the content).
import { personRef, personNode } from './schema-lib.js';

export const SITE = 'https://lenafilatova.co.uk';

// Filter chips on the blog index. `key` matches POSTS[].cats entries;
// a post may carry more than one key (e.g. perimenopause + diabetes).
export const CATS = [
  { key: 'diabetes', en: 'Diabetes', ua: 'Діабет' },
  { key: 'perimenopause', en: 'Perimenopause', ua: 'Перименопауза' },
  { key: 'nutrition', en: 'Nutrition', ua: 'Харчування' },
  { key: 'fitness', en: 'Fitness 40+', ua: 'Фітнес 40+' },
  { key: 'skin', en: 'Skin & beauty', ua: 'Краса та шкіра' },
  { key: 'weight', en: 'Weight loss', ua: 'Схуднення' },
  // OPS-356: GLP-1 coverage had grown to seven posts spread across Weight
  // loss, Perimenopause, Fitness and Diabetes, so a reader who wanted the
  // drugs specifically had no way to see them together — and the posts read
  // as contradictory precisely because they were never side by side.
  { key: 'glp1', en: 'GLP-1', ua: 'GLP-1' },
];

export const UI = {
  en: {
    hubKicker: 'Journal',
    hubH1: 'Evidence-based notes on health after 40',
    hubLead: 'Research-backed articles on diabetes, perimenopause, nutrition and everything the two of them touch.',
    all: 'All',
    featured: 'Featured',
    latest: 'Latest',
    empty: 'No articles in this category yet — more are on the way.',
    byline: 'By Lena Filatova',
    readAlt: '🇺🇦 Читати українською',
    faqTitle: 'Frequently asked questions',
    refsNote: 'What the research says',
    comingSoonBadge: 'Coming soon',
    comingSoonNote: 'I’m still writing this one — the full guide will be here shortly. Thanks for your patience.',
    ctaTitle: 'Get the free guides',
    ctaBody: 'Science-backed notes on diabetes, perimenopause and life after 40 — plus free downloads.',
    ctaBtn: 'Subscribe',
    disclaimer: 'The information on this website is educational and is not medical advice. Please consult your doctor if you have any doubts or further questions.',
    backToBlog: '← All articles',
    backToTools: '← All tools',
    relatedTitle: 'Keep reading',
    tocTitle: 'In this article',
  },
  ua: {
    hubKicker: 'Журнал',
    hubH1: 'Науково обґрунтовані нотатки про здоров’я після 40',
    hubLead: 'Статті, що спираються на дослідження: діабет, перименопауза, харчування — і все, що вони зачіпають.',
    all: 'Усі',
    featured: 'Вибране',
    latest: 'Найновіше',
    empty: 'У цій категорії поки немає статей — скоро з’являться нові.',
    byline: 'Автор: Lena Filatova',
    readAlt: '🇬🇧 Read in English',
    faqTitle: 'Часті запитання',
    refsNote: 'Що кажуть дослідження',
    comingSoonBadge: 'Незабаром',
    comingSoonNote: 'Я ще працюю над цією статтею — повний гайд з’явиться тут найближчим часом. Дякую за терпіння.',
    ctaTitle: 'Отримайте безкоштовні гайди',
    ctaBody: 'Науково обґрунтовані нотатки про діабет, перименопаузу та життя після 40 — плюс безкоштовні файли.',
    ctaBtn: 'Підписатися',
    disclaimer: 'Інформація на цьому вебсайті має освітній характер і не є медичною порадою. Зверніться до лікаря в разі сумнівів або додаткових запитань.',
    backToBlog: '← Усі статті',
    backToTools: '← Усі інструменти',
    relatedTitle: 'Читайте також',
    tocTitle: 'У цій статті',
  },
};

// The author signature that closes every article (OPS-336). It used to be an
// optional per-post `bio` block, so only 12 of 48 posts were signed; it now
// lives here once and BlogPostBody renders it on every post. A post that still
// carries its own `bio` block keeps that one instead of getting two.
export const AUTHOR_BIO = {
  en: {
    name: 'Lena Filatova',
    img: '/images/lena-filatova-author.jpg',
    alt: 'Lena Filatova, women\u2019s health writer living with type 1 diabetes',
    text: 'Lena Filatova has lived with type 1 diabetes for 23 years. She writes about women\u2019s health, perimenopause and diabetes management at lenafilatova.co.uk.',
  },
  ua: {
    name: 'Lena Filatova',
    img: '/images/lena-filatova-author.jpg',
    alt: 'Lena Filatova, \u0430\u0432\u0442\u043e\u0440\u043a\u0430 \u043f\u0440\u043e \u0436\u0456\u043d\u043e\u0447\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f, \u0449\u043e \u0436\u0438\u0432\u0435 \u0437 \u0434\u0456\u0430\u0431\u0435\u0442\u043e\u043c 1 \u0442\u0438\u043f\u0443',
    text: 'Lena Filatova \u0436\u0438\u0432\u0435 \u0437 \u0434\u0456\u0430\u0431\u0435\u0442\u043e\u043c 1 \u0442\u0438\u043f\u0443 \u0432\u0436\u0435 23 \u0440\u043e\u043a\u0438. \u0412\u043e\u043d\u0430 \u043f\u0438\u0448\u0435 \u043f\u0440\u043e \u0436\u0456\u043d\u043e\u0447\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f, \u043f\u0435\u0440\u0438\u043c\u0435\u043d\u043e\u043f\u0430\u0443\u0437\u0443 \u0442\u0430 \u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0431\u0435\u0442\u0443 \u043d\u0430 lenafilatova.co.uk.',
  },
};

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Article paragraphs carry markdown-style [text](url) links. Internal hrefs
// (/blog/…, /ua/blog/…) get the deploy base prefixed; external ones open in
// a new tab with the same ↗ affordance as the live standalone pages.
export function renderInline(text, base = '/') {
  return escapeHtml(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    if (href.startsWith('/')) {
      const local = base.replace(/\/$/, '') + href;
      return `<a href="${local}">${label}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  });
}

// --- article contents (OPS-365) ---------------------------------------------
// The section list that rides in the right margin of a long article. Anchors
// are slugged from the heading itself rather than numbered, so a link someone
// copies out of the rail still says what it points at — in Ukrainian too, which
// is why the character class is \p{L} and not [a-z].
const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/['\u2019"\u201c\u201d]/g, '')   // apostrophes join the word, they don't break it
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');

// Below this a contents list is furniture rather than navigation: the news
// digests are one section long, and half the archive is a news digest.
export const TOC_MIN = 3;

// Returns the list plus the id for each heading, keyed by its index in
// `blocks` — the article template needs both, and they have to agree or every
// link in the rail is a dead anchor.
export function articleToc(a, t) {
  const ids = new Map();
  const items = [];
  const used = new Map();
  (a.blocks || []).forEach((b, i) => {
    if (b.t !== 'h') return;
    // A heading of nothing but punctuation slugs to '' — fall back to its
    // position so the anchor is still unique and still resolves.
    const base = slugify(b.text) || `section-${items.length + 1}`;
    // Two sections in one article can legitimately share a heading
    // ("What the study found"); the second one gets -2.
    const n = (used.get(base) || 0) + 1;
    used.set(base, n);
    const id = n === 1 ? base : `${base}-${n}`;
    ids.set(i, id);
    items.push({ id, text: b.text });
  });
  const show = items.length >= TOC_MIN;
  // The FAQ is a section of the article like the others — it just isn't in the
  // block list, so it has to be added by hand.
  if (show && a.faq && a.faq.length) items.push({ id: 'faq', text: t.faqTitle });
  return { ids, items, show };
}

// Related posts for the bottom of an article: posts sharing a category come
// first (more shared categories win), newest first within a tier, topped up
// with other recent posts so there are always `limit` cards. The current post
// and the coming-soon stub are excluded.
export function relatedPosts(post, posts, limit = 3) {
  const cats = new Set(post.cats || []);
  return posts
    .filter((p) => p.slug !== post.slug && !p.comingSoon)
    .map((p) => ({ p, shared: (p.cats || []).filter((c) => cats.has(c)).length }))
    .sort((x, y) => y.shared - x.shared || y.p.date.localeCompare(x.p.date))
    .slice(0, limit)
    .map((x) => x.p);
}

export const langUrl = (lang, slug) =>
  `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/${slug}/`;

// The /blog/ featured band. Editorial, hand-picked: a post opts in with
// `featured: true` in blog.js. Four is the design ceiling — the newest of them
// becomes the large lead card and the rest render as hairline rows beside it,
// so which post leads is controlled by its date, not by array order.
//
// FOUR IS ALSO THE TARGET, not just the cap. On desktop the rows divide the
// lead's full height between them: with three rows that lands close to their
// natural size, with two they stretch far enough to look marooned. Dropping to
// two is legible but airy; the band was raised from three to four when Lena
// pointed out the empty block down the right (OPS-299 follow-up).
//
// This set does NOT drive the homepage. The homepage band shows the newest post
// (see HomeBody.astro) — they are separate jobs and were conflated until
// OPS-299, which left a June post pinned to the homepage for two months.
export const FEATURED_MAX = 4;

// Warns rather than throws: a stale or empty featured set is an editorial
// matter, not a broken build, and failing the deploy over it would strand Lena
// with a site that will not publish. The warning is aimed at whoever is next in
// the build log. The standing reminder for humans lives in CLAUDE.md.
let warnedFeatured = false;

export function featuredPosts(sorted) {
  const featured = sorted.filter((p) => p.featured && !p.comingSoon).slice(0, FEATURED_MAX);
  // Same once-per-build guard as warnAssetGaps: the hub renders for both
  // languages, so every warning below used to print twice (OPS-360).
  if (warnedFeatured) return featured;
  warnedFeatured = true;

  if (!featured.length) {
    console.warn(
      '[blog] No post carries `featured: true` — the /blog/ featured band will not render at all. ' +
        `Flag ${FEATURED_MAX} posts in src/data/blog.js.`
    );
    return featured;
  }

  if (featured.length === 1) {
    console.warn(
      '[blog] Only one post is flagged `featured: true`, so the /blog/ band falls back to its ' +
        `one-card .solo layout instead of the designed lead-plus-rows band. Flag 3-${FEATURED_MAX} in src/data/blog.js.`
    );
  } else if (featured.length < 4) {
    console.warn(
      `[blog] Only ${featured.length} posts are flagged \`featured: true\`. The band still renders, but ` +
        `its rows stretch to fill the lead's height and get airy below four. Flag ${FEATURED_MAX} in src/data/blog.js.`
    );
  }

  // "Stale" = every pick sits outside the ten most recent posts. Cheap proxy,
  // and it is exactly the state OPS-299 was raised to fix.
  const recent = new Set(sorted.slice(0, 10).map((p) => p.slug));
  if (!featured.some((p) => recent.has(p.slug))) {
    console.warn(
      `[blog] The featured set is stale — none of [${featured.map((p) => p.slug).join(', ')}] ` +
        'is among the 10 newest posts. Evergreen picks are fine, but check this is still deliberate.'
    );
  }

  return featured;
}

// Build-time asset checks (OPS-360). Both of the gaps below are SILENT: nothing
// throws, nothing looks broken in the build log, and the rendered page appears
// perfect — a missing hero just shows a broken image to visitors, and a missing
// `imageAlt` quietly falls back to repeating the headline. Each was found only
// because somebody happened to look, and the hero backlog had to be cleared
// three separate times (OPS-315) before this check existed.
//
// Warnings, never throws — same reasoning as featuredPosts() above: an asset gap
// is an editorial matter, and failing the deploy over one would strand Lena with
// a site that will not publish.
//
// IMAGES ARE SUPPLIED BY HAND. Lena sources every hero herself, so the fix for a
// missing file is never to generate one — it is to add the filename to OPS-315
// with a search brief (1200x675 JPEG, under ~200 KB) and the alt text. See
// CLAUDE.md for the brief format.

// Printed once per build rather than once per page. The hub renders twice (EN
// and UA) and would otherwise repeat every warning.
let warnedAssets = false;

export function warnAssetGaps(posts, dims) {
  if (warnedAssets) return;
  warnedAssets = true;

  // A hero is "missing" when its path is absent from image-dims.json. That
  // manifest is generated by scripts/generate-image-dims.sh from the actual
  // contents of public/images, so an absent key means either the file was never
  // added or the manifest was not regenerated after adding it — and both need
  // fixing before deploy, so one check covers them.
  const noHero = posts.filter((p) => p.image && !dims[p.image]);
  if (noHero.length) {
    console.warn(
      `[blog] ${noHero.length} post(s) reference a hero image that is not in image-dims.json, ` +
        'so it is either missing from public/images or the manifest is stale. A missing file ' +
        'ships a broken image at the top of the article, a 404 og:image that kills every social ' +
        'preview, and the same dead URL several times in the JSON-LD:\n' +
        noHero.map((p) => `         ${p.image}  (${p.slug})`).join('\n') +
        '\n       Fix: if the file is there, run scripts/generate-image-dims.sh in a CLEAN worktree ' +
        '(it globs public/images and a dirty checkout pulls in strays). If it is not, add the ' +
        'filename to OPS-315 with a search brief and alt text — heroes are supplied by hand, ' +
        'never generated.'
    );
  }

  // `imageAlt` (PR #150) was only applied to posts written after it landed, so
  // most of the corpus falls back to `a.title` in BlogPostBody — which makes a
  // screen reader announce the headline twice and wastes the slot for image
  // search. Tracked as OPS-360.
  const noAlt = posts.filter((p) => !p.en?.imageAlt || !p.ua?.imageAlt);
  if (noAlt.length) {
    const both = noAlt.filter((p) => !p.en?.imageAlt && !p.ua?.imageAlt).length;
    console.warn(
      `[blog] ${noAlt.length} post(s) have no \`imageAlt\`${both < noAlt.length ? ` (${both} in both languages)` : ''}, ` +
        'so their hero falls back to repeating the headline as alt text. Write it from the actual ' +
        'image file, not from the slug or the title — one sentence, no "image of" prefix, describe ' +
        'the frame rather than the argument. Backlog and house rules are on OPS-360.' +
        (noAlt.length <= 8
          ? '\n' + noAlt.map((p) => `         ${p.slug}`).join('\n')
          : `\n       Oldest first: ${noAlt.slice(-3).map((p) => p.slug).join(', ')} … run the` +
            ' one-liner on OPS-360 for the full list.')
    );
  }
}

// Google truncates the SERP title at roughly 600px, which for both Latin and
// Cyrillic lands near 60 characters. Headlines here are editorial and often
// longer, so a post sets `seoTitle` to give the <title> tag its own wording.
export const TITLE_LIMIT = 60;

// Throws rather than silently shipping a title Google will cut mid-word.
export function seoTitleOf(a) {
  const t = a.seoTitle || a.title;
  if (t.length > TITLE_LIMIT) {
    throw new Error(
      `Blog title is ${t.length} chars, over the ${TITLE_LIMIT}-char SERP limit: "${t}". ` +
        'Add a shorter `seoTitle` to this post in blog.js — the long headline stays as the H1.'
    );
  }
  return t;
}

// Mirrors the JSON-LD the prerendered standalone pages shipped:
// Article + BreadcrumbList (+ FAQPage when the post has an FAQ).
export function buildJsonLd(post, lang) {
  const a = post[lang];
  const url = langUrl(lang, post.slug);
  const graph = [
    {
      '@type': 'Article',
      headline: seoTitleOf(a),
      description: a.metaDesc || a.excerpt,
      articleSection: post.en.cat,
      inLanguage: lang === 'ua' ? 'uk' : 'en',
      image: SITE + post.image,
      mainEntityOfPage: url,
      datePublished: post.date,
      // OPS-301: `dateModified` is the field Google reads for freshness, and on
      // a site whose pitch is current research it is worth emitting. Set
      // `updated: 'YYYY-MM-DD'` on a post in blog.js when you revise it; until
      // then it equals datePublished, which is true and is not a claim of
      // maintenance that never happened.
      dateModified: post.updated || post.date,
      // OPS-301: reference the one Person entity rather than inlining an
      // anonymous author on every article. See schema-lib.js.
      author: personRef(),
      publisher: personRef(),
    },
    personNode(),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: lang === 'ua' ? 'Головна' : 'Home', item: SITE + (lang === 'ua' ? '/ua/' : '/') },
        { '@type': 'ListItem', position: 2, name: lang === 'ua' ? 'Журнал' : 'Journal', item: `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/` },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
  ];
  if (a.faq && a.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: a.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
