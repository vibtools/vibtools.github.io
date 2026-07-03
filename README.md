# VibTools Open Source Hub

Production website for **https://vibtools.github.io** — the official VibTools open-source developer ecosystem.

## Stack

- Astro 6.4.8
- Tailwind CSS 4.3.2
- Vite 7.3.6
- Strict TypeScript 6
- Lucide icons
- Markdown content collections
- Build-time GitHub API enrichment with deterministic fallback data
- GitHub Pages static deployment

## Runtime requirements

| Runtime         | Status                             | Intended use                                   |
| --------------- | ---------------------------------- | ---------------------------------------------- |
| Node.js 22.23.1 | Recommended and deployment default | Local development, CI, and GitHub Pages        |
| Node.js 20.20.2 | Compatibility-tested               | Legacy Node 20 build lane                      |
| npm 11.18.0     | Pinned package manager             | Reproducible clean installation and validation |

Node 20 compatibility is implemented and regression-tested by the project CLI wrapper. Astro 6 itself declares Node 22.12 or newer, so npm prints upstream engine warnings on Node 20 even though the complete project check and production build pass. Use Node 22 for normal development and deployment.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:4321`.

## Validation

```bash
npm run validate
```

`validate` runs Astro diagnostics, formatting verification, the production build, and a full dependency audit at low severity. The same gate runs in CI on Node 20.20.2 and Node 22.23.1.

## GitHub API

Public repository data is requested at build time. The response is runtime-validated before use. The site falls back to checked-in project metadata when the API is unavailable, rate-limited, malformed, or times out.

For authenticated builds, set:

```bash
GITHUB_TOKEN=your_read_only_token
```

No custom token is required for normal GitHub Pages deployment because the workflow supplies the repository-scoped GitHub token.

## GitHub Pages deployment

1. Push this project to `vibtools/vibtools.github.io`.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the deployment workflow manually.
5. The workflow validates the project and publishes the static `dist/` output, including `.nojekyll`.

See `docs/DEPLOYMENT.md` and `DEPLOYMENT_REPORT.md` for the verified workflow and rollback procedure.

## Content maintenance

- Projects: `src/data/projects.ts`
- Releases: `src/data/releases.ts`
- Changelog: `src/content/changelog/*.md`
- Navigation and site identity: `src/config/site.ts`
- Brand tokens and global styles: `src/styles/global.css`

The catalog is intentionally curated and statically generated. Creating or releasing a repository in the VibTools GitHub organization does **not** automatically add a project card or release entry. Add the repository to `src/data/projects.ts`, add its published release to `src/data/releases.ts`, validate the site, and push the update to `main` so GitHub Pages rebuilds.

## Brand rules

Use only the approved VibTools logo assets, colors, Inter, JetBrains Mono, and Lucide icons. The supplied reference board is stored at `docs/brand-guidelines.png`.

## Release evidence

- `AUDIT_REPORT.md`
- `BUILD_REPORT.md`
- `COMPATIBILITY_REPORT.md`
- `CHANGE_REPORT.md`
- `DEPLOYMENT_REPORT.md`
- `audit/STATIC_AUDIT_RESULT.json`
- `audit/UNIFIED_DIFF.patch`
- `CATALOG_UPDATE_AUDIT_REPORT.md`
- `audit/CATALOG_UPDATE_AUDIT_RESULT.json`
- `docs/CATALOG_UPDATE_DEPLOYMENT.md`

## License

Website source: MIT. Individual linked projects retain their own repository licenses. VibTools brand assets are excluded from the software license unless separately authorized.
