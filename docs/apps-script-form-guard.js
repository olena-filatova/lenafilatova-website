/**
 * OPS-235 — server-side spam guard for the lenafilatova.co.uk forms.
 *
 * ⚠️ THIS FILE IS NOT DEPLOYED BY THIS REPO. It has to be pasted into the
 * Google Apps Script project by hand (script.google.com → the project behind
 * the /macros/s/AKfycbw…/exec endpoint → paste → Deploy → New deployment).
 *
 * WHY IT MATTERS: the site-side changes (honeypot, dwell timer, guard token,
 * endpoint no longer written into the HTML) add the *evidence*. Nothing is
 * actually blocked until this script checks that evidence and drops the
 * request. Spam bots that already hold the endpoint URL will keep posting
 * straight to it regardless of what the website does.
 *
 * HOW TO WIRE IT IN
 *   1. Paste everything below into the Apps Script project (a new file is fine).
 *   2. Find the existing `doPost(e)`. Rename it to `handleSubmission(e)`.
 *   3. Deploy a NEW VERSION of the SAME deployment, so the /exec URL is unchanged.
 *      (Deploy → Manage deployments → edit the active one → Version: New version.
 *      Creating a brand-new deployment would change the URL and break the site.)
 *
 * A note on how strong this is: the guard token is computed from a key that
 * ships in the site's public JavaScript, so a determined attacker who reads the
 * bundle can forge it. That is a deliberate trade-off — it costs nothing, needs
 * no third-party account, and stops the commodity spam that makes up virtually
 * all of this traffic. If spam continues after this is live, the next step is
 * Cloudflare Turnstile (free, invisible); see the bottom of this file.
 */

// Must stay identical to guardToken() in src/scripts/form-guard.js.
function guardToken_(ts) {
  var s = 'lf-form-guard:' + ts;
  var h = 2166136261;
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

var MIN_DWELL_MS = 3000;            // typed faster than this = not a human
var MAX_DWELL_MS = 24 * 3600 * 1000; // a replayed token from yesterday

/**
 * Returns a string reason when the submission should be dropped, or '' to let
 * it through. Kept separate from doPost so it can be unit-tested with runTests().
 */
function spamReason_(params) {
  // 1. Honeypot. The site strips this field before posting, so its mere
  //    presence with a value means something else filled the form in.
  if (params.website) return 'honeypot';

  // 2. Guard token. Absent => the request never ran the page's JavaScript,
  //    which is the signature of a bot posting straight to the endpoint.
  var ts = Number(params.ts);
  if (!ts || !params.token) return 'no-token';
  if (params.token !== guardToken_(ts)) return 'bad-token';

  // 3. Timing. Too fast to have been typed, or a token being replayed later.
  var age = Date.now() - ts;
  if (age < MIN_DWELL_MS) return 'too-fast';
  if (age > MAX_DWELL_MS) return 'stale';

  // 4. Content heuristics — cheap, and catch the usual SEO/link spam even if
  //    the layers above are ever bypassed.
  var msg = String(params.message || '');
  var links = (msg.match(/https?:\/\//gi) || []).length;
  if (links >= 2) return 'link-spam';
  if (/\[url=|\[link=|<a\s+href/i.test(msg)) return 'bbcode';
  if (/\b(seo services|backlinks?|crypto|casino|viagra|loan offer)\b/i.test(msg)) return 'keyword';

  // 5. A "name" that is really a URL is a very common pattern.
  if (/https?:\/\//i.test(String(params.name || ''))) return 'url-in-name';

  return '';
}

function doPost(e) {
  var params = (e && e.parameter) || {};
  var reason = spamReason_(params);

  if (reason) {
    // Log for review, then return the same 200 a real submission gets.
    // Never tell the sender why — an error response is free tuning feedback.
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('spam-log');
      if (sheet) {
        sheet.appendRow([new Date(), reason, params.type || params.source || '',
                         params.email || '', String(params.message || '').slice(0, 500)]);
      }
    } catch (err) { /* logging must never break the response */ }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return handleSubmission(e); // ← the original doPost, renamed
}

/**
 * Run this once from the Apps Script editor after pasting. All four should log
 * true. This is the check that the token maths matches the website's copy — if
 * `valid` fails, every real submission would be silently dropped.
 */
function runTests() {
  var now = Date.now();
  var old = now - 10000;
  Logger.log('honeypot blocked: %s', spamReason_({ website: 'x' }) === 'honeypot');
  Logger.log('no token blocked: %s', spamReason_({ message: 'hello' }) === 'no-token');
  Logger.log('too fast blocked: %s',
    spamReason_({ ts: String(now), token: guardToken_(now) }) === 'too-fast');
  Logger.log('valid passes:    %s',
    spamReason_({ ts: String(old), token: guardToken_(old), message: 'Hi, I would like coaching.' }) === '');
}

/**
 * IF SPAM CONTINUES — Cloudflare Turnstile (free, no visible challenge):
 *
 *   1. dash.cloudflare.com → Turnstile → Add site → domain lenafilatova.co.uk.
 *      You get a site key (public) and a secret key (private).
 *   2. Site side: load https://challenges.cloudflare.com/turnstile/v0/api.js and
 *      add <div class="cf-turnstile" data-sitekey="…"></div> inside each form.
 *      The widget writes a `cf-turnstile-response` field into the form data.
 *   3. Apps Script: put the secret in Project Settings → Script Properties as
 *      TURNSTILE_SECRET, then add this at the top of spamReason_():
 *
 *        var tok = params['cf-turnstile-response'];
 *        if (!tok) return 'no-turnstile';
 *        var res = UrlFetchApp.fetch(
 *          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
 *          { method: 'post', payload: {
 *              secret: PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET'),
 *              response: tok } });
 *        if (!JSON.parse(res.getContentText()).success) return 'turnstile-failed';
 *
 * That is a real cryptographic check rather than an obstacle course, and it is
 * the right escalation if the cheap layers stop being enough.
 */
