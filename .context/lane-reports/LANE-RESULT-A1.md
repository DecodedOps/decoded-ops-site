# LANE-RESULT · Package A1 (BUILD-web080-phase1-2026-10-13)

Branch: task/web080-a1-shared-2026-10-13 · Base: origin/staging e49e569 · Worktree: D:\apps\worktrees\decoded-ops-website\web080-a1-shared

## Changes by file
- app/design-system/site-v3.css: merged design copy. Replaced the old `.h1-kw` kicker block and its 760px rule with the pill rules (display:flex, uppercase xs, .g-navy variant) and `.hero .eyebrow:has(+ h1 > .h1-kw){display:none}`. Appended the design-only blocks: `.areas--2`, `.next-grid--3`, `.form-card`/`.field`/`.form-note`, `.hero-split`, `.grow`/`.nope`/`.nope-tail`, `.area--here`, `.faq`/`.faq-item`, `.stop .t-card a`. Repo `:not(.d17 *)::before` route selectors kept; design's invalid `::before:not(.d17 *)` forms not copied. Repo-only rules (.a939, .a942, .pk, .dl, .rm, .feed-*, .split, .scale, .pull, route modifier mobile block) kept. Diff vs e49e569: 64 insertions, 11 deletions.
- components/Header.tsx: three "Book a free" labels to "Book a discovery call" (MegaRail default ctaLabel, mobile primary, mobile outline). Catalogue item added after Commerce in "Software I've already built" (/apps/catalogue, "Supplier feeds in, one clean catalogue").
- components/Footer.tsx: Catalogue added to apps column after Commerce; "Book a free 60-min call" to "Book a discovery call".
- next.config.ts: `/apps/crm` redirect destination `/apps` to `/apps/proof#crm` (still permanent). CRLF line endings preserved.
- app/sitemap.ts: `/apps/catalogue` added after `/apps/commerce`, changeFrequency monthly, priority 0.75.
- H1 pills (one h1 = span.h1-kw pill + headline; separate eyebrow before h1 removed):
  - app/page.tsx: pill "Decoded Ops · operations consultant"
  - app/clarity/page.tsx: "Clarity Audit · process audit"
  - app/deliver/page.tsx: "Deliver · business process improvement"
  - app/transform/page.tsx: "Transform · digital transformation consultancy"
  - app/retained/page.tsx: "Retained · fractional CTO"; lede gains "of this fractional CTO role" for keyword count
  - app/pricing/page.tsx: "Pricing · operations consultancy"
  - app/how-i-build/page.tsx: "How I build · ERP implementation consultant"
  - app/small-business/page.tsx: "Small business consultant"
  - app/sectors/print-promotional/page.tsx: "Print & promo · print shop management software" (headline now "Start with knowing what your current process actually costs."; was a plain h1)
  Metadata, canonical and JSON-LD untouched.

## Keyword body counts (primary keyword; e49e569 → now)
- / "operations consultant": 3 → 3
- /clarity "process audit": 3 → 3
- /deliver "business process improvement": 3 → 3
- /transform "digital transformation consultancy": 3 → 3
- /retained "fractional CTO": 9 → 9 (dropped to 8 after eyebrow removal; restored in lede)
- /pricing "operations consultancy": 3 → 3
- /how-i-build "ERP implementation consultant": 2 → 2
- /small-business "small business consultant": 2 → 2
- /sectors/print-promotional "print shop management software": 3 → 3
Counts are a grep approximation excluding metadata/description/JSON-LD-style lines.

## Checks
- `npx tsc --noEmit`: exit 0.
- `npx eslint` on owned files: 0 new issues. Pre-existing: 4 `@typescript-eslint/no-explicit-any` errors in app/sitemap.ts (lines 12, 25, 27, 97, all present at e49e569, not touched); `<img>` warnings in page files (pre-existing).
- No dev server, browser or build run (per brief).
