# VibTools Open Source Hub — Build Report

**Release:** 1.0.0  
**Validation date:** 2026-07-01

## Build matrix

| Node.js | npm     | Clean install | Astro check                            | Format check | Production build    | Dependency audit  |
| ------- | ------- | ------------- | -------------------------------------- | ------------ | ------------------- | ----------------- |
| 20.20.2 | 11.18.0 | Pass          | 44 files; 0 errors, warnings, or hints | Pass         | 16 HTML pages; pass | 0 vulnerabilities |
| 22.23.1 | 11.18.0 | Pass          | 44 files; 0 errors, warnings, or hints | Pass         | 16 HTML pages; pass | 0 vulnerabilities |

Node 20 prints upstream `EBADENGINE` notices for Astro packages that officially declare Node 22.12 or newer. Installation, type checking, formatting, build, and audit all complete successfully through the pinned compatibility wrapper. Node 22 is the deployment default.

Both runtime lanes were also clean-installed from the normalized public npm registry lock file; no environment-specific registry URL remains.

## Commands executed

```bash
npm ci
npm run check
npm run format:check
npm run build
npm run audit:prod
npm run preview -- --host 127.0.0.1 --port 4322
```

The consolidated release gate is:

```bash
npm run validate
```

## Output

- Static HTML pages: **16**
- Total generated files: **30**
- Generated JavaScript files: **0**
- Shared production CSS: **19,713 bytes**
- Total `dist/` size: approximately **655 KiB**
- `.nojekyll`: present
- Sitemap, robots, RSS, Atom, and web manifest: generated and parsed

## Preview verification

- Preview server started successfully with Astro 6.4.8.
- `/` returned the expected VibTools homepage.
- An unknown route returned HTTP **404** and the custom 404 page.

## Build disposition

**Pass.** The project installs reproducibly, validates, builds, and serves from the generated static output on both required Node lines.
