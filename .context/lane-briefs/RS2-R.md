# RS2 lane R — eight resource pages · CR-WEB-083

Read `.context/lane-briefs/RELEASE-SET-2-2026-11-03.md` first. Its rules apply to everything below.
Work only inside this repository. All paths are relative to its root.

## Your pages

| Route | File you change | Mockup |
|---|---|---|
| /resources/5-warning-signs | `app/resources/5-warning-signs/page.tsx` | `.context/mockups/rs2/resource-5-warning-signs-v1.html` |
| /resources/artwork-approval-playbook | `app/resources/artwork-approval-playbook/page.tsx` | `.context/mockups/rs2/resource-artwork-approval-playbook-v1.html` |
| /resources/audit-checklist | `app/resources/audit-checklist/page.tsx` | `.context/mockups/rs2/resource-audit-checklist-v1.html` |
| /resources/capacity-planner | `app/resources/capacity-planner/page.tsx` | `.context/mockups/rs2/resource-capacity-planner-v1.html` |
| /resources/decoded-method | `app/resources/decoded-method/page.tsx` | `.context/mockups/rs2/resource-decoded-method-v1.html` |
| /resources/seasonal-capacity | `app/resources/seasonal-capacity/page.tsx` | `.context/mockups/rs2/resource-seasonal-capacity-v1.html` |
| /resources/six-sigma | `app/resources/six-sigma/page.tsx` | `.context/mockups/rs2/resource-six-sigma-v1.html` |
| /resources/sop-template | `app/resources/sop-template/page.tsx` | `.context/mockups/rs2/resource-sop-template-v1.html` |

## Styles

The mockups use the existing sheets plus one new one that is already in the repo for you:
`app/resources/resources-live.css`. Each of your pages imports, in this order:
`@/app/d17-global.css`, `@/app/d17-apps-cases.css`, `@/app/d17-resources.css`,
`@/app/design-system/site-v3.css`, `@/app/resources/resources-live.css`. Do not edit any of them.
The tools lane imports `resources-live.css` too, which is why nobody may change it.

## Forms — the part that must not break

These pages carry the lead capture that now writes to the CRM. `audit-checklist` and several others use
`<DownloadOptIn …>` from `components/DownloadOptIn.tsx`; `capacity-planner` and `seasonal-capacity`
use calculators from `components/calculators/`. **Keep every one of those components with exactly the
props it has today.** Restyle the section around it to the mockup. Never rebuild the form or the
calculator from the mockup's HTML — the mockup's `<form>` and `<input>` markup is a picture of the
component, not a replacement for it.

Keep metadata, `<JsonLd>`, `<BreadcrumbSchema>` and any FAQ schema exactly as they are.

Lane name for commits and the report: `R`.
