# LANE-RESULT: Package C (Proof + Commerce), CR-WEB-080 phase 1

Branch: task/web080-c-proof-commerce-2026-10-13 (cut from e49e569). Not pushed.

## Files
- app/apps/proof/page.tsx (rebuilt from review/apps-proof-v2.html)
- app/apps/proof/ProofIconSprite.tsx (new: i-history, i-badge-check, i-workflow)
- app/apps/proof/proof-v2.css (new: page layout rules from the mockup)
- app/apps/commerce/page.tsx (rebuilt from review/apps-commerce-v2.html)
- app/apps/commerce/CommerceIconSprite.tsx (new: i-upload, i-tags, i-workflow, i-badge-check)
- app/apps/commerce/commerce-v2.css (new: page layout rules from the mockup)
- public/images/site/screens/proof/*.webp (6 files, do-art-1026a-f)
- public/images/site/screens/commerce/*.webp (4 files, do-art-1027a-d)
- public/images/site/d17/apps-cases/{thread-spools-dada9d, hero-workshop-187638, cat-packaging-2b20a6}.webp

## Proof
- Metadata export unchanged.
- H1 is `<span className="h1-kw">Decoded Proof &middot; artwork approval software</span>` plus the headline. No eyebrow above the h1.
- The visible FAQ (4 items) and the FAQPage JSON-LD are built from one `faqs` array, so the text is identical.
- JSON-LD @graph: FAQPage, SoftwareApplication (Decoded Proof, BusinessApplication, Web, provider Decoded Ops, no offers), BreadcrumbList (Home > Software > Proof).
- The CRM edition card has id="crm".
- "How getting it works" links to /apps#what-happens-next (coordinator addendum). No /compare link exists in this mockup.
- DO-ART-945 rev 02 plate ported to JSX (camelCase attributes, pathLength, strokeWidth, style objects).
- Body keyword "artwork approval software": 3 now, 2 on e49e569.

## Commerce
- Metadata: title "B2B Ordering Portal for Decorated Goods | Decoded Ops" (53 chars). Description exactly as briefed (161 chars). OG and Twitter copies match; canonical kept.
- H1 pill "Decoded Commerce · B2B ordering portal".
- Visible FAQ (4 items) and FAQPage JSON-LD share one array.
- JSON-LD @graph: FAQPage, SoftwareApplication (Decoded Commerce, no offers), BreadcrumbList (Home > Software > Commerce).
- Trade and Stores cards link to `#trade` and `#stores` (the card ids). The constants carry `// phase 2: link to sub-page`.
- "How getting it works" links to /apps#what-happens-next. No /compare link in this mockup.
- DO-ART-948 rev 02 plate ported to JSX. DO-ART-947 is not in the v2 mockup and was not built.
- Body keyword "b2b ordering portal": 2 (old primary "b2b ecommerce" had 2 in body; it is kept once in the With Works lede).

## Checks
- `npx tsc --noEmit`: clean.
- `npx eslint app/apps/proof app/apps/commerce`: 0 errors, 13 `no-img-element` warnings (same pattern as the Works page).
- No "mockup", "data-new-copy", "Discovery Day", "Data App" or "Artwork Manager" in the two route folders.
- Every image referenced from the two pages exists under public/images/site.
- No dev server, browser or build was run, per the brief.

## Dependencies and not reproduced
- Both pages import app/design-system/site-v3.css. Classes `.h1-kw` and `.areas--2` are needed from A1 / the shared CSS agent. `.areas--2` was not yet in site-v3.css at e49e569. `.next-grid--3` is not used by these two mockups.
- Header and Footer shells from the mockups were not reproduced (owned by other packages).
- Visual parity with the mockups is not verified in a browser (rule: Claude verifies, lanes do not).
- Image width/height attributes use 1600x1000 for screens and 900x600 or 900x800 for plates, the same as the existing pages. Check for distortion in the browser pass.
