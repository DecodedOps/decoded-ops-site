# RS3 lane L — cookies, privacy and the Manchester location page · CR-WEB-084

Read `.context/lane-briefs/RELEASE-SET-3-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /cookies | `app/cookies/page.tsx` | `.context/mockups/rs3/cookies-v1.html` |
| /privacy | `app/privacy/page.tsx` | `.context/mockups/rs3/privacy-v1.html` |
| /locations/manchester | `app/locations/manchester/page.tsx` | `.context/mockups/rs3/locations-manchester-v1.html` |

## Notes for these pages

- `/cookies` and `/privacy` are legal pages. **Every word of the legal text stays exactly as the current
  page has it**, including headings, lists and dates, even where the mockup shows different wording.
  Only `data-new-copy` elements outside the legal text (such as a hero line) take the mockup's text. If a
  `data-new-copy` element would change the legal text itself, keep the current text and record it.
- `/locations/manchester`: keep every heading and paragraph that names Manchester, the North West or any
  place, and every internal link the current page has (they are local-SEO). `app/locations/locations-live.css`
  exists from the other two location pages; you may import it read-only if the mockup's classes are in it.
  Keep `SystemsDisconnectedGraphic` unless the mockup replaces that slot with a D17 piece (record it).

Lane name for commits and the report: `L`.
