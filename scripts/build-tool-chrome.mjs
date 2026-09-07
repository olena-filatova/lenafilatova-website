#!/usr/bin/env node
/**
 * OPS-303 — give the standalone tool pages the site's chrome.
 *
 * The ten pages under `public/` (5 EN + 5 UA) are hand-written HTML that ships
 * verbatim: Astro copies `public/` across untouched, so these files can't use a
 * layout, a component or `src/styles/global.css`. Until this script they had a
 * two-link masthead, no footer, no signup, no cookie bar — and therefore no
 * GA4, because GA is loaded by `cookie-consent.js` only after consent. They are
 * the pages with the best search traction on the site, so that was the whole
 * measurement blind spot and the whole conversion dead end in one place.
 *
 * Rather than paste the same block into ten files and hope they stay in step,
 * this script GENERATES the block from the same `src/data/site.js` the Astro
 * components render from, and writes it between marker comments. Re-running it
 * replaces what is between the markers, so it is idempotent and the tool pages'
 * own markup either side is never touched.
 *
 *   node scripts/build-tool-chrome.mjs           # write
 *   node scripts/build-tool-chrome.mjs --check   # verify, exit 1 if stale
 *
 * The output is committed — it is not a build-time step. `astro build` must not
 * rewrite files in `public/`, and a checked-in result is what makes the diff
 * reviewable. Re-run this after editing NAV / FOOTER / HOME / SOCIALS in
 * src/data/site.js, or after editing anything in this file.
 *
 * FRAMED PAGES. `t1d-cure-trials` is also embedded as an iframe inside its blog
 * post, and the comparison tools post their height to a parent for the same
 * reason. Chrome inside a frame would mean a second wordmark mid-article and a
 * duplicate GA4 pageview, so a one-line script in the <head> stamps
 * `data-lf-framed` on <html> before the body is parsed, the CSS hides every
 * generated block under that flag, and cookie-consent.js is only fetched when
 * the page is top-level. The markup is still in the HTML either way, so the
 * footer's internal links are there for a crawler — which is the point.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  NAV, FOOTER, HOME, SOCIALS, SOCIAL_ICONS, LEGAL_SLUGS, MAILCHIMP,
} from '../src/data/site.js';
// search-ui.js, NOT search-lib.js: this script runs on plain node, and
// search-lib imports blog.js, whose `import.meta.glob` is a Vite-only
// transform. That import is what silently killed this script when posts
// moved to one file each (OPS-414).
import { SEARCH_UI } from '../src/data/search-ui.js';
import { HONEYPOT, MIN_DWELL_MS } from '../src/scripts/form-guard.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

/* The ten pages. `slug` is the EN directory; the UA page is `${slug}-ua`, which
   is also what each page's own hreflang pair already declares. `maxw` mirrors
   the `max-width` that page's own `.tool-head .in` uses, so the footer lines up
   with the content above it instead of running wider or narrower than it. */
/* `navBreak` is the viewport below which the five nav items and the Subscribe
   button fold into the burger. It is a property of the BAR's width, not the
   viewport's: `.tool-head .in` is capped at `maxw`, so on a page whose column is
   680px the bar never gets wide enough for the nav however wide the window is —
   `navBreak: null` means "always folded" and is exactly that case. The nav links
   are in the burger's markup either way, so nothing is hidden from a crawler. */
const TOOLS = [
  { slug: 'aid-comparison', maxw: '1120px', navBreak: '899.98px' },
  { slug: 'cgm-comparison', maxw: '1120px', navBreak: '899.98px' },
  { slug: 'carb-gi-table', maxw: '1120px', navBreak: '899.98px' },
  { slug: 't1d-cure-trials', maxw: '900px', navBreak: '899.98px' },
  { slug: 'blood-sugar-investigator', maxw: '680px', navBreak: null },
];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Language-scoped link base: '/' for EN, '/ua/' for UA. Matches the `L` every
   Astro component builds, minus the deploy-base prefix — these files are served
   from the domain root and can't see import.meta.env. */
const base = (lang) => (lang === 'ua' ? '/ua/' : '/');

