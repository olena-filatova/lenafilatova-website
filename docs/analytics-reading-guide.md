# How to read this site's analytics (OPS-431)

**Standing rule for anyone writing the weekly or monthly analytics report.**
Adopted 7 September 2026.

## The one-line version

**Search Console is the source of truth for how much traffic the site gets.
GA4 describes only the minority of visitors who clicked Accept on the cookie
banner, and its channel mix is not trustworthy at all.**

Never present a GA4 user, session or pageview count as "the site's audience".

## Why

`public/cookie-consent.js` loads GA4 only after the visitor clicks Accept:

```js
if (window.__lfGA || localStorage.getItem('lf_cookie') !== 'accepted') return;
```

That is the design working as written, not a bug. But it means everyone who
ignores the banner, scrolls past it, or declines is invisible to GA4 — and on
a content site most visitors never touch a cookie banner at all.

Measured over the 28 days to 2 September 2026:

| | |
|---|---|
| Search Console clicks from Google | 43 |
| GA4 Organic Search sessions | 10 (9 as `google / organic`) |
| GA4 coverage of search traffic | **~23%** |

## The part that is easy to miss: channel mix is worse than volume

62% of GA4 sessions in that window recorded as "Direct" (58 of 93). That is
not plausible for a site with 217 pages earning impressions, and it is not
explained by under-counting alone. The mechanism is this:

1. A visitor arrives from Google on page 1 and ignores the banner. GA4 never
   starts, so that page view does not exist.
2. They click through to page 2 and accept there.
3. GA4 starts on page 2, where `document.referrer` is now
   `lenafilatova.co.uk` — a self-referral, which GA4 discards.
4. The session is filed as **Direct**.

So the visitors GA4 *does* capture are precisely the ones most likely to have
lost their referrer. Volume is undercounted by roughly 4×; attribution is
actively misleading. Treat any GA4 acquisition or channel report as unusable
until this is changed.

## What each tool is good for, as things stand

**Use Search Console for:** how much traffic, which queries, which pages,
impressions, click-through rate, position, and anything about growth over time.

**Use GA4 only for:** on-site behaviour among consenting visitors — engagement
time, scroll depth, which pages get read to the end, internal navigation.
Always label these as "consenting visitors" in the report, never as totals.

**Use GA4 for nothing else.** Not traffic totals, not channel mix, not
"direct vs organic", not conversion rates expressed as a share of all visitors.

## Wording to use in reports

> Traffic figures are from Google Search Console. GA4 figures describe only
> visitors who accepted cookies — currently around a quarter of search traffic
> — and are shown to compare behaviour, not to size the audience.

## If this changes

There is a prepared change on branch `claude/OPS-431-consent-mode` that would
switch the site to Google Consent Mode v2 and recover most of the missing
measurement. It is deliberately unmerged: it sends cookieless pings from
visitors who have not consented, which is Lena's decision to make, not a
technical one. If that branch is ever merged, this guide needs rewriting and
the GA4 numbers before and after must not be compared as a trend.
