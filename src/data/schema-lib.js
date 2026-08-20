// Shared JSON-LD helpers (OPS-301).
//
// Two jobs:
//
// 1. ONE author entity. The homepage (site.js homeJsonLd) declares the
//    authoritative Person node at `${SITE}/#person` with the full description,
//    jobTitle, knowsAbout and sameAs. Every other page that names Lena as an
//    author references that same @id instead of inlining an anonymous
//    `{"@type":"Person","name":"Lena Filatova"}`, so the 48 articles and 86
//    recipes resolve to a single entity rather than to a hundred strangers who
//    happen to share a name. That matters for health content, where Google
//    weighs who wrote a thing.
//
//    A bare `{"@id": ...}` reference is legal but leaves the node undefined on
//    the page that carries it, so `personNode()` emits a compact but
//    self-describing copy alongside. Same @id, fewer fields — a consumer that
//    only ever sees one article page still learns who the author is, and one
//    that has also crawled the homepage merges the two.
//
// 2. Hub pages describe their collection. /blog/, /recipes/ and /resources/
//    previously emitted no structured data at all, so an 86-recipe index and a
//    48-article journal looked, to a crawler, like undifferentiated pages.

export const SITE = 'https://lenafilatova.co.uk';

export const PERSON_ID = `${SITE}/#person`;

/** Reference to the canonical Person node. Use for `author` and `publisher`. */
export const personRef = () => ({ '@id': PERSON_ID });

/**
 * Compact definition of the canonical Person, for pages that reference it but
 * are not the homepage. Deliberately a subset of the homepage node — the two
 * never disagree because everything here is language-independent.
 */
export const personNode = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Lena Filatova',
  url: `${SITE}/`,
  image: `${SITE}/images/lena-filatova-author.jpg`,
});

const homeName = (lang) => (lang === 'ua' ? 'Головна' : 'Home');
const homeUrl = (lang) => `${SITE}${lang === 'ua' ? '/ua/' : '/'}`;

/**
 * BreadcrumbList from Home down through `trail`.
 * @param {'en'|'ua'} lang
 * @param {{name: string, url?: string}[]} trail — the last entry may omit url.
 */
export function breadcrumb(lang, trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: homeName(lang), url: homeUrl(lang) }, ...trail].map((step, i) => {
      const item = { '@type': 'ListItem', position: i + 1, name: step.name };
      if (step.url) item.item = step.url;
      return item;
    }),
  };
}

/**
 * CollectionPage + ItemList + BreadcrumbList for a hub page.
 *
 * `items` is ordered as the page orders them, and each entry is emitted as a
 * position + url pair. Names are included because a bare url list tells a
 * crawler the size of the collection but nothing about its contents.
 *
 * @param {object} o
 * @param {'en'|'ua'} o.lang
 * @param {string} o.name         — the collection's name
 * @param {string} o.description
 * @param {string} o.url          — absolute, with trailing slash
 * @param {string} o.crumb        — the hub's own breadcrumb label
 * @param {{name: string, url: string}[]} o.items
 */
export function hubJsonLd({ lang, name, description, url, crumb, items }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name,
        description,
        inLanguage: lang === 'ua' ? 'uk' : 'en',
        isPartOf: { '@id': `${SITE}${lang === 'ua' ? '/ua/' : '/'}#website` },
        // The collection is hers; `creator` is accurate where `about` would not
        // be — these pages are not *about* Lena, they are authored by her.
        creator: personRef(),
        mainEntity: { '@id': `${url}#list` },
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#list`,
        name,
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          url: it.url,
        })),
      },
      breadcrumb(lang, [{ name: crumb, url }]),
      personNode(),
    ],
  };
}
