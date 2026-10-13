# LANE RESULT - Package D (/apps/works)

Branch: task/web080-d-works-2026-10-13 (cut from origin/staging e49e569)

## Changes
1. H1 pill: `<span className="h1-kw">Decoded Works &middot; ERP for printing companies</span>` + "The ERP I couldn't buy for my clients." Hero eyebrow removed.
2. Primary CTAs (hero and closer): "Book a discovery call" -> /contact?product=works. Secondary links kept.
3. Added before the closer, in order: Shaped to you (split-6 + ticks), What happens next (3-step route; "How getting it works" links to /apps#what-happens-next per coordinator addendum, since /apps/how-it-works does not exist), Four products (Works "You're here", Proof, Commerce, Catalogue). Editions line under tiers: "Already using Decoded Catalogue or Proof? Works includes both. You only pay the difference."
4. Middle tier flag changed from "Most take this" to "Recommended". No prices added.
5. SoftwareApplication (BusinessApplication, Web, provider Decoded Ops, no offers) and BreadcrumbList (Home > Software > Works) JSON-LD added. FAQPage JSON-LD and metadata unchanged.

Sprite: added i-badge-check to WorksIconSprite.tsx (copied from apps-proof-v2.html).

## Checks
- `npx tsc --noEmit`: clean
- `npx eslint` on the two files: 0 errors, 9 warnings (existing `<img>` usage)
- Keyword "erp for printing compan" in page body: 6 before, 7 after

## Notes
- No dev server, browser or build run (per brief).
- Not touched: site-v3.css, Header, Footer, other pages.
- `.area--here` has no CSS rule in site-v3.css; the card relies on the "You're here" flag only.
