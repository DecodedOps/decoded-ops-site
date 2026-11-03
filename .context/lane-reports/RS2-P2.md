# Lane report — RS2 P2 — six problem pages (CR-WEB-083)

All six routes rebuilt on `ProblemPageV2` + `app/problems/problems-v2.css` from the 3 Nov design
plates, per `.context/lane-briefs/RS2-P2.md` and `RELEASE-SET-2-2026-11-03.md`. Metadata exports,
JSON-LD, breadcrumb data, video data and all body wording from the current pages preserved;
`data-new-copy` text taken from the plates. Branch `rs2-p2`, not pushed.

## Commits

| SHA | Page |
|---|---|
| `55b059c` | /problems/inventory-blind |
| `509fb7b` | /problems/no-ops-owner |
| `8260d9d` | /problems/ops-in-owners-head |
| `77d6cc8` | /problems/quoting-takes-too-long |
| `41ea74a` | /problems/seasonal-peaks |
| `f397dc9` | /problems/slow-processes |
| `0354dd4` | fix: keep the `d17-*` artwork stylesheets two pages need, and the inventory-blind how heading |

Files: the six `page.tsx` files plus one `page.module.css` per page (12 files), and this report.
Nothing else touched — `components/ProblemPageV2.tsx`, `app/problems/problems-v2.css`, the other
problem pages and all shared data/lib files are unchanged.

## What every page keeps from the current page

- `export const metadata` — byte-identical to the current page (verified by string comparison of
  the extracted block against the pre-lane revision on all six).
- The FAQ schema consts (`inventoryBlindSchema`, `noOpsOwnerSchema`, `opsInOwnersHeadSchema`,
  `quotingSchema`, `seasonalPeaksSchema`, `slowProcessesSchema`) — byte-identical. The quoting page's
  `faqs` array (schema source and visible questions) is byte-identical too.
- `<VideoSchema>` / `<VideoEmbed>` guarded on `problemVideos[<slug>]`, exactly as the current pages
  render them. `problemVideos` is still an empty record, so neither renders today; both come back
  untouched whenever the video data is filled. The embed block sits where the current page puts it
  (after symptoms on inventory-blind / ops-in-owners-head, after causes on the other four).
