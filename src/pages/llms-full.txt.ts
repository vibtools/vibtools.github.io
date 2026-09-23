import type { APIRoute } from 'astro';
import { site } from '@/config/site';
import { projects, projectCategories } from '@/data/projects';
import { releases } from '@/data/releases';
import { communityLinks } from '@/data/community';

export const GET: APIRoute = () => {
  const content = `# ${site.name} — Full Ecosystem & AI Agent Reference Manual
> ${site.tagline}
> URL: ${site.url} | GitHub: ${site.github} | Contact: ${site.email}

---

## Table of Contents
1. Executive Overview & Mission
2. Architecture & Design System Specifications
3. Complete Projects Catalog & Technical Breakdown
   - Tester Zepto Pro
   - PortableAccountBrowser
   - VibMail Open Source
   - Vib ID Account Portal
   - VibTools Open Source Hub
4. Categories & Ecosystem Taxonomy
5. Releases & Versioning Log
6. Downloads & Platform Distribution Matrix
7. Community, Security & Contribution Protocols
8. Machine-Readable API & Manifest Endpoints
9. AI Agent Ingestion & Audit Guidelines

---

## 1. Executive Overview & Mission
VibTools is an open-source developer ecosystem focused on desktop utilities, self-hosted infrastructure, and developer toolchains.

### Key Tenets
- **Local-First & Portable**: Utilities operate standalone without mandating cloud logins or telemetry tracking.
- **Fail-Closed Safety**: Critical automation checks ensure zero accidental operations in production environments.
- **Reproducible Builds**: All software packages are built deterministically from open GitHub repositories.
- **Developer Transparency**: Complete source code, license documentation, and release artifacts are public.

---

## 2. Architecture & Design System Specifications
For AI engines and automated visual/code auditors:

### Technology Stack
- **Static Site Generator**: Astro 6 in \`static\` output mode.
- **Build Engine**: Vite 7 with TypeScript (strict mode enabled).
- **Styling Architecture**: Tailwind CSS v4 using CSS variables and modern utility tokens.
- **Icons**: Lucide Astro (\`@lucide/astro\`), SVGs rendered server-side with zero client JS bundle.
- **Package Manager**: npm v11 with clean multi-platform \`package-lock.json\`.

### Color Tokens (Dark Mode Default)
- **Canvas / Background**: \`#0D1117\` (High contrast dark theme)
- **Surface Panels**: \`#161B22\` (Card background, elevated containers)
- **Borders & Dividers**: \`#30363D\` (Clean boundary delineation)
- **Primary Accent**: \`#58A6FF\` (Accessible link & focus states, WCAG AAA compliant)
- **Status Green**: \`#238636\` (Success indicators, verification tags)
- **Text Primary**: \`#C9D1D9\` (Main text readability)
- **Text Secondary**: \`#8B949E\` (Muted descriptions, labels, captions)

### Typography
- **UI Font**: \`Inter\`, sans-serif (Weights: 400, 500, 600, 700, 800)
- **Monospace Font**: \`JetBrains Mono\`, monospace (Weights: 400, 500, 600, 700)
- **Baseline Spacing**: 8-point typographic rhythm with responsive typography classes.

### Accessibility Standards
- **Skip Links**: Direct \`Skip to content\` link on all layouts.
- **Keyboard Navigation**: Explicit focus rings with \`focus-visible:outline-2 focus-visible:outline-secondary\`.
- **ARIA Landmark Compliance**: \`<header>\`, \`<nav>\`, \`<main id="main-content">\`, \`<article>\`, \`<footer>\`.
- **Screen Reader Support**: \`aria-hidden="true"\` on decorative icons, explicit accessible names on interactive elements.

---

## 3. Complete Projects Catalog & Technical Breakdown

${projects
  .map((p) => {
    const repoName = p.repository.split('/').at(-1);
    return `### Project: ${p.name}
- **Slug**: \`${p.slug}\`
- **Category**: ${p.category}
- **Language**: ${p.language}
- **License**: ${p.license}
- **Latest Version**: ${p.latestVersion}
- **Operating Systems**: ${p.operatingSystems.join(', ')}
- **Repository URL**: ${p.repository}
- **Documentation**: ${p.documentation}
- **Direct Release Downloads**: https://github.com/vibtools/${repoName}/releases
- **Source Code Archive**: https://github.com/vibtools/${repoName}/archive/refs/heads/main.zip
- **Featured**: ${p.featured ? 'Yes' : 'No'}

#### Description & Scope
${p.description}

#### Technical Highlights & Architecture
- **Language & Runtime**: ${p.language}
- **Distribution Model**: ${p.operatingSystems.includes('Portable') ? 'Portable standalone executable (no installation required)' : 'Source code and container deployment'}.
- **Verification**: Strict automated testing with fail-closed mechanisms.
`;
  })
  .join('\n---\n\n')}

---

## 4. Categories & Ecosystem Taxonomy
${projectCategories.map((c) => `### ${c.name}\n- **Scope**: ${c.description}`).join('\n\n')}

---

## 5. Releases & Versioning Log
${releases
  .map(
    (r) => `### ${r.projectName} — ${r.version}
- **Date**: ${r.publishedAt}
- **Summary**: ${r.summary}
- **Release URL**: ${r.releaseUrl}
- **Download**: ${r.downloadUrl}
`,
  )
  .join('\n')}

---

## 6. Downloads & Platform Distribution Matrix
- **Windows**: Tester Zepto Pro, PortableAccountBrowser (Portable x64 binaries, zero installer needed).
- **Linux**: VibMail Open Source, Vib ID Account Portal, VibTools Open Source Hub.
- **macOS**: Source distributions and cross-platform Python runtimes.
- **Source Code**: All repositories hosted at \`https://github.com/vibtools\`.

---

## 7. Community, Security & Contribution Protocols
${communityLinks
  .map((item) => `- **${item.title}**: ${item.description} (${item.href})`)
  .join('\n')}

### Contribution Workflow
1. Fork the respective GitHub repository.
2. Create a descriptive topic branch (\`git checkout -b feature/improvement\`).
3. Adhere to code style: Prettier code formatting, TypeScript type checks, Astro diagnostics.
4. Open a pull request against \`main\` with verifiable reproduction steps.
5. All CI workflows must pass cleanly before merge approval.

---

## 8. Machine-Readable API & Manifest Endpoints
- **LLMs Specification**: \`${site.url}/llms.txt\`
- **Comprehensive LLM Context**: \`${site.url}/llms-full.txt\`
- **Structured JSON Manifest**: \`${site.url}/ai-index.json\`
- **XML Sitemap**: \`${site.url}/sitemap.xml\`
- **RSS Feed**: \`${site.url}/rss.xml\`
- **Atom Feed**: \`${site.url}/feed.xml\`
- **Web App Manifest**: \`${site.url}/site.webmanifest\`

---

## 9. AI Agent Ingestion & Audit Guidelines
- **Permission**: VibTools explicitly permits parsing, indexing, auditing, summarizing, and reasoning over any page or file on this domain.
- **No Paywalls / No Captchas**: All assets are statically hosted via GitHub Pages and immediately accessible.
- **Verification File**: Google Site Verification token is hosted at \`${site.url}/google08b62659055db632.html\`.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