const NAV_KEYS = ['blog', 'resources', 'recipes', 'about', 'contact'];
/* The burger's accessible name. NAV has no word for it — the Astro header
   hard-codes the English "Menu" because its burger only ever appears next to
   an English-labelled control — but these pages are half Ukrainian, so it is
   spelled in both. */
const MENU_LABEL = { en: 'Menu', ua: 'Меню' };
const legalSlugs = Object.values(LEGAL_SLUGS);
// Same mapping Footer.astro uses: footer category links open the blog with that
// filter pre-selected. null = no matching blog category, so a plain blog link.
const CAT_KEYS = ['perimenopause', 'nutrition', null, 'diabetes'];

// ── header ────────────────────────────────────────────────────────────────
// Replaces the wordmark-plus-one-link bar. The brand and the "all tools" link
// are kept (the link is now the Resources nav item), and the five-item nav,
// the EN/UA toggle and a burger for narrow screens are added. Nav and toggle
// are plain links: no search panel, because the site search needs the Astro
// bundle's index — the spelled-out Search link in the burger and the footer
// goes to /search/ instead.
function header({ slug, lang }) {
  const n = NAV[lang];
  const s = SEARCH_UI[lang];
  const L = base(lang);
  const link = (k) => `<a href="${L}${k}/">${esc(n[k])}</a>`;
  const items = NAV_KEYS.map(link).join('\n      ');
  const mobileItems = NAV_KEYS.map(link).join('\n    ');
  const enHref = `/${slug}/`;
  const uaHref = `/${slug}-ua/`;
  return `<header class="tool-head" data-lf-chrome>
  <div class="in">
    <a class="brand" href="${L}"><span class="mark">lf</span>Lena Filatova</a>
    <nav class="lf-nav">
      ${items}
    </nav>
    <div class="lf-actions">
      <span class="lf-lang">
        <a href="${enHref}"${lang === 'en' ? ' class="on" aria-current="page"' : ''}>EN</a>
        <a href="${uaHref}"${lang === 'ua' ? ' class="on" aria-current="page"' : ''}>UA</a>
      </span>
      <a class="lf-btn lf-sub" href="#newsletter">${esc(n.subscribe)}</a>
      <button class="lf-burger" id="lfNavToggle" type="button" aria-label="${esc(MENU_LABEL[lang])}" aria-expanded="false" aria-controls="lfMobileNav">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <nav class="lf-mobile-nav" id="lfMobileNav" hidden>
    ${mobileItems}
    <a href="${L}search/">${esc(s.label)}</a>
    <a class="lf-btn" href="#newsletter">${esc(n.subscribe)}</a>
  </nav>
</header>`;
}

