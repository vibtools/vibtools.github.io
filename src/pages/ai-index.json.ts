import type { APIRoute } from 'astro';
import { site, navigation, footerNavigation } from '@/config/site';
import { projects, projectCategories } from '@/data/projects';
import { releases } from '@/data/releases';
import { communityLinks } from '@/data/community';

export const GET: APIRoute = () => {
  const payload = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    name: site.name,
    tagline: site.tagline,
    description: site.description,
    url: site.url,
    github: site.github,
    contactEmail: site.email,
    language: site.language,
    locale: site.locale,
    updatedAt: new Date().toISOString(),
    aiEndpoints: {
      llmsTxt: `${site.url}/llms.txt`,
      llmsFullTxt: `${site.url}/llms-full.txt`,
      aiIndexJson: `${site.url}/ai-index.json`,
      aiIndexWeb: `${site.url}/ai-index/`,
      sitemapXml: `${site.url}/sitemap.xml`,
      rssXml: `${site.url}/rss.xml`,
      feedXml: `${site.url}/feed.xml`,
    },
    navigation: navigation.map((n) => ({ label: n.label, href: `${site.url}${n.href}` })),
    footerNavigation: footerNavigation.map((n) => ({
      label: n.label,
      href: n.href.startsWith('http') ? n.href : `${site.url}${n.href}`,
    })),
    designSystem: {
      theme: 'dark-default',
      palette: {
        background: '#0D1117',
        surface: '#161B22',
        border: '#30363D',
        accent: '#58A6FF',
        success: '#238636',
        textPrimary: '#C9D1D9',
        textSecondary: '#8B949E',
      },
      typography: {
        uiFont: 'Inter, sans-serif',
        monoFont: 'JetBrains Mono, monospace',
      },
      framework: {
        generator: 'Astro 6',
        styling: 'Tailwind CSS 4',
        icons: 'Lucide Icons',
        bundler: 'Vite 7',
        output: 'static',
      },
      accessibility: {
        skipLinks: true,
        ariaCompliance: true,
        reducedMotionSupport: true,
        keyboardNavigable: true,
      },
    },
    projectCategories: projectCategories.map((c) => ({
      name: c.name,
      description: c.description,
    })),
    projects: projects.map((p) => {
      const repoName = p.repository.split('/').at(-1);
      return {
        slug: p.slug,
        name: p.name,
        description: p.description,
        category: p.category,
        language: p.language,
        license: p.license,
        latestVersion: p.latestVersion,
        operatingSystems: p.operatingSystems,
        featured: p.featured ?? false,
        stars: p.stars ?? 0,
        forks: p.forks ?? 0,
        urls: {
          canonical: `${site.url}/project/${p.slug}/`,
          repository: p.repository,
          documentation: p.documentation,
          releases: `https://github.com/vibtools/${repoName}/releases`,
          sourceArchiveZip: `https://github.com/vibtools/${repoName}/archive/refs/heads/main.zip`,
        },
      };
    }),
    releases: releases.map((r) => ({
      projectName: r.projectName,
      projectSlug: r.projectSlug,
      version: r.version,
      publishedAt: r.publishedAt,
      summary: r.summary,
      releaseUrl: r.releaseUrl,
      downloadUrl: r.downloadUrl,
    })),
    community: communityLinks.map((item) => ({
      title: item.title,
      description: item.description,
      href: item.href.startsWith('http') ? item.href : `${site.url}${item.href}`,
    })),
    aiPolicy: {
      permittedCrawlers: [
        'GPTBot',
        'ChatGPT-User',
        'ClaudeBot',
        'Claude-Web',
        'PerplexityBot',
        'Google-Extended',
        'Applebot-Extended',
        'cohere-ai',
        'OAI-SearchBot',
        'Meta-ExternalAgent',
        'Amazonbot',
      ],
      openIngestion: true,
      licensingTerms: 'All projects governed by open-source licenses as declared in catalog.',
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
