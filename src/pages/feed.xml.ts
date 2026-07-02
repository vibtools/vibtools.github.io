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
  const updated =
    releases
      .map((release) => release.publishedAt)
      .sort()
      .at(-1) ?? '2026-07-01';
  const entries = releases
    .map((release) => {
      const link = new URL(`/project/${release.projectSlug}/`, site.url).toString();
      return `<entry><title>${escapeXml(`${release.projectName} ${release.version}`)}</title><id>${escapeXml(link)}</id><link href="${escapeXml(link)}"/><updated>${release.publishedAt}T00:00:00Z</updated><summary>${escapeXml(release.summary)}</summary></entry>`;
    })
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>${escapeXml(site.name)}</title><id>${escapeXml(site.url)}</id><link href="${escapeXml(site.url)}"/><link href="${escapeXml(`${site.url}/feed.xml`)}" rel="self"/><updated>${updated}T00:00:00Z</updated>${entries}</feed>`;
  return new Response(body, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
