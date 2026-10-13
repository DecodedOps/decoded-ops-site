# Lane brief: web076-set1 (CR-WEB-076, WO-INF-087 u10)

Worktree: this directory, branch `task/web076-set1-2026-10-13`, based on `origin/staging`. Commit early and often. Do NOT push, merge, or run any dev server or browser (Claude verifies).

## Goal
Rebuild six staging routes from their approved mockups, so staging matches the mockups section for section:

| Route | Page file | Mockup (the spec; read it in full) |
|---|---|---|
| `/` | `app/page.tsx` | `D:\apps\design-systems\decoded-ops-website\review\homepage-v4.html` |
| `/clarity` | `app/clarity/page.tsx` | `...\review\clarity-v2.html` |
| `/deliver` | `app/deliver/page.tsx` | `...\review\deliver-v1.html` |
| `/transform` | `app/transform/page.tsx` | `...\review\transform-v1.html` |
| `/retained` | `app/retained/page.tsx` | `...\review\retained-v1.html` |
| `/sectors/print-promotional` | `app/sectors/print-promotional/page.tsx` | `...\review\sectors-print-promotional-v2.html` |

Also read `.context/lane-briefs/RELEASE-SET-1-cr-web-076-2026-10-09.md` (scope table and mechanism) and the per-page notes in `D:\apps\design-systems\decoded-ops-website\briefs\content-live-services-2026-10-09.md`, `content-live-clarity-2026-10-09.md`, `content-live-sectors-print-promotional-2026-10-09.md`.

## MUST
1. **Mechanism = per-route opt-in.** Already committed for you: `app/design-system/site-v3.css` (the shared house sheet) and the photos in `public/images/site/evidence/`. Add `components/IconSprite.tsx` (the lucide symbols embedded in the mockups, path for path). Import `site-v3.css` and the sprite only in the six pages. **Do not edit** `app/globals.css`, `app/design-system/ds-marketing.css`, `app/d17-global.css`, `app/d17-art.module.css`, or any other route's files. Mockup layout-only CSS goes in a per-page CSS module.
2. **Keep SEO exactly as staging.** Keep each page's `metadata` export (title, description, alternates, openGraph, twitter), all JSON-LD blocks (FAQPage, breadcrumb, ProfessionalService, etc.) and the `BreadcrumbSchema`/`JsonLd` components unchanged. **Never take `<title>` or any meta from the mockup** (mockup titles read "... (v2 mockup)").
3. **Copy**: the mockup text is the spec and is already the optimised staging copy, character for character, plus new band/caption/closer lines. Use it verbatim, including the new lines. Do not rewrite, shorten or "improve" any copy. H1 and lede stay exactly as in the mockup.
4. **Restore these staging lines the mockup dropped by accident** (place them where they sat on staging, in the page's own typography):
   - `/` homepage: the proof line "Same approach at Case study 02, real production numbers: 17 supplier feeds automated, and a projected saving of 20 to 40 hours a week." Find it in `git show origin/staging:app/page.tsx`.
   - nothing else is to be restored on the other five routes in this set.
5. **Artwork**: the new pieces `DO-ART-939` (Clarity), `940` (Deliver), `941` (Transform), `942` (Retained), `1008 Rev 02` (home), `927 Rev 02` (print) are built from the mockup markup (the `.a939`-`.a942` / `.sw-doc` rules are in site-v3.css). Withdrawn pieces (`908, 306` Clarity; `909, 305` Deliver; `911, 403` Transform; `910, 204` Retained; generated press hall on print) are removed from these routes only. Do not delete their component files.
6. Image paths: the mockups use `../assets/site/evidence/<file>`; the site serves them at `/images/site/evidence/<file>`. Other images the mockups use (`d17/...`) already exist under `public/images/d17/`; confirm each path exists, and use `next/image` or `<img>` with explicit width/height the way the current staging page does.
7. Register the new piece numbers in `D:\apps\design-systems\decoded-marketing\artwork\register.html` is NOT your job. Skip it (Claude does it).
8. Mobile: the mockups are responsive; keep their breakpoints. No horizontal scroll at 390px.

## DECIDE YOURSELF
Component split, CSS-module naming, file organisation within the six pages, sprite component API, `alt` text wording for photos (follow the mockup captions), anything not specified here.

## ASK FIRST (stop and write it in `LANE-RESULT.md`, do not guess)
Any change needed to a file outside the scope list; any mockup element you cannot reproduce with the existing CSS; any copy conflict between the mockup and staging beyond what is stated above.

## Done when
- `npx tsc --noEmit` and `npx next lint` (or `npm run lint`) are clean for the touched files; `npm run build` succeeds.
- `git diff --stat origin/staging` touches only: the six page files, their CSS modules, `components/IconSprite.tsx`, `app/design-system/site-v3.css`, `public/images/site/evidence/*`, `.context/**`. Anything else is a failure.
- `git grep -n "mockup" -- app components` returns nothing from your changes (no mockup strings leak into the site).
- Write `LANE-RESULT.md` in the worktree root: files changed, what was restored, any ASK-FIRST items, commit hash. Commit everything (`git add` only your files, not `-A` blindly), then stop.
