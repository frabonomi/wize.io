import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getVisibleArticle, getVisibleArticles } from '@/content/articles';

import styles from './page.module.css';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  weekday: 'short',
  year: 'numeric',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getVisibleArticle(slug);

  if (!article) {
    return {};
  }

  const { metadata } = article;
  const url = `/articles/${slug}`;

  return {
    title: `${metadata.title} — Francesco Bonomi`,
    description: metadata.description,
    alternates: metadata.draft ? undefined : { canonical: url },
    robots: metadata.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      url,
      publishedTime: metadata.publishedAt,
      modifiedTime: metadata.updatedAt,
      authors: ['Francesco Bonomi'],
      images: [metadata.ogImage ?? '/images/opengraph-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage ?? '/images/opengraph-image.png'],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getVisibleArticle(slug);

  if (!article) {
    notFound();
  }

  const { Content, metadata } = article;
  const moreArticles = getVisibleArticles()
    .filter((candidate) => candidate.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <article className={styles.article}>
        <h1 className={styles.title}>{metadata.title}</h1>

        <div className={styles.bodyColumn}>
          <div className={styles.details}>
            <div>
              {metadata.draft && (
                <span className={styles.draft}>Draft preview · </span>
              )}
              <time dateTime={metadata.publishedAt}>
                {dateFormatter.format(new Date(metadata.publishedAt))}
              </time>
              {metadata.updatedAt && (
                <span className={styles.updated}>
                  Updated {dateFormatter.format(new Date(metadata.updatedAt))}
                </span>
              )}
            </div>
            <ul aria-label="Topics" className={styles.tags}>
              {metadata.tags.map((tag) => (
                <li key={tag}>+{tag}</li>
              ))}
            </ul>
          </div>

          {metadata.toc && metadata.toc.length > 0 && (
            <nav aria-label="On this page" className={styles.toc}>
              <span>On this page</span>
              <ol>
                {metadata.toc.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className={styles.prose}>
            <Content />
          </div>
        </div>
      </article>

      {moreArticles.length > 0 && (
        <aside aria-labelledby="more-articles-title" className={styles.more}>
          <h2 id="more-articles-title">More articles from wize.io</h2>
          <ul>
            {moreArticles.map(({ slug: moreSlug, metadata: more }) => (
              <li key={moreSlug}>
                <a href={`/articles/${moreSlug}`}>
                  <span>{more.title}</span>
                  <time dateTime={more.publishedAt}>
                    {dateFormatter.format(new Date(more.publishedAt))}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
