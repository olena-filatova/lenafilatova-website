# Task: repoint Lena's signup relay from Mailchimp us19 to us11

You are picking up work already diagnosed. Do not re-investigate — act.

## Context

Lena's site (lenafilatova.co.uk) posts every newsletter/contact signup to a Google
Apps Script web app. That script still writes subscribers into her **old** Mailchimp
account (`us19`). Her **new** account (`us11`) holds five rebuilt automations that
therefore never fire — they all show "Started 0". The old account must be closed
before **6 September 2026**, so this is on the critical path.

## Where things are

- **Apps Script project:** "MailerLite" (name is a leftover; it is the Mailchimp relay)
  https://script.google.com/u/1/home/projects/1HqkWxC6Kfk09v5Y28E_BWmFNBwUGyGM-vcjEGElapNUconGJsZ3JFWIh/edit
  Google account: the one at `authuser=1`. Lena is already logged in.
- **Deployment** `AKfycbw21p8PuG5jGQ7JXf7j-tX1-OZBeA1p6negAuzi7TmiyPkjEoshxLbtGc6avUVskGiK`
  — confirmed identical to `CONTACT_ENDPOINT` in `src/data/site.js`. Keep this
  deployment ID; the site must not need a code change.
- **Mailchimp us11:** audience "Lena Filatova", list id `b6e0bf1c2b`, web id `727237`.
  Account is the BaristaCard one (`baristacard.us11.list-manage.com`). Lena is logged in.
- Background notes: `OPS-218-automation-content.md` in the repo root (untracked).

## Findings (already verified — trust these)

- `Code.gs` is 116 lines. `handleSubmission` (line 32) is the live path: it handles
  `type === "message"` (contact form → emails lena@lenafilatova.co.uk via MailApp),
  otherwise calls `addToMailchimp(email, opts)` at line 48 and returns `{ok, code}`.
- The Mailchimp block is **lines 56–97**: `var MC = {key, dc, list, interest{en,ua}, sourceTag}`
  then `function addToMailchimp`. `MC.` is referenced only on lines 70, 71, 76, 87 —
  all inside that block, so it is safe to replace wholesale.
- `dc` is still `us19` and the list id is NOT `b6e0bf1c2b`. This is the bug.
- **MailerLite is already dead in the live path** — `addToMailerLite` is only called
  from `runTest` (line 28). Lena has confirmed MailerLite is retired. Nothing to remove.
- Language group in us11 is **34186**, with **1 = EN, 2 = UA** (read off the hosted
  signup form). The Mailchimp *API* interest IDs were never obtained — and are not
  needed if you use the approach below.

## Approach agreed with Lena

Do **not** use the Mailchimp API. Post to the audience's public `post-json` endpoint
instead: no API key in the project, nothing to rotate, and double opt-in still applies.
Lena does not want to handle or store an API key.

## Step 1 — edit Code.gs

Replace **lines 56–97** with exactly this (or append it at the end of the file; the
later declaration wins):

```javascript
// ===== Mailchimp us11 — key-free public endpoint (13 Aug 2026) =====
// Signups post straight to the audience's public form endpoint, so no API key
// lives in this project and nothing is written to us19 any more.
// Language group 34186: 1 = EN, 2 = UA. Double opt-in still applies.
var MC11 = {
  endpoint: 'https://baristacard.us11.list-manage.com/subscribe/post-json',
  u:        '1e50ad3293720baaf82abb8b3',
  list:     'b6e0bf1c2b',
  langGroup: 34186
};

function addToMailchimp(email, opts) {
  opts = opts || {};
  var lang = String(opts.lang || opts.language || 'en').toLowerCase() === 'ua' ? 2 : 1;
  var url = MC11.endpoint
    + '?u=' + MC11.u
    + '&id=' + MC11.list
    + '&EMAIL=' + encodeURIComponent(email)
    + '&group[' + MC11.langGroup + '][' + lang + ']=1';
  var res  = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  var code = res.getResponseCode();
  var body = res.getContentText();
  Logger.log('Mailchimp us11 ' + code + ': ' + body);
  return { ok: code === 200 && body.indexOf('"result":"error"') === -1, code: code };
}
```

Save.

## Step 2 — deploy

Deploy → Manage deployments → edit the existing deployment (the one ending `VskGiK`)
→ Version: **New version** → Deploy. Do not create a second deployment: the site's
endpoint URL must stay the same.

## Step 3 — fix the automation triggers in us11

The two welcome flows currently require the tag `main-page`, which the new endpoint
cannot set (public form endpoints support groups, not tags). Edit them:

- **Welcome — EN:** trigger = signup to the Lena Filatova audience, condition =
  Language group is **EN**. Remove the `main-page` tag condition.
- **Welcome — UA:** same, condition = Language group is **UA**.
- **Pause** "Excel delivery", "Comparison delivery — EN" and "Comparison delivery — UA".
  Their capture form does not exist on the Astro site (see OPS-218 item 3), so they
  can never fire. Do not delete them.

## Step 4 — test end to end

1. Submit the newsletter form on https://lenafilatova.co.uk/ with `lena+test-en@gymbile.com`
2. Submit on https://lenafilatova.co.uk/ua/ with `lena+test-ua@gymbile.com`
3. Confirm both confirmation emails arrive, click through
4. In us11 Contacts, check each contact exists with the correct Language group
5. In Automations, check "Welcome — EN" and "Welcome — UA" show Started ≥ 1
6. Also submit the contact form once and confirm lena@lenafilatova.co.uk still
   receives it — that path shares the same script and must not regress

Report back with: the four checks above, plus the Apps Script execution log lines.

## Constraints

- Never enter, create, copy or store an API key. The whole point of this approach
  is that no credential is needed.
- Do not change `CONTACT_ENDPOINT` in the repo.
- If you cannot write into the Apps Script editor (a classifier may block it), say so
  immediately rather than looping — that is what blocked the previous session.

## Next task after this (do not start without asking Lena)

Deliver her free workbook "Diabetes & Perimenopause" (26pp, EN + UA PDFs) to new
subscribers via the welcome emails, once the relay works.
