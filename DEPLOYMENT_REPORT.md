# VibTools Open Source Hub — Deployment Report

**Release:** 1.0.0  
**Validation date:** 2026-07-01  
**Target:** `https://vibtools.github.io/`

## GitHub Pages configuration

- Static Astro output: verified
- Repository-root base path: verified
- Site URL and canonical origin: verified
- Custom 404 output: verified
- `.nojekyll`: verified in `public/` and `dist/`
- Pages artifact hidden-file inclusion: enabled
- Deployment permissions: `pages: write` and `id-token: write`
- Deployment concurrency: retained

## Workflow validation

The deployment workflow now performs:

1. `actions/checkout@v4`
2. `actions/setup-node@v6` using `.nvmrc`
3. npm 11.18.0 installation
4. deterministic `npm ci`
5. complete `npm run validate`
6. `actions/upload-pages-artifact@v4` with `include-hidden-files: true`
7. `actions/deploy-pages@v4`

The quality workflow independently runs the same validation on Node 20.20.2 and Node 22.23.1.

## Local deployment simulation

The generated `dist/` output was served with `astro preview`:

- Homepage response: successful
- Homepage title: correct
- Unknown route response: HTTP 404
- Custom 404 content: served

## Remote deployment boundary

No commit was pushed and no live GitHub Pages environment was modified from this execution environment. The repository workflow, permissions, artifact format, and local production output are deployment-ready; the final remote action occurs when the repaired project is pushed to `main` or the workflow is manually dispatched.

## Rollback

Revert the affected commit on `main` and push. The same deterministic workflow rebuilds and redeploys the previous source state.
