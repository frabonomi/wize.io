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

## Quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Releases

Run `pnpm release:dry` to preview the next version and changelog. Run `pnpm release` to update the version, changelog, commit, and tag using standard-version.
