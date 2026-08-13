# OPS-218 — us19 automation flows to rebuild in us11

## PROGRESS (6 Aug 2026, evening)
- ✅ **ALL 5 FLOWS REBUILT AND ACTIVE IN us11:**
  - Welcome — EN (flow 566), Welcome — UA (567), Excel delivery (568),
    Comparison delivery — EN (569), Comparison delivery — UA (570).
- Faster recipe used for flows 2–5: **Replicate** an existing flow (row dropdown → Replicate),
  rename, then edit trigger + segment + email content. Preserves layout/footer/branding.
  For the comparison flows: open trigger → Change trigger → **Tag added** → comparison-page,
  then Edit filters → remove the tag row, leave Language only.
- ⚠️ **Needs Lena's review:** the UA welcome subject/preheader were not captured from us19,
  so I wrote: subject "Вітаю — рада, що ви тут" / preheader "Коротке привітання і з чого почати."
  Change if the original differed.
- Also verified in us11: lenafilatova.co.uk is **Authenticated** (Domains page); Language
  group EN/UA present with all 17 contacts and tags (main-page, comparison-page) intact.
- Note: the email editor auto-completes `*|` — after typing a merge tag, check for a stray
  `*` or doubled `|` and delete it (happened on both comparison flows).
- Remaining: repoint GAS relay (us11 API key, dc us11, audience b6e0bf1c2b, new Language interest IDs),
  test EN+UA signup + both freebie deliveries, archive us19 reports, close us19 before 6 Sep.
- Also flagged: authenticate baristacard.com in us11 (still "Needs authentication");
  consider closing the separate free "Gymbile" Mailchimp account.
- us11 plan confirmed: **Standard (500 contacts), £18.18/mo** — 3 audiences fit, no upgrade needed.

## ⚠️ NOT YET WORKING — verified 6 Aug 2026, ~21:15 (read this first tomorrow)
The 5 flows are Active but **cannot fire**. Three separate gaps:

1. **Relay still points at us19.** Site posts to `CONTACT_ENDPOINT` in `src/data/site.js`
   (`https://script.google.com/macros/s/AKfycbw21p8PuG5jGQ7JXf7j-tX1-OZBeA1p6negAuzi7TmiyPkjEoshxLbtGc6avUVskGiK/exec`).
   Script still writes to us19 → all us11 flows show Started 0 / Completed 0.
   **This is the only item on the critical path to closing us19 before 6 Sep.**
2. **Compare merge field is empty in us11.** The field exists (column visible on the
   Contacts table) but no contact has a value — the Compare column wasn't mapped on import.
   Values still available in `OPS-218-us19-contacts-export.csv`:
   - `alex@alexfilatov.com` → `MiniMed Flex | Accu-Chek Solo | Omnipod 5`
   - `pr@lenafilatova.com` → `Omnipod 5 | Tandem t:slim X2 | iLet Bionic Pancreas | MiniMed 780G`
   Until re-imported, `*|COMPARE|*` renders blank.
3. **The comparison capture no longer exists on the site.** `/aid-comparison` (repo AND live)
   is filters + table only — no email field, no shortlist selection, no post to the relay.
   That capture lived on the old Divhunt site and wasn't carried into the Astro rebuild.
   So nothing applies the `comparison-page` tag or writes Compare. The two Comparison flows
   are waiting on a form that doesn't exist — consider pausing them until it's rebuilt.
   (Product decision, NOT a migration blocker.)

Only `public/blood-sugar-investigator*.html` currently posts to the relay, sending
`email, lang, source='blood-sugar-investigator', groups='t1d', consent, at`.
Neither `source` nor `groups` matches main-page / comparison-page / pump-excel —
the tag mapping lives inside the Apps Script, which has not been read yet.

**Tomorrow's first step:** open the Apps Script (script.google.com), read how it maps
`source`/`groups`/`lang` → tags + interest IDs, then change dc → us11, audience → b6e0bf1c2b,
new Language interest IDs, and Lena pastes the us11 API key + redeploys.
(6 Aug: Apps Script login was glitching — retry in the morning.)

---

Audience trigger for all: contact signs up to audience (Lena Filatova).
Merge fields needed in the us11 audience: Імʼя (first name), Compare (text — pump shortlist from comparison page).
Tags used: main-page, comparison-page, pump-excel.

## 1. Welcome — UA (us19 flow id 93)
- Trigger: signup, ALL of: Language group = UA (us19 interest id 179820) AND tag `main-page`
- 1 email step. Content (captured from test email):

