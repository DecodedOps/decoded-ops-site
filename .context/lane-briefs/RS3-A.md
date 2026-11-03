# RS3 lane A — about, contact and three service pages · CR-WEB-084

Read `.context/lane-briefs/RELEASE-SET-3-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /about | `app/about/page.tsx` | `.context/mockups/rs3/about-v2.html` |
| /contact | `app/contact/page.tsx` | `.context/mockups/rs3/contact-v2.html` |
| /fractional-coo | `app/fractional-coo/page.tsx` | `.context/mockups/rs3/fractional-coo-v1.html` |
| /process-quality-system | `app/process-quality-system/page.tsx` | `.context/mockups/rs3/process-quality-system-v1.html` |
| /sectors/operations-consultant-print-embroidery | `app/sectors/operations-consultant-print-embroidery/page.tsx` | `.context/mockups/rs3/sectors-operations-consultant-print-embroidery-v1.html` |

## Notes for these pages

- `/about` and `/contact` use the **v2** designs.
- `/contact`: the form lives in `app/contact/ContactClient.tsx`. You MAY edit that one file's markup and
  classes to match the mockup. Keep every form field, its `name`, `required` flags, validation, the
  submit handler and the call into `app/contact/actions.ts` exactly as they are. Never touch `actions.ts`
  or `app/contact/layout.tsx`. The page's metadata is in `layout.tsx`, leave it.
- `/process-quality-system`: keep the `Artwork` and `PhotoPiece` usage unless the mockup replaces that
  exact slot with a D17 piece; if so, record it in the report.
- `/sectors/operations-consultant-print-embroidery`: keep `sectorRouting`, `<Plate>`, the `<JsonLd>` and
  the `PrintEmbroideryOpsConsultantSchematic` unless the mockup replaces that exact slot with a D17 piece
  (record it). This page has no nav link today; do not try to add one.
- `/fractional-coo`: has no nav link today either; leave that alone.

Lane name for commits and the report: `A`.
