# RS2 lane P1 — six problem pages (CR-WEB-083) — lane report

All six routes rebuilt from their 3 Nov mockups onto `components/ProblemPageV2.tsx` +
`app/problems/problems-v2.css`, with the shared imports (`d17-global.css`, `d17-problems.css`,
`problems-v2.css`) and `<D17Motion />`. `components/ProblemPageV2.tsx`, `app/problems/problems-v2.css`
and every other shared file are untouched. Metadata, JSON-LD and breadcrumb data are unchanged on
every page; the BreadcrumbSchema now comes from `ProblemPageV2` (via `crumb`/`slug`) with the same
items the pages previously rendered.

Commits (one per page, oldest first):

| Route | Commit |
|---|---|
| /problems/cant-scale-operations | `855b855` |
| /problems/disaster-recovery | `6e58cdf` |
| /problems/ecommerce-not-connected | `1a93a49` |
| /problems/ai-paralysis | `b7796f4` |
| /problems/bottleneck-growth | `18bd73c` |
| /problems/buy-vs-build | `81dfc1e` |

Each page also has a `page.module.css` (flex `order` wrapper + the mockup-local styles the shared
sheets do not carry). How it is used is described under "Cross-cutting notes" below.

---

## /problems/cant-scale-operations (`855b855`)

