import Image from 'next/image';

import { ElasticProjectLink } from './_components/ElasticProjectLink';
import { FollowMe } from './_components/FollowMe';
import { SiteHeader } from './_components/SiteHeader';
import { projects } from './_data/links';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <SiteHeader />

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

        <div className={styles.followMe}>
          <FollowMe />
        </div>
      </main>
    </>
  );
}
