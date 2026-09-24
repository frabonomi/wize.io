# wize.io

Francesco Bonomi’s portfolio, built with Next.js, React, TypeScript, and CSS Modules.

## Development

Use Node.js 24.19.0 and pnpm 10.17.0.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Releases

Run `pnpm release:dry` to preview the next version and changelog. Run `pnpm release` to update the version, changelog, commit, and tag using standard-version.
