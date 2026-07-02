import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: 'VibTools Open Source',
      short_name: 'VibTools',
      description: 'The Official Open Source Developer Ecosystem',
      start_url: '/',
      display: 'standalone',
      background_color: '#0D1117',
      theme_color: '#0D1117',
      icons: [
        { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } },
  );