// ── newsletter ────────────────────────────────────────────────────────────
// The same block Newsletter.astro renders, from the same HOME[lang] strings and
// the same MAILCHIMP endpoint, and driven by the same public/lf-newsletter.js.
// Class names are shared with the Astro pages on purpose (.nlform, .nl-row,
// .nl-sent, .nl-msg) — that script selects on them.
function newsletter(lang) {
  const t = HOME[lang];
  const action = `${MAILCHIMP.endpoint}?u=${MAILCHIMP.u}&id=${MAILCHIMP.list}`;
  const groupField = `group[${MAILCHIMP.langGroup}][${MAILCHIMP.langValue[lang] ?? 1}]`;
  return `<section class="lf-nl" id="newsletter" data-lf-chrome>
  <div class="lf-wrap">
    <div class="lf-nl-box">
      <p class="lf-nl-kicker">${esc(t.nlTitleKicker)}</p>
      <h2>${esc(t.nlTitle)}</h2>
      <p class="lf-nl-sub">${esc(t.nlSub)}</p>
      <form class="nlform" method="post" action="${esc(action)}"
            data-mc-action="${esc(action)}"
            data-mc-dupe="${esc(t.nlDupe)}"
            data-mc-err="${esc(t.nlErr)}"
            data-mc-busy="${esc(t.nlBusy)}"
            data-mc-btn="${esc(t.nlBtn)}"
            data-mc-dwell="${MIN_DWELL_MS}"
            data-mc-trap="${esc(HONEYPOT)}"
            data-mc-lang="${lang}"
            data-mc-list="newsletter">
        <!-- Set from the page's language, never by the visitor. -->
        <input type="hidden" name="${esc(groupField)}" value="1" />
        <div class="nl-row">
          <input type="email" name="EMAIL" placeholder="${esc(t.nlEmail)}" required autocomplete="email" />
          <button type="submit" class="lf-btn">${esc(t.nlBtn)}</button>
        </div>
        <!-- The Privacy Policy anchor is inside nlConsent, which is ours, never
             visitor input. The link sits inside the label on purpose: per the
             HTML spec a label's activation behaviour does not run for clicks on
             interactive descendants, so following it cannot tick the box. -->
        <label class="lf-nl-consent"><input type="checkbox" required /> <span>${t.nlConsent}</span></label>
        <!-- Our honeypot (OPS-235). Hidden from people, enforced in the browser. -->
        <div class="lf-hp" aria-hidden="true">
          <label for="lf-nl-trap">${esc(t.nlTrap)}</label>
          <input type="text" id="lf-nl-trap" name="${esc(HONEYPOT)}" tabindex="-1" autocomplete="off" />
        </div>
        <!-- Mailchimp's own honeypot: must be submitted, and must stay empty. -->
        <div aria-hidden="true" style="position:absolute;left:-5000px">
          <input type="text" name="${esc(MAILCHIMP.botField)}" tabindex="-1" value="" />
        </div>
      </form>
      <p class="nl-sent lf-nl-sent" hidden>${esc(t.nlSent)}</p>
      <p class="nl-msg lf-nl-msg" role="status" aria-live="polite" hidden></p>
    </div>
  </div>
</section>`;
}

// ── footer ────────────────────────────────────────────────────────────────
// Structurally the same four columns as Footer.astro, from the same FOOTER
// strings and the same SOCIAL_ICONS glyphs.
function footer(lang) {
  const t = FOOTER[lang];
  const n = NAV[lang];
  const s = SEARCH_UI[lang];
  const L = base(lang);
  const catHref = (i) => `${L}blog/${CAT_KEYS[i] ? `?cat=${CAT_KEYS[i]}` : ''}`;
  const socials = SOCIALS.map((x) => {
    const g = SOCIAL_ICONS[x.name.toLowerCase()];
    const inner = g
      ? `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${g}" /></svg>`
      : esc(x.name[0]);
    return `<a href="${esc(x.href)}" aria-label="${esc(x.name)}" target="_blank" rel="noopener">${inner}</a>`;
  }).join('\n          ');
  const explore = [
    [`${L}blog/`, n.blog], [`${L}resources/`, n.resources], [`${L}recipes/`, n.recipes],
    [`${L}about/`, n.about], [`${L}contact/`, n.contact], [`${L}search/`, s.label],
  ].map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('\n          ');
  const cats = t.cats.map((c, i) => `<li><a href="${catHref(i)}">${esc(c)}</a></li>`).join('\n          ');
  const legal = t.legalLinks
    .map((c, i) => `<li><a href="${L}${legalSlugs[i]}/">${esc(c)}</a></li>`)
    .join('\n          ');
  return `<footer class="lf-footer" data-lf-chrome>
  <div class="lf-wrap">
    <div class="lf-foot-top">
      <div>
        <a class="lf-foot-brand" href="${L}"><span class="mark">lf</span>Lena Filatova</a>
        <p class="lf-blurb">${esc(t.blurb)}</p>
        <h4>${esc(t.follow)}</h4>
        <div class="lf-socials">
          ${socials}
        </div>
      </div>
      <div>
        <h4>${esc(t.explore)}</h4>
        <ul>
          ${explore}
        </ul>
      </div>
      <div>
        <h4>${esc(t.categories)}</h4>
        <ul>
          ${cats}
        </ul>
      </div>
      <div>
        <h4>${esc(t.legal)}</h4>
        <ul>
          ${legal}
        </ul>
        <h4 class="lf-h4-gap">${esc(t.contact)}</h4>
        <ul><li><a href="mailto:lena@lenafilatova.co.uk">lena@lenafilatova.co.uk</a></li></ul>
      </div>
    </div>
    <div class="lf-foot-legal">
      <p>${esc(t.company)}</p>
      <p>${esc(t.disclaimer)}</p>
      <p>${esc(t.aiNotice.pre)}<a href="${L}contact/">${esc(t.aiNotice.link)}</a>${esc(t.aiNotice.post)}</p>
    </div>
  </div>
</footer>`;
}

