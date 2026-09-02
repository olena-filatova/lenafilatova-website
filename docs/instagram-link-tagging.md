# Instagram link tagging (OPS-399)

Agreed 1 September 2026. Every link from Instagram to lenafilatova.co.uk —
bio, stories, captions, highlights — carries the same four parameters.

```
?utm_source=instagram&utm_medium=social&utm_campaign=<topic>&utm_content=<placement>
```

| Parameter | Value | Rule |
| --- | --- | --- |
| `utm_source` | `instagram` | Fixed. **Never `ig`.** |
| `utm_medium` | `social` | Fixed. |
| `utm_campaign` | topic slug | Lowercase, hyphenated. Use the destination page's own slug where it has one (`t1d-trials`, `cgm-comparison`, `dia-school`), or the article slug for a post. |
| `utm_content` | placement | One of `bio`, `story`, `reel`, `post`, `highlight`. |

## Why it is shaped this way

The 28 August analytics review found Instagram traffic split across two GA4
sources — `l.instagram.com / referral` for untagged links and `ig / social` for
tagged ones — so the channel could never be read as one number. Fixing
`utm_source`/`utm_medium` to the same pair every time collapses that back into
a single Organic Social source.

Placement goes in `utm_content` rather than into the source or medium
specifically so that bio-versus-story performance stays comparable **without**
re-splitting the channel.

## Rules for links

- **Keep the trailing slash** before the `?`. Query strings do survive the
  site's trailing-slash 301 (verified 1 Sep 2026 against production), so an
  untagged-slash link is not broken — it just costs a redirect hop, and some
  in-app browsers trim at that point.
- **Link to the page the post is about, not the homepage.** In the review week,
  `/t1d-cure-trials-ua/` drew a 72.7% engagement rate; the tagged sessions that
  landed generically recorded 0 seconds.
- Ukrainian posts link to the `/ua/` copy of the page. There is one for
  every tool and every article.

## Where the ready-made links live

A copy-and-paste sheet covering the homepage, the journal, Dia.School, all ten
standalone tools and the three calculators, in both languages, is kept at
`Daily breifings/outputs/2026-09-01/instagram-links-sheet.md` outside this repo.

## For anyone building an Instagram content ticket

Any ticket that produces an Instagram post (OPS-343, OPS-344, OPS-346,
OPS-347, OPS-388 to OPS-391 and successors) should ship the destination link
already tagged to this convention, with `utm_campaign` set to the destination
page's slug — not leave the tagging to be added afterwards.
