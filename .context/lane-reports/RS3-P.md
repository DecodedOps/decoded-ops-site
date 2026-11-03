# RS3 lane P — five problem pages (CR-WEB-084) — lane report

All five routes re-laid out from their approved 3 Nov mockups as bespoke inline-section pages
(four problem pages + the problems index). Metadata, JSON-LD, BreadcrumbSchema, `problemVideos` /
`VideoSchema` / `VideoEmbed` wiring and `<D17Motion />` are unchanged on every page that had them;
the four problem pages keep their `d17-*.css` imports and gain `@/app/design-system/site-v3.css`.
Each page has a `page.module.css` holding the mockup-inline styles the shared sheets do not carry,
anchored on `.root :global(...)` so no selector reaches another route.

Commits (one per page, then fixes, oldest first):

| Route | Commit |
|---|---|
| /problems/data-scattered | `98dcb34` (+ `97485c8` eyebrow fix, `0344f2b` hero CTA fix) |
| /problems/erp-implementation-failure | `3c46c79` |
| /problems/legacy-system | `3f87401` |
| /problems/wrong-erp-software | `09233e0` |
| /problems | `b2b3b82` (+ `2d72c56` invalid-rule fix, `80def9a` lint fix) |

## Copy convention applied on all five pages

The mockups' own comments settle most of it ("Staging copy verbatim… new strings carry
data-new-copy"); the working rule used here:

1. **h1–h3, paragraphs, ledes, captions:** staging wording wins wherever the mockup differs and the
   element is not marked `data-new-copy`. The mockup's structural splits (lede/body, merged ledger
   name+line) are adopted with the same words.
2. **`data-new-copy` text:** the mockup's wording (listed per page below). The attribute itself is a
   build-time marker and is not carried into the JSX.