// ── cookie bar ────────────────────────────────────────────────────────────
// #cookieBar / #cookieAccept / #cookieDecline are the ids public/cookie-consent.js
// looks for; the shared `lf_cookie` localStorage key means a visitor who already
// chose on an Astro page is never asked again here, and vice versa.
const COOKIE_COPY = {
  en: { text: "This site uses cookies to keep it working and to understand how it's used.", accept: 'Accept', decline: 'Decline', policy: 'Cookie Policy' },
  ua: { text: 'Цей сайт використовує файли cookie, щоб працювати та розуміти, як ним користуються.', accept: 'Прийняти', decline: 'Відхилити', policy: 'Політика cookie' },
};

function cookieBar(lang) {
  const t = COOKIE_COPY[lang];
  return `<div class="lf-cookie" id="cookieBar" hidden data-lf-chrome>
  <div class="lf-cookie-in">
    <p>${esc(t.text)} <a href="${base(lang)}cookies/">${esc(t.policy)}</a></p>
    <div class="lf-cookie-actions">
      <button class="lf-btn" id="cookieAccept" type="button">${esc(t.accept)}</button>
      <button class="lf-cookie-decline" id="cookieDecline" type="button">${esc(t.decline)}</button>
    </div>
  </div>
</div>`;
}

// ── language suggestion (OPS-369) ─────────────────────────────────────────
// The same offer LangSuggest.astro makes on the Astro pages, for the five
// English tool pages — which is not a detail: /cgm-comparison is the second
// biggest page on the site by impressions, so leaving it out would leave the
// hole exactly where the traffic is.
//
// English pages only; the Ukrainian twin has nothing to suggest. Written in
// Ukrainian even for a Russian-speaking reader, who will have no trouble with
// it — shipping Russian copy on a Ukrainian health brand is an editorial call,
// not a technical one. A link, never a redirect.
function langBar(lang, slug) {
  if (lang !== 'en') return '';
  return `<div class="lf-langbar" id="lfLangBar" hidden data-lf-chrome>
  <div class="lf-langbar-in">
    <p>Є українська версія цієї сторінки.</p>
    <a href="/${slug}-ua/" id="lfLangGo">Читати українською</a>
    <button type="button" id="lfLangClose" aria-label="Закрити">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>
    </button>
  </div>
</div>
<script>
(function () {
  if (window.self !== window.top) return;   // framed: the chrome is hidden anyway
  var bar = document.getElementById('lfLangBar');
  if (!bar) return;
  var KEY = 'lf_lang_hint';
  try { if (localStorage.getItem(KEY) === 'dismissed') return; } catch (e) {}
  function remember() { try { localStorage.setItem(KEY, 'dismissed'); } catch (e) {} }
  // The word boundary in the test below needs a DOUBLE backslash in this file:
  // the whole block is a JS template literal, so a single one is consumed here
  // and the page ships a backspace character instead.
  var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
  if (!langs.some(function (l) { return /^(uk|ru)\\b/i.test(l); })) return;
  bar.hidden = false;
  document.getElementById('lfLangClose').addEventListener('click', function () { bar.hidden = true; remember(); });
  document.getElementById('lfLangGo').addEventListener('click', remember);
})();
</script>`;
}

// ── scripts ───────────────────────────────────────────────────────────────
// cookie-consent.js is injected rather than written as a plain <script src>, so
// a framed copy of the page never loads GA4 on top of the pageview its parent
// already sent. The burger is the only other behaviour the chrome needs.
const footScripts = `<script>
(function () {
  if (window.self !== window.top) return;   // framed: no chrome, no analytics
  var s = document.createElement('script');
  s.src = '/cookie-consent.js';
  s.defer = true;
  document.head.appendChild(s);
  var btn = document.getElementById('lfNavToggle');
  var nav = document.getElementById('lfMobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.hidden;
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.classList.toggle('open', open);
  });
})();
</script>
<script defer src="/lf-newsletter.js"></script>`;

