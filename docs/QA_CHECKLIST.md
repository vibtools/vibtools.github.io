# Production QA Checklist

**Release:** 1.0.0  
**Validation date:** 2026-07-01  
**Status:** Completed

## Build and code

- [x] Clean install completes with npm 11.18.0 on Node 20.20.2.
- [x] Clean install completes with npm 11.18.0 on Node 22.23.1.
- [x] Astro check completes across 44 files with 0 errors, 0 warnings, and 0 hints.
- [x] Formatting verification passes.
- [x] Production build completes with 16 HTML pages and all static endpoints.
- [x] Full dependency audit reports 0 vulnerabilities.
- [x] The committed lock file uses public npm registry URLs and clean-installs from a fresh cache.
- [x] No dead source imports, unfinished markers, duplicate output routes, executable client JavaScript, inline event handlers, or inline CSS.

## Accessibility

- [x] Skip link targets the primary content region.
- [x] Interactive controls expose accessible names and visible focus states.
- [x] Navigation exposes the current page.
- [x] Every page contains one `h1` with sequential heading progression.
- [x] Images include alternative text and explicit dimensions.
- [x] Locked brand colors retain the audited WCAG-oriented contrast implementation.
- [x] Reduced-motion preference remains implemented.

## Responsive widths

- [x] 320px
- [x] 375px
- [x] 768px
- [x] 1024px
- [x] 1440px
- [x] 1920px

The original viewport evidence remains in `audit/screenshots/`. The stabilization build produced an identical CSS rule set except for the Tailwind patch-version banner, and the normalized rendered DOM matches the baseline on all 16 pages.

## SEO and feeds

- [x] Title and description are present on every route.
- [x] Canonical URL is present and the custom 404 canonical matches `/404.html`.
- [x] Open Graph and Twitter metadata are present.
- [x] All 16 JSON-LD blocks parse successfully.
- [x] Breadcrumb schema remains present on nested routes.
- [x] `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.xml`, and `site.webmanifest` parse successfully.

## Brand and regression

- [x] Approved brand and semantic colors only.
- [x] Inter and JetBrains Mono remain the named fonts.
- [x] Lucide remains the only icon library.
- [x] Public logos and all public assets are byte-identical to the baseline.
- [x] Every original route remains present.
- [x] No unexpected component, layout, page, style, feature, animation, or content change was detected.
