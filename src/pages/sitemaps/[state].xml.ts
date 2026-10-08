export const prerender = false;

import type { APIRoute } from 'astro';
import { getStateData } from '../../data/locations';

export const GET: APIRoute = async ({ params }) => {
  const stateSlug = params.state?.replace(/\.xml$/, '').toLowerCase() || '';
  const stateData = getStateData(stateSlug);

  if (!stateData) {
    return new Response('Not Found', { status: 404 });
  }

  const baseUrl = 'https://maxsonplumbing.com';
  const now = new Date().toISOString().split('T')[0];

  const urls: { url: string; priority: string; changefreq: string }[] = [
    { url: `${baseUrl}/states/${stateData.slug}/`, priority: '0.8', changefreq: 'weekly' }
  ];

  if (Array.isArray(stateData.cities)) {
    for (const city of stateData.cities) {
      urls.push({
        url: `${baseUrl}/${stateData.slug}/${city.slug}/`,
        priority: '0.7',
        changefreq: 'weekly'
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