**Sections changed:** whole page moved from `ProblemPageDS` to `ProblemPageV2`. Hero intro split
into lede/body (same words); symptoms become the numbered ledger (`The signs.`, staging heading);
new photo band (mockup); the four causes keep their staging copy in the icon-card grid (the mockup
heading `Where this actually comes from` matches the shell's fixed heading, no override needed);
DO-ART-993 moves into the plate slot behind the new plate head; How I help keeps the shell's
`What happens when you call` (mockup matches); staging's related-links band and CTA strip fold into
the routing-driven "Keep reading" grid and the offer card, as the mockup's header note directs.
The dead `CantScaleSchematic`/`scalingSteps` leftovers go (the hero artwork, not the schematic, is
what the page already rendered and what the mockup shows).

**data-new-copy used:** symptoms caption "Count the ones that apply. Each one is the operation
telling you it was built for half the size."; photo band "Where the strain shows" / "More orders
through the same floor." / its lede; plate "The real day" / "The spec sheet assumes a day nobody
has." / its lede.

**Mockup bits not reproducible through the component:** the photo-band figures carry no kicker/line
captions and the symptoms head carries no lede, but `ProblemPageV2` always emits both elements —
passed as empty strings and hidden with `:empty` rules in `page.module.css`. The video section is
not in the mockup; kept per the brief.

**Kept although the mockup drops it:** the video (`VideoSchema` + `VideoEmbed` section, staging's
markup, sitting after the causes cards where `ProblemPageDS` put it). Nothing else:
`ProblemPageDS`'s offer card becomes the v2 offer card and its related-links band becomes the
routing-driven keep-reading grid (same links), per the mockup's set-9 pattern.

## /problems/disaster-recovery (`6e58cdf`)

**Sections changed:** `ProblemPageDS` → `ProblemPageV2`; intro split lede/body; symptoms ledger
(`The signs.`); new photo band; the four causes keep staging copy (shell heading matches); the
plate is the mockup's navy split — heading, lede and the new `Run the calculator on your own
figures` link to `/tools/rto-calculator` beside DO-ART-998 — carried through the plate `art` slot
with the mockup's `.plate-split` rules in `page.module.css`; How I help keeps the shell heading
(mockup matches); related links + CTA strip fold into keep-reading + offer.

**data-new-copy used:** symptoms caption "Count the ones that apply. Each one is an hour you would
be guessing on the day."; photo band "What stops when the systems do" / "Every job here needs the
system to be up." / its lede; plate "Recovery time" / "Seven hours back, four times a year." / its
lede / the calculator text link.

**Mockup bits not reproducible through the component:** empty photo captions + empty symptoms lede
(hidden `:empty`, as above). The shared figure `a998Solo` is kept (same DO-ART-998 content) with a
one-word `.replace()` so its `data-od-id` matches the mockup's `plate-recovery` annotation.

**Kept although the mockup drops it:** the video section. Nothing else: `ProblemPageDS`'s offer card
becomes the v2 offer card and its related-links band becomes the routing-driven keep-reading grid
(same links), per the mockup's set-9 pattern.

## /problems/ecommerce-not-connected (`1a93a49`)

**Sections changed:** `ProblemPageDS` → `ProblemPageV2`; intro split; symptoms ledger
(`The signs.`); causes keep staging copy (shell heading matches); the staging Shopify and
WooCommerce sections become the mockup's single tabbed block (custom section in the page file —
`ProblemPageV2` has no slot for it), with the mockup's own tab script ported verbatim so the
switch, roving tabindex and arrow keys work exactly as drawn; the a948 options plate moves into the
plate slot behind the new plate head (shared `a948Problems` problem-page cut kept, `data-od-id`
patched to the mockup's `plate-options`); the staging `<details>` FAQ becomes the mockup's visible
two-column FAQ (custom section); related links + CTA strip fold into keep-reading + offer.

**data-new-copy used:** symptoms caption "Count the ones that apply. Each one is an order typed in
twice."; the whole platform block head "By platform" / "Where the connection breaks, by store." /
"Shopify and WooCommerce break in different places. Pick yours."; plate "Your options" /
"Everything goes on the table, priced." / its lede.

**Mockup bits not reproducible through the component:** the tabbed platform block and the FAQ block
have no component slot — both are rendered in the page file, styled by `page.module.css` (the
mockup's `.tabs`/`.tab-panel`/`.faq`/`.faq-item` rules, anchored on module classes). The mockup
icon `i-refresh-cw` is not in `components/ProblemIconSprite.tsx` and components are out of bounds
for this lane, so the page defines that one symbol locally (the mockup's own paths) in a zero-size
sprite; the shared sprite should gain it centrally later.

**The mockup drops the photo band on this page** (the platform block takes the slot). There is no
mockup source for a band here — heading, lede and photos would have to be invented — so the shell's
empty band is hidden instead. No staging content is affected (the band is new-copy only).

**Kept although the mockup drops it:** the video section. Nothing else: `ProblemPageDS`'s offer
card becomes the v2 offer card and its related-links band becomes the routing-driven keep-reading
grid (same links), per the mockup's set-9 pattern.

## /problems/ai-paralysis (`b7796f4`)

**Sections changed:** the inline page is rebuilt on `ProblemPageV2`; hero intro split lede/body;
symptoms ledger with staging heading "Seven versions of the same stuck."; new photo band; the
plate is the mockup's navy split — the right-order argument, the new
`Score your own operation in five minutes` link to `/tools/ops-health-score`, staging's four-layer
list (now the mockup's `sym plate-layers` ledger) and staging's "AI will amplify the chaos" note
beside DO-ART-997 — carried through the plate `art` slot with the mockup's `.plate-split`,
`.plate-layers` and `.plate-note` rules in `page.module.css`; the causes and How I help sections
are rendered in the page file because the component's fixed headings cannot carry this page's
staging headings.

**data-new-copy used:** symptoms caption "Count the ones that apply. None of them is a reason to
buy an AI tool."; photo band "Where the data actually lives" / "Paper, job sheets and a warehouse
floor." / its lede; plate "The right order" / "You can't automate what hasn't been documented." /
its lede / the ops-health-score text link.

**Mockup bits not reproducible through the component:** `ProblemPageV2` renders its own causes
section as "Why it happens / Where this actually comes from" and its How I help as "What happens
when you call"; this page's staging headings are "Four reasons the question stays unanswered." and
"An honest answer, with no vendor agenda." Both sections are therefore rendered in the page file
(same classes, same look) and the shell's copies are hidden via `page.module.css` (`causes={[]}`,
empty `howLede`/`howBody`, so the hidden copies carry no duplicate text). The hero CTA in the
mockup reads "Get an honest assessment"; the template's fixed button reads "Talk about your
situation" — template chrome kept (see cross-cutting notes).

**Kept although the mockup drops it:** the video section (staging position, right after the
symptoms ledger). The CTA strip is dropped per the mockup's "folded into the How I help offer
card" note — its copy is listed below in "Dropped staging copy".

## /problems/bottleneck-growth (`18bd73c`)

**Sections changed:** rebuilt on `ProblemPageV2`; hero intro split; symptoms ledger with staging
heading "Seven signs the owner is the bottleneck in production."; new photo band; staging's four
fix steps become the mockup's card grid ("The fix") — rendered in the page file because the
component's causes slot would put causes copy ("Where this actually comes from") over fix cards;
the DO-ART-718 plate moves into the plate slot behind the new plate head (staging figure kept
byte-identical); the How I help section is rendered in the page file (staging heading "You build
the business. I build the system that runs it."); staging's related links and CTA strip fold into
the routing-driven keep-reading + offer.

**data-new-copy used:** symptoms caption "Count the ones that apply. Each one is a decision only
you can make today."; photo band "Where the decisions queue" / "Every one of these waits for a
yes." / its lede; plate "The method" / "Three documents that carry the decisions for you." / its
lede.

**Mockup bits not reproducible through the component:** as ai-paralysis — the fix grid and the How
I help heading are page-file sections with the shell's copies hidden; the mockup icon
`i-refresh-cw` is defined locally (see above); hero CTA mockup label "Book a Clarity Audit" vs the
template's fixed "Talk about your situation".

**Kept although the mockup drops it:** the video section (after the symptoms ledger). CTA strip
dropped per the mockup note — heading "Find out what's still sitting on your desk that shouldn't
be.".

## /problems/buy-vs-build (`81dfc1e`)

**Sections changed:** rebuilt on `ProblemPageV2` (this page never used `problemRouting` before —
the mockup adds the routing-driven keep-reading grid); staging's three questions (coverage, fit,
bloat) become the navy symptoms ledger exactly as the mockup composes them; staging's three
arithmetic steps become the mockup's card grid with "Step 1–3" labels and staging's "sometimes the
answer is buy" inset as the note below — rendered in the page file (the component's causes slot
cannot carry the heading, the step labels or the inset styling); the DO-ART-719 plate (register's
current revision, rev 03) moves into the plate slot behind the new plate head; How I help is
rendered in the page file (staging heading "Being upfront about where I stand."); CTA strip folds
into the offer per the mockup note.

**data-new-copy used:** symptoms caption "Answer all three in writing before you look at a
quote."; photo band "What the platform has to cover" / "The whole job, not the demo." / its lede;
plate "The options" / "Three ways to close the gap." / its lede.

**Mockup bits not reproducible through the component:** the arithmetic grid + note and the How I
help heading are page-file sections (shell copies hidden). The ledger rows in the mockup carry
bold question lead-ins (`<b>Coverage. …</b>`); the component's `symptoms: string[]` renders plain
text — full wording kept, the bold emphasis dropped. Hero CTA mockup label "Book a free 60 minute
call" vs the template's fixed label. The keep-reading card labels come from
`data/problem-routing.ts` (a forbidden file) and differ from the mockup's cards — the mockup shows
"Clarity Audit" / "We're on the wrong software", "Our system is ancient", "The ERP project went
wrong", "Should I replace my ERP?"; the routing data renders "Technology & operations audit" /
"The wrong software for your business", "The system is ancient", "Systems that don't talk to each
other" and the ERP selection playbook twice (reading + resources). Worth a data pass outside this
lane.

**Kept although the mockup drops it:** the video section (after the three questions). CTA strip
dropped per the mockup note — heading "You can't run these numbers without seeing the operation.".

---

## Cross-cutting notes

1. **Positioning of slot-less sections.** `ProblemPageV2` renders the whole v2 shell as one block,
   so sections the mockup puts mid-page (the video, the platform block, the FAQ, the fix/arithmetic
   grids) cannot interleave in the DOM. Each page wraps the component and its extra sections in a
   `<div>` whose `page.module.css` positions them with flex `order`, so the **visual order follows
   the mockup exactly**. DOM order keeps the component's block first — a keyboard focus-order
   caveat worth knowing, nothing more.
2. **Replaced shell sections.** On ai-paralysis, bottleneck-growth and buy-vs-build the shell's
   causes and How I help sections render fixed headings that contradict this page's staging copy.
   Those sections are rendered in the page file (the mockup's own class names from
   `problems-v2.css`) and the shell's copies are hidden with `page.module.css`; the hidden copies
   are passed empty content so no text is duplicated, though their fixed `<h2>`s remain
   hidden-but-present in the DOM.
3. **Template chrome kept as it is:** the hero button row ("Talk about your situation" / "See how
   the audit works") and the offer card ("The first call is free." … "Book a free call"). Three
   mockups carry a different hero label (listed per page above); changing them would mean
   rebuilding the hero section outside the component, which the brief forbids.
4. **Photo band captions / symptoms lede.** The 3 Nov mockups' photo figures carry no captions and
   the three `ProblemPageDS` pages' symptom heads carry no lede; the component always emits those
   elements, so they are passed empty and hidden (`:empty`) in each page's module CSS.
5. **Artwork.** Figure artwork is kept from staging byte-for-byte (shared figure imports where the
   page already used them, inline constants where the page already had them); the only edits are
   `data-od-id` patching to the mockup's slot names (`plate-recovery`, `plate-assessment`,
   `plate-options`). Photo-band images use `/images/site/evidence/…` per the mapping rule; figure
   photos keep their staging `/images/d17/…` paths (the mockups' `../assets/site/d17/…` paths have
   no counterpart under `public/images/site/`, and both existing trees are used by live pages).
6. **`i-refresh-cw`** (used by the mockups' fix/arithmetic/platform cards) is missing from
   `components/ProblemIconSprite.tsx`. Components are out of bounds for this lane, so the symbol is
   defined locally in each page that needs it. Recommend adding it to the shared sprite centrally.
7. **`node .context/price-audit.mjs --check`** exits non-zero, but every hit is pre-existing on
   origin/staging (tools, case-studies, sectors/workwear) plus one word inside the ecommerce
   hero artwork (`Hi-vis vests` in the DO-ART-966 figure, byte-identical to staging). No prices or
   new figures were introduced by this lane's copy. The generated `.context/price-audit.md` was
   refreshed by that run and committed with this report.

## Dropped staging copy (per the mockups' "CTA strip folded into the How I help offer card" notes)

Only the three hand-built pages carry a separate CTA strip; the three `ProblemPageDS` pages never
had one (their offer card becomes the v2 offer card). The dropped strips' full copy:

| Page | Dropped CTA strip |
|---|---|
| ai-paralysis | h2 "Find out what AI could actually do for you." + "Sixty minutes, free, no obligation. If the honest answer is “not yet”, I'll tell you that, and tell you what to fix instead." |
| bottleneck-growth | h2 "Find out what's still sitting on your desk that shouldn't be." + "A Clarity Audit identifies every decision bottleneck in your operation, and the written plan tells you which one to move first." |
| buy-vs-build | h2 "You can't run these numbers without seeing the operation." + "Working out what percentage anything actually covers means following your processes from start to finish first. A Clarity Audit is a day on site, then the comparison in writing within five working days." |

Each strip's CTA buttons ("Book a discovery call" / "See how a Clarity Audit works") are covered by
the offer card ("Book a free call" + direct booking link) that the mockup puts in How I help. The
strips also dropped their second buttons ("See how a Clarity Audit works" / "See how Deliver
works"), which the hero's "See how the audit works" link to `/clarity` covers. If any of these
lines carry keyword weight you want kept, the strip can be restored as a closing band in each page
file without touching the shared component.

## Verification

`npx tsc --noEmit` — exact final output: *(no output, exit 0)*.

`npx next build` — exact final lines:

```
ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

All six routes prerendered (`.next/server/app/problems/<route>.html` present for each). `npx eslint`
on the six page files: 0 errors. Escape-check over the six files (literal `\uXXXX`/`\xXX`
sequences): 0 hits.
