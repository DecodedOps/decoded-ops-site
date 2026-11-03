# Release set 3 — CR-WEB-084 (WO-INF-024) · 3 Nov 2026

22 pages were redesigned in Open Design on 13–14 Oct and approved. This set builds them into staging. Every page
already exists and is already live. You are **re-laying out existing pages**, not creating new ones.

Five lanes run at the same time, each on its own branch and its own page files. Read your lane brief
(`.context/lane-briefs/RS3-<lane>.md`) for your page list. This file holds the rules every lane obeys.

All paths in this file are relative to the repository root you are working in. Work only inside it.

## The spec

- Your mockups are in `.context/mockups/rs3/`. One HTML file per page. The mockup is the spec for
  **layout, section order, structure and visual treatment**.
- Image paths in the mockups have already been rewritten to the real public URL (`/images/site/...`
  or `/images/...`). Use them exactly as written. Every one of them exists under `public/`.
  Do not add, rename or generate images.
- Stylesheets: a mockup links `ds-marketing.css`, `d17-global.css`, `d17-apps-cases.css`,
  `d17-problems.css`, `d17-resources.css` and `site-v3.css`. The site already has all of them:
  `ds-marketing.css` is loaded globally by the root layout; import the others the way the built pages do
  (`@/app/d17-global.css`, `@/app/d17-apps-cases.css`, `@/app/d17-problems.css`, `@/app/d17-resources.css`,
  `@/app/design-system/site-v3.css`; see `app/clarity/page.tsx` and `app/resources/decoded-method/page.tsx`).
  The site copies are newer supersets of the mockup copies. If a mockup's inline `<style>` or a rule the
  site sheets lack is needed, put it in a `page.module.css` next to your page.
- Artwork pieces are `<figure class="d17 …" data-no="DO-ART-…">` blocks. Copy them from the mockup the
  same way the existing pages hold them (an inline HTML string constant, see
  `app/problems/manual-workarounds/page.tsx` for the pattern).

## What you must keep from the existing page — this is the most important rule

The existing `page.tsx` carries SEO work that must survive. For every page you change:

1. **Keep the whole `export const metadata` block exactly as it is** — `title`, `description`,
   `alternates.canonical`, `openGraph`, `twitter`. Do not copy the mockup's `<title>` or
   `<meta name="description">` into it. A page that starts with `'use client'` cannot hold metadata;
   its metadata is in the `layout.tsx` beside it. **Never edit any `layout.tsx`.**
2. **Keep every structured-data component as it is**: `<JsonLd …>`, `<BreadcrumbSchema …>`,
   `<VideoSchema …>`, `<VideoEmbed …>`, FAQ schema, and any `problemVideos` / `problemRouting` data
   they read. Same props, same data.
3. **Keep the body copy from the existing page**, with one exception: text the mockup marks with the
   `data-new-copy` attribute is new copy Craig wrote on purpose. Use the mockup's text for those
   elements. For every other heading and paragraph, the existing page's wording wins wherever the two
   differ. The existing copy is keyword-optimised (WO-WEB-011 u25); do not rewrite it.
4. **Keep every lead-capture and interactive component** wired exactly as it is: `DownloadOptIn`,
   anything under `components/calculators/`, and any form. Same component, same props. Restyle the
   section around it to match the mockup; never replace or re-implement the component itself.
5. **Keep `<D17Motion />`** and the existing `d17-*.css` imports.

If the mockup drops a section that carries SEO copy, schema or a form, **keep the section** and note it
in your lane report. Losing SEO content is a failure even if the page matches the mockup.

## Files you may touch

- Only the `page.tsx` files listed in your lane brief.
- A new stylesheet **only if your lane brief names one** — it is yours alone, imported only by your
  pages, so its selectors cannot reach any other route.
- A `page.module.css` next to one of your pages, if a page needs a style nothing else provides.
  Anchor every module selector on a local class (`.root :global(.x)`), never a bare global selector.

## Files you must NOT touch

`app/globals.css`, every `app/d17-*.css`, `app/design-system/*`, `app/problems/problems-v2.css`,
anything in `components/` (including `ProblemPageV2.tsx`, `DownloadOptIn.tsx`, the calculators),
`components/Header.tsx`, `components/Footer.tsx`, every `layout.tsx`, `app/resources/resources-live.css`,
`app/locations/locations-live.css`, `data/*`, `lib/*`, `public/*`, `package.json`,
lockfiles, any other lane's pages, and any page not in your lane brief. If you believe one of these
needs changing, do not change it — write it in your lane report.

## How to work

- **Commit after every page**, with a message `feat(web): RS3 <lane> <route> from approved mockup (CR-WEB-084)`.
  One page, one commit. Do not batch. Do not stash.
- Do not read any `.env` file. You need no secrets for this work.
- **Do NOT run `next dev`, `next start`, any dev server, curl, or any browser.** Claude does all of that
  after you finish. A server never exits and will hang your lane.
- When every page is committed, run `npx tsc --noEmit` and then `npx next build` once. Fix anything
  your pages broke, commit the fix, and run them again until both pass.
- Then write your lane report (below), commit it, and stop.

## Lane report

Write `.context/lane-reports/RS3-<lane>.md` with, for each page: the route, the commit hash, which
sections changed, which `data-new-copy` elements you used, anything in the mockup you could not
reproduce without touching a forbidden file, and any section you kept that the mockup had dropped.
End with the exact final lines of `npx tsc --noEmit` and `npx next build`. Commit it.
