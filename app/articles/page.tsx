import type { Metadata } from 'next';
import Link from 'next/link';

import { getPublishedArticles, getVisibleArticles } from '@/content/articles';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Articles — Francesco Bonomi',
  description: 'Notes on development, design, and the projects behind them.',
  alternates: { canonical: '/articles' },
  robots: getPublishedArticles().length
    ? undefined
    : { index: false, follow: true },
};

const dateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

export default function ArticlesPage() {
  const articles = getVisibleArticles();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Articles</h1>
      <p className={styles.intro}>
        What I’m learning while designing and building software.
      </p>

      {articles.length > 0 ? (
        <ul className={styles.list}>
          {articles.map(({ slug, metadata: article }) => (
            <li className={styles.item} key={slug}>
              <Link href={`/articles/${slug}`}>
                <span className={styles.itemTitle}>{article.title}</span>
                <span className={styles.itemMeta}>
                  {article.draft
                    ? 'Draft preview'
                    : dateFormatter.format(new Date(article.publishedAt))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>The first article is on its way.</p>
      )}
    </div>
  );
}
