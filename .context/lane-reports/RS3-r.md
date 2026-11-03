# RS3 lane R - the resources index, tools index, Ops Health Score and blog index (CR-WEB-084) - lane report

Lane R re-laid `/resources`, `/tools`, `/tools/ops-health-score` and `/blog` from the
approved designs in `.context/mockups/rs3/`. One page, one commit, plus one
comment-only commit. All existing metadata, JSON-LD, body copy, data flows and
lead-capture components were kept; `data-new-copy` elements take the design's text.

## Cross-cutting notes

- **Import stack.** Each page keeps its existing `d17-*.css` imports and adds
  `d17-apps-cases.css` and `design-system/site-v3.css` (the sheets the designs load).
  `/blog` had no d17 imports before and now imports the four sheets the design links
  (`d17-global`, `d17-apps-cases`, `d17-resources`, `site-v3`). No shared sheet was
  edited.
- **Asset CSS missing from the repo.** The designs link `../assets/site/*.css`; that
  folder is not in the repository. Patterns the site sheets do not carry (scorer rows,
  the 1-5 scale button group, the scale-key legend, blog featured/chips/post-grid
  card rules) were authored in each page's `page.module.css`, every selector anchored
  on the page root class (`.root :global(.x)`), so nothing can reach another route.
- **Images.** Hero artwork uses the design's image paths exactly as written
  (`/images/d17/gen-bench-flatlay-v2.webp`, `/images/d17/hero-workshop.webp`,
  `/images/site/evidence/*.webp`) - all verified present under `public/`. These are
  the uncropped originals, where the previously shipped pages used derived crops under
  `/images/d17/resources/`; no image was added, renamed or generated. `lib/` is
  untouchable, so `lib/d17-figures/a997.ts` still holds the old crop - the Ops Health
  Score page inlines the approved DO-ART-997 figure instead of importing it.
- **Icon sprites.** The designs use `i-triangle-alert`, `i-list-checks`, `i-workflow`,
  `i-palette`, `i-file-text`, `i-gauge`, `i-rotate-ccw`, which
  `components/IconSprite.tsx` does not define and `components/` is untouchable. Each
  affected page embeds a small local sprite block with those symbols (Lucide geometry,
  embedded path-for-path) beside the shared `IconSprite` - the `locations/tech-audit`
  precedent. `i-arrow-right`, `i-check`, `i-clipboard-check`, `i-calculator` come from
  the shared sprite.
