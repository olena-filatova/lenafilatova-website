# Contact / newsletter form spam

Both public forms — the message form on `/contact` (and `/ua/contact`) and the
homepage newsletter form — post to one public Google Apps Script endpoint. The
endpoint takes anything anyone sends it, and bots were POSTing to it directly
after scraping the URL out of the form's `action` attribute. That's what filled
Lena's inbox (OPS-235).

## What's in this repo (client side)

`src/scripts/form-guard.js` wraps both forms:

| Layer | What it stops |
| --- | --- |
| No `action` in the HTML; endpoint base64-encoded and assembled at submit time | Scrapers that harvest form targets from page HTML — the bulk of drive-by form spam |
| Honeypot field (`website`, off-screen, `aria-hidden`) | Scripted fillers that populate every input |
| Time trap — submissions under 3s are dropped | Instant auto-fill-and-submit bots |
| Rate cap — 3 submissions per browser per hour | Repeat floods from one client |
| Content heuristics — links in the name field, >1 URL in the message, known spam keywords | Link-stuffed SEO / casino / crypto payloads |

A rejected submission still shows the normal "thanks" confirmation, so a bot
gets no feedback about which rule tripped it.

Trade-off: submitting now requires JavaScript. It already effectively did — the
old code called `preventDefault()` and posted via `fetch` — but a no-JS browser
used to fall back to a native form POST and that fallback is gone. The email
address on the contact page is the no-JS path.

## What still needs doing in the Apps Script (server side)

**The client-side guard cannot stop a bot that already knows the endpoint URL.**
The URL was public for a long time, so anything that already recorded it can
keep posting. Closing that off means a check inside the Apps Script itself —
that code is not in this repo, it lives in Lena's Google account.

Paste this near the top of `doPost(e)` in the script and redeploy:

```js
function doPost(e) {
  var p = (e && e.parameter) || {};

  // 1. Honeypot: the real forms strip this field before sending, so any
  //    request that carries it with a value is a bot.
  if (p.website) return ok();

  // 2. Shared token: the site sends token=<value>; direct posters don't know it.
  //    Set the same value in form-guard.js (see TOKEN note below).
  if (p.token !== 'REPLACE_WITH_A_LONG_RANDOM_STRING') return ok();

  // 3. Content heuristics, same rules as the client.
  var blob = [p.name, p.message].join(' ');
  var links = (String(p.message || '').match(/https?:\/\//gi) || []).length;
  if (links > 1) return ok();
  if (/https?:\/\/|www\.|\[url|<a\s/i.test(String(p.name || ''))) return ok();
  if (/\b(seo services|casino|crypto|bitcoin|viagra|cialis|backlinks?|guest post|payday loan)\b/i.test(blob)) return ok();

  // ... existing handling continues here ...
}

// Silent success — never tell a bot why it was dropped.
function ok() {
  return ContentService.createTextOutput('ok');
}
```

Then, if you use the token check, add the same string to the `token` hidden
field emitted by `guardForm()` in `src/scripts/form-guard.js`. It is not a
secret in any real sense (it ships in the JS bundle) — it just means a bot has
to re-scrape the site rather than replay the endpoint it already has, which
kills the current flood.

Stronger options if spam continues after both halves are in place:

- Cloudflare Turnstile in front of the form (free, no visible challenge). Needs
  the site key in the form and the secret verified inside the Apps Script.
- Move the endpoint entirely: create a **new** Apps Script deployment URL and
  retire the old one. Everything currently spamming holds the old URL, so this
  alone stops the existing flood dead — cheapest high-impact move if the client
  guard isn't enough. Update `ENDPOINT_B64` in `form-guard.js` afterwards.
