# SEO copy spec: overrides the mockup wherever they differ (Craig, 13 Oct 2026)

Rule: **SEO-optimal copy wins over the mockup.** Source of truth is `Keyword map - APPROVED - 28 Sept 2026.json` (one primary keyword per page) and the rule set from WO-WEB-011: primary keyword in the title, the H1, the first paragraph and one body section; metadata untouched.

## How to apply (every lane, every set)
1. **H1 contains the primary keyword verbatim**, written in Craig's voice (first person, plain, no day rate). The mockup's designed line is kept as the second clause or as the first sentence of the lede so the design intent survives. Table below gives the exact H1.
2. Primary keyword also appears in the first lede sentence (already true on 19/21) and in at least one section heading or body paragraph.
3. Keyword body count after the build must be **>= staging body count** (metadata and JSON-LD excluded). Restore dropped staging prose listed in `copy-audit-staging-redesign-2026-10-13.md`.
4. Keep one `<h1>` per page. Do not stuff: the keyword appears naturally, no repeats inside one sentence.
5. Titles, meta, OG, JSON-LD: unchanged.

## H1 per page
| Route | Primary keyword | H1 to use |
|---|---|---|
| `/` | operations consultant | Operations consultant for print and embroidery: I find what's quietly costing you money. |
| `/clarity` | process audit | Process audit for print and embroidery: one day on site, one written plan. |
| `/deliver` | business process improvement | Business process improvement that gets built, and a system you keep to run it. |
| `/transform` | digital transformation consultancy | Digital transformation consultancy for print: the plan, executed. |
| `/retained` | fractional CTO (matches the live title; the map's "fractional coo" belongs to the CR-WEB-062 page) | Fractional CTO for print and embroidery. Not a project. A standing decision-maker. |
| `/pricing` | operations consultancy | Operations consultancy pricing: start with the audit. |
| `/how-i-build` | erp implementation consultant | ERP implementation consultant: the facts, the options, and the decision stays yours. |
| `/small-business` | small business consultant | Small business consultant for print and embroidery, without the big-business price tag. |
| `/problems/systems-dont-talk` | systems that don't talk to each other | Systems that don't talk to each other: five systems, and none of them know what the others are doing. |
| `/problems/manual-workarounds` | manual workarounds | Manual workarounds: your team has built a second system, and it lives in spreadsheets. |
| `/problems/spreadsheet-addiction` | manual processes | Manual processes in spreadsheets: the file that runs your business is one corrupted save from disaster. |
| `/sectors/workwear` | workwear software | Workwear software, from someone who's run the floor. |
| `/sectors/print-promotional` | print shop management software | Print shop management software starts with knowing what your current process actually costs. |
| `/sectors/teamwear-clubwear` | b2b ordering portal | A B2B ordering portal for teamwear and clubwear, sized to the squad. |
| `/sectors/schoolwear` | uniform ordering system | A uniform ordering system for schoolwear, built for the back-to-school peak that decides your year. |
| `/sectors/promotional-merchandise` | promotional products software | Promotional products software, without the spreadsheet chaos. |
| `/sectors/garment-decoration` | garment decoration | Garment decoration business systems were never built for how you actually work. (keep; restore count to staging level) |
| `/sectors/signs-graphics` | sign shop management software | Sign shop management software: signs and graphics run on tight margins, and every job starts with a site survey. |
| `/sectors/labels-packaging` | print mis | Print MIS for labels and packaging: variable data and compliance labelling demand precision most systems can't deliver. |
| `/sectors/awards-engraving` | print shop software | Print shop software for awards and engraving: personalisation at scale is hard, and most businesses still do it by hand. |
| `/apps/works` | erp for printing company | An ERP for printing companies: the ERP I couldn't buy for my clients. |

The mockup H1 sentence is preserved inside each line; only the keyword prefix or tweak is added. If a H1 wraps past three lines at 1440px, shorten the second clause and keep the keyword first; report it in LANE-RESULT.

## Homepage positioning (CR-WEB-073)
Keep the exact phrase **"operations consultant"** in the H1 and lede. "Operations and technology consultant" may appear alongside it (for example in the About page and the second lede sentence) but never replaces it on the homepage. Craig's ruling: SEO-optimal.

## Verification
Claude runs `audit4.py`-style check after each build: H1 contains primary keyword, body count >= staging, one h1, metadata byte-identical to staging.

## H1 pattern (added 13 Oct after rendering set 1)
Long keyword H1s wrapped to 4-5 lines at 1440px. Pattern from now on: ONE `<h1>` whose text is exactly the spec line, built as a **keyword lead-in span** (display:block, ~0.42em of the H1 size, same colour family, normal tracking, ends with its colon/full stop) followed by the **designed headline from the mockup at its mockup size**. Screen readers and crawlers read one sentence; the eye sees a small kicker over the big line. Target: the big line wraps the same number of lines as in the mockup; total H1 height <= 5 lines-equivalent of the mockup.
