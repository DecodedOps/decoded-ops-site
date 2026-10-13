# Lane result: web07x-set3-sectors (CR-WEB-078, WO-INF-087, release set 3)

**Branch:** `task/web07x-set3-sectors-2026-10-13` (cut from `origin/staging` at f6e3c59)
**Scope:** eight sector pages from `review/sectors-*` mockups. `/sectors/print-promotional` and
`/sectors/operations-consultant-print-embroidery` untouched. `SectorPageDS.tsx`,
`data/sector-routing.ts`, `IconSprite.tsx`, `site-v3.css`, `globals.css` untouched.

## What was built

- `components/SectorPageV2.tsx` (new): one data-driven template for the shared mockup structure
  (hero split, challenge cards, drawn plate, photo band, route of steps, optional case study,
  keep reading, house closer). Pages pass data; no route logic.
- `components/SectorPageV2.css` (new): the page-local layout rules the mockups carry (identical across the eight).
- `app/sectors/<slug>/page.tsx` x8: `metadata`, FAQPage JSON-LD and BreadcrumbSchema copied
  byte-for-byte from f6e3c59 (checked by string comparison). Body data copied from the mockups;
  artwork pieces (figures) rendered as issued, image paths moved to `/images/site/...`.
- `public/images/site/d17/sectors/*.webp` and the missing `public/images/site/evidence/*.webp`
  files referenced by the eight mockups (webp only).

## Routes

| Route | Final H1 (lead-in + designed line) | Keyword body count (page file, metadata/JSON-LD excluded) staging -> new |
|---|---|---|
| `/sectors/workwear` | Workwear software, from someone who's run the floor. | 2 -> 3 |
| `/sectors/teamwear-clubwear` | A B2B ordering portal for teamwear and clubwear, sized to the squad. | 2 -> 3 |
| `/sectors/schoolwear` | A uniform ordering system for schoolwear, built for the back-to-school peak that decides your year. | 2 -> 3 |
| `/sectors/promotional-merchandise` | Promotional products software, without the spreadsheet chaos. | 2 -> 3 |
| `/sectors/garment-decoration` | Garment decoration business systems were never built for how you actually work. | 6 -> 9 (brief quoted staging as 9 with routing data included; on the page-file method staging is 6, new is 9, so both readings are met) |
| `/sectors/signs-graphics` | Sign shop management software: signs and graphics run on tight margins, and every job starts with a site survey. | 2 -> 3 |
| `/sectors/labels-packaging` | Print MIS for labels and packaging: variable data and compliance labelling demand precision most systems can't deliver. | 2 -> 4 |
| `/sectors/awards-engraving` | Print shop software for awards and engraving: personalisation at scale is hard, and most businesses still do it by hand. | 2 -> 3 |

H1 text was checked against the SEO spec table (exact). One `<h1>` per page (in the template).
Lead-in is a `.h1-kw` span followed by the designed line, per the H1 pattern.

## Restored and folded

- **Schoolwear:** "Three problems, all of them worse in August." restored as the first sentence of
  the challenges lede. **Flag:** the mockup has four challenge cards, so "Three problems" sits over four
  cards. Kept because the audit asks for it; Craig to decide wording.
- **Garment decoration:** embroidery cross-link kept as the first Related sectors item. **Deviation from
  the mockup:** the mockup label "Print & embroidery" is changed to "Operations consultant for print & embroidery"
  (same href). One-line revert in `app/sectors/garment-decoration/page.tsx` if the longer label wraps badly.
  Body count raised with natural phrasing in the
  challenges lede, the decoration-method and artwork cards, and the keep-reading service body.
- **FAQPage JSON-LD:** unchanged from staging on all eight.

## Imagery decisions (as built in the mockups)

- Workwear hero: DO-ART-937, `prod-hivis-7a7ace` (commerce stock behind the mock-up; staging used the same frame).
- Promotional merchandise hero: DO-ART-929, `cat-promo-96b20f` (commerce stock behind the mock-up).
- Teamwear hero: DO-ART-935, `gen-bench-flatlay-v2` (generated, labelled gen-), as in the mockup.
- Garment, signs, labels, awards and schoolwear: the mockup's pieces, unchanged.
- Decision needed before these go live (per copy-audit note): real frame for 937 and 929.

## Structure notes

- Case-study pages: workwear, teamwear, promo and signs use the `split-6` layout; schoolwear and garment use `proof`
  (the mockups differ). Labels and awards mockups have no case-study section; none added.
- Six icons used by the mockups (`i-badge-check`, `i-history`, `i-map`, `i-tags`, `i-unplug`, `i-workflow`)
  are missing from `IconSprite`. Their symbols are copied from the mockup sprites into a local hidden sprite
  inside `SectorPageV2.tsx`. Not a shared change.
- Keep-reading and Related sectors come from the mockups, not from `data/sector-routing.ts`. These eight pages no
  longer read the routing file, so routing edits will not change them.
- Every link target in the eight pages was checked to exist under `app/`.

## Verification (no dev server, no browser, no `npm run build`, per brief)

- `npx tsc --noEmit`: exit 0.
- `npx eslint` on the template and the eight pages: exit 0, no output.
- `metadata`, FAQPage JSON-LD and BreadcrumbSchema identical to f6e3c59 on all eight.
- Not verified: H1 line count at 1440px and 390px, the mobile single-column route, and the visual match to the mockups.
  The lead should render the eight routes.

## Needs shared change

- None required. Optional: add the six icon symbols above to `IconSprite.tsx` so the local sprite can be removed.
- Artwork footers and figure `aria-label`s carry `DO-ART-nnn` markers (for example `decodedops.co.uk · DO-ART-937 · Rev 01`).
  These are part of each drawn piece, as in the set-1 print page, and are left as issued. If the no-DO-ART-visible
  rule applies to artwork footers too, it needs a shared artwork change, not a page change.

## Commit

See the commit message on `task/web07x-set3-sectors-2026-10-13`.
