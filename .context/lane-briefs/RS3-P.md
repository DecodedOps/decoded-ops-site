# RS3 lane P — five problem pages · CR-WEB-084

Read `.context/lane-briefs/RELEASE-SET-3-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /problems/data-scattered | `app/problems/data-scattered/page.tsx` | `.context/mockups/rs3/problems-data-scattered-v1.html` |
| /problems/erp-implementation-failure | `app/problems/erp-implementation-failure/page.tsx` | `.context/mockups/rs3/problems-erp-implementation-failure-v1.html` |
| /problems/legacy-system | `app/problems/legacy-system/page.tsx` | `.context/mockups/rs3/problems-legacy-system-v1.html` |
| /problems/wrong-erp-software | `app/problems/wrong-erp-software/page.tsx` | `.context/mockups/rs3/problems-wrong-erp-software-v1.html` |
| /problems | `app/problems/page.tsx` | `.context/mockups/rs3/problems-index-v1.html` |

## Notes for these pages

- The four problem pages are **bespoke designs**, not the shared v2 problem template. Do NOT convert them
  to `components/ProblemPageV2.tsx`. Re-lay out each existing page file to match its mockup, the way it is
  built today (inline sections, the current `d17-*.css` imports, plus `@/app/design-system/site-v3.css`
  if the mockup uses its classes). `.context/mockups/rs3/_reference-problems-manual-workarounds-v6.html`
  is only a reference for how a mockup becomes JSX; do not copy its content.
- Keep `<VideoEmbed>` / `<VideoSchema>` and the `problemVideos` data exactly as the current page uses them,
  even if the mockup shows no video. Keep the video section where the mockup puts a video, or after the
  main argument if the mockup has none.
- `/problems` (index): keep `<Plate>` usage. The mockup uses artwork piece `.a959`, whose rules are not in
  the site's `d17-apps-cases.css`; copy the `.a959` rules from the mockup's stylesheet into
  `app/problems/page.module.css` (anchored on a local class with `:global(.a959)`).

Lane name for commits and the report: `P`.
