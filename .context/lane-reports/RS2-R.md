# RS2 lane R — eight resource pages (CR-WEB-083) — lane report

Lane R re-laid eight `/resources/*` pages from the 3 Nov mockups in
`.context/mockups/rs2/`. One page, one commit. All existing metadata, JSON-LD,
body copy and lead-capture components were kept; `data-new-copy` elements take
the mockup's text.

## Cross-cutting notes

- **Import stack.** Each page now imports exactly the five sheets the lane brief
  mandates, in order: `d17-global.css`, `d17-apps-cases.css`, `d17-resources.css`,
  `design-system/site-v3.css`, `resources/resources-live.css`. The previous
  `@/app/d17-problems.css` import was replaced by this stack (the mockups do not
  load it; the a98x resource artwork lives in `d17-resources.css` +
  `resources-live.css`). This is a deliberate deviation from the generic "keep the
  existing `d17-*.css` imports" rule in RELEASE-SET-2 — the lane brief's Styles
  section is the specific instruction. Flagged here for review.
- **Article template styles.** The shared sheets do not carry the
  resource-article-v1 patterns the mockups use (`post-grid`, `post-aside`,
  `toc-h`, `toc`, `byline`, article `.prose` typography). These were supplied per
  page in a `page.module.css` beside the page, every selector anchored on the page
  root class (`.root :global(.x)`) so nothing can reach another route. The shared
  sheets themselves are untouched. The mockups' own page-layout `<style>` block
  rules (hero-split, prose tables, optin) are mirrored there too.
- **Images.** The mockups' `../assets/site/<path>` maps to files under
  `public/images/site/<path>` that mostly do **not** exist for these pages; the
  real files sit at `public/images/<path>`. Existing image references were kept at
  their existing `/images/...` paths. New image references (the byline photo) use
  `/images/d17/craig-blackman.webp`, the location that exists on disk (used by
  `/about` and `/contact`). No images were added, renamed or generated.
- **Icon sprites.** The mockups reference `i-file-down`, `i-timer`, `i-history`,
  `i-refresh-cw`, `i-file-warning`, `i-badge-check` which `components/IconSprite.tsx`
  does not define — and `components/` is untouchable. Affected icons render with
  `lucide-react` components instead (Download, Timer, History, RefreshCw,
  FileWarning, BadgeCheck, MessageSquareQuote), matching the lucide geometry the
  sprite itself embeds. `i-arrow-right` and `i-check` are used via the sprite.
