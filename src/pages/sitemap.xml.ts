export const prerender = false;

import type { APIRoute } from 'astro';
import { allStatesList } from '../data/locations';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://maxsonplumbing.com';
  const now = new Date().toISOString().split('T')[0];

  const sitemaps = [
    `${baseUrl}/sitemap-main.xml`,
    ...allStatesList.map((state) => `${baseUrl}/sitemaps/${state.slug}.xml`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
