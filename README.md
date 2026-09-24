# wize.io

Francesco Bonomi’s portfolio, built with Next.js, React, TypeScript, and CSS Modules.

## Development

Use Node.js 24.19.0 and pnpm 10.34.5.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

`app/page.tsx` composes the portfolio page. Its interactive UI lives in
`app/_components/` with colocated CSS Modules, and the project and social links
live in `app/_data/links.ts`. Site-wide styles and metadata stay in the root
layout.

## Articles

Articles live in `content/articles/<slug>/index.mdx`, alongside their images.
The article's `export const article` object supplies the title, description,
publication date, tags, and draft state. Register each new MDX file in
`content/articles/index.ts` so the article list, routes, RSS feed, and sitemap
use the same content source.

The Mowji article is a draft based on the supplied page preview. Start the dev
server and open
`http://localhost:3000/articles/the-glass-looked-wrong` to review it. Drafts
appear locally but are excluded from production article routes, the RSS feed,
and the sitemap. Set `draft: false` once the article is complete and ready to
publish.

Use Markdown code fences with a language name for highlighted code blocks.
Import local images into the MDX file and render them with `ArticleImage`, which
accepts `alt`, optional `caption`, and optional `cropped` props. Hosted video can
use `VideoEmbed` with `provider="youtube"` or `provider="vimeo"`, a `videoId`,
and a descriptive `title`. Headings at level two receive linkable IDs; for a
long article, add an optional `toc` array to the article metadata with entries
matching those IDs.

## Quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Releases

Run `pnpm release:dry` to preview the next version and changelog. Run `pnpm release` to update the version, changelog, commit, and tag using standard-version.
