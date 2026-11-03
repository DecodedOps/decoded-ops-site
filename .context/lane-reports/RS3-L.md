# RS3 lane L — lane report (CR-WEB-084)

Three pages re-laid out from the 14 Oct Open Design mockups in `.context/mockups/rs3/`. Lane
name `L`. One commit per page, as required.

| Route | Commit | Files |
|---|---|---|
| `/cookies` | `2460639` | `app/cookies/page.tsx` (+ new `page.module.css`) |
| `/privacy` | `89b63b3` | `app/privacy/page.tsx` (+ new `page.module.css`) |
| `/locations/manchester` | `3243e28` | `app/locations/manchester/page.tsx` (+ new `page.module.css`) |

No shared file was touched: no `app/globals.css`, no `app/d17-*.css`, no `app/design-system/*`,
no `app/locations/locations-live.css`, no `components/`, no `layout.tsx`, no `data/`, no `lib/`,
no `public/`.

## Stylesheet imports

`/cookies` and `/privacy` keep their existing `@/app/d17-global.css` and `@/app/d17-locations.css`
imports in their original slots (release-set rule 5) and add the sheets their mockup links —
`@/app/d17-apps-cases.css`, `@/app/d17-resources.css`, `@/app/design-system/site-v3.css` — in the
order the built article pages use. `/locations/manchester` imports the same set as the two sibling
location pages (`d17-global`, `d17-locations`, `d17-apps-cases`, `site-v3`, `locations-live.css`,
which the lane brief allows read-only).

Each page's mockup-only page `<style>` lives in that page's `page.module.css`, anchored on a
`.root` local class with `:global()` descendants: the resource-article grid
(`post-grid` / `post-aside` / `toc`, which no shared sheet carries), the two legal pages'
`.legal-art` / `.a1006` / `.a1007` geometry, and Manchester's DO-ART-1035 geometry plus its four
`split-6` / `route--6` tweaks. The mockup's header comment records `prose--legal` as "a new shared
block in `site-v3.css`"; `app/design-system/*` is a forbidden file set here, so `prose--legal` is
duplicated locally on the two legal pages instead.

---

## /cookies — `2460639`

**Sections changed** (hero → policy → closer):

- **Hero** — centred `hero-head`-less block → the mockup's `hero-head` split (eyebrow "Legal", h1
  "Cookie policy" left; the mockup's one-line `t-lede` and the `post-meta` date line right). The
  DO-ART-1007 plate stays in the hero in a `legal-art` wrapper, widened to the full 1152px wrap
  with `--u` re-based to `/1152` as the mockup's page style specifies. Plate markup byte-identical
  to what the page already carried.
- **Policy** — the single centred `prose` column becomes the mockup's **sticky contents column plus
  legal prose**: `post-grid` with a `post-aside` TOC (`On this page`, eight numbered anchors, and a
  `.go` link to `/privacy`) beside `.prose.prose--legal`. `id="s-what"` … `id="s-contact"` added to
  the eight `h2`s so the TOC anchors resolve; the existing `<section data-od-id>` wrappers, the four
  `cookie-group` blocks, `<b>` marks and inline link styles are all kept.
- **Closer** — new `g-off closer` section from the mockup.

**`data-new-copy` used:** the closer only — eyebrow "Ask", h2 "Questions about this policy?", the
"Email me and I'll answer in person…" lede, the "Contact me" button and the "Privacy policy" `.go`
link.

## /privacy — `89b63b3`

**Sections changed** (hero → policy → closer):

- **Hero** — centred block → `hero-head` split (eyebrow "Legal", h1 "Privacy policy"; the mockup's
  `t-lede`; `post-meta` with `Last updated: April 2026`). DO-ART-1006 stays in the hero in the
  `legal-art` wrapper at full wrap width, plate markup byte-identical.
- **Policy** — sticky contents column (twelve anchors) plus `.prose.prose--legal`, exactly as
  `/cookies`. `id="s1"` … `id="s12"` added to the twelve `h2`s. The whole legal body — every
  heading, paragraph, list item and the `contact-box` block — is the live page's JSX, unchanged.
- **Closer** — new `g-off closer` section from the mockup.

**`data-new-copy` used:** the closer only — eyebrow "Ask", h2 "Questions about this policy?", the
"Email me and I'll answer in person…" lede, the "Contact me" button and the "Cookie policy" `.go`
link.

### Legal text verification (both pages)

A render-aware diff (JSX whitespace semantics applied to every text run, tags stripped, entities
decoded, then every `<p>` / `<li>` / `<h1>` / `<h2>` / `<h3>` block compared as a multiset between
the pre-lane file at base `269fca5` and the new one):

