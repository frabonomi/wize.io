import type { MetadataRoute } from 'next';

import { getPublishedArticles } from '@/content/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://wize.io' },
    { url: 'https://wize.io/articles' },
    ...getPublishedArticles().map(({ slug, metadata }) => ({
      url: `https://wize.io/articles/${slug}`,
      lastModified: metadata.updatedAt ?? metadata.publishedAt,
    })),
  ];
}
