import { getPublishedArticles } from '@/content/articles';

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = getPublishedArticles()
    .map(({ slug, metadata }) => {
      const url = `https://wize.io/articles/${slug}`;

      return [
        '<item>',
        `<title>${escapeXml(metadata.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="false">wize.io:article:${metadata.id}</guid>`,
        `<description>${escapeXml(metadata.description)}</description>`,
        `<pubDate>${new Date(metadata.publishedAt).toUTCString()}</pubDate>`,
        '</item>',
      ].join('');
    })
    .join('');

  const feed = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"><channel>',
    '<title>wize.io articles</title>',
    '<link>https://wize.io/articles</link>',
    '<description>Notes on development and design by Francesco Bonomi.</description>',
    '<language>en</language>',
    items,
    '</channel></rss>',
  ].join('');

  return new Response(feed, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