// ── styles ────────────────────────────────────────────────────────────────
// Everything is `lf-` prefixed. The tool pages are five different hand-written
// stylesheets that between them already own .brand, .back-link, .footer, .nav,
// .card, .chip and .btn, so nothing here may reuse a bare name. The tokens
// (--accent, --ink, --paper2, --rule, --font-head …) are declared in every one
// of the ten pages' own :root — verified — so the chrome inherits the page's
// palette rather than restating it.
function styles({ maxw, navBreak }) {
  /* The folded (burger) state. Wrapped in a media query on pages whose bar is
     wide enough to hold the nav at desktop widths, and applied unconditionally
     on the one whose bar never is. */
  const FOLDED = `  .lf-nav, .lf-sub { display: none; }
  .lf-burger { display: block; }
  .lf-mobile-nav:not([hidden]) {
    display: grid; gap: 4px;
    padding: 12px clamp(18px, 3.5vw, 40px) 18px;
    border-top: 1px solid var(--line);
  }
  .lf-mobile-nav a {
    color: var(--ink); text-decoration: none; font-weight: 700; font-size: 12px;
    letter-spacing: 0.16em; text-transform: uppercase; padding: 11px 0;
  }
  .lf-mobile-nav a:hover { color: var(--accent); }
  .lf-mobile-nav .lf-btn { margin-top: 8px; justify-self: start; color: #fff; }`;
  const foldedRules = navBreak
    ? `@media (max-width: ${navBreak}) {\n${FOLDED}\n}`
    : `/* This page's content column is 680px, so its masthead is never wide\n   enough for the nav — it is folded at every width. */\n${FOLDED.replace(/^ {2}/gm, '')}`;

    /* The language offer (OPS-369) — a strip above the masthead that scrolls
     away with the page. `display:flex` on the inner would beat the hidden
     attribute if it were on the bar itself, so the bar stays display:block.
     These rules ship to the UA pages too, which never render the bar: the head
     block is generated once per TOOL and written to both of its language files,
     and threading a language through it to save ~800 bytes of unmatched CSS
     would cost more than it saves. The markup is English-only, which is the
     part that matters. */
  const LANGBAR = `
.lf-langbar[hidden] { display: none !important; }
.lf-langbar { display: block; background: var(--ink); color: #F1E6EE; padding: 9px 24px; }
.lf-langbar-in { width: 100%; max-width: var(--lf-maxw); margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; gap: 4px 16px; }
.lf-langbar p { margin: 0; flex: 1 1 auto; min-width: 0; font-family: var(--font-body); font-size: 13px; line-height: 1.5; }
.lf-langbar a { color: #fff; text-decoration: none; flex: none; font-family: var(--font-body); font-size: 13px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: 2px solid var(--accent); padding-bottom: 2px; }
.lf-langbar a:hover { border-bottom-color: #fff; }
.lf-langbar a:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.lf-langbar button { flex: none; border: 0; background: transparent; color: #C9B2C2; width: 32px; height: 32px; padding: 6px; cursor: pointer; display: grid; place-items: center; }
.lf-langbar button svg { width: 100%; height: 100%; }
.lf-langbar button:hover { color: #fff; }
.lf-langbar button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
@media (max-width: 560px) {
  .lf-langbar { padding: 9px 16px; }
  .lf-langbar-in { gap: 2px 12px; }
  .lf-langbar p { flex: 1 1 100%; }
}`;

return `:root { --lf-maxw: ${maxw}; }

/* Framed: the tool is a widget inside an article that already has chrome. */
html[data-lf-framed] [data-lf-chrome] { display: none !important; }
${LANGBAR}

.lf-wrap { max-width: var(--lf-maxw); margin: 0 auto; padding: 0 clamp(18px, 3.5vw, 40px); }
.lf-btn {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--accent); color: #fff; border: 0; border-radius: 0; cursor: pointer;
  font-family: var(--font-body); font-weight: 700; font-size: 14px;
  padding: 11px 20px; min-height: 42px; text-decoration: none;
  transition: background .2s ease;
}
.lf-btn:hover { background: var(--accent-deep); }

/* ── masthead ─────────────────────────────────────────────────────────── */
/* .tool-head, .in, .brand and .mark are the page's own — only the nav, the
   toggle and the burger are added here. */
.tool-head .brand { white-space: nowrap; }
.lf-nav { display: flex; gap: 22px; margin-left: 4px; }
.lf-nav a {
  color: var(--ink); text-decoration: none; font-weight: 700; font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; white-space: nowrap;
  transition: color .2s ease;
}
.lf-nav a:hover { color: var(--accent); }
.lf-actions { display: flex; align-items: center; gap: 10px; margin-left: auto; }
.lf-lang { display: inline-flex; box-shadow: inset 0 0 0 1px var(--rule); }
.lf-lang a {
  font-size: 11px; font-weight: 800; letter-spacing: 0.1em; padding: 7px 11px;
  color: var(--muted); text-decoration: none; transition: color .2s ease;
}
.lf-lang a + a { box-shadow: inset 1px 0 0 var(--rule); }
.lf-lang a:hover { color: var(--accent); }
.lf-lang a.on { background: var(--ink); color: var(--bg); }
.lf-lang a.on:hover { color: var(--bg); }
.lf-burger {
  display: none; background: none; border: 0; padding: 8px; cursor: pointer;
  color: var(--ink); line-height: 0;
}
.lf-burger svg { width: 22px; height: 22px; }
.lf-mobile-nav { display: none; }
.lf-mobile-nav[hidden] { display: none; }

${foldedRules}

/* ── newsletter ───────────────────────────────────────────────────────── */
.lf-nl { padding: 56px 0 0; }
.lf-nl-box { background: var(--ink); padding: clamp(28px, 5vw, 48px); text-align: center; }
.lf-nl-kicker {
  font-family: var(--font-body); font-size: 10.5px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase; color: #E39BBA; margin: 0 0 10px;
}
.lf-nl h2 {
  font-family: var(--font-head); font-weight: 500; color: #fff;
  font-size: clamp(24px, 3.4vw, 30px); line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 10px;
}
.lf-nl-sub { color: #E6D9E2; font-size: 15.5px; line-height: 1.6; margin: 0 auto 26px; max-width: 60ch; }
.lf-nl .nlform { max-width: 520px; margin: 0 auto; }
.lf-nl .nl-row { display: flex; gap: 10px; }
.lf-nl .nl-row input {
  flex: 1; min-width: 0; padding: 12px 16px; border: 0; border-radius: 0;
  font-family: var(--font-body); font-size: 15px; color: var(--ink); background: #fff;
}
.lf-nl .nl-row input::placeholder { color: var(--ink); opacity: .4; }
/* The field is white on the dark --ink box, so the ring is drawn in two layers:
   accent against the input, a light halo against the box behind it. A single
   accent ring only reaches 2.8:1 on --ink and would fail WCAG 1.4.11. */
.lf-nl .nl-row input:focus-visible {
  outline: 2px solid transparent; outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 5px rgba(255,255,255,0.6);
}
.lf-nl .nl-row .lf-btn { min-height: 46px; white-space: nowrap; }
.lf-nl .nl-row .lf-btn:focus-visible { outline: 2px solid transparent; outline-offset: 2px; box-shadow: 0 0 0 3px rgba(255,255,255,0.7); }
.lf-nl .nl-row .lf-btn:disabled { opacity: .6; cursor: default; }
.lf-nl-consent {
  display: flex; gap: 9px; align-items: flex-start; text-align: left;
  color: #D3C2CE; font-size: 12.5px; line-height: 1.5; margin-top: 14px;
}
/* The box ships at the 13px UA default, under the 24px WCAG 2.5.8 floor; the
   label wraps the input so the real target is the whole block, but the visible
   box is what a pointer aims at. The 1px nudge re-centres it on line one. */
.lf-nl-consent input[type='checkbox'] { flex: none; width: 18px; height: 18px; margin: 1px 0 0; }
.lf-nl-consent input:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.lf-nl-consent a { color: #fff; text-decoration: underline; text-underline-offset: 2px; }
.lf-nl-consent a:hover { color: #E39BBA; }
.lf-nl-sent {
  max-width: 520px; margin: 0 auto; background: #EDF4EA; border: 1px solid #C4DCBA;
  color: #2C5E27; padding: 16px; font-size: 15px; text-align: center;
}
.lf-nl-msg { max-width: 46ch; margin: 14px auto 0; font-size: 14.5px; line-height: 1.5; color: #F2C3CE; }
/* Honeypot (OPS-235): in the layout, focusable by nothing, never visible.
   display:none is skipped by many bots, so it moves off-screen instead. */
.lf-hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
@media (max-width: 620px) {
  .lf-nl .nl-row { flex-direction: column; }
}

/* ── footer ───────────────────────────────────────────────────────────── */
.lf-footer { background: var(--paper2); border-top: 1.5px solid var(--ink); margin-top: 56px; padding: 56px 0 28px; }
.lf-foot-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 32px; }
.lf-footer .lf-foot-brand {
  display: inline-flex; align-items: center; gap: 11px; text-decoration: none;
  font-family: var(--font-head); font-weight: 500; font-size: 19px;
  letter-spacing: -0.02em; color: var(--ink);
}
/* Each page's own ".brand .mark" rule is scoped to the masthead link, so the
   footer wordmark needs the magenta disc restating. */
.lf-foot-brand .mark {
  flex: none; width: 34px; height: 34px; border-radius: 50%;
  background: var(--accent); color: #fff;
  display: grid; place-items: center; font-style: italic; font-size: 15px;
}
.lf-blurb { color: var(--muted); font-size: 15px; line-height: 1.6; max-width: 34ch; margin: 14px 0 0; }
.lf-footer h4 {
  font-family: var(--font-body); font-weight: 800; font-size: 10.5px;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin: 20px 0 14px;
}
.lf-footer .lf-foot-top > div > h4:first-child { margin-top: 0; }
.lf-footer h4.lf-h4-gap { margin-top: 20px; }
.lf-footer ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 9px; }
.lf-footer a { color: var(--muted); font-size: 15px; text-decoration: none; }
.lf-footer a:hover { color: var(--accent); }
/* A 24px hit strip on each row: rows are 9px apart and ~21px tall, so 24px
   clears its neighbours by 3px and still meets WCAG 2.5.8. */
.lf-footer ul a { position: relative; display: inline-block; }
.lf-footer ul a::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%); height: 24px; }
.lf-socials { display: flex; gap: 10px; }
.lf-socials a {
  width: 34px; height: 34px; border-radius: 50%; background: var(--bg);
  box-shadow: inset 0 0 0 1px var(--rule);
  display: grid; place-items: center; color: var(--accent); font-weight: 800; font-size: 13px;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}
.lf-socials svg { width: 17px; height: 17px; fill: currentColor; display: block; }
.lf-socials a:hover, .lf-socials a:focus-visible {
  background: var(--accent); color: #fff; box-shadow: inset 0 0 0 1px var(--accent); transform: scale(1.1);
}
.lf-foot-legal { border-top: 1px solid var(--rule); margin-top: 36px; padding-top: 22px; color: var(--muted); font-size: 13px; line-height: 1.6; }
.lf-foot-legal p { margin: 0 0 8px; }
.lf-foot-legal a { font-size: inherit; text-decoration: underline; text-underline-offset: 2px; }

/* ── cookie bar ───────────────────────────────────────────────────────── */
/* display:flex below would override the hidden attribute's UA display:none,
   leaving the bar up after Accept/Decline — this rule must win, so it stays
   first and is re-checked whenever the bar is restyled. */
.lf-cookie[hidden] { display: none !important; }
.lf-cookie {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 100;
  background: var(--card, #FFFCF7); border-top: 1.5px solid var(--ink);
  padding: 12px 16px; padding-bottom: calc(12px + env(safe-area-inset-bottom));
  box-shadow: 0 -6px 24px rgba(42, 20, 36, 0.12);
}
.lf-cookie-in {
  width: 100%; max-width: 960px; margin: 0 auto;
  display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between;
}
.lf-cookie p { margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--muted); flex: 1 1 240px; min-width: 0; }
.lf-cookie p a { color: var(--accent); font-weight: 700; border-bottom: 1px solid currentColor; text-decoration: none; }
.lf-cookie-actions { display: flex; gap: 8px; align-items: center; margin-left: auto; }
.lf-cookie .lf-btn { min-height: 38px; padding: 9px 20px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.lf-cookie-decline {
  border: none; background: transparent; color: var(--muted); font-family: var(--font-body);
  font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; padding: 9px 10px;
}
.lf-cookie-decline:hover { color: var(--ink); }

@media (prefers-reduced-motion: reduce) {
  .lf-nav a, .lf-lang a, .lf-btn, .lf-socials a { transition: none; }
  .lf-socials a:hover, .lf-socials a:focus-visible { transform: none; }
}
@media print {
  [data-lf-chrome] { display: none !important; }
}`;
}

