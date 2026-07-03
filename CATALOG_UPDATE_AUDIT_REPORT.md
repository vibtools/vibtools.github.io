# VibTools Open Source Hub — Tester Zepto Pro Catalog Forensic Audit

**Audit date:** 2026-07-02

**Website project:** VibTools Open Source Hub

**Corrective release:** 1.0.1

**Affected repository:** `vibtools/Tester-Zepto-Pro-open-source-code`

**Affected release:** `v1.0.6`

## Executive finding

The website did not display the newly published Tester Zepto Pro repository because the portal is a statically generated, curated catalog. Publishing a repository or release in a different GitHub repository does not modify this website's checked-in catalog or trigger its GitHub Pages deployment.

The build-time GitHub API integration enriches metadata only for repositories already present in `src/data/projects.ts`. It maps over the checked-in project list and never appends newly discovered GitHub repositories. Tester Zepto Pro was absent from both `src/data/projects.ts` and `src/data/releases.ts`, so every page derived from those arrays omitted it.

## Root-cause chain

1. `src/data/projects.ts` contained four curated projects and no Tester Zepto Pro entry.
2. `src/lib/github.ts` fetched organization repositories, but returned `fallbackProjects.map(...)`; therefore API results could update stars, forks, description, license, and timestamps only for already-listed projects.
3. `src/data/releases.ts` contained only two release entries and no Tester Zepto Pro v1.0.6 entry.
4. Homepage cards, project catalog, developer tools, downloads, detail routes, release page, sitemap, RSS, and Atom feeds are all generated from those checked-in arrays.
5. The website deployment workflow runs only when the `vibtools.github.io` repository is pushed to `main` or manually dispatched. Publishing `Tester-Zepto-Pro-open-source-code` does not trigger that workflow.

## Corrective implementation

- Added Tester Zepto Pro as the first featured project in `src/data/projects.ts`.
- Added the v1.0.6 release as the newest release in `src/data/releases.ts`.
- Added a v1.0.1 website changelog entry.
- Bumped the website package version and lock-file root version to 1.0.1.
- Documented the curated-catalog maintenance and deployment requirement in `README.md`.
- Regenerated the complete static `dist/` output.
- Added machine-readable post-fix evidence at `audit/CATALOG_UPDATE_AUDIT_RESULT.json`.

## Feature-preservation result

The repair does not alter the component architecture, layouts, navigation, styling, typography, brand assets, accessibility behavior, GitHub API enrichment, existing projects, existing releases, or deployment workflow.

The production CSS is byte-identical to the audited baseline:

```text
SHA-256: 569bc54c1b4f12db5029507752606c42c1b8d8a21246eaef85203f883ba53e60
Size: 19,713 bytes
```

All four previous project entries and both previous release entries remain present.

## Verification results

| Check                         | Result                                 |
| ----------------------------- | -------------------------------------- |
| Clean npm install             | Pass                                   |
| Astro diagnostics             | 44 files; 0 errors, warnings, or hints |
| Prettier format check         | Pass                                   |
| Production static build       | Pass                                   |
| npm dependency audit          | 0 vulnerabilities                      |
| Generated HTML pages          | 17                                     |
| Generated files               | 31                                     |
| Tester Zepto Pro detail route | Present                                |
| Homepage project card         | Present                                |
| Projects page entry           | Present                                |
| Developer tools entry         | Present                                |
| Downloads entry               | Present                                |
| v1.0.6 release card           | Present                                |
| Sitemap entry                 | Present                                |
| RSS entry                     | Present                                |
| Atom feed entry               | Present                                |
| Existing projects/releases    | Preserved                              |
| Internal links checked        | 322; pass                              |
| Image references checked      | 51; pass                               |
| Generated JavaScript          | 0 files                                |
| Inline style attributes       | 0                                      |
| Inline event handlers         | 0                                      |
| Executable inline scripts     | 0                                      |
| CSS regression                | Byte-identical                         |

## Deployment requirement

This source must be committed and pushed to the `vibtools/vibtools.github.io` repository. A push only to the Tester Zepto Pro repository cannot update the website. After the site repository push, the existing `Deploy GitHub Pages` workflow rebuilds and deploys the corrected static output.

## Final disposition

**PASS — Root cause verified, catalog repaired, previous functionality preserved, static output regenerated, and deployment package prepared.**
