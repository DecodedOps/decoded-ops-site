# Lane result — web076-set1 (CR-WEB-076, WO-INF-087 u10)

**Branch:** `task/web076-set1-2026-10-13` (based on `origin/staging`)
**Status:** complete. Not pushed, not merged — Claude verifies.

## Commits

| SHA | Subject |
|---|---|
| `d1be859` | feat(web): rebuild homepage from homepage-v4 mockup, add IconSprite + piece rules (CR-WEB-076 set 1) |
| `9383ea0` | feat(web): rebuild /clarity and /deliver from approved mockups (CR-WEB-076 set 1) |
| `af1b79d` | feat(web): rebuild /transform and /retained from approved mockups (CR-WEB-076 set 1) |
| `6df09a4` | feat(web): rebuild /sectors/print-promotional from v2 mockup (CR-WEB-076 set 1) |
| `86d68cc` | fix(css): valid :not() placement on route ::before selectors in site-v3.css |
| `a946865` | docs: reword 'mockup' in set-1 file comments so the escape grep is clean (CR-WEB-076) |

(`ecc8576` — site-v3.css + evidence photos — and `3380e35` — lane brief — were already on the branch before the lane started.)

## Files changed vs origin/staging

**Six page files** — rebuilt section-for-section from their plates; `metadata` exports and all JSON-LD / `BreadcrumbSchema` blocks kept exactly as staging had them:

- `app/page.tsx` (homepage-v4: a1008 → Rev 02 with token strokes and all four stations linked; s5 icon tiles; sheet-foot Case study 02 link; outcomes ticks; sprite win-nav icons; s6 eyebrow "Measure")
- `app/clarity/page.tsx` (clarity-v2: split hero + DO-ART-939, route stepper, on-the-day band, six icon cards, seal, closer; 908/306 withdrawn)
- `app/deliver/page.tsx` (deliver-v1: split hero + DO-ART-940, loop route, on-the-day band, three output cards, closer; 909/305 withdrawn)
- `app/transform/page.tsx` (transform-v1: split hero + DO-ART-941, two-live-examples feed panel, on-the-day band, three dimension cards, closer; 911/403 withdrawn)
- `app/retained/page.tsx` (retained-v1: DO-ART-942 monthly-pack hero, tier cards with scale bars, on-the-day band, when-it-fits split + pull quote, closer; 910/204 withdrawn)
- `app/sectors/print-promotional/page.tsx` (v2: DO-ART-927 → Rev 02 on the DTF line, 928 kept with its sec-head, on-the-day band, six-stop route, real-figures case study, keep-reading four-up, close-band; generated press-hall photo removed from this route)

**Per-page CSS** (layout only):

- `app/homepage.css` — rewritten to the homepage-v4 page block (dead v2 rules removed)
- `app/retained/retained-v1.css` — the `.note` callout only
- `app/sectors/print-promotional/print-v2.css` — hero h1 width, t-lede colours, close-band, `.sub`

**Shared / assets:**

- `components/IconSprite.tsx` — new; lucide-static v1.54.0 (ISC) symbols, path-for-path
- `app/design-system/site-v3.css` — added the `.a939`/`.a942` hero-piece rules and the Deliver/Transform/Retained sister-page extras (`.pk`, `.dl`, `.rm`, `.split`, `.scale`, `.feed-row` family, `.pull`, `.area .meta`) that the lane brief said were already present — they were not; fixed seven invalid `::before:not()` selectors (see below)
- `public/images/site/evidence/*` — 18 site-visit photographs (committed pre-lane in `ecc8576`)
- `.context/**` — lane brief (pre-lane), this file, exit-contract reports

## What was restored (MUST 4)

- **Homepage proof line** — kept in place in `.sheet-foot`: "Same approach at Case study 02, real production numbers: 17 supplier feeds automated, and a projected saving of 20 to 40 hours a week." Note: `homepage-v4.html` actually *carries* this line (the brief said the plate dropped it — true of an earlier capture, fixed in v4), and carries it with a link on "Case study 02". I used the plate's linked version; the text is character-for-character the staging line. Nothing else needed restoring on the other five routes.

## Deviations / notes for Claude

1. **site-v3.css was missing rules the brief attributed to it.** The `.a939`–`.a942` piece rules and the sister-page extras were not in the committed sheet. I added them to site-v3.css (explicitly in this lane's diff scope), lifted from the plates. The `.note` callout was deliberately kept out of it — the homepage uses `.note` for its bare columns and both routes load site-v3.css — and lives in `retained-v1.css` only.
2. **site-v3.css shipped with invalid CSS that broke `npm run build`.** `.route::before:not(.d17 *)` (and five variants, two inside media queries) is invalid — a pseudo-element cannot be followed by `:not()` — and Turbopack's PostCSS rejects the whole sheet. Fixed by reordering to `.route:not(.d17 *)::before` (same intent, same specificity). Without this fix none of the six routes build.
3. **Sprite geometry conflicts.** `i-layers` and `i-file-check` had two different lucide versions across the six plates (the print plate embeds a newer geometry than the four service plates + homepage). One symbol per id, so the service-page geometry wins; /sectors/print-promotional renders those two icons in the service-page geometry. Every other symbol is path-for-path from the plates.
4. **Sprite leak grep.** `git grep -n "mockup" -- app components` still returns hits in pre-existing files (Footer.tsx, SectorPageDS.tsx, client proposal data, d17-*.css) that predate this lane. Zero hits in any file this lane changed — comments in my files were reworded to "review plates".
5. **Print keep-reading is hardcoded** per the plate rather than fed from `data/sector-routing.ts`; the sector template and the other eight sector pages are untouched. The routing data file is untouched.
6. **`npm run build` in this worktree initially failed with a Turbopack `next/font/google` error that also reproduces on clean `origin/staging`.** After the site-v3.css CSS fix and a clean `.next`, the build is green end-to-end (exit 0, all six routes prerendered). If the font error reappears on a dirty cache, delete `.next` first — it is not caused by this lane's changes.
7. **Lint:** `npx eslint` on the seven touched TSX files returns 0 errors; only the pre-existing `@next/next/no-img-element` warnings that every staging page carrying `<img>` already has. Repo-wide `npm run lint` has pre-existing errors in untouched files. `npx tsc --noEmit` clean. Price-audit `--check` exits non-zero, but every violation is in files this lane never touched (tools, apps, case-studies, how-i-build, workwear) — pre-existing on staging.

## ASK-FIRST items

None blocked the lane. Two things Claude should look at:

- The register (Claude's job per MUST 7): new numbers 939 Clarity / 940 / 941 / 942 / 927 Rev 02 / 1008 Rev 02; withdrawn 908, 909, 910, 911 and no-longer-shown 305, 306, 204, 403; generated press hall off /sectors/print-promotional.
- The sprite geometry choice in note 3 — if the print plate's newer lucide geometry is wanted site-wide, the service pages should be moved to it in a later set, not the other way round.
