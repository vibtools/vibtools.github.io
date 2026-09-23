import type { APIRoute } from 'astro';
import { site } from '@/config/site';
import { projects, projectCategories } from '@/data/projects';
import { releases } from '@/data/releases';

export const GET: APIRoute = () => {
  const lines: string[] = [
    `# ${site.name}`,
    `> ${site.tagline}`,
    '',
    `${site.description}`,
    '',
    '## About VibTools',
    'VibTools is a transparent, developer-first open-source ecosystem providing desktop productivity tools, self-hosted server infrastructure, and developer utilities. All projects are maintained publicly on GitHub, distributed under open-source licenses, and designed for local execution with zero tracking and fail-closed safety.',
    '',
    '## Quick Links for AI Agents',
    `- [Full Documentation (llms-full.txt)](${site.url}/llms-full.txt): Complete, unabridged ecosystem documentation in a single file.`,
    `- [AI Index JSON](${site.url}/ai-index.json): Structured JSON schema of all projects, releases, categories, and design tokens.`,
    `- [AI Index Web Page](${site.url}/ai-index/): Human and agent readable interactive interface.`,
    `- [GitHub Organization](${site.github}): Official GitHub repository catalog.`,
    `- [Sitemap XML](${site.url}/sitemap.xml): Complete URL index.`,
    `- [RSS Feed](${site.url}/rss.xml): Ecosystem release updates.`,
    '',
    '## Core Pages & Directories',
    `- [Projects Directory](${site.url}/projects/): Comprehensive list of all open-source projects in the ecosystem.`,
    `- [Downloads](${site.url}/downloads/): Binaries and source distributions filtered by Windows, Linux, macOS, Portable, and Source Code.`,
    `- [Developer Tools](${site.url}/tools/): Developer-facing software for technical testing, multi-account sessions, and local workflows.`,
    `- [Templates](${site.url}/templates/): Requirements and status of reusable starter repositories.`,
    `- [Releases](${site.url}/releases/): Chronological changelogs, tags, and binary download links.`,
    `- [Community](${site.url}/community/): Contribution standards, issue reporting, and security disclosure.`,
    `- [About](${site.url}/about/): Organizational mission and governance principles.`,
    `- [License](${site.url}/license/): Open source licensing terms.`,
    `- [Privacy](${site.url}/privacy/): Privacy policy (zero tracking, local-first).`,
    '',
    '## Project Categories',
    ...projectCategories.map((c) => `- **${c.name}**: ${c.description}`),
    '',
    '## Open Source Projects Catalog',
    '',
    ...projects.map((p) => {
      const repoName = p.repository.split('/').at(-1);
      return [
        `### ${p.name}`,
        `- **Slug**: \`${p.slug}\``,
        `- **Category**: ${p.category}`,
        `- **Language**: ${p.language}`,
        `- **License**: ${p.license}`,
        `- **Latest Version**: ${p.latestVersion}`,
        `- **Supported OS**: ${p.operatingSystems.join(', ')}`,
        `- **Project URL**: ${site.url}/project/${p.slug}/`,
        `- **GitHub Repository**: ${p.repository}`,
        `- **Documentation**: ${p.documentation}`,
        `- **Releases**: https://github.com/vibtools/${repoName}/releases`,
        `- **Source Zip**: https://github.com/vibtools/${repoName}/archive/refs/heads/main.zip`,
        `- **Summary**: ${p.description}`,
        '',
      ].join('\n');
    }),
    '## Latest Published Releases',
    ...releases.map(
      (r) =>
        `- **${r.projectName} (${r.version})** [${r.publishedAt}]: ${r.summary} ([Release Notes](${r.releaseUrl}))`,
    ),
    '',
    '## Design System & UI Architecture (For AI Audits)',
    '- **Framework**: Astro 6 static site generation (zero client JavaScript runtime overhead).',
    '- **Styling**: Tailwind CSS v4.',
    '- **Iconography**: Lucide Icons (@lucide/astro).',
    '- **Color Scheme**: Dark-first developer aesthetic.',
    '  - Background: `#0D1117` (Deep slate)',
    '  - Surface: `#161B22` (Card and panel background)',
    '  - Border: `#30363D` (Subtle boundary borders)',
    '  - Primary Accent: `#58A6FF` (High contrast accessible blue)',
    '  - Secondary: `#58A6FF`',
    '  - Text Primary: `#C9D1D9`',
    '  - Text Secondary: `#8B949E`',
    '- **Typography**: Inter (Body and headings), JetBrains Mono (Code, tags, and technical metrics).',
    '- **Accessibility**: Skip links, ARIA labels on all icons/controls, semantic landmarks (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`), keyboard navigable focus rings, and high contrast text ratios.',
    '- **Security**: No inline scripts, strict CSP compliance, no external third-party tracking scripts, fully static HTML output.',
    '',
    '## AI Crawling and Ingestion Policy',
    'VibTools permits and encourages all AI assistants, search bots, and research crawlers (including GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended) to read, index, summarize, and audit all public documentation, source code, and release assets.',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