- **H1 keyword lead-in.** The mockups replace the old eyebrow with the `.h1-kw`
  pill inside the H1 (the CR-WEB-076 pattern). On the two calculator pages the
  eyebrow text ("Free tool · Give first") is therefore replaced by the mockup's
  lead-in ("Free tool · capacity planning calculator" / "· seasonal capacity
  calculator"). No heading or paragraph wording was otherwise changed.

## Pages

### /resources/5-warning-signs — `e79e8a9`
- Sections: hero re-laid as `hero-split` with `.h1-kw` lead-in and two CTAs; the
  five signs + closing cards re-laid as the article template (aside TOC + byline,
  prose h2#s1–s6); new house closer section.
- data-new-copy used: hero `.go` "Score your operation instead"; closer eyebrow
  "Two or more?" and h2 "Find out what it is actually costing you."
- Kept (not in the mockup's cards): all sign copy, the 3× Clarity Guarantee line,
  "Recognise two or more of these?" copy and all three links including the
  booking link — flattened into the prose exactly as the mockup shows them.
- Mockup-only text adopted (not marked data-new-copy): hero body "Five signs, one
  page each…", closer lede "…a specific plan for what to fix first. Covered by the
  3× Clarity Guarantee.", byline copy.

### /resources/artwork-approval-playbook — `8128e24`
- Sections: hero re-laid (h1-kw "Free resource · artwork management software",
  "Read the playbook" + go `/apps/proof`); DO-ART-990 plate becomes `route-sec`
  with dot-grid and a route-head; the five numbered steps, brief fields, proof
  list, FAQs, key takeaways and closing card all re-laid as article prose
  (numbered circle badges dropped per mockup); new closer.
- data-new-copy used: hero `.go` "See Decoded Proof"; plate eyebrow "Where the
  time goes", h2 "The loop, or one line inside 24 hours.", lede; closer eyebrow
  "Artwork holding up production?", h2 "Find where the rounds come from.", lede.
- Nothing dropped: every existing paragraph is on the page.

### /resources/audit-checklist — `fe8b346`
- Sections: hero re-laid with download CTA + "Read it here instead"; DO-ART-984
  plate in `route-sec` with route-head; article prose (how-to + the seven
  checklist sections as h2#s2–s8 + key takeaways); new closer.
- **Both `<DownloadOptIn>` instances kept with exactly their existing props.** The
  full one stays its own section after the hero: the mockup pictures the form as a
  sidebar card, but `DownloadOptIn` renders its own full-width section that cannot
  be restyled from outside, so it is kept per the "mockup dropped a form section →
  keep the section" rule. The compact one sits in the prose where the mockup shows
  its download line.
- data-new-copy used: hero `.go` "Read it here instead"; plate eyebrow "The
  structure", h2 "Six areas you can check today, and the one they feed.", lede;
  closer eyebrow "Can't answer some of them?", h2 "The blanks are where the cost
  is.", lede.
- Mockup-only text adopted: hero body line "The operations audit checklist. Word
  document · 5 pages · 36 questions…".
- Not reproducible without touching forbidden files: `i-file-down` in the hero
  button (IconSprite is in `components/`) → lucide `Download`.

### /resources/capacity-planner — `8a4bb39`
- Sections: hero re-laid (h1-kw "Free tool · capacity planning calculator",
  "Work out your capacity" → #calc, go `/resources/seasonal-capacity`); "How it
  works" becomes `route-sec` with `route route--5` stops; calculator band
  (`g-white` id=calc) with the mockup's route-head intro; "why" band as prose +
  DO-ART-993 two-column; closer.
- **`<CapacityPlannerCalculator />` untouched** (no props, as today). The
  mockup's `<form>`, result feed and capture `<details>` markup is a picture of
  the component and was not rebuilt. The only styling around it is the mockup's
  route-head and a top margin.
- data-new-copy used: hero `.go` "Then plan the seasons"; calc eyebrow "Your
  setup", h2 "The honest number to plan against.", lede; closer eyebrow "Capacity
  worth more than you think?".
- Deviation: the "why" band's two-column grid is a page-module class rather than
  the mockup's inline wrap style, so it collapses to one column under 900px like
  every other grid in the sheets.

### /resources/decoded-method — `4af92d4`
- Sections: hero re-laid with DO-ART-988 moved into the hero right column;
  article prose (why docs fail; three layers as h3 + field lines; the register as
  a plain prose table — the status-badge table flattened per mockup); principles
  as `areas areas--3` cards; the old "Get the whole playbook" card becomes the
  closer.
- data-new-copy used: hero `.go` "Read it here instead"; principles eyebrow "The
  principles"; closer eyebrow "Start with the register".
- Kept although the mockup's closer drops it: the SEO paragraph "Want a business
  process review across your own operation? …" and the "Or book a call directly"
  booking link — both kept in the closer right column.
- Dropped by the mockup (flagged — these are components, not SEO copy/schema/forms,
  so the mockup wins, but Craig should confirm): `SinglePointSchematic`,
  `ThreeLayerSchematic`, and the hero PDF cover image (`/images/decoded-method-cover.webp`).
- Not reproducible without touching forbidden files: `i-refresh-cw` / `i-badge-check`
  sprite symbols for the principle cards → lucide `RefreshCw` / `BadgeCheck`
  (plus `MessageSquareQuote` for `i-message-quote`, keeping the set consistent).

### /resources/seasonal-capacity — `f081b0c`
- Sections: hero re-laid (h1-kw, "Plan your year" → #calc, go
  `/resources/capacity-planner`); "How it works" becomes `route-sec` with
  `route route--3`; calculator band with route-head intro; the two-costs prose
  band (72ch, as mockup); closer.
- **`<SeasonalCapacityCalculator />` untouched** (same as capacity-planner: the
  mockup form/feed/capture is the component's picture).
- data-new-copy used: hero `.go` "Start with the capacity planner"; calc eyebrow
  "Your baseline", h2 "Where the gaps land across the year.", lede; closer eyebrow
  "Plan the year properly".

### /resources/six-sigma — `0eaa4c9`
- Sections: hero re-laid with DO-ART-985 in the hero right column; scale band
  (`g-navy` id=scale) with route-head + `ledger-list` of the four sigma levels +
  route-cap caption; the real-gap band (`g-white` sec-head + DO-ART-986 inline);
  closer.
- **Ledger figures:** the mockup's ledger rows render with empty figures and tags
  (`<p class="fig"><small> yield · </small></p>`, `<span class="tag"></span>`).
  Rather than ship empty columns or invent numbers, they are filled from the
  page's existing `sigmaLevels` data: fig = yield %, small = "yield · {dpmo}
  DPMO", tag = the sigma level. Flagged for review.
- Kept although the mockup's caption shortens it: the full warning-strip sentence
  "Most decoration businesses operate at 3 to 4 Sigma. Here is what that actually
  means." (existing wording wins), now the route-cap line.
- Dropped by the mockup (flagged): `SixSigmaSchematic`, the hero PDF cover image,
  and the old warning strip band itself (its sentence is kept as above).
- data-new-copy used: hero `.go` "See the scale"; closer eyebrow "Where do you
  sit?".

### /resources/sop-template — `e47f041`
- Sections: hero re-laid (h1-kw "Free resource · SOP template", download CTA +
  "Read it here instead"); article prose (template contents, what an SOP is, why
  decorated goods, three documents as h3s, the seven steps as h3s, takeaways);
  new "30" seal band (`g-white`); closer.
- **Both `<DownloadOptIn>` instances kept with exactly their existing props** —
  full one after the hero (mockup pictures it in the aside; see audit-checklist),
  compact one in the prose after the seven steps where the mockup shows its
  download line.
- data-new-copy used: hero `.go` "Read it here instead"; seal tag "Decoded Ops ·
  SOP template · the first one", h2 "Minutes for your first process.", paragraph;
  closer eyebrow "Want it done with you?", h2 "Get the business onto the page.",
  lede.
- Mockup-only text adopted: hero body line "The SOP template. Word document · 11
  pages · …".

## Verification

Final lines of `npx tsc --noEmit` (run after the last commit):

```
(no output — clean, exit code 0)
```

Final lines of `npx next build` (exit code 0):

```
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

All eight routes appear in the build's prerendered static route table. `npm test`
(vitest) also run: 15 tests passed.
