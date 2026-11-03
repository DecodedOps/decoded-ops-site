# RS2 lane T — four tool pages · CR-WEB-083

Read `.context/lane-briefs/RELEASE-SET-2-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /tools/automation-roi-calculator | `app/tools/automation-roi-calculator/page.tsx` | `.context/mockups/rs2/tool-automation-roi-calculator-v1.html` |
| /tools/downtime-cost-calculator | `app/tools/downtime-cost-calculator/page.tsx` | `.context/mockups/rs2/tool-downtime-cost-calculator-v1.html` |
| /tools/rto-calculator | `app/tools/rto-calculator/page.tsx` | `.context/mockups/rs2/tool-rto-calculator-v1.html` |
| /tools/should-i-replace-erp | `app/tools/should-i-replace-erp/page.tsx` | `.context/mockups/rs2/tool-should-i-replace-erp-v1.html` |

## Styles

Each of your pages imports, in this order: `@/app/d17-global.css`, `@/app/d17-apps-cases.css`,
`@/app/d17-resources.css`, `@/app/design-system/site-v3.css`, `@/app/resources/resources-live.css`.
Do not edit any of them; the resources lane imports `resources-live.css` too.

## Calculators — the part that must not break

Every tool page renders a calculator from `components/calculators/` (for example `RtoCalculator`).
**Keep the calculator component with exactly the props it has today.** Restyle the page around it to
the mockup. Never rebuild the calculator from the mockup's HTML, and do not edit anything in
`components/`. The same goes for any opt-in or capture form on the page.

## /tools/should-i-replace-erp is a client component

`app/tools/should-i-replace-erp/page.tsx` starts with `'use client'` and holds its own questions,
state and scoring inside the page file rather than in `components/calculators/`. Its metadata lives
in `app/tools/should-i-replace-erp/layout.tsx`.

- **Do not touch `layout.tsx`.** It carries this page's title, description, canonical and social tags.
- Keep `'use client'`, every `useState`, the question data and the scoring logic exactly as they are.
  Restyle only the markup around them to the mockup.

`/tools/ops-health-score` is not in this set. Do not change anything under `app/tools/ops-health-score/`.

Lane name for commits and the report: `T`.
