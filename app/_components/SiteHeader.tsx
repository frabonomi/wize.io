import Link from 'next/link';

import styles from './SiteHeader.module.css';
import { ThemeToggle } from './ThemeToggle';

function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <strong>wize</strong> <span>io</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.siteHeader} id="top">
      <Link aria-label="wize.io, home" href="/">
        <Wordmark />
      </Link>

      <nav aria-label="Primary navigation" className={styles.navigation}>
        <Link href="/articles">Articles</Link>
        <a href="mailto:francesco@wize.io">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
