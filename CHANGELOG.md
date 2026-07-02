# Changelog

All notable changes to the VibTools Open Source Hub are documented here.

## [1.0.0] - 2026-07-01

### Added

- Complete Astro, Tailwind CSS, and strict TypeScript production architecture.
- Homepage, project catalog, project detail routes, downloads, templates, tools, releases, community, changelog, about, privacy, license, and custom 404 pages.
- Build-time GitHub API enrichment with local fallback metadata.
- Responsive navigation and layouts from 320px through 1920px.
- WCAG-oriented keyboard navigation, focus visibility, semantic structure, reduced-motion support, and accessible labels.
- Canonical metadata, Open Graph, Twitter Cards, JSON-LD, breadcrumbs, sitemap, robots, RSS, and Atom feeds.
- GitHub Pages deployment and quality validation workflows.
- Official VibTools brand assets derived from the supplied brand guidelines.

### Stabilized

- Fixed full ISO timestamp parsing from the GitHub API so successful live-data builds cannot fail during date formatting.
- Added runtime validation for untrusted GitHub API response objects while retaining deterministic fallback content.
- Hardened JSON-LD serialization against HTML-sensitive characters and Unicode line separators.
- Corrected the generated 404 canonical URL to match the actual `/404.html` output.
- Made the mobile navigation control label accurate in both closed and open states.
- Established clean Node 20.20.2 and Node 22.23.1 validation lanes with npm 11.18.0.
- Aligned Astro, Tailwind, Vite, esbuild, and lock-file versions to a tested, vulnerability-free dependency graph.
- Replaced environment-specific package-lock registry URLs with portable public npm registry URLs and revalidated clean installs.
- Updated GitHub Actions and preserved `.nojekyll` in the Pages artifact.
- Scoped Tailwind class detection to source files so release documentation and audit patches cannot change generated CSS.
- Added final build, compatibility, deployment, change, static-audit, and unified-diff evidence.
