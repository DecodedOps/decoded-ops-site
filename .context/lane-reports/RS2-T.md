# RS2 lane T — four tool pages · CR-WEB-083 · 3 Nov 2026

Four `/tools/*` pages re-laid out from the 3 Nov Open Design mockups. Calculator components and the
capture form were not touched; all existing SEO copy, metadata and JSON-LD kept verbatim.

## /tools/automation-roi-calculator — `48c99f3`

- Sections changed: hero re-laid to `g-off hero` + `wrap hero-split` (was `rt-split`), with the
  mockup's `t-body` line and hero `btn-row`; calculator section becomes `g-white` `#calc` with the
  mockup's `route-head`; new `g-off closer` section added from the mockup.
- Kept unchanged: `metadata`, `jsonLd` (WebApplication), the DO-ART-995 hero figure JSX verbatim,
  `<AutomationRoiCalculator />` (same component, no props), `<D17Motion />`.
- `data-new-copy` used: hero `go` link "The other free calculators"; calc `route-head` (eyebrow
  "One manual task", h2 "When automation pays for itself.", lede). Closer eyebrow/h2/lede are also
  the mockup's new copy (the staging page had no closer section).
- Not reproducible without touching forbidden files: the mockup's `.calc` 5fr/7fr split and its
  `.feed`/`.stats`/`.capture` panel are a hand-built replica of the calculator; the real
  `components/calculators/AutomationRoiCalculator.tsx` renders its own `calc-grid`/`calc-panel` and
  `ToolLeadCapture`, and `components/` and `calculators.css` are off-limits. The page wraps the
  component in the mockup's section only.
- Sections kept the mockup had dropped: none.

## /tools/downtime-cost-calculator — `477b81d`

- Sections changed: hero to `g-off hero` + `hero-split` with the mockup's `t-body` and `btn-row`;
  the "Most calculators ask you for a number nobody has" section becomes `g-white` + `prose`
  (mockup's `intro`); calculator section becomes `g-white` `#calc` with `route-head`; the
  "What to do with the recovery rate" and "Why downtime costs more in decoration than most places"
  sections re-flow into the mockup's single `g-off` `prose` block (both h2s, all paragraphs
  verbatim); the navy CTA strip becomes the mockup's `g-off closer`.
- Kept unchanged: `metadata`, `jsonLd`, the DO-ART-996 figure JSX verbatim,
  `<DowntimeCostCalculator />`, all body copy.
- `data-new-copy` used: hero `go` link "The other free calculators"; calc `route-head` (eyebrow
  "Your numbers", h2 "What an outage costs you in a year.", lede "Who stops, what they cost…");
  closer eyebrow "Higher than you expected?".
- Not reproducible without forbidden files: same calculator point as above.
- Sections kept the mockup had dropped: none — the mockup folds three staging sections into two but
  keeps every paragraph.

## /tools/rto-calculator — `cac744f`

- Sections changed: hero to `g-off hero` + `hero-split` with `t-body` and `btn-row`; calculator
  section becomes `g-white` `#calc` with `route-head`; new `g-off closer` from the mockup.
- Kept unchanged: `metadata`, `jsonLd`, `a998` figure import from `lib/d17-figures/a998` (identical
  to the mockup's DO-ART-998 markup), `<RtoCalculator />`, `<D17Motion />`.
- `data-new-copy` used: hero `go` link "The other free calculators"; calc `route-head` (eyebrow
  "Your numbers", h2 "What an hour of recovery is worth.", lede). Closer eyebrow/h2/lede are the
  mockup's new copy (staging had no closer).
- Sections kept the mockup had dropped: none.

## /tools/should-i-replace-erp — `315d531`

- `'use client'`, all three `useState`s, the `questions` array (8 questions, weights 2,2,2,1,2,1,2,1),
  the scoring (`reduce`/`find`/`reset`/`answeredCount`) and `layout.tsx` are untouched.
- Sections changed: hero to `g-off hero` + `hero-split` with `t-body` and `btn-row` (the mockup's
  hero `go` link is "Read the ERP selection playbook", so staging's duplicate results-page playbook
  link is now in the hero only — the link still exists on the page); the quiz becomes the mockup's
  `g-white` `#wizard` block (`route-head`, `.wiz` progress + `form-card` question card + yes/no);
  results become the mockup's navy `feed` verdict (score, label, description, action CTA,
  "Try again", `View your answers` list) with `<ToolLeadCapture>` kept exactly as wired
  (`tool`, `resultSummary`, `answers` props unchanged); new `g-off closer` from the mockup.
