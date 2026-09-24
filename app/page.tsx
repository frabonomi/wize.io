import Image from 'next/image';

import { ElasticProjectLink } from './_components/ElasticProjectLink';
import { ThemeToggle } from './_components/ThemeToggle';
import { projects, socialLinks } from './_data/links';
import styles from './page.module.css';

function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <strong>wize</strong> <span>io</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header className={styles.siteHeader} id="top">
        <a aria-label="wize.io, home" href="#top">
          <Wordmark />
        </a>

        <nav aria-label="Primary navigation" className={styles.navigation}>
          <a href="mailto:francesco@wize.io">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="content">
        <section aria-labelledby="hero-title" className={styles.hero}>
          <h1 className={styles.heroTitle} id="hero-title">
            I’m Francesco, a developer and designer. <br /> I build apps and
            websites for myself and clients.
          </h1>

          <div className={styles.portraitStage}>
            <div className={styles.portraitArtwork}>
              <Image
                alt="Halftone portrait of Francesco Bonomi"
                className={styles.portrait}
                height={855}
                preload
                src="/images/francesco-halftone.png"
                width={855}
              />
              <span
                aria-hidden="true"
                className={`${styles.blendBlock} ${styles.blendBlockTop}`}
              />
              <span
                aria-hidden="true"
                className={`${styles.blendBlock} ${styles.blendBlockBottom}`}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-title" className={styles.projects}>
          <h2 className={styles.sectionLabel} id="projects-title">
            Projects
          </h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.name}>
                <ElasticProjectLink {...project} />
              </li>
            ))}
          </ul>
        </section>

        <figure className={styles.imageBand}>
          <Image
            alt="Duotone halftone study of hands at work"
            className={styles.imageBandImage}
            height={500}
            sizes="100vw"
            src="/images/studio-halftone.png"
            width={1500}
          />
        </figure>

        <section aria-labelledby="social-title" className={styles.social}>
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
      </main>
    </>
  );
}
