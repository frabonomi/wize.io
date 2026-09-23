import Image from 'next/image'

import { ThemeToggle } from '@/components/ThemeToggle'

import styles from './page.module.css'

const projects: { name: string; url: string }[] = [
  { name: 'Mowji', url: 'https://mowji.app/' },
  { name: 'Sober Ringtones', url: 'https://sober-ringtones.wize.io/' },
]

const articles: { date: string; title: string }[] = [
  {
    date: 'Yesterday',
    title:
      'The UX around Device Control and Data Access (formerly known as Accessibility) permission',
  },
  {
    date: '3 days ago',
    title: 'The glass looked wrong because the window was behaving correctly',
  },
]

function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <strong>Wize</strong> <span>io</span>
    </span>
  )
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header className={styles.siteHeader} id="top">
        <a aria-label="Wize.io, home" href="#top">
          <Wordmark />
        </a>

        <nav aria-label="Primary navigation" className={styles.navigation}>
          <ThemeToggle />
          <a href="#articles">Articles</a>
          <a
            href="https://www.linkedin.com/in/fbonomi/"
            rel="noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="content">
        <section aria-labelledby="hero-title" className={styles.hero}>
          <h1
            aria-label="I'm Francesco, a developer and designer. I build apps and websites for myself and clients."
            className={styles.heroTitle}
            id="hero-title"
          >
            I’m Francesco, a developer and designer. <br /> I build apps and
            websites for myself and clients.
          </h1>

          <div className={styles.portraitStage}>
            <div className={styles.portraitArtwork}>
              <Image
                alt="Halftone portrait of Francesco Bonomi"
                className={styles.portrait}
                height={855}
                priority
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
                <a href={project.url} rel="noreferrer" target="_blank">
                  <span>{project.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <figure className={styles.imageBand}>
          <Image
            alt="Duotone halftone study of hands at work"
            className={styles.imageBandImage}
            height={500}
            loading="eager"
            sizes="100vw"
            src="/images/studio-halftone.png"
            width={1500}
          />
        </figure>

        <section
          aria-labelledby="articles-title"
          className={styles.articles}
          id="articles"
        >
          <h2 className={styles.sectionLabel} id="articles-title">
            Recent articles
          </h2>
          <div className={styles.articleList}>
            {articles.map((article) => (
              <article className={styles.article} key={article.title}>
                <h3>{article.title}</h3>
                <time>{article.date}</time>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a aria-label="Back to the top" href="#top">
          <Wordmark />
        </a>
      </footer>
    </>
  )
}