// ── injection ─────────────────────────────────────────────────────────────
const MARK = (name) => ({
  start: `<!-- lf-chrome:${name}:start — generated by scripts/build-tool-chrome.mjs, do not edit by hand -->`,
  end: `<!-- lf-chrome:${name}:end -->`,
});

/** Replace what's between the markers, or insert the whole block at `anchor`. */
function upsert(html, name, body, anchor) {
  const { start, end } = MARK(name);
  const block = `${start}\n${body}\n${end}`;
  const i = html.indexOf(start);
  if (i !== -1) {
    const j = html.indexOf(end, i);
    if (j === -1) throw new Error(`unterminated lf-chrome:${name} block`);
    return html.slice(0, i) + block + html.slice(j + end.length);
  }
  const k = html.indexOf(anchor);
  if (k === -1) throw new Error(`anchor ${anchor} not found`);
  return html.slice(0, k) + block + '\n' + html.slice(k);
}

/** The head half: the framed flag (before the body is parsed) + the chrome CSS. */
function headBlock(tool) {
  return `<script>
  /* Stamped before <body> is parsed so framed pages never flash the chrome. */
  if (window.self !== window.top) document.documentElement.setAttribute('data-lf-framed', '');
</script>
<style>
${styles(tool)}
</style>`;
}

