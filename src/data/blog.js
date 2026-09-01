// Blog posts — the full article content for every post, EN + UA.
// Extracted from the live Divhunt SPA (CONTENT.en.articles / CONTENT.ua.articles
// in the old repo's index.html), which was the single source of truth for both
// the SPA blog and the prerendered standalone pages.
//
// Shape: { slug, date, image, cats: [filter keys], comingSoon?, filedUnder?,
//          en: {...}, ua: {...} }
//
// `filedUnder: 'tools'` (OPS-290) — the post is a tool wearing an article's
// clothes: it wraps one of the standalone interactive pages in the explanation
// that page needs. It keeps its /blog/ URL (moving a page Google already ranks
// buys nothing but a tidier path) and its RESOURCES card in site.js is what
// readers navigate to, so it drops out of every place the Journal is
// enumerated: the blog hub, both RSS feeds and the homepage's latest-post slot.
// It stays eligible as a "Keep reading" card on other posts — that is a
// cross-link, not a listing, and the internal links are worth keeping.
//
// Per-language SEO escape hatches — set these rather than shortening the
// editorial headline, which stays the on-page H1:
//   seoTitle — the <title>/og:title/JSON-LD headline. Required whenever the
//     headline exceeds 60 characters; seoTitleOf() in blog-lib.js enforces the
//     limit at build time, so a long headline without one fails the build.
//   metaDesc — the meta description, when `excerpt` is too long or too vague.
//
// Article body is a list of typed blocks:
//   p (inline [text](url) links) · h · quote · img/graph (src, alt, cap) ·
//   table (head, rows) · refs (claim, detail, cite, url) · links (name, url, desc) ·
//   bio (name, img, alt, text)
// Category filter keys/labels live in blog-lib.js (CATS).
//
// ONE FILE PER POST — src/data/posts/<slug>.js, each `export default { … }`.
// Adding a post means adding a new file and nothing else: no shared array to
// insert into, so two posts written in parallel can never conflict. Every post
// used to be appended to a single POSTS literal here, at the same anchor near
// the top; whichever PR merged first left every other one with a conflict, and
// seven of them once queued up behind that.
//
// Order: date descending, which is what the hub, the homepage and both feeds
// want. Posts sharing a date are ordered by the `seq` a post file may export —
// without it same-date posts would come back in whatever order the filesystem
// listed them, and the hub would reshuffle on an unrelated commit. seq is only
// written where a date actually repeats; absent means 0.

const modules = import.meta.glob('./posts/*.js', { eager: true });

export const POSTS = Object.values(modules)
  .map((m) => ({ post: m.default, seq: m.seq ?? 0 }))
  .sort((a, b) => (a.post.date === b.post.date
    ? a.seq - b.seq
    : (a.post.date < b.post.date ? 1 : -1)))
  .map((entry) => entry.post);
