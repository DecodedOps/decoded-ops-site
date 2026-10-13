# LANE RESULT · Package B (web080 software hub, /apps and /apps/catalogue)

Branch: task/web080-b-hub-catalogue-2026-10-13 · Base: origin/staging e49e569

## Files
- app/apps/page.tsx (rebuilt from apps-index-v2.html; metadata description updated, title kept; BreadcrumbList + FAQPage JSON-LD; section id="what-happens-next")
- app/apps/AppsIconSprite.tsx (new; local sprite for i-download, i-upload, i-x, i-workflow, i-badge-check)
- app/apps/apps-hub.css (new)
- app/apps/catalogue/page.tsx (new; apps-catalogue-v2.html; SoftwareApplication, BreadcrumbList, FAQPage JSON-LD)
- app/apps/catalogue/catalogue.css (new)
- public/images/site/screens/works/do-art-1019l-works-supplier-coverage.webp (new; others already tracked)
- public/images/site/screens/proof/do-art-1026a, 1026c (new)
- public/images/site/screens/commerce/do-art-1027a, 1027c (new)

## Coordinator addendum applied
- /apps: "How getting it works" links point to /apps#what-happens-next; /compare buyer-guides link removed, replaced by a `// phase 3: /compare link` comment.
- /apps/catalogue: "How getting it works" points to /apps#what-happens-next.

## Deviations
- /apps description: the brief's sentence is 172 characters, over the 160 limit. Shortened to "...supplier feeds, set up your way" (160 chars). Craig/lead to confirm wording.
- Both FAQ arrays are defined once and rendered to both the visible FAQ and the FAQPage JSON-LD, so text matches exactly.
- Mockup links to /apps/how-it-works were redirected per the addendum; /compare removed.

## Checks
- npx tsc --noEmit: clean.
- npx eslint on the three new/changed TSX files: 0 errors, 11 no-img-element warnings (plain img with width/height, as allowed by the brief).
- Not run (per brief): dev server, browser, npm run build. 390px no-horizontal-scroll and visual parity are NOT verified; needs a Claude-side browser pass.
- Not reproduced: none of the mockup content was dropped. Mockup `.areas--2`, `.areas--4`, `.route--3`, `.h1-kw`, `.shots-2`, `.feed`, `.nope`, `.grow` classes rely on site-v3.css additions by another package.
- Mockup content references "Ralawise" and "PenCarrie" (supplier names, not competitors or clients). Kept verbatim from the approved mockup; flag if they should go.
