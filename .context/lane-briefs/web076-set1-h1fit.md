# Lane brief: web076-set1-h1fit (CR-WEB-076 SEO pass, fix 1)

Same worktree/branch. No servers/browsers. Commit as you go, do not push. Read `.context/lane-briefs/seo-copy-spec-2026-10-13.md` incl. the new "H1 pattern" section.

Problem (measured on the real render at 1440px): the SEO H1s wrap to 5 lines (home, /clarity, /transform) or 4 (/deliver, /retained, /sectors/print-promotional) because the whole keyword sentence is set at the hero display size. Also the lane's earlier pass rewrote the /deliver designed line.

## MUST
For each of the six routes keep ONE `<h1>`, text unchanged in reading order, structured as lead-in span + designed headline at the mockup's own size and the mockup's own wrapping:

| Route | Lead-in span (small, block) | Designed headline (display size, text exactly as the mockup) |
|---|---|---|
| `/` | Operations consultant for print and embroidery: | I find what's quietly costing you money. |
| `/clarity` | Process audit for print and embroidery: | One day on site. One written plan. |
| `/deliver` | Business process improvement: | I get it built. And you keep the system that runs it. |
| `/transform` | Digital transformation consultancy for print: | The plan, executed. |
| `/retained` | Fractional CTO for print and embroidery. | Not a project. A standing decision-maker. |
| `/sectors/print-promotional` | (no lead-in; keep one sentence) | Print shop management software starts with knowing what your current process actually costs. at a reduced size so it is <= 4 lines at 1440 |

Exact mockup headline text and sizes: `D:\apps\design-systems\decoded-ops-website\review\<page>.html` (read the h1 rule and its media queries). Lead-in styling: ~0.42em, weight 500-600, existing accent/mid colour token from site-v3.css, `display:block`, margin-bottom ~0.35em, letter-spacing normal, not uppercase. Put the lead-in rules in `site-v3.css` as one reusable class (`.h1-kw`) so sets 2-4 reuse it, and use the mockup H1 CSS per page as before. Mobile (390px): lead-in ~0.5em, designed line as in the mockup mobile rule; no horizontal scroll.
Do not touch metadata/JSON-LD. Body keyword counts must not drop (the lead-in is still inside the H1).

## Done when
tsc + lint clean, `npm run build` ok, a "Fix 1" section in LANE-RESULT.md with the final H1 markup per route, commit, stop.
