import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';
import { site } from '@/config/site';

interface SitemapEntry {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const staticEntries: SitemapEntry[] = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/projects/', changefreq: 'weekly', priority: '0.9' },
  { path: '/downloads/', changefreq: 'weekly', priority: '0.9' },
  { path: '/tools/', changefreq: 'weekly', priority: '0.85' },
  { path: '/releases/', changefreq: 'weekly', priority: '0.85' },
  { path: '/ai-index/', changefreq: 'weekly', priority: '0.8' },
  { path: '/templates/', changefreq: 'monthly', priority: '0.7' },
  { path: '/community/', changefreq: 'monthly', priority: '0.7' },
  { path: '/changelog/', changefreq: 'weekly', priority: '0.7' },
  { path: '/about/', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy/', changefreq: 'yearly', priority: '0.5' },
  { path: '/license/', changefreq: 'yearly', priority: '0.5' },
];

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const projectEntries: SitemapEntry[] = projects.map((project) => ({
    path: `/project/${project.slug}/`,
    changefreq: 'weekly',
    priority: '0.85',
  }));

  const allEntries = [...staticEntries, ...projectEntries];

  const urls = allEntries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(new URL(entry.path, site.url).toString())}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
