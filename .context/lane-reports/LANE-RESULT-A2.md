# LANE-RESULT: Package A2 (CR-WEB-080 sectors and problems, H1 pill)

Branch: task/web080-a2-sectors-problems-2026-10-13 (cut from e49e569). Not pushed.

## H1 pill
Every route in the brief table has its pill text in `h1Lead` (sector and problem templates) or in the `.h1-kw` span (spreadsheet-addiction), with the headline text per the table. The separate eyebrow pill before the h1 is removed from SectorPageV2 (hero), ProblemPageV2 (hero) and spreadsheet-addiction.

Routes: workwear, teamwear-clubwear, schoolwear, promotional-merchandise, garment-decoration, signs-graphics, labels-packaging, awards-engraving, problems/systems-dont-talk, problems/manual-workarounds, problems/spreadsheet-addiction.

## Keyword moves
- teamwear-clubwear: title "Teamwear Software for Clubwear Suppliers | Decoded Ops" (54 chars); description "Teamwear software for squad numbers ..." (147 chars). Title, description and openGraph/twitter copies updated. "b2b ordering portal" removed from body (case-study lede now "trade ordering portal"). "club shop software" added once in the lede. Link "club shop and trade portal software" to /apps/commerce in keep-reading resources.
- awards-engraving: title "Engraving Business Software for Awards | Decoded Ops" (52); description 158 chars. "print shop software" replaced in body (lede x2, challenges lede). Link "ERP for printing companies" to /apps/works.
- labels-packaging: title "Labels & Packaging Operations and Systems | Decoded Ops" (55); description 148 chars. Description now reads "Systems that put ..., handle variable data ..., and deliver ..." (verb agreement fixed from "handles"/"delivers" so it reads with the plural subject). "print MIS" removed from body (lede, step, problem link label now "An ERP that doesn't fit your business"). Link "ERP for printing companies" to /apps/works.

## Keyword body counts (page file body, metadata and JSON-LD excluded, case-insensitive, curly apostrophes normalised)
| Route | Primary | e49e569 | After |
|---|---|---|---|
| sectors/workwear | workwear software | 3 | 3 |
| sectors/teamwear-clubwear | teamwear software (new) | 0 | 1 |
| sectors/schoolwear | uniform ordering system | 3 | 3 |
| sectors/promotional-merchandise | promotional products software | 3 | 3 |
| sectors/garment-decoration | garment decoration | 10 | 11 |
| sectors/signs-graphics | sign shop management software | 3 | 3 |
| sectors/labels-packaging | labels and packaging (new primary) | 2 | 2 |
| sectors/awards-engraving | engraving business software (new) | 0 | 3 |
| problems/systems-dont-talk | systems that don't talk to each other | 2 | 2 |
| problems/manual-workarounds | manual workarounds | 10 | 10 |
| problems/spreadsheet-addiction | manual processes | 3 | 3 |

Primaries for the eight unmoved routes are the pill keyword after the middot. Stale phrases checked: "b2b ordering portal", "print shop software" and "print MIS" no longer appear in the body of the three moved pages.

## Other changes
- components/SectorPageV2.tsx: hero eyebrow span removed; comment on h1Lead updated.
- components/ProblemPageV2.tsx: hero eyebrow span (`p.problem`) removed; comment on h1Lead updated. The `problem` prop stays (still required by the interface and used in the page data).
- app/problems/problems-v2.css: `.h1-kw` rewritten to the pill style; `.42em` kicker rules and the g-navy and 760px overrides removed.
- components/SectorPageV2.css: no `.h1-kw` copy existed, so the pill rule is added there.
- Page files: h1Lead and h1 per the table; metadata and JSON-LD edited only on the three moved pages.

## Checks
- `npx tsc --noEmit`: exit 0.
- `npx eslint` on the 13 files: 0 errors, 4 pre-existing `no-img-element` warnings.
- Not run: dev server, browser, `npm run build` (per brief).

## Notes
- No mockup for these 11 routes exists in the apps-*-v2 set named in the brief, so the table headlines were used as written, with their capitalisation (for example "From someone who's run the floor.").
- ProblemPageV2 and SectorPageV2 are used only by the routes in this package (checked by grep), so the template-level eyebrow removal affects only these pages.
