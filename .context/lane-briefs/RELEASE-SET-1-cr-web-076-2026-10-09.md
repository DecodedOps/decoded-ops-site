# Release set 1 — CR-WEB-076 (WO-INF-087) · 9 Oct 2026

**Rule:** when staging is next updated, only the routes in this table change. Every other route renders byte-for-byte as it does today.
The mockups are the spec (Design Parity Gate). Nothing is built from a page that is not in the table.

## In scope

| Route | Mockup (spec) | New / revised pieces | Pieces withdrawn from the route | Copy still awaiting Craig |
|---|---|---|---|---|
| `/` | `review/homepage-v4.html` | DO-ART-1008 → Rev 02 | — | s7 content question (Eternal Fitness copy vs teamwear exhibit) is open on the board |
| `/clarity` | `review/clarity-v2.html` | DO-ART-939 (new) | DO-ART-908, DO-ART-306 | hero-piece lines; "On the day" heading + lede |
| `/deliver` | `review/deliver-v1.html` | DO-ART-940 (new) | DO-ART-909, DO-ART-305 | "On the day" heading + lede |
| `/transform` | `review/transform-v1.html` | DO-ART-941 (new) | DO-ART-911, DO-ART-403 | "On the day" heading + lede |
| `/retained` | `review/retained-v1.html` | DO-ART-942 (new) | DO-ART-910, DO-ART-204 | "On the day" heading + lede |
| `/sectors/print-promotional` | `review/sectors-print-promotional-v2.html` | DO-ART-927 → Rev 02 | generated press-hall photo | case-study bridging sentence; "On the day" heading + lede |

Withdrawn pieces stay in `artwork/register.html` with a "no longer shown on <route>" note. Nothing is deleted.

## Out of scope (unchanged on staging until their own release set)

The other eight sector pages, the 20 problems pages, resources, tools, case studies, clients, apps, about, contact, pricing,
small-business, how-i-build, fractional-coo, locations, blog, legal. The u0 "shared fixes" (type scale, eyebrow token clean-up,
artwork text floors, stylesheet dedupe) are **not** in this set — they would change every page.

## Mechanism — per-route opt-in, shared files untouched

1. **No edits to `app/globals.css`, `app/design-system/ds-marketing.css`, `app/d17-global.css` or `app/d17-art.module.css`.**
   The six routes import one new stylesheet, `app/design-system/site-v3.css`, after the shared ones. It holds the R1 type contract,
   the R2 icon contract, the five section patterns (`.do-ic`, `.do-icard`, `.do-route`, `.do-figure`, `.do-split-list`), the
   evidence band, the seal, the closer, the footer repair, and the new piece rules (`.a939`–`.a942`, `.sw-doc`). It is loaded
   only by pages in this table, so its selectors cannot reach any other route.
2. **One sprite component** (`components/IconSprite.tsx`) rendering the lucide-static symbols; imported only by the six pages.
3. **Page files replaced one-for-one**: `app/page.tsx`, `app/clarity/page.tsx`, `app/deliver/page.tsx`, `app/transform/page.tsx`,
   `app/retained/page.tsx`, `app/sectors/print-promotional/page.tsx`. Each is rebuilt from its mockup; metadata, JSON-LD and
   breadcrumb schema blocks are kept as they are.
4. **The sector template is not changed.** The print page gets its own page file; the other eight sector pages keep the existing
   template until each has its own imagery and a mockup in a later set.
5. **Assets**: the six site-visit photographs and the three D17 photos used by these pages already exist under `public/images/`;
   no new image files are needed. New piece numbers are registered in `decoded-marketing/artwork/register.html` in the same change.
6. **Legacy plate engine** (`Artwork.tsx`, `plate-frame`, `ds-plates.*`) stays in the repo for the pages that still use it.

## Verification gate (Claude, after the lane merges to staging)

- `git diff --stat main..staging` touches only: the six page files, `site-v3.css`, `IconSprite.tsx`, the register. Anything else fails the gate.
- Each of the six routes on staging matches its mockup section-for-section (copy, order, pieces, marks).
- Spot-check three out-of-scope routes (one sector page, one problems page, pricing) render unchanged against main.
- `check-pages.mjs` type-scale and palette rules pass on the six routes.
- Mobile at 390px on the six routes.

## Order

u0 shared fixes move to a later release set, after the full-family reviews, so one change carries them to every page at once.
