# VibTools Open Source Hub — Change Report

**Release:** 1.0.0  
**Change date:** 2026-07-01  
**Scope:** Production stabilization only; no redesign or feature removal

## Change control result

The original project was retained as the baseline. Every repair was prepared on a separate working copy, reviewed as a unified diff, validated, and then packaged. Public assets, brand tokens, layouts, spacing, typography, routes, features, animations, and content remain preserved.

## Modified source and configuration files

| File                            | Change                                                                                                                                                                 | Technical justification                                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `.github/workflows/deploy.yml`  | Updated Node setup and Pages artifact actions, pinned npm 11.18.0, enabled hidden-file upload.                                                                         | Keeps the deployment toolchain current and prevents `.nojekyll` from being omitted by the artifact action.               |
| `.github/workflows/quality.yml` | Added Node 20.20.2/22.23.1 matrix, npm 11.18.0, and consolidated validation.                                                                                           | Enforces the required runtime matrix and prevents compatibility regressions.                                             |
| `.npmrc`                        | Disabled hard engine rejection while retaining audit and disabling funding output.                                                                                     | Allows the verified Node 20 compatibility lane despite upstream Astro engine metadata.                                   |
| `.nvmrc`                        | Pinned Node 22.23.1.                                                                                                                                                   | Establishes the recommended development and deployment runtime.                                                          |
| `package.json`                  | Pinned compatible Astro/Tailwind/Vite versions, npm version, Node range, security overrides, install-script approvals, wrapper-based scripts, and complete validation. | Produces a deterministic dual-Node dependency graph with zero known vulnerabilities and explicit lifecycle-script trust. |
| `package-lock.json`             | Regenerated with npm 11.18.0 and normalized to public `registry.npmjs.org` tarball URLs.                                                                               | Makes clean installation portable, reproducible, and independent of the audit environment registry proxy.                |
| `scripts/astro-cli.mjs`         | Added a minimal pinned Astro CLI launcher with project runtime validation.                                                                                             | Preserves the Astro architecture while enabling the tested Node 20 lane without modifying installed package files.       |
| `src/lib/format.ts`             | Added correct date-only/full-ISO parsing and invalid-date fallback.                                                                                                    | Prevents successful GitHub API builds from failing on `updated_at` timestamps.                                           |
| `src/lib/github.ts`             | Added runtime response validation before applying API data.                                                                                                            | Prevents malformed or partial external JSON from reaching rendering logic.                                               |
| `src/lib/seo.ts`                | Expanded JSON-LD escaping.                                                                                                                                             | Hardens script-context serialization against HTML-sensitive characters and line separators.                              |
| `src/components/Header.astro`   | Changed the mobile menu accessible label to a state-neutral action label.                                                                                              | Corrects assistive-technology semantics without changing visual output or behavior.                                      |
| `src/pages/404.astro`           | Changed canonical path to `/404.html`.                                                                                                                                 | Aligns SEO metadata with the actual GitHub Pages output file.                                                            |
| `src/styles/global.css`         | Scoped Tailwind source detection to `src/` and explicitly retained the three baseline utilities previously discovered from non-source files.                           | Prevents reports, patches, and documentation from changing production CSS while preserving the exact baseline rule set.  |

## Modified documentation and evidence files

