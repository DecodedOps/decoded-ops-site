# RS2 lane L — two location pages · CR-WEB-083

Read `.context/lane-briefs/RELEASE-SET-2-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /locations/sussex-surrey | `app/locations/sussex-surrey/page.tsx` | `.context/mockups/rs2/locations-sussex-surrey-v1.html` |
| /locations/tech-audit | `app/locations/tech-audit/page.tsx` | `.context/mockups/rs2/locations-tech-audit-v1.html` |

`/locations/manchester` is **not** in this set. Do not change it, and do not change any shared
location component or data file it uses.

## Styles

The mockups use one new sheet that is already in the repo for you: `app/locations/locations-live.css`.
Each of your pages imports, in this order: `@/app/d17-global.css`, `@/app/d17-apps-cases.css`,
`@/app/design-system/site-v3.css`, `@/app/locations/locations-live.css`, and keeps any
`d17-locations.css` import the page has today. Do not edit any of them.

## Local SEO — the part that must not break

These two pages are local-search pages and were consolidated from 58 town pages (CR-WEB-067). Their
metadata, `<JsonLd>` (including any LocalBusiness / areaServed / place schema), `<BreadcrumbSchema>`
and the town and area names in the body copy are what makes them rank. **Keep all of it exactly as it
is today.** If the mockup's layout leaves out a list of towns or areas the current page shows, keep
that list in the page, restyled to fit, and note it in your report.

Lane name for commits and the report: `L`.