3. **Eyebrows:** follow the mockup. The hero eyebrows are the site's own `components/Header.tsx`
   problem labels ("The numbers never agree", "The new system rollout went wrong", "Our system is
   ancient", "We're on the wrong software"), so the pages now open with the same words the nav and
   the related-problems cards use for them.
4. **Hero CTA row and offer card:** follow the mockup's family chrome ("Talk about your situation" /
   "See how the audit works" / "The first call is free." / "Book a free call" / "Or book a call
   directly"), which matches the fixed labels `components/ProblemPageV2.tsx` renders on the six v2
   problem pages. **Flagged:** on data-scattered, legacy-system and wrong-erp-software this replaces
   staging's hero button label "Book a free 60 minute call" (kept on the CTA strips). One-word swap
   if you want staging's label back. erp-implementation-failure's mockup keeps its staging label
   ("Book a free discovery call") and is unchanged.
5. **Inline emphasis:** where staging wrapped a phrase in `<b>` and the mockup's copy is
   unemphasised, the emphasis is dropped (same words). Flagged per page where it applied.

## /problems/data-scattered (`98dcb34`, `97485c8`, `0344f2b`)

**Sections changed:** hero becomes the `p-hero` split (staging lede split into lede + body, h1 gains
the mockup's `<em>` treatment) with DO-ART-964 kept in the hero; the six sources become the navy
`sym` ledger (name + line merged, staging wording); new photo band (three evidence figures); the four
causes become the icon-card grid (staging copy verbatim, mockup icons); the video stays after the
causes at its staging position; DO-ART-942 moves into the `plate-sec` behind the new plate head; new
proof section (the Hanicks feed panel — the figures the page already quotes); How I help becomes the
`how-grid` with the offer aside; new keep-reading grid; staging's CTA strip kept at the foot.

**data-new-copy used:** symptoms caption ("Count the ones you run…"); photo band eyebrow/h2/lede;
causes lede ("Four decisions, each sensible on its own…"); plate-section text (eyebrow "One
catalogue", h2 "Two ways to run it…", lede); proof eyebrow/h2/lede (plus its note and link — new
elements); keep-reading service card ("Decoded Works").

**Notes:** hero eyebrow now "The numbers never agree" (Header label, was "The problem"); section
eyebrows follow the mockup ("The symptoms", "Why it happens"). The hero figure is the mockup's
DO-ART-964 block (verified equal to staging's, with the mockup's `/images/site/d17/sectors/…` photo
path); DO-ART-942 stays the shared `lib/d17-figures/a942` figure with `data-od-id` patched to the
mockup's `plate-one-catalogue` (content verified equal to the mockup's figure).

**Kept although the mockup drops it:** the CTA strip — h2 "Find out what your six sources actually
disagree about." + its lede + "Book a free 60 minute call" / "See Works".

## /problems/erp-implementation-failure (`3c46c79`)

**Sections changed:** hero head split (staging lede split lede/body) with the staging DO-ART-967
journey poster moved into the hero as the hero piece; the Hanicks before/after lists become the navy
two-ledger block (`ba-grid`, staging copy verbatim, B1–B4 / A1–A4); the video stays at its staging
position after that block; new photo band; **new visible FAQ section** — the six `FAQPage` schema
questions rendered by mapping over the `erpFailureSchema` const, so the visible copy cannot drift
from the JSON-LD (both kept as-is); DO-ART-991 moves into a `plate-split` behind the new plate text
(the shared figure with the mockup's `sx--solo` cut, `plate-scorecard`→`plate-brief` slot name and
image path — verified equal to the mockup's figure exactly); new proof section (the Hanicks feed
panel); How I help takes the case-study-02 figures and the closing copy per the mockup; new
keep-reading grid; staging's CTA strip kept.

**data-new-copy used:** before/after caption ("Same business, same platform…"); photo band
eyebrow/h2/lede; FAQ h2 + lede; plate-section text (eyebrow "The brief", h2 "Write the brief before
any demo.", lede, text link); proof eyebrow/h2/lede; keep-reading service card ("Clarity Audit").

**Notes:** staging's TackleBag stat cards (17 supplier feeds / 20–40 hours) fold into How I help as
the mockup's t-body paragraph — the figures survive, the card layout does not. The mockup's how-i-help
also carries staging's CTA-strip sentence ("If you're mid-way through an implementation that's
slipping…"), so with the kept CTA strip that sentence appears twice — flagged.

**Kept although the mockup drops it:** the CTA strip — h2 "Book a free discovery call." + its lede +
buttons.

## /problems/legacy-system (`3f87401`)

**Sections changed:** hero becomes the `p-hero` split (staging lede split, h1 `<em>` treatment) with
DO-ART-969 kept; the seven signs become the navy `sym` ledger (staging wording verbatim); the video
stays at its staging position after the signs; new photo band; the layer stack becomes the mockup's
three-card grid (staging copy verbatim, mockup icons); DO-ART-719 rev 03 moves into the `plate-sec`
behind the new plate head; How I help becomes the `how-grid` with the offer aside; new keep-reading
grid; staging's CTA strip kept.

**data-new-copy used:** symptoms caption ("Count the ones that apply. Each one is a field the
platform never had."); photo band eyebrow/h2/lede; plate-section text (eyebrow "The missing layer",
h2 "The gap the platform was never built for.", lede); keep-reading service card ("Decoded Works").

**Notes:** the fix section's lede keeps **staging's wording including "Read bottom-up:"** per the copy
rule, although the mockup drops that phrase now the layers are a left-to-right card grid rather than
a stack — flagged; swap to the mockup's sentence if preferred. The how-i-help `<b>Without touching
what already works.</b>` emphasis is dropped per the mockup (same words). Both figures (DO-ART-969,
DO-ART-719) are kept from staging and verified equal to the mockup's blocks, with DO-ART-969's photo
patched to the mockup's `/images/site/evidence/…` path.

**Kept although the mockup drops it:** the CTA strip — h2 "Find out what layer your platform is
actually missing." + its lede + buttons.

## /problems/wrong-erp-software (`09233e0`)

**Sections changed:** hero becomes the `p-hero` split (staging lede split, h1 `<em>` treatment) with
DO-ART-978 kept; the seven signs become the navy `sym` ledger (staging wording verbatim); new photo
band; the four causes become the icon-card grid (staging copy verbatim, mockup icons) with the new
causes lede; the video stays at its staging position after the causes; DO-ART-999 moves into a
`plate-split` behind the new scorecard text with a link to `/tools/should-i-replace-erp`; How I help
becomes the `how-grid` with the offer aside; new keep-reading grid; staging's CTA strip kept.

**data-new-copy used:** symptoms caption ("Count the ones that apply. Three or more and it is the
fit, not the team."); photo band eyebrow/h2/lede; causes lede; plate-section text (eyebrow "The
decision", h2 "Two yes answers out of eight. Fixable.", lede, link); keep-reading service card
("Clarity Audit").

**Notes:** the a999 figure comes from the shared `lib/d17-figures/a999` with the mockup's `sx--solo`
cut and `plate-scorecard` slot name — but with **staging's photo layer kept**, which the mockup's
block omits although the mockup's own aria-label describes that photo ("over a graded photograph of
a despatch box"). Flagged. Staging's four further-reading links fold into the keep-reading card three
of them as the mockup draws it; "Should you build or buy your next system?" is dropped as a link but
its target `/problems/buy-vs-build` appears in the related-problems card ("Buy it or build it?").
The how-i-help `<b>the real cost of staying versus moving</b>` emphasis is dropped per the mockup
(same words).

**Kept although the mockup drops it:** the CTA strip — h2 "Book a free discovery call." + its lede +
buttons.

## /problems index (`b2b3b82`, `2d72c56`, `80def9a`)

**Sections changed:** the hero is rebuilt on the service-page shape (Clarity v2): the `.h1-kw` pill
carries "Problems · growing pains in business" and the staging h1 text follows it (staging's eyebrow
is replaced by the pill — the mockup's own note: "The keyword lead-in IS the hero eyebrow"); staging
lede kept; new hero CTA; new hero piece DO-ART-1034 (from the mockup, verified equal modulo the
consumed `data-new-copy` markers). The map band keeps the staging heading and lede (verbatim) and the
staging `<Plate>` block (see notes), with the mockup's new three-stop route beneath it. The staging
problem list becomes the mockup's four keep-reading columns (all nineteen pages; titles and
descriptions render verbatim from the staging `problems` array, grouped per the mockup). New "where"
photo band, new seal band (carrying the staging plate footer's copy verbatim, as the mockup's comment
directs), new closer. This page gained `d17-global.css`, `d17-apps-cases.css`, `site-v3.css` and
`<D17Motion />` — it had no d17 imports before and the mockup's artwork needs them.

**data-new-copy used:** hero CTA; the three route steps (h3 + t-card each); all-problems h2 + lede;
where eyebrow/h2/lede; seal tag ("Decoded Ops · problems · the pattern") + h2 + body; closer eyebrow,
h2, lede and both CTA items; the DO-ART-1034 caption texts.

**Could not reproduce / flagged:**

1. **DO-ART-118 stays rev 01 through `<Plate>`.** The mockup redraws the map plate as rev 02
   (nineteen problems in the d17 schematic vocabulary); the lane brief says "keep `<Plate>` usage",
   so the page keeps the registered `<Plate tone="dark" p="pix" …>` block exactly as staged. Its art
   therefore still reads "Eighteen problems, four places they start" and omits *Quoting takes too
   long* from the PROCESS column (the mockup's comment calls that staging error out). Redrawing the
   plate is artwork-register work, not reproducible here without touching forbidden files. The page
   copy around it is correct: all nineteen problems appear in the columns, the seal reads "19".
2. **`.a959` rules.** The lane brief says the mockup uses artwork piece `.a959` and to copy its rules
   from the mockup's stylesheet. The mockup on disk carries no `.a959` rules — its stylesheet comment
   says "DO-ART-118 r02 frame mirrors .a959" and the piece rules it does carry are `.a1034` (hero
   piece) and `.a118` (the map plate frame). Both are copied into `app/problems/page.module.css`,
   anchored `.root :global(…)`, as directed. (`.a959` itself lives only as a class on
   `app/apps/catalogue/page.tsx` and has no piece-specific rules anywhere in the site's sheets.)
3. **Invalid mockup rule dropped.** The mockup's `.route--3::before:not(.d17 *)` is invalid CSS (a
   pseudo-element cannot be followed by `:not`) — it breaks the build verbatim. Dropped; site-v3's
   mobile `.route--3:not(.d17 *)::before` already carries the same `right: auto`.

**Kept although the mockup drops it:** nothing — the staging problem list, heading and lede all
survive (the list reorganises into the four columns).

## Cross-cutting notes

1. **Artwork verified, not eyeballed.** Every figure block was compared programmatically against its
   mockup block (content equal modulo whitespace, `data-od-id` and `src` normalisation, with a strict
   src-included pass where paths were patched). DO-ART-964/967/969/978/719 are kept from staging and
   patched to the mockup's evidence photo paths (`/images/site/evidence/…`, `/images/site/d17/…`) as
   the release brief directs; every mockup image path was confirmed to exist under `public/`.
   DO-ART-991/999 use the shared `lib/d17-figures` imports with `.replace()` patches (the a991 result
   is byte-equal to the mockup's figure).
2. **Icons.** `components/ProblemIconSprite.tsx` lacks `i-arrow-right`, `i-check`, `i-layers`,
   `i-refresh-cw`, `i-server`, `i-shopping-cart`, `i-eye`, `i-pen-line`, `i-calculator`,
   `i-badge-check`, `i-clipboard-check` and `i-search`, and components are out of bounds for this
   lane. Each page defines the symbols it needs locally in a zero-size sprite (the mockups' Lucide
   paths). Recommend adding them to the shared sprite centrally.
3. **`page.module.css` content** is the mockup-inline styles the shared sheets lack — the v5 problem
   patterns (p-hero, sym ledger, sec-lede, plate-sec/plate-split, how-grid, offer, ticks, proof,
   ba-grid) plus the artwork-piece rules. Everything else comes from the global ds-* sheets, the
   `d17-*.css` imports and `site-v3.css` (whose `:not(.d17 *)` scoped copies count as coverage —
   where the sheet's value differed from the mockup's inline rule on a property the page uses
   (`.ticks` margins, `.ticks li` padding/leading, `.dots i` fill), the mockup's value was copied so
   the pages render as approved).
4. **Video sections** stay at their staging positions on all four problem pages (the mockups show
   none), with `VideoSchema`/`VideoEmbed`/`problemVideos` untouched.
5. **Escape-check** over the ten changed files (literal `\uXXXX`/`\xXX` sequences): 0 hits.
6. **`node .context/price-audit.mjs --check` was not run** — the RS3 brief does not call for it, no
   prices were introduced (the only price anywhere in the mockups is in the nav, untouched), and the
   script regenerates `.context/price-audit.md`, which is outside this lane's files to touch.

## Verification

`npx tsc --noEmit` — exact final output: *(no output, exit 0)*.

`npx next build` — exact final lines:

```
ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

All five routes prerendered (`.next/server/app/problems.html` and
`.next/server/app/problems/<route>.html` present for each). `npx eslint` on the five page files:
0 errors, 15 warnings (all `@next/next/no-img-element` on artwork `<img>` tags — the same pattern as
every other artwork-bearing page).
