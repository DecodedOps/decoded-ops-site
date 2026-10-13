# Lane notes - web076-set1-h1fit (CR-WEB-076 fix 1)

Rebuilt the six set-1 H1s to the lead-in pattern from the seo-copy-spec's "H1 pattern"
section: one `<h1>`, keyword lead-in span (`.h1-kw`, new reusable class in site-v3.css)
followed by the designed headline at the plate's own size and wrapping.

- `.h1-kw`: display:block, 0.42em desktop / 0.5em at <=760px, weight 600
  (`--do-weight-semibold`), normal tracking, 0.35em bottom margin, colour
  `--do-text-secondary` on light and `--do-text-muted-on-dark` under `.g-navy`
  (homepage stage). Never Cerulean as text (D11).
- Reversed the earlier SEO pass's hero CSS workarounds now that the big line is short
  again: `.hero h1{max-width:14ch}` and the 7/5 `hero-head` split restored in
  site-v3.css; the temporary `clamp(2.1rem,4.1vw,3.1rem)` caps deleted from
  deliver-v1.css and retained-v1.css; homepage `section.stage h1` back to the plate's
  `clamp(2.5rem,5.6vw,4.6rem)` / `-0.038em` / `13ch` / on-dark colour (this also fixes
  the earlier lane's note 1 about the dropped tracking).
- /deliver's designed line reverts to the plate text ("I get it built. And you keep the
  system that runs it.") per the fix-1 table, undoing the earlier pass's rewrite.
- /sectors/print-promotional: no lead-in, one sentence kept; its print-v2.css override
  now also sets `max-width:none` so the restored 14ch cap in site-v3.css doesn't reach it.
- Verified one `<h1>` per route and the exact lead-in+headline markup in the prerendered
  `.next/server/app/*.html`. tsc clean, eslint 0 errors on the six page files, build
  exit 0. No browser render (no-servers constraint) - line counts are plate-geometry
  claims, honest as such in LANE-RESULT.md.
