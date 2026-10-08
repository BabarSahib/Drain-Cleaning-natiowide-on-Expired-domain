export const prerender = false;

import type { APIRoute } from 'astro';
import { services } from '../data/services';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://maxsonplumbing.com';
  const now = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${baseUrl}/services/`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/about/`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/contact/`, priority: '0.8', changefreq: 'monthly' },
  ];

  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}/`,
    priority: '0.9',
    changefreq: 'weekly',
  }));

  const allUrls = [...staticUrls, ...serviceUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
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
