import { SiteHeader } from '../_components/SiteHeader';

import styles from './layout.module.css';

export default function ArticlesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">{children}</main>
    </>
  );
}
