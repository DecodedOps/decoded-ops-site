# Lane brief: web076-set1-seo (CR-WEB-076, WO-INF-087 u14)

Same worktree and branch (`task/web076-set1-2026-10-13`). The six set-1 pages are built. This pass applies the SEO copy rule: **SEO-optimal wins over the mockup** (Craig, 13 Oct). Read `.context/lane-briefs/seo-copy-spec-2026-10-13.md` in full first. Do not start servers or a browser. Commit as you go. Do not push.

## Scope (six routes only)
`app/page.tsx`, `app/clarity/page.tsx`, `app/deliver/page.tsx`, `app/transform/page.tsx`, `app/retained/page.tsx`, `app/sectors/print-promotional/page.tsx` (and their existing CSS modules if a longer H1 needs a width tweak).

## MUST
1. Set each page's single `<h1>` to the exact text in the spec's H1 table for that route. Wherever the H1 is split into spans for styling, keep the styling but the full text must read as the spec line. One `<h1>` per page.
2. Homepage keeps the exact phrase "operations consultant" in the H1 and lede (spec section "Homepage positioning").
3. The primary keyword must also appear in the first lede sentence and once in a section heading or body paragraph; it already does on most pages, so check, and add naturally only where missing.
4. Body keyword count (page JSX text only, excluding the `metadata` export and JSON-LD) must be >= the count in `git show origin/staging:<page file>`. Print the before/after count per route in LANE-RESULT.md.
5. Restore dropped staging prose: the homepage "Same approach at Case study 02 ..." line is the only one in this set; confirm it is present, restore it if not.
6. Do NOT change `metadata`, JSON-LD, canonical or any title/description. `git diff origin/staging -- <page> ` for the metadata block must be empty.
7. Check the H1 does not exceed three lines at 1440px or four at 390px by reading the CSS (font size, max-width). If a line would overflow, reduce the H1 size within the existing type contract in site-v3.css only for that route, never globally.

## DECIDE YOURSELF
How to split the H1 for styling, any width tweaks.

## ASK FIRST
Anything outside the six routes; any keyword you think is wrong for a page (write it in LANE-RESULT.md, do not change it).

## Done when
`npx tsc --noEmit` and lint clean; `npm run build` succeeds; `git diff --stat origin/staging` shows only the earlier set-1 scope plus the edits above. Update `LANE-RESULT.md` with a new "SEO pass" section (H1 per route, counts before/after), commit, stop.
