# Lane result: set 2 services (CR-WEB-077 part B, WO-INF-087)

**Branch:** `task/web07x-set2-services-2026-10-13` (cut from `origin/staging` f6e3c59)
**Status:** build complete. `tsc --noEmit` exit 0. `eslint` 0 errors on the three pages (warnings are the existing `no-img-element` set). Not built, not pushed, not visually verified (brief: no dev server, no browser in this lane).

## Routes

| Route | Final H1 | Primary keyword body count (JSX, H1 included), staging -> new |
|---|---|---|
| `/how-i-build` | ERP implementation consultant: The facts, the options, and the decision stays yours. | erp implementation consultant: 1 -> 2 |
| `/small-business` | Small business consultant for print and embroidery: Technology and systems support without the big-business price tag. | small business consultant: 2 -> 2; small business operations consultant: 2 -> 2 |
| `/pricing` | Operations consultancy pricing: Start with the audit. | operations consultancy: 2 -> 3 |

H1 pattern: one `<h1>`, keyword lead-in in `span.h1-kw` (ends with a colon), designed headline after it.
Spec punctuation: the spec's comma/full-stop after the keyword became a colon, per the lead-in pattern. The `small-business` headline is the mockup's second clause with the "system size" first clause replaced by the spec line.

## Lines restored or changed

- `/how-i-build`: "No reseller margin, no referral fee, and nothing that looks like a partner tier." restored as a lede above the three ticks in the "Why it works this way" block. Ticks kept.
- `/how-i-build`: closer heading "Book a free discovery call" reworded to "Not sure which rung you're on?" (the heading duplicated the button label). Lede and buttons as the mockup.
- `/small-business`: Clarity Check lede changed from "as your small business consultant" to "as your small business operations consultant", so the operations phrase stays at staging's body count (2) once the H1 takes the consultant phrase. Only a single phrase changed; this is the one edit to mockup text.
- `/pricing`: no staging line restored. Verified the mockup keeps "There is no price list for the apps" in plain words, and the consultancy table keeps "Set at the audit, to your scope" with no consultancy from-prices. Only the £600 Clarity Check is a number on the page.

## Metadata and JSON-LD

`metadata`, canonical, OpenGraph, Twitter and all JSON-LD blocks are byte-identical to `origin/staging` on all three routes (checked by extracting the block from both revisions and diffing).

## Deviations from the brief

1. **DO-ART numbers removed from visitor-visible text.** The `d17-mark` credit lines on the hero pieces and the three photo-band figures now read `decodedops.co.uk` only. The data-no attributes are dropped. The brief rule is "no DO-ART numbers visible to visitors", and the mockups showed them.
2. **Hero pieces** are injected via `dangerouslySetInnerHTML` (the set-1 clarity pattern). Their `aria-label`s no longer carry the DO-ART number.
3. **Two icons not in the shared sprite** (`i-puzzle`, `i-hammer`, used by how-i-build rungs 2 and 3) are provided by a small local `PageIcons` symbol set in that page file, not by a change to `components/IconSprite.tsx`.
4. No new images were needed: every evidence photo the three mockups reference is already in `public/images/site/evidence/` from set 1. All 11 paths verified.

## Needs shared change

None. No edits to `app/globals.css`, `app/design-system/*`, `app/d17-global.css`, `app/d17-art.module.css` or `site-v3.css`. Per-package styles are in `app/how-i-build/how-i-build-v2.css`, `app/small-business/small-business-v2.css` and `app/pricing/pricing-v2.css`.

## Flagged for Craig (not changed)

- `/small-business` "Beyond the Clarity Check, it's the same services and the same from-prices as everywhere else on this site." The phrase "from-prices" sits uneasily with CR-WEB-069 (no consultancy "from" prices). Staging copy, kept verbatim. Needs a decision.
- `/small-business` closer lede "Book a free call and I'll point you to the most relevant option..." is new mockup copy, shipped as written, pending the batch copy review.
- `/how-i-build` closer heading is my reword; Craig to confirm.

## Not checked in this lane

Mobile at 390px (no horizontal scroll) and desktop render. Both need the lead's visual pass (brief forbids dev server and browser here).
