# RS3 lane A — about, contact and three service pages · CR-WEB-084

Five routes re-laid out from the approved 3 Nov mockups. One commit per page. `npx tsc --noEmit`
and `npx next build` both pass (exact final lines at the end).

Commit hashes:

| Route | Commit | Mockup |
|---|---|---|
| `/about` | `5a81264` | `about-v2.html` |
| `/contact` | `ca26ece` | `contact-v2.html` |
| `/fractional-coo` | `af25de7` | `fractional-coo-v1.html` |
| `/process-quality-system` | `aa4f7c4` | `process-quality-system-v1.html` |
| `/sectors/operations-consultant-print-embroidery` | `4c1252b` | `sectors-operations-consultant-print-embroidery-v1.html` |

Files changed: the five `page.tsx`, a `page.module.css` beside each of the four non-contact pages,
and `app/contact/ContactClient.tsx`. Nothing else. Every `export const metadata` block, every
`<JsonLd>` / `<BreadcrumbSchema>`, every `data/*` read and every `D17Motion` is byte-identical to
before. `app/contact/actions.ts` and every `layout.tsx` untouched.

---

## /about (`5a81264`)

**Sections changed.** Hero rebuilt from `hero-center`-style split to site-v3 `hero` + `hero-split`,
with the h1 carrying the `.h1-kw` keyword pill and the second hero button becoming a `.go` text
link. Career section moves from eyebrow + h2 + `.hair` + lede to the `route-head` 7/5 split. The
record section's two fact cards (DO-ART-919a/b photo heads) become the mockup's two-row
`.ledger-list` — same h3/p copy, same figures, same `Fact 01`/`Fact 02` tags. "Why the software
exists" moves from `article.sheet` (docket strip + masthead + plate-scroll) to `route-head` +
`.plate-img` + `t-lede` + `.t-links`, gaining two new links (See Works, Read case study 01).
Closer moves from `g-white.ctaStrip` to `g-off.closer` / `closer-grid`.

**`data-new-copy` used (1).** h1 `.h1-kw` pill — "About Craig · business operations consultant".

**Kept as-is.** DO-ART-904 r03 portrait, DO-ART-831 r01 journey plate (including its
`#01263a` → `#023047` route stroke fix, which the mockup calls out), DO-ART-719 r03 fill-the-gap
plate image and alt text, the Hanicks 317,812 / 154,518 foot line. Metadata untouched.

**Dropped from the mockup that I did not reproduce.** The DO-ART-919a/b photo heads are gone
because the mockup turns the fact cards into a ledger — deliberate per the mockup's own header
comment. The `article.sheet` docket strip ("DO-ART-719 · Schematic / Rev 03 / Issued") is gone —
the mockup says "without the docket strip"; it is decorative metadata, not copy.

**Not reproducible without a forbidden file.** None.

---

## /contact (`ca26ece`)

**Sections changed.** Hero rebuilt to `hero` + `hero-split` with the form card (`form-card`, `id=
"message"`) as the second grid cell, so the `.go` "Or send a message" link has a real anchor. The
form moves to site-v3 `.form-card` / `.row-2` wrappers with `label[for]`/`id` pairs. The submit
button becomes `btn--outline` (the mockup's "one primary per view" rule — "Book a call directly"
stays amber). "What to expect" moves from `grid--3` cards to the `route-head` + `.route.route--3`
stepper, which is where the mockup's amber-on-the-last-stop lands on "A clear next step". The
DO-ART-920 direct-line panel moves from `g-navy.cta-strip` to `g-off`, and its Unicode envelope
and telephone glyphs become Lucide `i-mail` / `i-phone` inside `.ic ic-20`. The hero's email and
phone rows are dropped as the mockup directs — the direct-line panel below repeats both.

**`data-new-copy` used (1).** h1 `.h1-kw` pill — "Book a free discovery call".

**Form — what is deliberately NOT done.** Every field, its `name`, its `required` flag, its
`value`/`onChange`, its `disabled`-while-loading behaviour, `handleSubmit` and the
`submitContactForm({ ...formData, ...captureContext() })` call are unchanged, as the lane brief
requires. That means:

- The mockup's client-side validation script, its `data-min` / `data-email` hooks and its `.err`
  field messages are **not implemented**. The form keeps native HTML5 validation exactly as it
  was. No error message is shown that nothing produces.
- The mockup's house-voice rewrite of the validation and success strings is **not implemented**.
  Those strings live in `app/contact/actions.ts` — `z.string().email('Invalid email address')` at
  line 9 and `message: "Message sent successfully! I'll be in touch shortly."` at line 161 — which
  this lane must never touch. **This needs a separate CR or Craig's go-ahead.** It is the one
  thing in the approved mockup that is genuinely unimplemented.
- The success message renders in site-v3's `.form-note` slot (the mockup's treatment) but is
  driven by the real `formState`/`result`, never by the mockup's "nothing is sent" script. A real
  error block is kept, because the form can genuinely fail — the mockup has no error state at all.

**Not reproducible without a forbidden file.** The `actions.ts` strings above. Also: the mockup
wraps its sections in `<main id="content">`; not reproduced, because `app/layout.tsx:112` already
renders `<main id="main-content">` around every page and a second `<main>` would be nested and
would create a duplicate main landmark. Nothing targets `#content` (no skip link found in
`components/`).

---

## /fractional-coo (`af25de7`)

**Sections changed.** Hero rebuilt to `hero` + `hero-head` 7/5 split with the `.h1-kw` pill and a
single primary CTA. New hero piece **DO-ART-1030 r01** (the weekly slot and the scope sheet over
DO-ART-979p) added. "What it covers" moves from `grid--2` feature cards to `areas areas--4` icon
cards with `01`–`04` numerals and a `p.note` replacing the `div.inset`. New "On the day" photo
band (DO-ART-979p / 979a / 979i). "When it fits" moves from `grid--2` panels to the `split`
two-column treatment inside `route-sec` with the dot grid. FAQ moves from `grid--2` panels to the
`.faq` / `.faq-item` two-column block, still rendered from the same `faqs` array that feeds the
FAQPage JSON-LD. CTA strip becomes the `g-off.closer` / `closer-grid`.