- **H1 keyword lead-in.** `/resources` keeps the existing H1 wording ("Tools and guides
  you can use today"; the design's dropped `<em>` is dropped with it) and gains the
  `.h1-kw` keyword pill inside the H1 (the CR-WEB-076 pattern), replacing the old
  "Resources" eyebrow. No other heading or paragraph wording was changed.

## Pages

### /resources - `10114b2`
- Sections: hero re-laid as `hero-split` with `.h1-kw` lead-in, kept lede, new body
  line and two CTAs, DO-ART-980 in the right column; the nine resources re-laid as the
  `g-tint` `areas` card grid (icon tile + number + h3 + t-card + "Read more", same
  titles, descriptions and routes as before); new navy five-step order route
  (`route-sec` + `route--5` stops + `route-cap`); new evidence-photo band (DO-ART-979k
  / 979j / 979g); new closer.
- data-new-copy used: hero body "Nine of them, below..."; hero CTAs "Start with the
  audit checklist" / "The free calculators"; guides eyebrow "Nine resources", h2
  "Checklists, templates, playbooks and two calculators.", lede; order eyebrow "The
  order", h2 "One order, five steps.", lede, all five stops (heads and body lines) and
  the route-cap line; where eyebrow "Where they came from", h2 "Written for the bench,
  not the boardroom.", lede; closer eyebrow "When free isn't enough", h2 "Ready to go
  further than a checklist?", lede, both CTAs.
- Kept: `BreadcrumbSchema`, metadata, `D17Motion`, all nine routes. The `Plate` import
  stays (unused before and after). Nothing the old page carried was dropped - the old
  page had no further sections.
- Not reproducible without touching a forbidden file: nothing.

### /tools - `6c721cb`
- Sections: hero re-laid (`hero-split`, kept eyebrow/H1/lede, new body line and CTAs,
  DO-ART-981 right); the five tools re-laid as the navy `ledger-list` (fig column +
  title + t-card + "Use calculator" + tag); new evidence-photo band (DO-ART-979o /
  979n / 979f); new "seal" band; new closer.
- data-new-copy used: hero body "Five calculators, each worked from your own
  figures..."; hero CTAs "Start with the ops health score" / "Guides and templates";
  ledger eyebrow "Five calculators", h2 "Every one hands back a number.", lede; where
  eyebrow "Where the figures come from", h2 "The numbers come from floors like these.",
  lede; seal tag "Decoded Ops - tools - the deal", h2 "The result shows on the page.",
  paragraph; closer eyebrow "Start here", h2 "A number is a start, not an answer.",
  lede, both CTAs.
- Kept: metadata, `JsonLd` (CollectionPage tools schema), `BreadcrumbSchema`,
  `D17Motion`, every tool title, description and route. The ledger fig/tag columns
  ("/25 - five areas, rated 1 to 5", "Score", etc.) are the design's text for elements
  the old page did not have. Row order follows the design (Ops Health Score first).
- Not reproducible without touching a forbidden file: nothing. Flagged: the seal copy
  ("shows its answer and its working straight away... nothing is emailed unless you
  ask") was checked against `components/calculators/*` and `ToolLeadCapture` before
  shipping - it is true of the shipped components.

### /tools/ops-health-score - `42bdb3a`
- Sections: hero re-laid (`hero-split`, kept eyebrow/H1/lede, new body line and CTAs,
  DO-ART-997 right); the scorer re-laid as five `scorer` rows (h3 + the low/mid/high
  wording inline + the 1-5 scale) with the scale-key legend and the kept gate button;
  the result view re-laid as the `proof result` split (label as h2, description as
  t-lede, CTAs, note) with a `feed` panel (total and per-dimension bars); new
  four-band `ledger-list` band; new closer.
- data-new-copy used: hero CTAs "Rate the five areas" / "The other free calculators";
  scorer eyebrow "The five areas", h2 "Rate each area, one to five."; result eyebrow
  "Your result", result note "The score is yours to keep. Leaving your details
  afterwards is optional."; bands eyebrow "What the score means", h2 "Four bands, and
  what each one usually needs.", lede; closer eyebrow "Start here", h2 "A score is where
  the conversation starts.", lede, both CTAs. **Two data-new-copy elements were trimmed
  and are NOT verbatim** - see below.
- Kept exactly (the lane brief's keep list): all five dimensions and their low/mid/high
  wording, the 1-5 answer options and their aria-labels, the score sum, the band
  thresholds (10/15/20), all four result labels and descriptions, and the
  `<ToolLeadCapture tool="ops-health-score" resultSummary={...} answers={scores} />`
  props. Only markup and classes changed; the state logic (empty start, all-answered
  gate, "See your score", reset) is untouched.
- **Deviations (honesty rule over verbatim copy):** the design's flow pre-sets example
  rows (2,3,3,4,1), labels the feed "example" until touched, updates the result live,
  and shows a "Focus first" line. The lane brief limits this page to markup and classes,
  so none of that behaviour exists. Rendering the design's copy about it would promise
  behaviour the code does not perform, so: the hero body line ends at "...what a low,
  middle and high score looks like." (its "the result shows on the page the moment the
  fifth answer goes in" clause dropped) and the scorer lede is "1 is critical, 5 is
  excellent." (its "The rows are pre-set to the example..." clause dropped). The feed's
  "Focus first" line is omitted (it needs new computation) and the feed header reads
  "Ops health score - your answers" (true in the only state the result renders). The
  "See your score" button stays.
- Other layout deviations: the dimension descriptions moved from the hover tooltip to
  the row itself (the design's layout; wording unchanged); the 1-5 group is
  `role="group"` rather than the design's `role="radiogroup"` (aria-pressed buttons
  inside a radiogroup is invalid ARIA); `.scale` is a progress-bar pattern in
  site-v3.css, so the button group's class collides - the bar box is reset in the
  page's module css.
- Kept not in the design: `ToolLeadCapture` (the design never draws it) sits directly
  after the result panel, wired exactly as before.

### /blog - `dc516eb`
- Sections: hero re-laid as `hero-head` split (eyebrow + H1 left, kept lede right);
  posts band (`g-tint`, design's route-head) wrapping `components/BlogList.tsx`
  unchanged (hub fetch + `localBlogPosts` fallback untouched); new by-topic archive
  (`next-grid` of `next-card`s); kept Free Resources block; closer re-laid from the
  existing "Ready to dive deeper?" section with the design's go-link added.
- data-new-copy used: posts eyebrow "Recent posts", h2 "Written from the floor, not the
  brochure.", lede; archive eyebrow "Everything else", h2 "The rest of the archive, by
  topic.", and the archive lede with its "33 posts so far" figure **rendered from
  `posts.length`** - never a hard-coded count.
- **No post is hard-coded anywhere.** The archive columns (Technology / ERP /
  Operations & quality / Process, marketing & more) are the design's headings; their
  contents are real posts beyond the newest seven (the lead + the six the design shows
  as recent), grouped by the posts' real `category`, with counts computed from what the
  column renders. The design's own column counts are internally inconsistent with its
  link lists and were not copied.
- Not reproducible without touching `components/BlogList.tsx` (forbidden), recorded as
  asked:
  - the featured lead post renders at the top of the posts band (BlogList renders lead
    + list together) instead of inside the hero where the design shows it; its
    "Latest post" figcaption and "Read the post" button cannot be added;
  - the design's split of six recent cards + a "everything else" archive cannot exist:
    BlogList's grid shows every non-lead post, so some archive links also appear in the
    grid above;
  - the filter chips keep the component's own pills and count line - the design's
    per-category counts on each chip are unreachable;
  - card design not reachable: the category figcaption over the image, the per-card
    "Read the post" go link and arrow, the `post-meta` row order (category/date/author),
    and the figcaption date on the lead. Reached via `page.module.css` with `:global()`
    selectors on the local `.post-list` wrapper: three-column card grid (was two),
    card-title size to the design's `.area h3`, sticky filter-rail background blended
    into the tinted band.
- Kept although the design drops it: the Free Resources / Operational Audit Checklist
  block (it carries the "36 questions..." copy and a link) - per RELEASE-SET-3's keep
  rule. Flagged for review; if Craig wants it gone, it is one block to delete.

## Verification

Final lines of `npx tsc --noEmit` (run after the last commit):

```
(no output - clean, exit code 0)
```

Final lines of `npx next build` (exit code 0):

```
├ ○ /tools/downtime-cost-calculator
├ ○ /tools/ops-health-score
├ ○ /tools/rto-calculator
├ ○ /tools/should-i-replace-erp
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

All four routes appear in the build's prerendered static route table (`/blog` with its
5m revalidate, so the hub-fed list still refreshes).

`node .context/price-audit.mjs --check` was also run: it fails with 28 violations, all
pre-existing at the base commit - the DO-ART-981/995/996 calculator-example artwork
figures (`£3,495`, `£28,000`, `£903`, `£2,592`, `£18`, `£5,000`, ... - every one
labelled EXAMPLE in the artwork) and "vest" strings in case-study/sector pages. The
`/tools` hits are the same figures the page carried before this lane (verified against
`269fca5:app/tools/page.tsx`); the designs draw them and the artwork is copied
verbatim. Flagged, not changed.
