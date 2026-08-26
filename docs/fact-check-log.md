# Blog fact-check log (OPS-370)

State file for the rolling fact-check of every post in `src/data/blog.js`.
Two posts are checked per run, newest first, one run every two hours.

**This file is the only source of truth for where the sweep has got to.** A run
must read it first, take the two oldest-numbered posts still marked `pending`,
and update their rows before it finishes — including when it finds nothing wrong.

Ordering is the array order of `POSTS`, which is `date` descending. New posts
added at the top of the array shift these numbers, so match on **slug**, never
on position.

## How a run works

1. Read this file; pick the next two `pending` slugs.
2. Pull each post's `en` and `ua` content out of `src/data/blog.js`.
3. Check every numeric claim, study description, `refs` entry and internal link
   against a primary source. `WebSearch` works in these sessions; most publisher
   domains are blocked to `WebFetch`, so lean on search result summaries and
   cross-check two independent ones before calling anything wrong.
4. Fix what is clearly wrong in **both** `en` and `ua`. Leave editorial and
   tone questions to Lena.
5. Mark the rows `done`, note the date and the Jira issue carrying the findings.
6. Commit, push, open a draft PR, and file the findings as a Jira comment.

## Rules

- Correct only what a primary source contradicts. Anything arguable goes in the
  Jira comment as a recommendation, not into the post.
- Every `en` fix needs its `ua` counterpart. The Ukrainian mirrors the English
  claim for claim.
- Never invent or substitute a citation URL. If a source cannot be verified,
  say so in the Jira comment and leave the text alone.
- Run `npm run build` before pushing and read the output — `warnAssetGaps()`
  and `featuredPosts()` warn rather than throw.

## The schedule

Driven by a Claude Routine, `trig_01RRhHp6SEDH5BqXdaUpWGKM`, firing every two
hours. It is bound to an existing session rather than spawning a fresh one per
run — fresh-session routines cannot carry the Atlassian connector in this org,
so they would have no Jira tools. Pause or delete it from the Routines list.

## Status

