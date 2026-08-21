// Helpers over tags.js (OPS-367). Companion to it the way blog-lib.js is to
// blog.js: the vocabulary is data, everything that reasons about it is here.
import { TAGS, TAG_GROUPS } from './tags.js';
import { SITE } from './schema-lib.js';

// A tag label mid-sentence. Lowercasing the whole thing is what a naive
// template does and it turns HRT into "hrt" and ЗГТ into "згт"; leaving it
// alone gives "everything about Blood sugar". So: drop the initial capital
// only on labels that are ordinary words, and leave anything carrying a
// capital further in — an acronym, or a name — exactly as written.
const soften = (label) =>
  /^[^a-zа-яїієґ']*[A-ZА-ЯЇІЄҐ]/.test(label.slice(1)) ? label : label.charAt(0).toLowerCase() + label.slice(1);

export const UI = {
  en: {
    kicker: 'Topic',
    cloudTitle: 'Browse by topic',
    cloudLead: 'Every subject the journal covers, sized by how much there is to read.',
    onThisPost: 'Filed under',
    count: (n) => (n === 1 ? '1 article' : `${n} articles`),
    // Fallback page intro for a tag with no hand-written `intro`.
    intro: (label, n) =>
      `Everything I have written about ${soften(label)} — ${n === 1 ? 'one article' : `${n} articles`}, newest first, each one built on the research rather than the headline.`,
    metaDesc: (label, n) =>
      `${n === 1 ? 'One article' : `${n} articles`} on ${soften(label)} for women over 40 — evidence-based notes from Lena Filatova.`,
    backToBlog: '← All articles',
    allTopics: 'All topics',
  },
  ua: {
    kicker: 'Тема',
    cloudTitle: 'Теми журналу',
    cloudLead: 'Усі теми журналу — розмір показує, скільки про кожну написано.',
    onThisPost: 'Теми статті',
    count: (n) => {
      // Ukrainian needs three plural forms, and "21 стаття" (not "статей") is
      // the one an English-shaped `n === 1` check gets wrong.
      const mod10 = n % 10;
      const mod100 = n % 100;
      if (mod10 === 1 && mod100 !== 11) return `${n} стаття`;
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} статті`;
      return `${n} статей`;
    },
    intro: (label, n) =>
      `Усе, що я написала про «${soften(label)}» — ${UI.ua.count(n)}, найновіші зверху, кожна спирається на дослідження, а не на заголовок.`,
    metaDesc: (label, n) =>
      `${UI.ua.count(n)} про «${soften(label)}» для жінок після 40 — науково обґрунтовані нотатки Lena Filatova.`,
    backToBlog: '← Усі статті',
    allTopics: 'Усі теми',
  },
};

// A tag page with two articles on it is the thin-content page Google is being
// asked to rank, which is the opposite of the point. Small tags still appear in
// the cloud and still have a working page — the page just asks not to be
// indexed until it has enough on it.
export const MIN_INDEXABLE = 3;

export const tagPath = (lang, key) => `${lang === 'ua' ? '/ua' : ''}/blog/tag/${key}/`;
export const tagUrl = (lang, key) => SITE + tagPath(lang, key);

/**
 * The vocabulary, resolved against the real posts and ordered for display.
 * Throws on a slug that no longer exists — a renamed or deleted post would
 * otherwise quietly shrink a tag page instead of failing the build.
 */
export function resolveTags(posts) {
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const order = new Map(TAG_GROUPS.map((g, i) => [g.key, i]));
  return TAGS.map((t) => {
    const resolved = t.posts.map((slug) => {
      const post = bySlug.get(slug);
      if (!post) {
        throw new Error(
          `tags.js: tag "${t.key}" lists "${slug}", which is not a post in blog.js. ` +
            'Remove the slug, or fix it if the post was renamed.'
        );
      }
      return post;
    });
    return { ...t, resolved, count: resolved.length };
  }).sort((a, b) => (order.get(a.group) ?? 99) - (order.get(b.group) ?? 99) || b.count - a.count);
}

/** The tags one post carries, in the vocabulary's own order. */
export function tagsOfPost(post, posts) {
  return resolveTags(posts).filter((t) => t.posts.includes(post.slug));
}

/**
 * Cloud weights. Five steps rather than a continuous scale off the raw count:
 * with counts running 1–16, a linear map makes the largest tag four times the
 * height of the smallest and the cloud stops reading as a paragraph of links.
 * Steps are cut on the range actually present, so the scale still spreads if
 * the vocabulary is edited.
 */
export function withWeights(tags) {
  const counts = tags.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const span = Math.max(1, max - min);
  return tags.map((t) => ({ ...t, weight: 1 + Math.round(((t.count - min) / span) * 4) }));
}

/** CollectionPage + ItemList + BreadcrumbList for one tag page. */
export function tagJsonLd(tag, lang, t) {
  const label = tag[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': tagUrl(lang, tag.key),
        url: tagUrl(lang, tag.key),
        name: label,
        description: tag.intro?.[lang] || t.metaDesc(label, tag.count),
        inLanguage: lang === 'ua' ? 'uk' : 'en',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: tag.count,
          itemListElement: tag.resolved.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p[lang].title,
            url: `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/${p.slug}/`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: lang === 'ua' ? 'Головна' : 'Home', url: `${SITE}${lang === 'ua' ? '/ua/' : '/'}` },
          { name: lang === 'ua' ? 'Журнал' : 'Journal', url: `${SITE}${lang === 'ua' ? '/ua' : ''}/blog/` },
          { name: label },
        ].map((step, i) => {
          const item = { '@type': 'ListItem', position: i + 1, name: step.name };
          if (step.url) item.item = step.url;
          return item;
        }),
      },
    ],
  };
}

// Keeping the vocabulary in its own file is what stops tagging from colliding
// with every open post PR, and the cost is that a new post can be added and
// simply never tagged — it would just quietly stop appearing anywhere but the
// hub. Warns rather than throws: the coming-soon stub has no body yet and is
// legitimately untagged, and failing the build on that would be wrong.
// Once per build, not once per language (the same trick blog-lib uses).
let warnedUntagged = false;
export function warnUntagged(posts) {
  if (warnedUntagged) return;
  warnedUntagged = true;
  const tagged = new Set(TAGS.flatMap((t) => t.posts));
  const missing = posts.filter((p) => !p.comingSoon && !tagged.has(p.slug));
  if (missing.length) {
    console.warn(
      `[tags] ${missing.length} post(s) carry no topic tag, so they are absent from ` +
        `every /blog/tag/ page: ${missing.map((p) => p.slug).join(', ')}. ` +
        'Add each to at least one tag in src/data/tags.js.'
    );
  }
}
