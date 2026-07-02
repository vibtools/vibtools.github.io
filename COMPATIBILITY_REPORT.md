# VibTools Open Source Hub — Compatibility Report

**Release:** 1.0.0  
**Validation date:** 2026-07-01

## Runtime compatibility

| Component                 | Pinned version | Result                                                       |
| ------------------------- | -------------- | ------------------------------------------------------------ |
| Node.js                   | 22.23.1        | Recommended; full clean validation passed                    |
| Node.js                   | 20.20.2        | Compatibility lane; full clean validation passed             |
| npm                       | 11.18.0        | Clean install and validation passed on both Node versions    |
| Astro                     | 6.4.8          | Static build passed                                          |
| Tailwind CSS              | 4.3.2          | Generated CSS regression-equivalent to baseline              |
| Tailwind Vite integration | 4.3.2          | Build passed                                                 |
| Vite                      | 7.3.6          | Build passed; pinned to avoid incompatible Vite 8 resolution |
| TypeScript                | 6.0.3          | Astro diagnostics passed                                     |
| Lucide Astro              | 1.23.0         | All icon imports and output passed                           |

## Node 20 qualification

Node 20 is retained because the project requirement explicitly includes it. The pinned Astro version declares Node 22.12 or newer upstream, so npm reports engine notices on Node 20. The project uses a minimal pinned CLI launcher and has been clean-installed, type-checked, formatted, built, audited, and previewed through the same architecture without modifying Astro package files.

Node 20 should be treated as a legacy compatibility lane. Node 22.23.1 remains the supported development and deployment baseline.

## Browser delivery model

The site emits static HTML and one shared CSS asset with no client-side JavaScript bundle. Compatibility therefore depends primarily on modern HTML, CSS, SVG, and native `<details>` support rather than hydration or framework runtime code.

## GitHub Pages

- `site` is configured for `https://vibtools.github.io`.
- Output is static and repository-root compatible.
- All absolute asset and route references resolve from `/`.
- `.nojekyll` is present and explicitly included in the uploaded artifact.
- The custom `404.html` output and canonical metadata are aligned.
- Tailwind scans only `src/`; documentation and audit artifacts cannot alter production CSS.

## Dependency policy

Astro 7 and Vite 8 are intentionally not selected because they conflict with the required Node 20 compatibility lane. The selected graph is pinned, uses public npm registry tarball URLs, is lock-file reproducible, and reports zero known npm vulnerabilities at low audit severity.