| # | Date | Slug | Status | Checked | Findings |
|---|------|------|--------|---------|----------|
| 1 | 2026-08-26 | `pharma-type-1-diabetes-cure` | done | 2026-08-26 | OPS-370 — two EN refs stale vs their own body text (Sanofi currency, SDP total); fixed |
| 2 | 2026-08-25 | `retinoids-after-40-diabetes` | done | 2026-08-26 | OPS-370 |
| 3 | 2026-08-24 | `oral-minoxidil-for-womens-hair-loss` | done | 2026-08-25 | OPS-370 |
| 4 | 2026-08-24 | `magnesium-perimenopause-sleep-insulin-resistance` | done | 2026-08-25 | OPS-370 |
| 5 | 2026-08-23 | `prediabetes-signs-perimenopause` | done | 2026-08-25 | OPS-370 |
| 6 | 2026-08-23 | `bmi-trajectory-prediabetes-women` | done | 2026-08-25 | OPS-370 |
| 7 | 2026-08-22 | `insulin-resistance-hair-thinning` | done | 2026-08-25 | OPS-370 |
| 8 | 2026-08-21 | `perimenopause-anxiety-mind-body-exercise` | done | 2026-08-25 | OPS-370 |
| 9 | 2026-08-21 | `glp1-what-we-know` | done | 2026-08-25 | OPS-370 |
| 10 | 2026-08-20 | `glp1-menopause-bone-loss` | done | 2026-08-25 | OPS-370 |
| 11 | 2026-08-20 | `alcohol-and-blood-sugar` | done | 2026-08-25 | OPS-370 |
| 12 | 2026-08-20 | `zone-2-or-hiit-after-40` | done | 2026-08-25 | OPS-370 |
| 13 | 2026-08-19 | `creatine-women-over-40` | done | 2026-08-25 | OPS-370 |
| 14 | 2026-08-19 | `night-sweats-or-hypo` | done | 2026-08-25 | OPS-370 |
| 15 | 2026-08-19 | `glp1-older-women-lean-mass` | done | 2026-08-25 | OPS-370 |
| 16 | 2026-08-19 | `frozen-shoulder-diabetes` | done | 2026-08-25 | OPS-370 |
| 17 | 2026-08-18 | `menopause-skincare-longevity-marketing` | done | 2026-08-26 | OPS-370 |
| 18 | 2026-08-18 | `fermented-foods-gut-microbiome-review` | done | 2026-08-26 | OPS-370 |
| 19 | 2026-08-18 | `fibre-deficiency-gut-inflammation` | done | 2026-08-26 | OPS-370 |
| 20 | 2026-08-18 | `menopause-cost-workplace-productivity` | done | 2026-08-26 | OPS-370 |
| 21 | 2026-08-17 | `clinical-trials-women-over-40` | done | 2026-08-26 | OPS-370 |
| 22 | 2026-08-16 | `endometriosis-type-2-diabetes-risk` | done | 2026-08-26 | OPS-370 |
| 23 | 2026-08-16 | `hrt-type-1-diabetes-evidence` | done | 2026-08-26 | OPS-370 |
| 24 | 2026-08-15 | `menopause-brain-fog-not-dementia` | done | 2026-08-26 | OPS-370 |
| 25 | 2026-08-14 | `strength-training-perimenopause-beginners` | done | 2026-08-26 | OPS-370 |
| 26 | 2026-08-13 | `walking-after-meals-blood-sugar` | done | 2026-08-26 | OPS-370 |
| 27 | 2026-08-13 | `eating-around-training-blood-sugar` | done | 2026-08-26 | OPS-370 |
| 28 | 2026-08-13 | `does-weight-training-raise-blood-sugar` | done | 2026-08-26 | OPS-370 — BMC Women's Health review miscredited: protein finding corrected (EN+UA) |
| 29 | 2026-08-12 | `glp1-weight-loss-sex-difference-women-men` | done | 2026-08-26 | OPS-370 — figures exact; JAMA cite repointed from press release to paper |
| 30 | 2026-08-11 | `extended-release-minoxidil-female-hair-loss` | done | 2026-08-26 | OPS-370 — clean; caveats already accurate |
| 31 | 2026-08-10 | `type-2-diabetes-menopause-symptoms` | done | 2026-08-26 | OPS-370 — clean; cite/URL mismatch noted, not changed |
| 32 | 2026-08-10 | `kefir-fibre-synbiotic-inflammation` | done | 2026-08-26 | OPS-370 — clean; every figure exact |
| 33 | 2026-08-08 | `perimenopause-uncertainty-us-study` | done | 2026-08-26 | OPS-370 — clean; every figure exact |
| 34 | 2026-08-04 | `perimenopause-global-survey-symptom-gap` | done | 2026-08-26 | OPS-370 — clean; citation and figures exact |
| 35 | 2026-08-03 | `estrobolome-gut-oestrogen-menopause` | pending | — | — |
| 36 | 2026-08-02 | `sleep-insulin-resistance-women` | pending | — | — |
| 37 | 2026-07-28 | `topical-oestrogen-skincare-menopause` | pending | — | — |
| 38 | 2026-07-27 | `tirzepatide-hrt-weight-loss-menopause-2026` | pending | — | — |
| 39 | 2026-07-25 | `gut-microbiome-precision-nutrition-women-2026` | pending | — | — |
| 40 | 2026-07-24 | `ada-2026-glp1-type1-diabetes-women` | pending | — | — |
| 41 | 2026-07-19 | `menstrual-blood-research-medicine` | pending | — | — |
| 42 | 2026-07-19 | `type-1-diabetes-cure-trials` | pending | — | — |
| 43 | 2026-07-17 | `anxiety-brain-fog-top-menopause-symptom` | pending | — | — |
| 44 | 2026-07-17 | `type2-diabetes-women-under-40-sex-bias` | pending | — | — |
| 45 | 2026-07-17 | `higher-protein-postmenopausal-bone-muscle` | pending | — | — |
| 46 | 2026-07-17 | `hrt-restores-skin-collagen-2026-review` | pending | — | — |
| 47 | 2026-07-17 | `glp1-weight-loss-drugs-fat-not-muscle` | pending | — | — |
| 48 | 2026-07-15 | `cortisol-belly-perimenopause` | pending | — | — |
| 49 | 2026-07-10 | `hrt-prescriptions-doubling` | pending | — | — |
| 50 | 2026-07-10 | `islet-transplant-insulin-independence` | pending | — | — |
| 51 | 2026-07-10 | `carb-quality-healthy-aging` | pending | — | — |
| 52 | 2026-07-10 | `menopause-skin-oestrogen` | pending | — | — |
| 53 | 2026-07-10 | `glp1-drugs-less-movement` | pending | — | — |
| 54 | 2026-07-09 | `natural-sweeteners` | pending | — | — |
| 55 | 2026-07-04 | `protein-for-women-over-40` | pending | — | — |
| 56 | 2026-06-26 | `type-2-diabetes-research` | pending | — | — |
| 57 | 2026-06-20 | `perimenopause-diabetes-blood-sugar` | pending | — | — |
| 58 | 2026-06-14 | `collagen-and-skin` | pending | — | — |
| 59 | 2026-06-12 | `perimenopause-weight-myths` | pending | — | — |
| 60 | 2026-06-03 | `reading-glucose-patterns` | pending | — | — |
