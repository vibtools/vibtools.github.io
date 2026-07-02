import type { APIRoute } from 'astro';
import { releases } from '@/data/releases';
import { site } from '@/config/site';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const items = releases
    .map((release) => {
      const link = new URL(`/project/${release.projectSlug}/`, site.url).toString();
      return `<item><title>${escapeXml(`${release.projectName} ${release.version}`)}</title><link>${escapeXml(link)}</link><guid isPermaLink="true">${escapeXml(link)}</guid><pubDate>${new Date(`${release.publishedAt}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(release.summary)}</description></item>`;
    })
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(site.name)}</title><link>${escapeXml(site.url)}</link><description>${escapeXml(site.description)}</description><language>en</language>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
