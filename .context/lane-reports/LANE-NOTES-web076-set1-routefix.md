# Lane notes — web076-set1-routefix (CR-WEB-076 fix 2)

## Fix 2 — route column-count modifiers beat the mobile rule

**Measured bug:** `/sectors/print-promotional` is 991px wide at a 390px viewport — the six-stop
route stays six columns on phones.

**Cause:** the mobile single-column rule for `.route:not(.d17 *)` (and the vertical-connector
`::before` reset) sits at `site-v3.css:127`, but the equal-specificity column-count modifiers
`.route--3`/`::before` (lines 292–293), `.route--6` (294–295) and `.route--5`/`::before`
(379–380) appear later in the file, so they win the cascade at every width. `.route--7`
(381–382) had the identical fight.

**Change:** appended one `@media(max-width:1000px)` block at the end of `site-v3.css` (after the
last `.route--N` rule) that re-asserts `grid-template-columns:1fr` and restores the vertical
connector `::before` (`left:calc(24px + 23px); right:auto; width:2px; top:52px; bottom:52px;
height:auto`) for `.route--3, .route--5, .route--6, .route--7`, all scoped `:not(.d17 *)`,
matching the mockup mobile rules in
`decoded-ops-website/review/sectors-print-promotional-v2.html:94–99`.

**Deviation from brief:** the brief named only `--3`, `--5`, `--6`; `--7` has the same
equal-specificity override after line 127 and was included so the bug class is closed, not
just the three instances measured. Nothing changes above 1000px (the block is media-scoped),
and nothing outside `site-v3.css` was touched.

**Searched for other fighters:** grepped all `@media` and modifier rules in the file. No other
post-127 rule fights a max-width block — `.areas--4` already has its own `@media(max-width:1000px)`
and `@media(max-width:640px)` blocks after its desktop rule (lines 386–387), and the `.stop`
grid mobile rules (lines 17–18, 127, 195) all sit inside media blocks. No fix needed there.

**Verify:** `npx tsc --noEmit` clean; `npm run build` exit 0 (all sector routes prerender,
including `/sectors/print-promotional`). Visual width at 390px not re-measured (no
servers/browsers in this lane) — the CSS cascade fix is deterministic, but a reviewer should
eyeball the page on a phone-width viewport before staging promotion.
