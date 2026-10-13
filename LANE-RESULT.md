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
| `bc856b7` | feat(web): SEO H1 for homepage (CR-WEB-076 SEO pass) |
| `1b57796` | feat(web): SEO H1s for clarity, deliver, transform, retained, print-promotional (CR-WEB-076 SEO pass) |
| `a9fc92b` | fix(css): widen hero H1 columns and cap font so SEO H1s stay <=3 lines (CR-WEB-076 SEO pass) |
| `af15a12` | fix(web): fit SEO H1s to 3 lines desktop / 4 mobile per route (CR-WEB-076 SEO pass) |
| `701886e` | copy(web): front-load print shop management software into print-promotional lede (CR-WEB-076 SEO pass) |

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

---

## SEO pass (web076-set1-seo, CR-WEB-076, WO-INF-087 u14)

Rule applied: **SEO-optimal copy wins over the mockup** (Craig, 13 Oct). Source of truth is
`.context/lane-briefs/seo-copy-spec-2026-10-13.md`. Scope: the six set-1 routes only.

### H1 per route — before → after

| Route | Keyword | H1 on staging (before) | H1 now (after) |
|---|---|---|---|
| `/` | operations consultant | I find what's quietly costing you money. | Operations consultant for print and embroidery: I find what's quietly costing you money. |
| `/clarity` | process audit | One day on site. One written plan. | Process audit for print and embroidery: one day on site, one written plan. |
| `/deliver` | business process improvement | I get it built. And you keep the system that runs it. | Business process improvement that gets built, and a system you keep to run it. |
| `/transform` | digital transformation consultancy | The plan, executed. | Digital transformation consultancy for print: the plan, executed. |
| `/retained` | fractional CTO | Fractional CTO. Not a project. A standing decision-maker. | Fractional CTO for print and embroidery. Not a project. A standing decision-maker. |
| `/sectors/print-promotional` | print shop management software | Print shop operations start with knowing what your current process actually costs. | Print shop management software starts with knowing what your current process actually costs. |

Every route keeps **exactly one `<h1>`**, and each H1 contains its primary keyword verbatim,
written first person, no day rate. The mockup's designed line is preserved as the second clause,
so the design intent survives.

### Body keyword counts (JSX text only — `metadata` export and JSON-LD excluded)

| Route | Keyword | staging | now | Δ |
|---|---|---|---|---|
| `/` | operations consultant | 2 | 3 | +1 |
| `/clarity` | process audit | 2 | 3 | +1 |
| `/deliver` | business process improvement | 2 | 3 | +1 |
| `/transform` | digital transformation consultancy | 2 | 3 | +1 |
| `/retained` | fractional CTO | 5 | 5 | 0 |
| `/sectors/print-promotional` | print shop management software | 2 | 3 | +1 |

**Every route is ≥ its staging count.** No keyword is repeated inside a single sentence.

### Keyword placement (H1 + first lede sentence + one body section)

| Route | in H1 | in first lede sentence | in a body paragraph / heading |
|---|---|---|---|
| `/` | yes | "I'm an **operations consultant**." | s7: "…already fixing as an operations consultant" |
| `/clarity` | yes | "…a one-day **process audit** inside your business." | areas lede: "In a process audit I follow the actual process…" |
| `/deliver` | yes | "Deliver is the **business process improvement** and implementation phase…" | loop lede: "…business process improvement as a loop that keeps running…" |
| `/transform` | yes | "Transform is my **digital transformation consultancy**…" | closer lede: "My digital transformation consultancy is scoped per engagement." |
| `/retained` | yes | "…as a **fractional CTO** or fractional COO…" | fit: "A fractional CTO relationship works best once there's a plan…" |
| `/sectors/print-promotional` | yes | "**Print shop management software** is usually built for long runs…" | challenge 06: "Print shop management software that ignores substrate…" |

The homepage keeps the exact phrase **"operations consultant"** in both the H1 and the lede
(CR-WEB-073 / spec "Homepage positioning").

### H1 line-count fixes (MUST 7)

Measured in headless Chrome (Outfit 800, `line-height: 1.2`), not estimated — my first two
estimates were wrong and are not the basis for anything below. At 1440px each H1 renders **3
lines**; at 390px each renders **4 lines or fewer**, within the existing type contract
(`--do-text-*` clamps only; no new sizes invented).

- `app/homepage.css` — `section.stage h1`: cap `4.6rem → 3.4rem`, measure `13ch → 20ch`
- `app/design-system/site-v3.css` — `.hero-head`: copy column widened from `7fr` to `1fr`, and the
  `14ch` cap on `.hero h1` dropped; the column now bounds the measure
- `app/deliver/deliver-v1.css` — **new**; `.hero h1` cap `3.7rem → 3.1rem`
- `app/retained/retained-v1.css` — `.hero h1` cap `3.7rem → 3.1rem`
- `app/sectors/print-promotional/print-v2.css` — `.hero-split` copy column `1.05fr → 1.45fr`;
  `.hero h1` cap `3.7rem → 3.4rem`

`app/clarity/page.tsx` and `app/transform/page.tsx` needed **no CSS** — their H1s fit at the
shared sizes once the column was widened.

### Other verification

- **Metadata untouched (MUST 6).** The `metadata` export, every JSON-LD schema, the
  `BreadcrumbSchema` and the `JsonLd` imports are **byte-identical to `origin/staging`** on all
  six routes — checked by extracting the block from both revisions and string-comparing.
- **Restored staging prose (MUST 5).** The homepage line "Same approach at Case study 02, real
  production numbers: 17 supplier feeds automated, and a projected saving of 20 to 40 hours a
  week." is present and still carries its link on "Case study 02". It was the only dropped line in
  this set.
- **`npx tsc --noEmit`** — exit 0, clean.
- **`npm run lint`** — 77 errors / 97 warnings, **identical to the `origin/staging` baseline**
  (verified by linting a detached staging worktree with the same `node_modules`). Zero errors in
  the six pages; the 22 warnings there are the pre-existing `no-img-element` warnings that every
  staging page carrying `<img>` already has. Nothing this lane introduced.
- **`npm run build`** — exit 0, all six routes prerendered.
- **`git diff --stat origin/staging`** — the diff is the earlier set-1 scope (six pages, per-page
  CSS, `site-v3.css`, `IconSprite.tsx`, 18 evidence photos, `.context/**`) **plus** the SEO-pass
  edits above. No route outside the six was touched.

### Notes for the reviewer

1. **The homepage H1 lost `letter-spacing: -0.038em` and its on-dark colour rule when it was
   resized.** Both were on the replaced line in `homepage.css`. The on-dark colour is inherited
   from `.g-navy` / `section.stage`, so the render is unchanged; the tracking difference is
   imperceptible at the new size. Flagging it rather than silently reintroducing a rule the plate
   did not carry.
2. **The `14ch` cap on `.hero h1` in `site-v3.css` was dropped, which affects all four service
   pages, not just the two that needed it.** Clarity and transform fit at the shared sizes, so
   widening the column and dropping the cap for all four is simpler than a per-route override on
   two of them. If the reviewer wants the narrow measure back on those two, it is a one-line add
   to their page CSS.
3. **`/pricing`, `/how-i-build`, `/small-business`, the `/problems/*` and the other seven
   `/sectors/*` routes carry spec H1s in the table but are out of scope for this lane** — they are
   later sets. Their spec lines are untouched.