- **/cookies** — 43 blocks before, 54 after. **No legal block is missing or altered.** The single
  "missing" old block is the hero paragraph `Last updated: 2026`, which survives word-for-word as
  the first span of the new `post-meta`. The twelve additions are the mockup's hero `t-lede`, the
  `post-meta` wrapper, the eight TOC list labels and the two closer paragraphs.
- **/privacy** — 74 blocks before, 89 after. Same result: the only "missing" block is
  `Last updated: April 2026`, kept inside `post-meta`; the fifteen additions are the mockup's hero
  `t-lede`, the `post-meta` wrapper, the twelve TOC labels and the two closer paragraphs.

So the only mockup text that entered either page is the hero lede/date line, the TOC labels and the
closers. No legal sentence was rewritten, retyped or reordered.

## /locations/manchester — `3243e28`

**Sections changed** (hero → pains → help → local → seal → closer) — the same service-page shape the
two sibling location pages were built to in RS2:

- **Hero** — centred `hero-centre` block → `hero-head` split. Eyebrow, h1 and the lede paragraph
  kept verbatim. The two hero buttons become the mockup's single primary `/contact` button plus a
  `.go` text link to `/retained`.
- **Hero artwork** — `SystemsDisconnectedGraphic` replaced by the mockup's D17 piece
  **DO-ART-1035 r01** ("the model from Worthing and the region covered", over `DO-ART-979f`), held
  as an inline HTML string constant (`dangerouslySetInnerHTML`, the `manual-workarounds` pattern)
  exactly as the mockup writes it, image path `/images/site/evidence/hero-racking-aisle-7d129e.webp`
  as written (verified present under `public/`). *Recorded here because the lane brief names this
  swap explicitly.* Its `sw-cap` figcaption key-line, H3 and paragraph are `data-new-copy`.
- **Pain points** — `grid--2` number cards → `areas areas--4` icon tiles. All four titles and bodies
  verbatim.
- **How I help** — the navy sticky-card block → `route-sec` with `route route--6` + `route-cap`. The
  six `whatIdo` strings are kept verbatim as the step bodies; the step **titles** are `data-new-copy`.
- **Local context** — `loc-ctx` grid → `wrap split-6`. All three paragraphs kept verbatim (the
  second still wrapped in `<em>`). The From Worthing / Region fact card restyled to the mockup's
  `.outcomes` list, same facts. Sector pills → the mockup's sector chip links (same four labels).
- **Areas covered** — folded into the local split per the mockup: the "Areas I cover · On-site
  visits by arrangement. Remote work across the UK." meta line and the eight area chips.
  **Both place-naming elements the mockup dropped are kept** — see below.
- **Seal** — new section (all `data-new-copy`).
- **Closer** — eyebrow "Not sure where to start?", h2 "Start with a Clarity Audit" and the lede kept
  verbatim; CTA row becomes the mockup's primary `/contact` + `.go` link to `/locations/tech-audit`.

**`data-new-copy` used:** the DO-ART-1035 figcaption key-line ("Manchester · the North West"), H3
("Further from base, so the model is tighter.") and paragraph; the six route step titles ("Map your
technology", "Build the roadmap", "Be your technology voice", "Sit in the leadership meetings",
"Build internal capability", "Clarity Audit first"); the seal band's tag, H2 and paragraph. Every
other string keeps the live page's wording.

**Kept SEO:** `export const metadata` block byte-identical; the FAQPage `locationSchema` JSON-LD
byte-identical (verified present in the prerendered HTML); `<BreadcrumbSchema>` identical
(BreadcrumbList verified in the prerendered HTML). Place-name audit old → new: "Manchester" 26 → 34,
"North West" 9 → 12, "Worthing" 2 → 5, "Sussex" 2 → 3, each of the eight areas 1 → 3.
Link audit: `/contact`, `/retained` and `/locations/tech-audit` all still on the page; twelve new
internal links added (four sector chips, eight area chips).

### Kept though the mockup dropped it (local SEO)

1. **H2 "Manchester and the North West"** — the "Areas I cover" section heading. The mockup folds
   the section into the local split and carries only its sentence. The heading is kept inline above
   the areas line, exactly as RS2 lane L kept Sussex's "On site across Sussex and Surrey".
2. **"Serving Manchester and the North West"** — the sticky-CTA caption. Kept as a closing meta
   line under the area chips.

### Dropped by the mockup — noted for Craig

1. **Both "Or book a call directly" links** (`BOOKING_URL`, an external Microsoft Bookings URL, not
   an internal link) are not in the mockup; the secondary hero CTA is now the `.go` text link to
   `/retained`. The `/contact` "Book a free call" CTA remains in the hero and the closer. Same call
   RS2 lane L made on the two sibling location pages.
