# Lane notes — web076-set1-seo (CR-WEB-076, WO-INF-087 u14)

Same worktree and branch as `web076-set1`: `task/web076-set1-2026-10-13`. Not pushed, not merged.

## What this lane did

Applied the SEO copy rule — **SEO-optimal wins over the mockup** (Craig, 13 Oct) — to the six
set-1 routes, per `.context/lane-briefs/seo-copy-spec-2026-10-13.md`.

Each route's `<h1>` was replaced with the exact spec line. Each spec line preserves the mockup's
designed sentence as its second clause, so the design intent survives; only a keyword-led clause
was added in front. Every route keeps exactly one `<h1>`, and each contains its primary keyword
verbatim, written first person, no day rate.

## Counts

Body keyword counts (JSX text only, `metadata` export and JSON-LD excluded) went **up on five
routes and held flat on `/retained`**, and every route is ≥ its `origin/staging` count. Full
before/after table is in `LANE-RESULT.md` under "SEO pass".

## The one thing worth a second look

**The H1 line-count checks (MUST 7) were the hard part, and my first two attempts were wrong.**
I estimated glyph widths twice and got 5–7 line counts, which is nonsense for these strings. I
stopped guessing and measured in headless Chrome (Outfit 800, `line-height: 1.2`). The committed
CSS is based on those measurements.

At 1440px each H1 renders 3 lines; at 390px each renders 4 lines or fewer. Fixes were per route
and stayed inside the existing type contract — clamped `--do-text-*` sizes only, no new sizes
invented:

- `homepage.css` — homepage H1 cap `4.6rem → 3.4rem`, measure `13ch → 20ch`
- `site-v3.css` — `.hero-head` copy column widened `7fr → 1fr`; the `14ch` cap on `.hero h1` dropped
- `deliver-v1.css` (new) and `retained-v1.css` — H1 cap `3.7rem → 3.1rem`
- `print-v2.css` — `.hero-split` copy column `1.05fr → 1.45fr`; H1 cap `3.7rem → 3.4rem`

Clarity and transform needed no CSS of their own — they fit once the column was widened.

## Two things I chose not to silently fix

1. The homepage H1 resize dropped `letter-spacing: -0.038em` and the explicit colour rule from the
   line I replaced. The colour is inherited from `.g-navy` (`color: var(--do-text-on-dark)`), which
   I confirmed in the built CSS chunk, so the render is unchanged. The tracking difference is
   imperceptible at the new size. Rather than reintroduce a rule the plate didn't carry, I flagged
   it in `LANE-RESULT.md` note 1.
2. Dropping the `14ch` cap in `site-v3.css` affects all four service pages, not just the two that
   needed it. A narrower measure can be restored on clarity and transform with a one-line add to
   their page CSS if the reviewer wants it.

## Verification

- `npx tsc --noEmit` — exit 0
- `npm run lint` — 77 errors / 97 warnings, **identical to the `origin/staging` baseline** (checked
  by linting a detached staging worktree against the same `node_modules`). Zero errors in the six
  pages; the 22 warnings there are the pre-existing `no-img-element` warnings every staging page
  with `<img>` already carries.
- `npm run build` — exit 0, all six routes prerendered
- `metadata` / JSON-LD / `BreadcrumbSchema` — **byte-identical to `origin/staging`** on all six
  routes, verified by extracting the block from both revisions and string-comparing
- `git diff --stat origin/staging` — the earlier set-1 scope plus the SEO-pass edits; no route
  outside the six was touched
