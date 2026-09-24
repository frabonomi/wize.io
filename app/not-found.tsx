import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <p>404</p>
      <h1>The page you’re looking for is not here.</h1>
      <Link href="/">Return home</Link>
    </main>
  );
}
