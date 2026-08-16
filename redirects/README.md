# 301 redirects

**Live since 2026-08-16.** Cloudflare sits in front of GitHub Pages on the free
plan, and a Bulk Redirect rule (`retired_recipes_and_legacy_urls`, account level
→ Delivery & performance → Bulk redirects) serves **138 real 301s**. All 138
verified returning 301 to the right target; every live page still 200.

Two things behaved differently from what this file originally assumed, both
worth knowing before the next re-upload:

1. **Cloudflare Bulk Redirects cannot match a query string.** The 300 legacy
   `recipe.html?r=…` rules were rejected — *"matching url cannot have a query
   string"* — and one bad row fails the entire save, so the generator now writes
   only the 138 path-based rules to the CSV. Those legacy URLs are still served
   by `public/recipes/recipe.html` (canonical + client-side redirect, HTTP 200).
   Upgrading them to 301s needs a zone-level **Single Redirect** rule, which
   *can* read `http.request.uri.query` — one dynamic rule, not 300 static ones,
   because the retired-slug hop is already covered by the list. Not done yet.
2. **The CSV must have no header row.** Cloudflare's importer doesn't recognise
   one; it read `source,target,…` as a redirect from the literal URL "source"
   and shifted every row by one.

Re-run `npm run redirects` and re-upload after any change to `HIDDEN_SLUGS` or
`RETIRED_SLUG_TARGETS`. Everything below is the original write-up of why this
was needed, kept for context.

---

## Original: why they weren't live, and how to switch them on

`cloudflare-bulk-redirects.csv` and `_redirects` in this folder are **generated**
(`npm run redirects`). Don't edit them by hand — edit `scripts/generate-redirects.mjs`
or the maps it reads.

## The problem

Three tickets ask for the same thing and none of them can have it today:

| Ticket | URLs | Now | Wanted |
| --- | --- | --- | --- |
| OPS-182 | 128 retired recipe URLs | 200 (meta-refresh stub) | 301 |
| OPS-226 | legacy `recipe.html?r=…` | 200 (JS redirect) | 301 |
| OPS-262 | 10 `.html` tool URLs | 404 once PR #106 deploys | 301 |

OPS-262 is already fixed, and fixed better than a redirect could manage — PR #106
moved each tool to `<slug>/index.html`, so the duplicate is gone structurally.
Its 10 rules here are not re-solving it: Google still holds the old `.html` URLs,
those now 404, and a 404 throws away the equity a 301 would hand to the surviving
page.

**The blocker is the host, not the code.** lenafilatova.co.uk is served straight
off GitHub Pages with no proxy in front — verified `server: GitHub.com`, no
`cf-ray`, apex A records pointing at `185.199.108–111.153`, nameservers at
Namecheap. GitHub Pages serves files; it has no redirect configuration of any
kind. Astro's `redirects:` key doesn't bridge the gap either: on a static build
it emits meta-refresh HTML, which is **HTTP 200 by construction**. That is
exactly what `/recipes/<retired>/` serves today, and it is why re-reading the
Astro config for a fix keeps coming up empty.

So there is no code change that produces a 301 here. It needs a 301-capable
layer in front of the domain.

## Why the current stubs aren't good enough

The stubs are correctly built — instant meta refresh, `noindex`, canonical
pointing at the right target, all 128 verified. Google *does* follow them. But
measurably slower than a 301, and the site has already run this experiment
twice:

- OPS-226 shipped a canonical + JS redirect. Two weeks later the
  `blueberry-jam` stub was the **site's second-highest-impression URL** (36/week,
  more than the real recipe it points at), and the ticket was re-opened.
- OPS-182's stubs went live 30 Jul. In the 28 days to 14 Aug, retired recipe
  URLs still earned **125 impressions and 3 clicks across 24 URLs** —
  `/recipes/granola-bars-peanut-butter/` alone took 27, and `/recipes/fig-tart/`
  took 3 clicks, making it the site's #2 page by clicks.

