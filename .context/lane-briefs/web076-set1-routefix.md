# Lane brief: web076-set1-routefix (CR-WEB-076 fix 2)
Same worktree/branch. No servers/browsers. Commit, do not push.

Bug (measured): at 390px `/sectors/print-promotional` is 991px wide. In `app/design-system/site-v3.css` the mobile rule at ~line 127 (`@media(max-width:1000px){ .route:not(.d17 *){ grid-template-columns:1fr ...} ...}`) is overridden by the later equal-specificity column-count modifiers `.route--3`, `.route--5`, `.route--6` (and their `::before { right: ... }` rules, ~lines 292-295 and 379+). So the six-stop route stays six columns on phones.

MUST: append (after the last `.route--N` rule in the file) one `@media(max-width:1000px)` block that makes `.route--3, .route--5, .route--6` (all with the same `:not(.d17 *)` suffix) `grid-template-columns:1fr` and restores the vertical connector for their `::before` (left:calc(24px + 23px); right:auto; width:2px; top:52px; bottom:52px; height:auto), exactly matching the mockup mobile rules in `D:\apps\design-systems\decoded-ops-website\review\sectors-print-promotional-v2.html` lines ~95-99. Search the whole file for any other modifier rules placed after line 127 that fight a max-width media rule (e.g. `.stop` grid) and fix the same way. Do not change anything outside `site-v3.css`. No desktop change at >1000px.
Done: build/tsc fine, "Fix 2" section in LANE-RESULT.md, commit, stop.