**`data-new-copy` used (6).** h1 `.h1-kw` pill ("Fractional COO · operations leadership, part
time"); DO-ART-1030 `sw-cap` `.k`, `h3` and `p`; "On the day" h2 and lede.

**Sections the mockup drops that I kept.** "How it starts" (eyebrow + h2 "Every engagement starts
with a Clarity Audit." + lede + link). The mockup folds it into the closer lede; folding drops the
H2 and rewords the lede, and the brief says losing an SEO section is a failure even if the page
matches the mockup. So it stays a section and the closer keeps the existing CTA-strip lede
("An hour, no obligation…"). **Consequence to check:** the Clarity Audit proposition is now stated
in its own section and again in the FAQ. Craig may prefer the fold.

**CTAs the mockup omits that I kept as `.go` text links**, so no internal link is lost: "How the
engagement works" → `/retained` (hero) and "See the full price list" → `/pricing` (closer).

**Not reproducible without a forbidden file.** None.

---

## /process-quality-system (`aa4f7c4`)

**Sections changed.** Hero rebuilt to `hero` + `hero-head` with the `.h1-kw` pill and a new hero
piece **DO-ART-1031 r01** (a one-page SOP and the process register over DO-ART-979g). "The loop"
moves to `g-navy route-sec` with `route-head` and the four loop steps become the house `.route`
stepper with `stop--out` on step 4 and a `route-cap`. New "Where the SOP gets tested" photo band
(DO-ART-979k / 979j / 979q). New "What you keep" three-card `areas` block. CTA strip becomes the
`g-off.closer` / `closer-grid` with a "Where it fits" eyebrow.

**`data-new-copy` used (17).** h1 `.h1-kw` pill; hero CTA "Book a free discovery call"; DO-ART-1031
`sw-cap` `.k`, `h3`, `p`; "Where the SOP gets tested" eyebrow, h2 and lede; "What you keep" eyebrow,
h2 and lede; the three "what you keep" card h3s and `t-card`s.

**The two Artwork-family components — the lane brief's exception.**

- `PhotoPiece` (DO-ART-914, the evidence photo band) **is replaced.** Its exact slot becomes the
  mockup's three-figure D17 `ev-grid` (DO-ART-979k/j/q). That is the lane brief's stated
  exception — "unless the mockup replaces that exact slot with a D17 piece; if so, record it".
  Recorded here. `PhotoPiece` is no longer imported.
- `Artwork` (DO-ART-305, the loop plate) **is kept.** The mockup replaces its slot with the house
  route card, which is *not* a D17 piece ("the house route card, so no plate is redrawn"), so the
  lane brief's keep-the-Artwork rule applies. **Consequence to check:** the loop section now
  carries both the kept plate and the mockup's route card, so the four steps and the "Then round
  again" line are stated twice. Craig may prefer to drop the plate here.

**Copy kept verbatim where the mockup markup contradicts the mockup's own header comment.** The
comment says "Copy verbatim from the staging branch … for the hero, the four loop steps and the
closer". So: the hero lede keeps its existing last sentence (the mockup markup appends ", and how
to keep it followed"), and the closer keeps its existing CTA labels ("See how this fits into
Deliver" → `/deliver`, "The Decoded Method" → `/resources/decoded-method`) rather than the
mockup's "Book a free discovery call" / "See how Deliver runs".

**Not reproducible without a forbidden file.** None.

---

## /sectors/operations-consultant-print-embroidery (`4c1252b`)

**Sections changed.** Hero rebuilt to `hero` + `hero-split` with the `.h1-kw` pill and a new hero
piece **DO-ART-1029 r01** (machine heads tagged three ways). Challenges move from `grid--2` cards
to `areas` icon cards with `01`–`05` numerals. New "How it fits together" section carrying **DO-ART-120
r02**, the plate redrawn in the house schematic vocabulary (same three stages). New "On the day"
photo band (DO-ART-979i / 979o / 979k). "How I help" moves from `grid--2` numbered cards to the
`.route.route--6` stepper — the seven "what I do" items become six stops plus the seventh as the
`route-cap`, exactly as the mockup describes. New "Case study" `split-6` block (case study 02).
The cross-links block becomes the `next` / `next-grid` "Keep reading" block, **rendered from
`sectorRouting`** as the mockup's header comment directs (so its card contents follow the data,
not the mockup's hardcoded list — e.g. the data carries 2 resources and 2 sectors where the
mockup's static markup shows 3 and 3). Closer becomes `g-off.closer` / `closer-grid`.

**`data-new-copy` used (12).** h1 `.h1-kw` pill and h1 headline span; "How it fits together" h2
and lede; "On the day" h2 and lede; case-study h2, lede, `t-meta` and the three `ticks` items.

**The two components the lane brief names.**

- `PrintEmbroideryOpsConsultantSchematic` **is replaced.** Its exact slot (the hero's right column)
  becomes the mockup's DO-ART-1029 D17 figure. Lane brief exception applies; recorded here.
- `<Plate>` (DO-ART-120) **is replaced.** Its exact slot becomes DO-ART-120 **r02**, a D17
  `figure.d17.sw.a120r2`. The mockup's header comment is explicit: "plate DO-ART-120 redrawn as
  rev 02 in the house schematic vocabulary (same three stages as staging's Plate)". Lane brief
  exception applies; recorded here.
- `sectorRouting`, the `<JsonLd>` (WebPage + FAQPage graph) and the `<BreadcrumbSchema>` are
  **kept unchanged**, as required.

**H1.** Here the mockup marks the headline `data-new-copy`, so the mockup's shorter headline is
used and the staging `tagline` constant is dropped. (Contrast /about and /fractional-coo, where
the headline is *not* marked and the staging wording is kept — see the note below.)

**Not reproducible without a forbidden file.** None. This page still has no nav link, as instructed.

---

## The one judgement call worth Craig's eye

On `/about` and `/fractional-coo` the mockup's `<h1>` markup and the mockup's own header comment
disagree about the headline:

- `fractional-coo-v1.html:10` — "…the H1, which carries the primary keyword as the pill (fractional
  coo) **with the staging line as the headline**".
- `fractional-coo-v1.html:213` — the markup headline is "Someone owns how the work runs, and your
  team stops carrying it alone.", which is not the staging line (it is a rewritten echo of the
  closing sentence of staging's section-2 lede).

I kept the **staging line** in both cases. Two independent signals say so: the mockup's own
comment, and the lane brief's rule 3 — "For every other heading and paragraph, the existing page's
wording wins wherever the two differ… The existing copy is keyword-optimised (WO-WEB-011 u25); do
not rewrite it." Swapping "Fractional COO for print and embroidery businesses" out of the H1 would
drop the page's target phrase from its most weighted heading. The cost is a mildly redundant H1
("Fractional COO · operations leadership, part time" pill over "Fractional COO for print and
embroidery businesses"). **If the mockup markup was the intent, this is a one-line change on each
page.**

The same markup-vs-comment pattern appears on `/process-quality-system` (hero lede and closer CTA
labels) and there the comment plus rule 3 were followed too.

---

## Artwork namespace note (unchanged, flagged)

`/about` and `/contact` hold their DO-ART figures in the `d17-art.module.css` module namespace,
which is what those two pages did before and what the homepage does. The mockups write the same
figures with global `d17-*` classes. The markup and content are identical; the class namespace is
not. Two related pre-existing quirks survive unchanged:

- `/about`'s DO-ART-831 `<svg className="route">` uses a **bare** `route` class while every sibling
  class in that figure is `d17`-module-prefixed, so `d17-art.module.css`'s `.a831 svg.route` rules
  — including the `≤700px { display:none }` — do not reach it.
- `/contact`'s DO-ART-920 `copy` / `icon` / `lbl` / `val` spans are bare the same way.

Converting those two figures to the mockup's global namespace would fix both, but it drops the
existing `d17-art.module.css` import that the lane brief says to keep, and it changes live artwork
geometry (module `.a904` is `1/1`, `d17-global.css`'s is `14/15`). Out of scope for this lane.

## Stylesheet note

`/fractional-coo`, `/process-quality-system` and the sectors page import `d17-global.css`,
`d17-apps-cases.css` and `site-v3.css`, because their new D17 pieces need the global artwork layer
(their `.sw` / `.sx` / `.d17-doc` / `.q` / `.sx-*` / `.d17 .foot` rules live there).

`/about` and `/contact` import `site-v3.css` only. They need no global artwork layer, and
`d17-global.css` declares bare global `.route` and `.lbl` rules that would reach `/about`'s
DO-ART-831 route SVG and `/contact`'s contact-link label spans. Each `page.module.css` carries only
the mockup's page-local `<style>` rules, anchored on a `.root` local class with `:global()`
descendants, per the RS2 precedent. Where the mockup's page-local rule duplicates a
`site-v3.css` rule (`.hero-split .t-body`, `.hero-split .btn-row`) it is not repeated.

## Verification

`npx tsc --noEmit` — exit 0, no output:

```
(empty)
```

`npx next build` — exit 0. Exact final lines:

```
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

Scaffold grep across the 10 changed files (`TODO|FIXME|XXX|HACK|lorem|PLACEHOLDER|coming soon|
???|TK|WIP`): 0 hits. The only matches were the four legitimate `placeholder="…"` attributes on
the contact form fields, which are part of the form fields the lane brief says to keep exactly.

`node .context/price-audit.mjs --check` exits 1 with 28 violations — **all pre-existing, all in
files this lane did not touch** (`app/tools/*`, `app/case-studies/*`,
`app/problems/ecommerce-not-connected/page.tsx`, `app/sectors/workwear/page.tsx`). None of lane
A's five pages carries a price or a forbidden word. Needs its own CR.
