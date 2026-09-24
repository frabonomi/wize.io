import { socialLinks } from '../_data/links';

import styles from './FollowMe.module.css';

export function FollowMe() {
  return (
    <section aria-labelledby="social-title">
      <h2 className={styles.sectionLabel} id="social-title">
        Follow me
      </h2>
      <ul className={styles.socialList}>
        {socialLinks.map(({ label, url }) => (
          <li key={label}>
            <a href={url} rel="me noreferrer" target="_blank">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
