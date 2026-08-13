# OPS-218 — Mailchimp consolidation: move lenafilatova.co.uk into the Baristacard/Gymbile account

**Goal:** one Mailchimp account (us11) with three audiences — Baristacard, Gymbile, Lena Filatova — and cancel the separate us19 account. Saves ~£11.67/mo and ends account-switching.

*Prepared 6 Aug 2026. Do not commit this file — it's a working doc, delete when done.*

## Current state (verified)

**us19 — lenafilatova.co.uk account (source, to be closed)**
- Plan: Essentials, £11.67/mo, next autopay **6 Sep 2026**
- 17 of 500 contacts, audience "Lena Filatova"
- Language split via interest group "Language" (EN / UA — some contacts have both)
- 5 active automations: Welcome — EN, Welcome — UA, Excel delivery, Comparison delivery — EN, Comparison delivery — UA
- 2 sent campaigns (July 2026 recipe updates EN + UA), 1 unpublished landing page (Dia.School)
- Domain **lenafilatova.co.uk authenticated** in this account
- Website signup + contact forms post to a Google Apps Script relay → Mailchimp API (us19 key, this audience ID)

**us11 — Baristacard account (destination)**
- Audiences: Baristacard (b6e981bc8b, ~137 contacts) and Gymbile (dc5ea8ed98)
- Known open items: baristacard.com previously flagged unauthenticated; gymbile.com verification was pending (OPS-164)
- ⚠️ Plan tier not verified — my browser session is only signed into us19. **Lena: check us11 plan.** Two audiences already exist, so it can't be Free (Free = 1 audience). Essentials allows exactly 3 audiences, so the migration fits without an upgrade — but confirm.

## Migration steps

1. **Verify us11 plan & limits** — needs a 3rd audience slot and ~20 contacts of headroom.
2. **Create audience "Lena Filatova" in us11** — from name Lena Filatova, from email lena@lenafilatova.co.uk, same footer address, **double opt-in ON** (site copy promises it; opt-in is per-audience so Baristacard's single opt-in is unaffected).
3. **Recreate the "Language" interest group** (EN / UA) in the new audience. Record the new interest IDs — the GAS relay needs them.
4. **Authenticate lenafilatova.co.uk in us11** — add Mailchimp's DKIM CNAME records at Namecheap. Do not touch the `_github-pages-challenge-olena-filatova` TXT record or existing GitHub Pages DNS.
5. **Export contacts from us19** (CSV including the Language column) and **export unsubscribed/cleaned contacts separately**; import subscribed contacts to us11 mapping Language, and import unsubscribes as unsubscribed (compliance — they must not be re-mailable).
6. **Recreate the 5 automations in us11** — automations can't be moved between accounts; copy content across manually. The delivery flows (Excel, Comparison EN/UA) must keep their exact trigger tags/logic since the site tools rely on them.
7. **Update the GAS relay** (script behind CONTACT_ENDPOINT in `src/data/site.js`): new us11 API key, datacenter `us11`, new audience ID, new Language interest IDs. The website itself needs no changes — it only posts to the script.
8. **Test end-to-end**: EN signup → Welcome EN; UA signup → Welcome UA; Excel/Comparison downloads → delivery emails; check emails pass DKIM (from authenticated domain).
9. **Archive us19 campaign reports** (export/screenshot) — reports are lost when the account closes.
10. **Run both in parallel ~1 week**, then close/downgrade us19 **before 6 Sep** to skip the next £11.67 charge.

## Gotchas

- With 3 audiences in one account, a new campaign defaults "To" to the selected audience's *all contacts* — always double-check audience AND Language segment before sending (this already bit the July EN newsletter).
- Sending from lenafilatova.co.uk in us11 will fail DKIM until step 4 is done — do the domain auth before any live sends.
- The Dia.School landing page is unpublished; recreate only if still wanted.

## What only Lena can do

- Confirm the us11 plan tier (and upgrade if it's somehow not Essentials+).
- Approve the DNS changes at Namecheap.
- Provide/generate a us11 API key for the GAS relay (I shouldn't handle the key — paste it into the Apps Script properties yourself, or we do it together on screen).
- Final confirmation to close the us19 account.
