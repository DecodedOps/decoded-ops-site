# Lane notes — site013-u13-software-topnav (WO-WEB-013 u13, CR-WEB-080)

## What was asked

Promote Software to a top-level menu item in `components/Header.tsx`, desktop and
mobile, with six links: Works, Proof, Commerce, Catalogue, own-or-rent, compare.
Every href must resolve to an existing route; no invented pages.

## What was done

One commit (`1488c70`), one file touched (`components/Header.tsx`).

- New `Software` nav item inserted as position 3 in the top-level nav (between
  "How I help" and "Your industry"), using the same mega-panel pattern as the
  other dropdowns. It renders in the mobile menu automatically — mobile reuses
  the same `site-nav` tree, and all link `onClick` handlers close the panel and
  the mobile drawer, matching existing items.
- Panel contents: "The four products" group (Works `/apps/works`, Proof
  `/apps/proof`, Commerce `/apps/commerce`, Catalogue `/apps/catalogue`) and a
  "Deciding" group (Own or rent, Compare), plus a rail CTA to `/apps`.
- The old "Software I've already built" group inside the "How I help" panel was
  removed — a promotion, not a second copy. "How I help" still works: four
  steps, How I work, rail.

## Route substitutions (per task instruction: nearest existing page, noted)

- **Own or rent → `/pricing`.** No own-or-rent route exists anywhere in `app/`.
  The nearest existing content is the pricing page's software section
  ("Priced at the audit: buy outright, or lease to own over 36–60 months, and
  you own it at the end"), `data-od-id="systems"`. It has no `id` anchor, so
  the link is to `/pricing` plain, not a hash link.
- **Compare → `/apps`.** No `/compare` route exists; `app/apps/page.tsx` line
  362 still carries a `// phase 3: /compare link` comment, i.e. it is a planned
  page. The `/apps` hub is the existing page that lays the four products side
  by side.

## Verification

- `npx tsc --noEmit` — clean, 0 errors.
- `npm run check:nav` — BROKEN = 0 (every nav href, including the six new
  ones, resolves to a route on disk). The script exits 1 because of 5
  pre-existing ORPHANED pages; the list is byte-identical to the baseline run
  taken before any edit, and none of them are apps-related, so nothing this
  lane did created or fixed an orphan. Fixing orphans was outside SCOPE.
- Unicode escape grep on Header.tsx: 0 hits (all characters literal).
- `npm ci` was run because this fresh worktree had no `node_modules`; no
  dependency files changed.

## Scope

Only `components/Header.tsx` was edited. `check-nav-coverage.mjs` needed no
change (it strips `#…` fragments, and all six targets are plain routes).
No deploy config, other components, pages, footer or package.json touched.