> **Вітаю,**
> Мене звати Лена. Я живу з діабетом 1 типу вже 23 роки і пишу про жіноче здоров'я після 40 — цукор крові, перименопаузу, харчування, силові тренування і технології, які полегшують щоденне життя.
> Чого очікувати від мене: доказово, простою мовою, без залякувань і без нав'язування зайвого.
> З чого варто почати — мої безкоштовні ресурси:
> • Порівняння інсулінових помп та AID — складіть власний список
> • Порівняння сенсорів CGM — монітори глюкози поруч
> • Блог — дослідження зрозумілою мовою
> Відповідайте будь-коли — я читаю все.
> Бережіть себе,
> Лена
> Живу з діабетом 1 типу 23 роки · експертка з жіночого здоров'я та діабету
> [Переглянути ресурси →]

- Subject: TBC (check test email subject line)

## 2. Welcome — EN (us19 flow id 92)
- Trigger: signup, ALL of: Language = EN AND tag `main-page`
- Subject: "Welcome — I'm glad you're here" / preheader "A quick hello, and where to start."
- Content:

> Hi there,
> I'm Lena. I've lived with type 1 diabetes for 23 years, and I write about women's health after 40 — blood sugar, perimenopause, nutrition, strength training, and the tech that makes daily life easier.
> What to expect from me: evidence-based, plain language, no scare tactics, and nothing sold to you that you don't need.
> A good place to start — my free resources:
> • Insulin pump & AID comparison — build your own shortlist
> • CGM sensor comparison — glucose monitors, side by side
> • The blog — research, made readable
> Reply any time — I read everything.
> Take care,
> Lena
> Type 1 diabetes for 23 years · women's health & diabetes educator
> [Explore the resources →]

## 3. Excel delivery (us19 flow id 94)
- Trigger: signup, condition: tag `pump-excel`
- Subject: "Your pump comparison spreadsheet 📊" / preheader "The full 2026 AID pump comparison — every spec and…"
- EN only (no UA version)
- Content:

> Hi there,
> Thanks for confirming! Here's the full 2026 AID pump comparison spreadsheet you asked for — all 20+ insulin pumps, every spec and price in one sortable sheet.
> Print it or take it to your next appointment.
> Tap the button below to open the spreadsheet.
> Take care,
> Lena
> Type 1 diabetes for 23 years · women's health & diabetes educator
> [Download the spreadsheet →]

## 4. Comparison delivery — UA (us19 flow id 91)
- Trigger: contact **tagged** `comparison-page` (tag trigger, not signup!), condition: Language = UA
- Subject: "Ваше порівняння інсулінових помп" / preheader "Обрані вами системи — поруч, і як їх читати."
- Uses merge field **Compare** (shown as << Test Compare >> in test)
- Content:

> Вітаю,
> Дякую, що скористалися порівнянням. Ось системи автоматизованої подачі інсуліну (AID), які ви обрали, щоб зіставити поруч:
> *|COMPARE|*
> На що варто звернути увагу: помпа з трубкою чи без, з яким сенсором (CGM) вона працює, алгоритм автоматизації (замкнена петля) і — часто вирішальне — що доступно й за скільки саме там, де ви живете.
> «Найкращої» системи не існує. Правильна та, що підходить вашому тілу, вашому ритму життя і доступна у вашій країні. Якщо хочете, щоб я поглянула на ваш список разом із вами — просто відповідайте на цей лист, я читаю всі.
> Бережіть себе,
> Лена
> Живу з діабетом 1 типу 23 роки · експертка з жіночого здоров'я та діабету
> [Переглянути порівняння →]

## 5. Comparison delivery — EN (us19 flow id 90)
- Trigger: contact **tagged** `comparison-page`, condition: Language = EN
- Subject: "Here's your insulin pump comparison" / preheader "The systems you picked, side by side — and how to read…"
- Uses merge field **Compare**
- Content:

> Hi there,
> Thanks for using the comparison tool. Here are the automated insulin delivery (AID) systems you chose to look at side by side:
> *|COMPARE|*
> A few things worth weighing as you read: tubed vs. tubeless, which CGM each one talks to, the automation (closed-loop) algorithm, and — often the deciding factor — what's actually available and affordable where you live.
> There's no single "best" system. The right one fits your body, your routine, and your country. If you'd like a second pair of eyes on your shortlist, just reply to this email — I read every one.
> Take care,
> Lena
> Type 1 diabetes for 23 years · women's health & diabetes coach
> [View my comparison →]

## Prerequisites in us11 before building
- Create merge field **Compare** (text) in the Lena Filatova audience — the comparison emails print it.
- Button URLs: welcome resources → https://lenafilatova.co.uk/ (EN) / https://lenafilatova.co.uk/ua/ (UA); comparison → https://lenafilatova.co.uk/aid-comparison / /aid-comparison-ua; spreadsheet → https://docs.google.com/spreadsheets/d/1ydSJC1bWyJV8DYVFy4IgGUJCAtNWLsye5uHWjTgJor0/edit?usp=share_link
- New us11 audience ID: b6e0bf1c2b (web id 727237). Merge field *|COMPARE|* = MERGE5.

All 5 test emails sent to lena@gymbile.com on 6 Aug 2026 evening; content transcribed from Lena's forwards.
