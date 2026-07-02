# GitHub Pages Deployment

## Repository

Publish from `vibtools/vibtools.github.io` so the website is available at `https://vibtools.github.io/` without a repository subpath.

## Required settings

1. Open repository **Settings**.
2. Open **Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Keep the default `github-pages` environment created by GitHub.
5. Push to `main` or manually run **Deploy GitHub Pages**.

## Verified deployment runtime

- Node.js: version from `.nvmrc` (`22.23.1`)
- npm: `11.18.0`
- Output mode: Astro static output
- Artifact path: `dist/`
- Repository base path: `/`

## Workflow sequence

1. Checkout the existing source tree.
2. Install Node.js from `.nvmrc` with npm caching.
3. Install the pinned npm version.
4. Run `npm ci` from the committed lock file.
5. Run `npm run validate`, including type checks, formatting, build, and full dependency audit.
6. Upload `dist/` with hidden files enabled so `.nojekyll` is retained.
7. Deploy the artifact to the `github-pages` environment.

## Pre-deployment verification

```bash
npm ci
npm run validate
npm run preview -- --host 127.0.0.1
```

Confirm the homepage returns HTTP 200 and an unknown route returns the custom HTTP 404 page.

## Rollback

Revert the problematic commit on `main` and push. The workflow rebuilds and deploys the previous source state. GitHub Actions history and the committed release reports remain available for audit.

## Operational note

The quality workflow also validates Node 20.20.2 for compatibility. Production deployment remains on Node 22.23.1 because it is the supported default for the pinned Astro release.
