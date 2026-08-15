// RSS 2.0 feed builder, shared by /rss.xml and /ua/rss.xml (OPS-213).
//
// Built from POSTS, the same module the blog pages render from, so a new post
// is in the feed automatically — same contract as sitemap.xml.js.
//
// NOTE: like the sitemap, this always emits the canonical origin, never the
// preview base path. A feed is copied verbatim into readers and newsletter
// tools, so a preview URL in it would outlive the preview.
import { POSTS } from './blog.js';

const SITE = 'https://lenafilatova.co.uk';

const AUTHOR = 'Lena Filatova';

const META = {
  en: {
    path: '/rss.xml',
    blog: '/blog/',
    title: 'Lena Filatova — Journal',
    description:
      'Evidence-based notes on diabetes, perimenopause and health after 40.',
    language: 'en-GB',
  },
  ua: {
    path: '/ua/rss.xml',
    blog: '/ua/blog/',
    title: 'Lena Filatova — Журнал',
    description:
      'Науково обґрунтовані нотатки про діабет, перименопаузу та здоров’я після 40.',
    language: 'uk',
  },
};

// Full XML escaping — unlike the sitemap, which only carries URLs, feed items
// carry editorial prose containing &, quotes and angle brackets.
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// RFC 822 date, which RSS requires. Posts carry a plain YYYY-MM-DD, so the
// time is fixed at midnight UTC rather than invented.
function rfc822(isoDate) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`feed-lib: post has an unparseable date: "${isoDate}"`);
  }
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${DAYS[d.getUTCDay()]}, ${pad(d.getUTCDate())} ${MONTHS[d.getUTCMonth()]} ` +
    `${d.getUTCFullYear()} 00:00:00 +0000`
  );
}

export function buildFeed(lang) {
  const m = META[lang];
  if (!m) throw new Error(`feed-lib: unknown language "${lang}"`);

  const posts = POSTS.filter((p) => p[lang])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // lastBuildDate deliberately tracks the newest post, not the build clock.
  // Stamping it with the build time would mark the feed changed on every
  // deploy — the same signal-destroying problem OPS-208 fixed in the sitemap.
  const newest = posts.length ? posts[0].date : '2026-07-12';

  const items = posts.map((p) => {
    const a = p[lang];
    const url = `${SITE}${m.blog}${p.slug}/`;
    return [
      '    <item>',
      `      <title>${esc(a.title)}</title>`,
      `      <link>${esc(url)}</link>`,
      `      <guid isPermaLink="true">${esc(url)}</guid>`,
      `      <pubDate>${rfc822(p.date)}</pubDate>`,
      `      <description>${esc(a.excerpt || a.lead || '')}</description>`,
      ...(a.cat ? [`      <category>${esc(a.cat)}</category>`] : []),
      `      <dc:creator>${esc(AUTHOR)}</dc:creator>`,
      ...(p.image
        ? [`      <enclosure url="${esc(SITE + p.image)}" type="image/jpeg" length="0"/>`]
        : []),
      '    </item>',
    ].join('\n');
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${esc(m.title)}</title>`,
    `    <link>${SITE}${m.blog}</link>`,
    `    <description>${esc(m.description)}</description>`,
    `    <language>${m.language}</language>`,
    `    <lastBuildDate>${rfc822(newest)}</lastBuildDate>`,
    `    <atom:link href="${SITE}${m.path}" rel="self" type="application/rss+xml"/>`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