| File                             | Change                                                                                     | Technical justification                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `README.md`                      | Updated stack, runtime, validation, API hardening, deployment, and evidence documentation. | Keeps operator instructions aligned with the repaired project.                                            |
| `CHANGELOG.md`                   | Added the stabilization repairs under release 1.0.0.                                       | Records all externally relevant internal fixes without inventing a new feature release.                   |
| `AUDIT_REPORT.md`                | Replaced the release disposition with the final forensic audit.                            | Documents actual post-repair validation and residual limitations.                                         |
| `docs/DEPLOYMENT.md`             | Added exact runtime, workflow, hidden-file, preview, and rollback details.                 | Makes deployment reproducible and auditable.                                                              |
| `docs/QA_CHECKLIST.md`           | Converted the release gate to completed, evidence-based checks.                            | Records the actual validation state across code, accessibility, SEO, responsive evidence, and regression. |
| `BUILD_REPORT.md`                | Added build matrix, commands, output metrics, and preview result.                          | Provides reproducible build evidence.                                                                     |
| `COMPATIBILITY_REPORT.md`        | Added runtime, dependency, browser-delivery, and Node 20 qualification details.            | Separates verified compatibility from upstream support status.                                            |
| `DEPLOYMENT_REPORT.md`           | Added workflow and local deployment-simulation evidence.                                   | Documents readiness without falsely claiming a remote push occurred.                                      |
| `CHANGE_REPORT.md`               | Added this file-by-file change register.                                                   | Satisfies release traceability requirements.                                                              |
| `audit/BASELINE_AUDIT_REPORT.md` | Preserved the original audit report unchanged.                                             | Ensures prior audit evidence was not lost.                                                                |
| `audit/STATIC_AUDIT_RESULT.json` | Added machine-readable final static and regression results.                                | Supports repeatable verification of the final output.                                                     |
| `audit/UNIFIED_DIFF.patch`       | Added the pre-application unified text diff.                                               | Provides exact reviewable change evidence.                                                                |
| `PROJECT_TREE.txt`               | Regenerated after stabilization.                                                           | Accurately records the complete final package structure.                                                  |

## Regenerated production output

The following generated files changed only because the pinned Astro/Tailwind toolchain metadata and CSS content hash changed, plus the two deliberate non-visual repairs described above:

- `dist/404.html`
- `dist/about/index.html`
- `dist/changelog/index.html`
- `dist/community/index.html`
- `dist/downloads/index.html`
- `dist/index.html`
- `dist/license/index.html`
- `dist/privacy/index.html`
- `dist/project/portable-account-browser/index.html`
- `dist/project/vib-id-account-portal/index.html`
- `dist/project/vibmail-open-source/index.html`
- `dist/project/vibtools-open-source-hub/index.html`
- `dist/projects/index.html`
- `dist/releases/index.html`
- `dist/templates/index.html`
- `dist/tools/index.html`
- Removed generated hash: `dist/_assets/BaseLayout.WdrjV91n.css`
- Added generated hash: `dist/_assets/BaseLayout.Djn0NKdm.css`

The old and new CSS files have the same byte length and identical rules after normalizing only the Tailwind patch-version banner. All 16 normalized DOM trees match the baseline after normalizing generator/hash metadata and the two approved non-visual repairs.

## Dependency changes

| Package             | Before         | After            | Reason                                                                                        |
| ------------------- | -------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| `astro`             | 7.0.5          | 6.4.8            | Required to retain the tested Node 20 compatibility lane; paired with explicit security pins. |
| `@tailwindcss/vite` | 4.3.1          | 4.3.2            | Aligns the integration package with Tailwind CSS and removes version skew.                    |
| `tailwindcss`       | 4.3.2          | 4.3.2            | Retained; stable and visually regression-equivalent.                                          |
| `vite`              | transitive     | 7.3.6 direct pin | Prevents incompatible Vite 8 peer resolution with Astro 6.                                    |
| `esbuild`           | transitive     | 0.28.1 override  | Forces the audited patched transitive version.                                                |
| `yaml`              | 2.8.3 override | 2.8.3 override   | Retained security/reproducibility override.                                                   |
| `@lucide/astro`     | 1.23.0         | 1.23.0           | Retained; no icon-system change.                                                              |
| `typescript`        | 6.0.3          | 6.0.3            | Retained; diagnostics pass.                                                                   |
| `prettier`          | 3.9.4          | 3.9.4            | Retained; formatting passes.                                                                  |

No package was removed merely to silence an error, and no beta, nightly, canary, or experimental package was introduced.

## Regression disposition

- Removed pages: **0**
- Removed routes: **0**
- Removed features: **0**
- Changed public assets: **0**
- Unexpected UI source changes: **0**
- Unexpected rendered DOM changes: **0**
- Critical issues remaining: **0**
- High-severity issues remaining: **0**
