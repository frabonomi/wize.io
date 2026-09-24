import slugify from '@sindresorhus/slugify';

import { registeredArticles } from './registry.generated';
import type { ArticleMetadata } from './types';

const seenIds = new Set<string>();

function isCalendarDate(value: string) {
  const date = new Date(value);
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(date.valueOf()) &&
    date.toISOString().slice(0, 10) === value
  );
}

const articles = registeredArticles.map(({ Content, metadata }) => {
  if (!/^[a-z0-9]{5}$/.test(metadata.id)) {
    throw new Error(`Invalid article id: ${metadata.id}`);
  }
  if (seenIds.has(metadata.id)) {
    throw new Error(`Duplicate article id: ${metadata.id}`);
  }
  seenIds.add(metadata.id);
  if (!metadata.title.trim()) {
    throw new Error(`Article ${metadata.id} needs a title`);
  }
  if (!metadata.createdAt || !isCalendarDate(metadata.createdAt)) {
    throw new Error(`Article ${metadata.id} needs a valid creation date`);
  }
  if (!metadata.draft && !metadata.description.trim()) {
    throw new Error(`Published article ${metadata.id} needs a description`);
  }
  if (!metadata.draft && !metadata.publishedAt) {
    throw new Error(
      `Published article ${metadata.id} needs a publication date`,
    );
  }
  for (const [name, date] of [
    ['publishedAt', metadata.publishedAt],
    ['updatedAt', metadata.updatedAt],
  ]) {
    if (date && !isCalendarDate(date)) {
      throw new Error(`Article ${metadata.id} has an invalid ${name}: ${date}`);
    }
  }

  const readableSlug = slugify(metadata.slugOverride ?? metadata.title);
  if (metadata.slugOverride && !readableSlug) {
    throw new Error(`Article ${metadata.id} has an invalid slug override`);
  }

  return {
    id: metadata.id,
    slug: `${metadata.id}-${readableSlug || 'article'}`,
    metadata,
    Content,
  };
});

type Article = (typeof articles)[number];
type PublishedArticle = Article & {
  metadata: ArticleMetadata & { draft: false; publishedAt: string };
};

function isPublishedArticle(article: Article): article is PublishedArticle {
  return !article.metadata.draft;
}

export function getPublishedArticles() {
  return articles
    .filter(isPublishedArticle)
    .sort((a, b) =>
      b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
    );
}

export function getVisibleArticles() {
  if (process.env.NODE_ENV === 'production') {
    return getPublishedArticles();
  }

  return [...articles].sort((a, b) =>
    (b.metadata.publishedAt ?? b.metadata.createdAt).localeCompare(
      a.metadata.publishedAt ?? a.metadata.createdAt,
    ),
  );
}

export function getVisibleArticle(segment: string) {
  const id = segment.match(/^([a-z0-9]{5})(?:-|$)/)?.[1];
  return id
    ? getVisibleArticles().find((article) => article.id === id)
    : undefined;
}