- `data-new-copy` used: hero `go` link; wizard `route-head` (eyebrow "Eight questions", h2
  "Fix it, or plan the exit?", lede); the per-result description copy (see deviations below);
  closer eyebrow/h2/lede.
- Not reproducible without forbidden files: the mockup's capture `details` replica — the real
  `ToolLeadCapture` component is kept instead (components/ is off-limits), which renders its own
  card. The mockup's `.wiz`/`.answers`/`.linkbtn` page CSS is reproduced with inline styles, since
  those selectors live only in the mockup's page `<style>` and the shared stylesheets are read-only.
- Sections kept the mockup had dropped: none.

## Deviations (all deliberate, none silent)

1. **`d17-problems.css` import kept** on all four pages, beside the five prescribed sheets. The
   release-set rules say keep the existing `d17-*` imports, and `d17-resources.css`'s own header
   requires `d17-problems.css` loaded first for the `.tbl`, `.win-flat`, `.ph-fade`, `.px` and
   `.win-foot` primitives the DO-ART-995/996/998/999 hero pieces are built from (nothing else in
   the app tree defines `.tbl` or `.ph-fade`). Without it the hero artwork loses its table and
   photo fade. The five named sheets keep the prescribed relative order.
2. **should-i-replace-erp result descriptions** (`results[].description`) replaced with the mockup's
   per-result copy, which the mockup marks `data-new-copy` (Craig's new copy). The staging strings
   were one duplicated pitch repeated for all three bands. Questions, weights, min/max bands,
   labels, actions and scoring are untouched.
3. **should-i-replace-erp "Back to the previous question"** control added as the mockup specifies,
   wired with a one-line `setCurrentQ(Math.max(0, currentQ - 1))` — no new state, no change to
   answering or scoring. Omitting it would have shipped the mockup's markup with a dead button.
4. **Unmarked-but-new mockup text used** where staging has no equivalent element: the four hero
   `t-body` lines ("Five numbers about one manual task…" etc.) and the hero CTA labels ("Enter your
   numbers", "Start the eight questions"). These elements do not exist in staging, so the mockup is
   their only source; every element where staging already had text kept staging wording unless
   `data-new-copy` said otherwise.
5. **Calculator internals left alone** per the brief: `calculators.css`'s 1fr/1fr split remains where
   the mockup shows 5fr/7fr, and the mockup's `feed` result panel is the component's own
   `calc-panel`. The mockup's panel HTML is a replica of the component, not a replacement spec for it.
6. **"Try again" icon** is lucide `RotateCcw` (as staging): the global `IconSprite` has no
   `#i-rotate-ccw` symbol the mockup's sprite uses.

## Verification

`npx tsc --noEmit` — exact final output:

```
(no output — clean, exit 0)
```

`npx next build` — exact final lines:

```
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

All four routes prerendered as static content; build run on the committed state `315d531` (this
report is notes-only and does not affect the build).

`node .context/price-audit.mjs --check` fails repo-wide (28 pre-existing FAILs at base `9bba90a`,
including 17 in the DO-ART-995/996 artwork blocks on these two pages). My diff adds no price
lines — verified: zero added lines containing `£` across the four commits. The audit failures in
these pages' artwork existed before this lane and were not introduced or changed by it.
