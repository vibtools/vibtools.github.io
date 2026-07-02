# VibTools Open Source Hub — Final Forensic Audit Report

**Release:** 1.0.0  
**Audit date:** 2026-07-01  
**Target:** `https://vibtools.github.io`

## Executive result

The existing project was repaired in place on a forensic working copy without redesigning or regenerating its UI. The final source and generated static site pass the implemented dependency, runtime, type, formatting, build, structural, accessibility, SEO, security, performance, GitHub Pages, and regression gates. No critical or high-severity issue remains.

The original audit report is preserved at `audit/BASELINE_AUDIT_REPORT.md`.

## Issues repaired

| Severity | Area                      | Finding                                                                                                                                                                    | Repair                                                                                       |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| High     | Build reliability         | GitHub API `updated_at` values are full ISO timestamps, but the original date formatter appended a second time suffix and could throw during a successful live-data build. | Added correct date-only/full-ISO parsing and deterministic invalid-date handling.            |
| Medium   | External data trust       | GitHub API JSON was cast directly to the expected interface.                                                                                                               | Added runtime field and nested-license validation before repository data is consumed.        |
| Medium   | Runtime compatibility     | Astro 7 excluded Node 20, conflicting with the required dual-Node matrix.                                                                                                  | Pinned a tested Astro 6/Vite 7 graph and added a minimal project CLI compatibility launcher. |
| Medium   | Deployment integrity      | The upgraded Pages artifact action excludes hidden files unless explicitly included.                                                                                       | Enabled hidden-file upload so `.nojekyll` cannot be dropped.                                 |
| Medium   | Lock-file portability     | The baseline lock file recorded execution-environment-only registry proxy URLs.                                                                                            | Normalized every tarball URL to the public npm registry and re-ran clean installs.           |
| Low      | Structured data hardening | JSON-LD escaping handled `<` only.                                                                                                                                         | Escaped HTML-sensitive characters and Unicode line separators.                               |
| Low      | SEO                       | The 404 canonical used a directory path while the actual output is `404.html`.                                                                                             | Aligned canonical and structured metadata with `/404.html`.                                  |
| Low      | Accessibility             | The mobile menu label described only the closed state.                                                                                                                     | Replaced it with state-neutral “Toggle navigation menu.”                                     |
| Low      | Dependency policy         | Validation audited production dependencies only and only at high severity.                                                                                                 | Validation now audits the complete graph at low severity.                                    |
| Low      | Build determinism         | Tailwind automatic detection scanned documentation and audit artifacts, allowing non-source words to change generated CSS.                                                 | Scoped detection to `src/` and retained the baseline utility set explicitly.                 |

## Verification matrix

| Area                    | Verification                                                           | Result                                |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------- |
| Clean install           | Node 20.20.2 and Node 22.23.1 with npm 11.18.0                         | Pass                                  |
| Type safety             | Astro check across 44 Astro/TypeScript files                           | 0 errors, 0 warnings, 0 hints         |
| Formatting              | Prettier check                                                         | Pass                                  |
| Production build        | Astro static build                                                     | 16 HTML pages plus static endpoints   |
| Dependency security     | Full `npm audit --audit-level=low`                                     | 0 vulnerabilities                     |
| Preview                 | Homepage and custom unknown route                                      | Pass; unknown route returned HTTP 404 |
| JavaScript footprint    | Generated JS search                                                    | 0 files                               |
| Metadata                | Title, description, canonical, Open Graph, Twitter                     | Pass on all 16 pages                  |
| Structured data         | JSON-LD parse and graph checks                                         | 16 of 16 pass                         |
| Accessibility structure | One `h1`, heading progression, skip link, names, image text/dimensions | Pass                                  |
| Internal references     | Links, assets, and fragment targets                                    | 317 references checked; pass          |
| Images                  | Rendered image references and local assets                             | 46 checked; pass                      |
| Inline code policy      | Style attributes, event handlers, executable inline scripts            | 0 found                               |
| Feeds and machine files | Sitemap, robots, RSS, Atom, web manifest                               | Parse and presence checks pass        |
| Source integrity        | Local imports and unfinished/debug markers                             | 99 imports checked; 0 defects         |
| Brand palette           | Locked and existing semantic colors                                    | Pass                                  |
| GitHub Pages            | Static output, origin, 404, `.nojekyll`, workflow                      | Pass                                  |
| Regression              | Original routes, public assets, UI source, CSS, normalized DOM         | Pass                                  |

## Static forensic totals

- HTML pages inspected: **16**
- Source text/configuration files inspected: **73**
- Internal references inspected: **317**
- External link occurrences inspected for safe markup: **133**
- Fragment references inspected: **35**
- Image references inspected: **46**
- Accessible controls inspected: **499**
- Source imports resolved: **99**
- JSON-LD blocks validated: **16**
- Inline style attributes: **0**
- Inline event handlers: **0**
- Executable inline scripts: **0**
- Generated JavaScript files: **0**
- Audit errors: **0**
- Audit warnings: **0**

Machine-readable evidence is stored at `audit/STATIC_AUDIT_RESULT.json`.

## Regression evidence

- The set of all 16 HTML output routes is identical to the baseline.
- Every file under `public/`, including logos, icons, and social imagery, is byte-identical.
- No component, layout, or page source changed except the mobile navigation accessibility label and 404 metadata repair. The stylesheet source-detection directives changed only to make generation deterministic; the resulting CSS rule set is unchanged.
- Generated CSS is byte-identical after normalizing only the Tailwind patch-version license banner.
- All 16 generated DOM trees match the baseline after normalizing the Astro generator version, hashed CSS filename, and the two deliberate non-visual repairs.
- Existing 320, 375, 768, 1024, 1440, and 1920 px screenshots remain preserved under `audit/screenshots/`.

## Security findings

- Static generation remains intact.
- No client-side JavaScript bundle, inline event handlers, executable inline scripts, or inline CSS is emitted.
- GitHub response data is validated before use and still rendered through escaped Astro templates.
- JSON-LD serialization is hardened against script-context delimiter and line-separator injection.
- External new-tab links retain `noopener noreferrer`.
- npm reports zero known vulnerabilities across the complete installed graph.
- The committed lock file contains only public `registry.npmjs.org` tarball URLs and was clean-installed from a fresh cache.
- npm 11 install scripts are explicitly approved only for the pinned esbuild and sharp versions required by the build toolchain.

## Performance findings

- No hydration/runtime JavaScript was introduced.
- The site emits one shared CSS asset of 19,713 bytes.
- Total generated output is approximately 655 KiB.
- The production CSS rules are unchanged from the baseline except for the Tailwind patch-version banner.
- Local assets retain explicit dimensions and the existing loading/decoding behavior.

A numeric Lighthouse score is not asserted because browser navigation was restricted in the execution environment. The original responsive evidence is retained, and stabilization regression checks prove that layout CSS and normalized DOM structure did not change. Lighthouse remains an appropriate post-deployment environment-specific gate.

## Final disposition

**Approved for production deployment.** The complete repaired source, lock file, workflows, generated output, reports, unified diff, and checksum are included in the final package.
