# Lane notes — web076-set1 (CR-WEB-076, WO-INF-087 u10)

Full narrative is in `LANE-RESULT.md` at the worktree root. Operational notes:

## What shipped

Six routes rebuilt from their approved review plates, section for section:
`/`, `/clarity`, `/deliver`, `/transform`, `/retained`,
`/sectors/print-promotional`. SEO (metadata, JSON-LD, breadcrumbs) is
byte-identical to staging on all six. Mechanism is per-route opt-in: the pages
import `app/design-system/site-v3.css` + the new `components/IconSprite.tsx`;
no shared stylesheet or other route was touched.

## Two things the next lane should know

1. **site-v3.css did not parse.** The sheet as committed (by the asset commit
   that pre-dated this lane) carried `.route::before:not(.d17 *)` and five
   variants. That selector shape is invalid CSS; Turbopack's PostCSS rejects the
   entire sheet, which broke the production build for every page that imports
   it. Fixed in `86d68cc` by reordering to `.route:not(.d17 *)::before`. Anyone
   extending site-v3.css: pseudo-elements come last in a compound selector.
2. **The brief's map of site-v3.css was wrong.** It said the `.a939`–`.a942`
   piece rules and the sister-page extras (`.pk`, `.dl`, `.rm`, `.split`,
   `.scale`, `.feed-row` family, `.pull`, `.area .meta`) were already in the
   sheet. They were not. They are now — lifted verbatim from the plates — except
   the `.note` callout, which is retained-only because the homepage's bare
   columns use the same class name and both routes load site-v3.css.

## Verification

- `npx tsc --noEmit` clean; `npx eslint` on the seven touched TSX files: 0
  errors (only the `no-img-element` warnings every staging page with `<img>`
  already carries). `npm run build` exit 0, all six routes prerendered.
- `git grep -n "mockup" -- app components`: zero hits from this lane's files
  (remaining hits are pre-existing files this lane did not change).
- `node .context/price-audit.mjs --check` exits non-zero, but every violation
  is in files outside this lane (tools, apps, case-studies, how-i-build,
  workwear) — pre-existing on origin/staging.
- First build attempt in a dirty `.next` failed with a Turbopack
  `next/font/google` error that also reproduces on clean origin/staging in this
  environment; a clean `.next` plus the CSS fix produced a green build. If it
  recurs, clear `.next` before investigating the pages.

## Not done here (Claude's side)

- Register updates for 939/940/941/942/927 r02/1008 r02 and the withdrawn
  pieces — explicitly out of this lane's scope (MUST 7).
