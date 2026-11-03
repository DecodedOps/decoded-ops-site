# RS3 lane R — the resources index, tools index, Ops Health Score and blog index · CR-WEB-084

Read `.context/lane-briefs/RELEASE-SET-3-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /resources | `app/resources/page.tsx` | `.context/mockups/rs3/resources-index-v1.html` |
| /tools | `app/tools/page.tsx` | `.context/mockups/rs3/tools-index-v1.html` |
| /tools/ops-health-score | `app/tools/ops-health-score/page.tsx` | `.context/mockups/rs3/tool-ops-health-score-v1.html` |
| /blog | `app/blog/page.tsx` | `.context/mockups/rs3/blog-index-v1.html` |

## Notes for these pages

- `/tools/ops-health-score` is a client component (`'use client'`); its metadata is in `layout.tsx`, which
  you must not edit. Keep every question, answer option, score weight, band threshold, result text and the
  `<ToolLeadCapture>` props exactly as they are. Change markup and classes only.
- `/blog`: the post list comes from the hub (`hubFetch`) with `localBlogPosts` as fallback, rendered by
  `components/BlogList.tsx`. Keep that data flow. Never hard-code the posts or thumbnails the mockup
  shows. You cannot edit `BlogList.tsx`; lay the page out around it to match the mockup (hero, filters,
  sections) and style it from `app/blog/page.module.css` with `:global()` selectors anchored on a local
  wrapper class. Record what of the mockup's card design you could not reach.
- `/resources` and `/tools`: keep every `<Plate>`, `<JsonLd>` and `<BreadcrumbSchema>`. Every link to a
  resource or tool must still point at the same route it points at today.

Lane name for commits and the report: `R`.
