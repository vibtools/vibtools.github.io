# Deploy the Tester Zepto Pro Catalog Update

This update belongs in the website repository:

```text
vibtools/vibtools.github.io
```

Publishing or updating `vibtools/Tester-Zepto-Pro-open-source-code` alone cannot update the static website catalog.

## Validate locally

```bash
npm ci
npm run validate
```

Expected results:

- Astro diagnostics: 0 errors, warnings, or hints
- Formatting: pass
- Static build: 17 pages
- Dependency audit: 0 vulnerabilities

## Commit and deploy

```bash
git status
git add .
git commit -m "Add Tester Zepto Pro v1.0.6 to the open-source hub"
git push origin main
```

Then open the `vibtools.github.io` repository and verify that **Deploy GitHub Pages** completes successfully.

## Post-deployment verification

Check these routes:

```text
https://vibtools.github.io/
https://vibtools.github.io/projects/
https://vibtools.github.io/project/tester-zepto-pro/
https://vibtools.github.io/releases/
https://vibtools.github.io/downloads/
https://vibtools.github.io/tools/
https://vibtools.github.io/sitemap.xml
https://vibtools.github.io/rss.xml
https://vibtools.github.io/feed.xml
```

Tester Zepto Pro should be visible on every relevant catalog surface, and v1.0.6 should be the newest release entry.

## Rollback

Revert the catalog-update commit and push `main`. The existing deterministic Pages workflow will rebuild the previous source state.
