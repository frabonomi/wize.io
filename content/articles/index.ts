import GlassArticle, {
  article as glassArticleMetadata,
} from './the-glass-looked-wrong/index.mdx';
import type { ArticleMetadata } from './types';

const articles = [
  {
    slug: 'the-glass-looked-wrong',
    metadata: glassArticleMetadata as ArticleMetadata,
    Content: GlassArticle,
  },
];

export function getPublishedArticles() {
  return articles
    .filter(({ metadata }) => !metadata.draft)
    .sort((a, b) =>
      b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
    );
}

export function getVisibleArticles() {
  if (process.env.NODE_ENV === 'production') {
    return getPublishedArticles();
  }

  return [...articles].sort((a, b) =>
    b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
  );
}

export function getVisibleArticle(slug: string) {
  return getVisibleArticles().find((article) => article.slug === slug);
}
