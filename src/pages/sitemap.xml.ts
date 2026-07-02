import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';
import { site } from '@/config/site';

const routes = [
  '/',
  '/projects/',
  ...projects.map((project) => `/project/${project.slug}/`),
  '/downloads/',
  '/templates/',
  '/tools/',
  '/releases/',
  '/community/',
  '/changelog/',
  '/about/',
  '/privacy/',
  '/license/',
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
  const urls = routes
    .map((route) => `<url><loc>${escapeXml(new URL(route, site.url).toString())}</loc></url>`)
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