/* The masthead is a replacement rather than an insertion: every one of the ten
   files carries the identical two-link bar, which the generated one supersedes.
   Matching it exactly (rather than on the tag alone) means the script fails
   loudly if a page's header is ever hand-edited into a different shape. */
const OLD_HEAD_RE = /<header class="tool-head"(?: data-standalone hidden)?>[\s\S]*?<\/header>/;

function build(tool, lang) {
  const { slug } = tool;
  const dir = lang === 'ua' ? `${slug}-ua` : slug;
  const file = join(PUBLIC, dir, 'index.html');
  let html = readFileSync(file, 'utf8');

  const marks = MARK('head');
  if (!html.includes(marks.start)) {
    if (!OLD_HEAD_RE.test(html)) throw new Error(`${dir}: no <header class="tool-head"> to replace`);
    html = html.replace(OLD_HEAD_RE, `${MARK('head-bar').start}\n${MARK('head-bar').end}`);
  }
  html = upsert(html, 'head', headBlock(tool), '</head>');
  html = upsert(html, 'head-bar', [langBar(lang, slug), header({ slug, lang })].filter(Boolean).join('\n'), '</head>');
  html = upsert(html, 'foot', [newsletter(lang), footer(lang), cookieBar(lang), footScripts].join('\n'), '</body>');
  return { file, html };
}

const check = process.argv.includes('--check');
let stale = 0;
for (const tool of TOOLS) {
  for (const lang of ['en', 'ua']) {
    const { file, html } = build(tool, lang);
    const before = readFileSync(file, 'utf8');
    if (before === html) continue;
    stale += 1;
    if (check) console.error(`stale: ${file.slice(ROOT.length + 1)}`);
    else { writeFileSync(file, html); console.log(`wrote: ${file.slice(ROOT.length + 1)}`); }
  }
}
if (check && stale) {
  console.error(`\n${stale} tool page(s) out of date — run: npm run tool-chrome`);
  process.exit(1);
}
if (!stale) console.log('tool chrome up to date');