- Breadcrumb JSON-LD comes from `ProblemPageV2` itself with `crumb` set to the current page's
  breadcrumb name ("Inventory blind", "No operations owner", "Ops in the owner's head", "Slow,
  inconsistent quoting", "Seasonal peaks", "Slow, inefficient processes"), so the emitted items are
  identical to the current `<BreadcrumbSchema>` block. Not duplicated in the page file — the same
  pattern as manual-workarounds.
- Every hero/artwork figure string is spliced verbatim from the current page (byte-compared), and
  the shared figures `a943` / `a986` stay as their `lib/d17-figures` imports.

## Per page

### /problems/inventory-blind (`55b059c`, `0354dd4`)

- Sections: hero, symptoms ledger, photo band (new), fix, plate DO-ART-943 (plate-head is new
  copy), how I help, CTA strip (kept), keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("Count the ones that apply. Each one is a stock number
  nobody trusts."), photo-band eyebrow/heading/lede, plate eyebrow/heading/lede.
- The design's fix section has its own heading ("The fix / One real-time stock picture, not a guess
  reconciled weekly.") and the how section its own h2 ("Stock you can order against, not stock you
  have to double-check."). `ProblemPageV2` hardcodes the family causes and how headings and has no
  props for them, so both sections are rendered in the page file with the current wording (fix
  cards use the plate's `areas` layout and its "Source 1 / Source 2 / Result" labels), and the
  shared causes/how slots are hidden per-page. Kept verbatim from the current page: the CTA strip
  ("Stop guessing what's actually on the shelf." + links), which the design drops.

### /problems/no-ops-owner (`509fb7b`)

- All sections through `ProblemPageV2`: hero DO-ART-971, symptoms, photo band (new), causes
  (family heading matches the current page's), plate DO-ART-1011 with new plate-head copy, how I
  help, keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("Count the ones that apply. Each one is a decision with
  no owner."), photo-band eyebrow/heading/lede, plate eyebrow/heading/lede.
- No page-file sections beyond the video block.

### /problems/ops-in-owners-head (`8260d9d`)

- Sections: hero DO-ART-972, symptoms, photo band (new), fix, plate DO-ART-718 (plate-head is new
  copy), how I help, CTA strip (kept), keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("Count the ones that apply. Each one is a process with no
  page."), photo-band eyebrow/heading/lede, plate eyebrow/heading/lede ("The register, finished /
  Three documents, and the business is on paper. / …" — this replaces the current eyebrow line
  "The register, finished · DO-ART-718", the number stays visible in the artwork's own mark).
- Fix and how sections rendered in the page file for the same reason as inventory-blind (their
  headings are page copy the shared component cannot carry). Kept: the CTA strip ("Get the business
  out of your head and onto the page." + links).

### /problems/quoting-takes-too-long (`77d6cc8`, `0354dd4`)

- Sections: hero DO-ART-1014, symptoms, photo band (new), causes (family heading matches), common
  questions, how I help (family heading "What happens when you call" is what the current page
  renders), keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("Count the ones that apply. Each one is margin left on the
  table."), photo-band eyebrow/heading/lede.
- The design has no artwork plate on this route and puts the questions block where the plate sits.
  The questions section is rendered in the page file (same four Q&As the current page shows and the
  FAQ schema holds) and the shared plate slot — which would render empty — is hidden per-page. The
  FAQ block styling lives in `page.module.css` (the family stylesheet has no `.faq` rules).

### /problems/seasonal-peaks (`41ea74a`)

- Sections: hero DO-ART-973, symptoms (the three seasonal rhythms, moved from the current cards
  into the numbered ledger the design draws), photo band (new), causes, plate DO-ART-1010
  (plate-head is new copy), how I help, CTA strip (kept), keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("One business can carry all three. The quiet months pay
  for the peaks."), photo-band eyebrow/heading/lede, plate eyebrow/heading/lede.
- Causes and how sections rendered in the page file: the causes heading is page copy ("Why this
  happens / Four reasons the seasonal spike breaks the operation.") that the shared family heading
  would overwrite, and the how h2 is page copy ("Systems that scale, so your staffing doesn't have
  to."). Kept: the CTA strip ("Find out what your next seasonal peak is going to cost you." +
  links).

### /problems/slow-processes (`f397dc9`)

- All sections through `ProblemPageV2`: hero DO-ART-974, symptoms, photo band (new), causes
  (family heading matches the current page's), plate DO-ART-986 (shared figure `a986`) with new
  plate-head copy, how I help, keep-reading, video block (kept).
- `data-new-copy` used: symptoms caption ("Count the ones that apply. Most of them are process, not
  software."), photo-band eyebrow/heading/lede, plate eyebrow/heading/lede.
- `workflowSteps` (an unused const in the current page file — never referenced by the render) and
  the `SlowProcessesSchematic` import (dead: the current page's `heroArt` short-circuits
  `heroGraphic`) are dropped.

## Could not reproduce without touching forbidden files

1. **Hero eyebrow.** The plates put a small label above the h1 ("Inventory blind", "Seasonal peaks"…
   exactly the current pages' eyebrow text where they had one). `ProblemPageV2` has no hero eyebrow
   slot since CR-WEB-080 A2 replaced it with the `.h1-kw` pill. The pill carries
   `Problem · <primary keyword>` ("Problem · stock control system", "Problem · interim operations
   director", "Problem · standard operating procedure template", "Problem · quoting software",
   "Problem · production capacity planning", "Problem · process improvement consultant"), matching
   the two live ProblemPageV2 pages' pattern.
2. **Hero CTA label.** The component's hero button reads "Talk about your situation". The plates
   and current pages say "Book a free 60 minute call" (inventory-blind) / "Book a Clarity Audit"
   (ops-in-owners-head, seasonal-peaks). The other three plates use the component's wording, so the
   shared label was kept everywhere.
3. **Bold emphasis inside string props** is lost: the seasonal-peaks symptom lead-ins
   ("Schoolwear, July to September." etc. were `<b>` in the plates), and the `<b>` runs inside the
   how ledes on inventory-blind / ops-in-owners-head / seasonal-peaks. The wording is intact; the
   props are plain strings. The page-file how sections keep their `<b>` runs.
4. **Photo captions.** The plates' evidence figures carry no kicker/line captions, but the shared
   photo component always renders the two elements. They are passed empty and hidden per-page with
   an `:empty` rule.
5. **Symptoms lede** on no-ops-owner / quoting / slow-processes: neither the plate nor the current
   page has one (the current pages render the family "The signs." heading without a lede), so the
   prop is empty and the empty element is hidden per-page.
6. **Section order vs document order.** The shared fragment renders as one block, so the page-file
   sections (fix / causes / how / questions / video / CTA) are ordered into place with flex
   `order` on a page-local wrapper (`page.module.css`, global selectors anchored on `.shared` /
   `.root`). Visually the order is the plates'. In the DOM the page-file sections still follow the
   shared fragment, so a screen reader meets them last — a heading-order caveat worth a later pass
   if it matters. The hidden shared slots (`causes`/`how-i-help`/`plate` where replaced) are
   `display: none`, so they are out of the accessibility tree and out of the index.
7. **Sprite symbols.** Two plate card icons (`i-download`, `i-refresh-cw`) exist in neither
   `IconSprite` nor `ProblemIconSprite`. The pages render just those two `<symbol>`s inline (as the
   plates themselves do) rather than editing the shared sprites.

## Kept sections the plates dropped

- The closing CTA strips on inventory-blind, ops-in-owners-head and seasonal-peaks (heading + lede
  + two links each) — kept per the release-set rule on dropped sections carrying copy, rendered
  after the keep-reading band as on the current pages.
- The video blocks on all six (see above).

## Verification

- `npx tsc --noEmit` — exact final lines: *(no output)*; exit code 0.
- `npx next build` — exit code 0. Exact final lines:

```
└ ○ /transform


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

  All six problem routes prerendered (`.next/server/app/problems/<slug>.html` present for each).
  Rendered HTML spot-checked: the fix/causes/how/questions copy from the current pages, the
  `data-new-copy` captions and plate heads, the `Problem · …` pills and the curly-quote symptom
  lines are all in the output; the replaced shared slots are present but hidden.
- Escape grep (`git grep -n "mockup" -- app components`): zero hits in any file this lane changed
  (pre-existing hits remain in untouched files: `WorksIconSprite.tsx`, client proposal data,
  `d17-locations.css`, `design-system/*.css`).
- Copy fidelity check: every sentence-length string from the pre-lane pages re-found in the
  rewritten pages except the intended changes (the two artwork eyebrow lines replaced by
  `data-new-copy` plate heads, dropped dead code, and component-prop plumbing). Entity escapes
  (`&ldquo;` etc.) normalise to the same characters.