2. **The sticky CTA card** ("Find out if a fractional CTO is right for your business", its four
   bullets, "Just a call about what's happening in your business and whether I can help." and the
   booking link) is replaced by the mockup's seal band. All four bullets and "The first conversation
   is free and there's no obligation." are carried verbatim into the seal paragraph. The one
   sentence not carried anywhere — "Just a call about what's happening in your business and whether
   I can help." — names no place and no claim that survives nowhere else.
3. **Hero H1 emphasis.** The live page coloured "Manchester" cerulean in an inline-styled span; the
   approved mockup's `h1` is plain text, so the emphasis is gone. The wording is unchanged.

### Observations reproduced as the mockup renders them

1. **Sector chip hrefs.** The mockup points all four Manchester sector labels at
   `/sectors/garment-decoration` and all eight area chips at `/locations/manchester`. Reproduced
   exactly, matching how RS2 lane L built the sibling pages from their mockups.
2. **Chips styling gap.** The `.chips` pill styling in `d17-locations.css` / `locations-live.css`
   targets `li` children only; the mockup uses `<nav class="chips">` with anchor children, so the
   chips render as plain links. Reproduced the mockup's DOM. Fixing the pills needs
   `.chips li, .chips a` in a shared sheet — a forbidden file here.

---

## Deviations (all deliberate, none silent)

1. **Mockup text without a `data-new-copy` flag** was taken only where the live page has **no
   counterpart element at all** — the two legal heroes' eyebrow "Legal", `t-lede` line and
   "Craig Blackman trading as Decoded Ops" meta span, the `toc-h` label "On this page", and the
   aside/closer `.go` link labels. This follows the precedent RS2 lane T recorded and had accepted
   ("Unmarked-but-new mockup text used where staging has no equivalent element… every element where
   staging already had text kept staging wording unless `data-new-copy` said otherwise"). Everywhere
   the live page did have text, the live wording won. If the lane brief's stricter reading is wanted
   ("only `data-new-copy` elements take the mockup's text"), the two lines to delete are each hero's
   `t-lede` and the second `post-meta` span — everything else came from `data-new-copy` or from the
   live pages.
2. **`/cookies` s-contact run-on kept.** The live JSX renders "pleasecontact me" (a whitespace
   run-on at the `<a>`). The mockup's file comment calls it out by name and writes it with its
   space. Kept as the live page has it, per "every word of the legal text stays exactly as the
   current page has it… even where the mockup shows different wording" — confirmed unchanged in the
   prerendered HTML (`please<a href="/contact"…>contact me</a>`). One-character fix if wanted: a
   space before the `<a>` in `app/cookies/page.tsx`, section `s-contact`.
3. **`prose--legal` is duplicated locally** on both legal pages rather than added to `site-v3.css`,
   where the mockup records it as belonging. `app/design-system/*` is off-limits to this lane.
4. **TOC labels on `/privacy` drop the section numbers** ("01 Introduction" against the heading
   "1. Introduction"), as the mockup's contents column does. The headings keep their numbering and
   their wording.
5. **Pre-existing lint error kept.** `@next/next/no-html-link-for-pages` fires on the legal body's
   `<a href="/">Back to home</a>` in `app/cookies/page.tsx`. Verified identical at base `269fca5`
   (same rule, same line). Not touched because the legal body is under the keep-verbatim rule. It
   does not block `next build`. Fix if wanted: `<Link href="/">`.

## Verification — exact final lines

`npx tsc --noEmit` — no output, exit code 0 (clean):

```
tsc exit: 0
```

`npx next build` — exit code 0 on the committed state `3243e28`. All three routes prerendered as
static content (`.next/server/app/cookies.html` 71,281 B, `privacy.html` 75,697 B,
`locations/manchester.html` 88,834 B). Final lines:

```
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

build exit: 0
```

Also run:

- `node .context/price-audit.mjs --check` — **28 FAILs, all pre-existing in files this lane did not
  touch** (tools, case-studies, problems, sectors); **zero** in `app/cookies`, `app/privacy` or
  `app/locations/*`. The audit regenerates `.context/price-audit.md`; that side-effect was restored,
  not committed.
- Unicode-escape grep (`\uXXXX`) over `app` and `components` — **0 hits in this lane's three files**;
  4 pre-existing hits elsewhere (`app/clients/documents/view/[id]/SignPanel.tsx`,
  `app/fractional-coo/page.tsx`, `app/problems/ops-in-owners-head/page.tsx`,
  `app/problems/inventory-blind/page.tsx`).
- `npx eslint` on the three pages — one error, the pre-existing `/cookies` one recorded above.