Both harms the tickets were raised for are still live: retired URLs compete with
the recipes they redirect to, splitting the ranking signal.

## Switching them on

Cloudflare's free plan is the cheapest route because it keeps GitHub Pages as
the origin — no host migration, no build change.

1. Add `lenafilatova.co.uk` to a Cloudflare account (free plan).
2. **Check the imported records against the inventory below before switching
   nameservers.** Cloudflare scans the existing zone, but the scan is
   best-effort and silently misses records. This is the only step that can break
   something, and the thing it breaks is email.
3. Then replace the Namecheap nameservers (`dns1`/`dns2.registrar-servers.com`)
   with the two Cloudflare gives you.
4. Leave the apex and `www` records **proxied** (orange cloud). An unproxied
   record is plain DNS and no redirect rule will run. Everything else stays
   **DNS-only** (grey cloud) — proxying MX or a TXT record breaks it.

### Record inventory — captured live 2026-08-16

**Email — check these first. If any are missing, mail stops arriving.**

| Type | Name | Value |
| --- | --- | --- |
| MX | `@` | `1 aspmx.l.google.com` |
| MX | `@` | `5 alt1.aspmx.l.google.com` |
| MX | `@` | `5 alt2.aspmx.l.google.com` |
| MX | `@` | `10 aspmx2.googlemail.com` |
| MX | `@` | `10 aspmx3.googlemail.com` |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none;` |
| TXT | `google._domainkey` | Google DKIM key (long `v=DKIM1` string) |
| CNAME | `k2._domainkey` | `dkim2.mcsv.net` (Mailchimp) |
| CNAME | `k3._domainkey` | `dkim3.mcsv.net` (Mailchimp) |

**Site and apps**

| Type | Name | Value | Proxy |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (all four) | Proxied |
| CNAME | `www` | `olena-filatova.github.io` | Proxied |
| CNAME | `calculator` | `081dd8020d0abe69.vercel-dns-017.com` | DNS-only |
| TXT | `@` | `google-site-verification=svQHlWJhpZlIgxEPQxNesKl-vg__JGYnefVLWKUDbJs` | — |

`calculator` is the helsico app on Vercel and must stay DNS-only — Vercel serves
its own certificate and proxying it breaks TLS. The `google-site-verification`
TXT is what keeps Search Console access alive; losing it de-verifies the property.

Re-check anything above with `dig`, e.g. `dig +short MX lenafilatova.co.uk`.
4. Bulk Redirects → create a list → upload `cloudflare-bulk-redirects.csv`
   (438 rules). Check the row limit for the plan before uploading; if the free
   tier is too small, load the OPS-182 and OPS-262 blocks first — they are the
   ones with measured impressions — and express the `recipe.html?r=` block as a
   single dynamic Redirect Rule on `http.request.uri.query` instead.
5. Keep SSL mode **Full** so Pages' own certificate stays valid.

Rules are generated from the live recipe data, so re-run `npm run redirects` and
re-upload after any change to `HIDDEN_SLUGS` / `RETIRED_SLUG_TARGETS`.

## Verifying

```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" \
  https://lenafilatova.co.uk/recipes/granola-bars-peanut-butter/
```

Expect `301 https://lenafilatova.co.uk/recipes/dried-fruit-sweets/`. Today it
returns `200` with no redirect URL — that is the thing being fixed.

Sweep everything at once:

```bash
tail -n +2 redirects/cloudflare-bulk-redirects.csv | while IFS=, read -r from to _; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$from")
  [ "$code" = "301" ] || echo "$code $from"
done
```

## After it's live

The stubs become dead weight once a 301 sits in front of them, but they are
harmless and cost one small file each — leave them as the fallback if the proxy
is ever removed. The `redirects:` block in `astro.config.mjs` and
`public/recipes/recipe.html` are what generate them.

Then in Search Console: resubmit the sitemap and expect the retired URLs to fall
out of the index over a few weeks. Only use **Removals** for anything still
ranking after that — it is a 6-month suppression, not a fix, and it hides the
signal that would tell you the 301s aren't working.
