# RS2 lane P1 — six problem pages · CR-WEB-083

Read `.context/lane-briefs/RELEASE-SET-2-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /problems/ai-paralysis | `app/problems/ai-paralysis/page.tsx` | `.context/mockups/rs2/problems-ai-paralysis-v1.html` |
| /problems/bottleneck-growth | `app/problems/bottleneck-growth/page.tsx` | `.context/mockups/rs2/problems-bottleneck-growth-v1.html` |
| /problems/buy-vs-build | `app/problems/buy-vs-build/page.tsx` | `.context/mockups/rs2/problems-buy-vs-build-v1.html` |
| /problems/cant-scale-operations | `app/problems/cant-scale-operations/page.tsx` | `.context/mockups/rs2/problems-cant-scale-operations-v1.html` |
| /problems/disaster-recovery | `app/problems/disaster-recovery/page.tsx` | `.context/mockups/rs2/problems-disaster-recovery-v1.html` |
| /problems/ecommerce-not-connected | `app/problems/ecommerce-not-connected/page.tsx` | `.context/mockups/rs2/problems-ecommerce-not-connected-v1.html` |

## The template — use it, do not change it

These mockups are the same v2 problem-page design as two pages that are already built:
`app/problems/manual-workarounds/page.tsx` and `app/problems/systems-dont-talk/page.tsx`. Both render
the shared component `components/ProblemPageV2.tsx` and import `app/problems/problems-v2.css`.
`.context/mockups/rs2/_reference-problems-manual-workarounds-v6.html` is the mockup that
manual-workarounds was built from — compare it with that page.tsx to see exactly how a mockup becomes
`ProblemPageV2` props.

For each of your six pages:

1. Rewrite the page to render `<ProblemPageV2 …>`, the same way manual-workarounds does, with its
   imports: `@/app/d17-global.css`, `@/app/d17-problems.css`, `@/app/problems/problems-v2.css`,
   and `<D17Motion />`.
2. Fill the props from the mockup's structure (hero, symptoms, photo band, causes, plate, how it
   works). Copy rules from the release-set file apply: `data-new-copy` text from the mockup, every
   other piece of wording from the current page.
3. Keep the current page's `export const metadata`, `<JsonLd>`, `<BreadcrumbSchema>`,
   `<VideoSchema>` / `<VideoEmbed>` and the `problemVideos` / `problemRouting` usage. If
   `ProblemPageV2` has no slot for the video, keep the video section outside the component in the
   page file, exactly as the current page renders it.
4. Photos: mockup `../assets/site/<path>` becomes `/images/site/<path>`.

**Do not edit `components/ProblemPageV2.tsx` or `app/problems/problems-v2.css`.** Two live pages and
the other problem lane use them. If a mockup has a section the component cannot render, render it in
the page file next to the component with a `page.module.css`, and say so in your report.

Lane name for commits and the report: `P1`.
