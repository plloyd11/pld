# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Peter Lloyd's personal site, built on the Tailwind UI **Spotlight** template (commercial license — Tailwind UI license applies to the template code). Next.js 13 with the **Pages Router** (no `app/` directory), MDX articles, Tailwind CSS, dark mode via the `dark:` class strategy.

## Commands

Package manager: **pnpm** (lockfile is `pnpm-lock.yaml`). The README mentions `npm install`, but use pnpm to avoid lockfile drift.

```bash
pnpm install
pnpm dev              # next dev — http://localhost:3000
pnpm build            # next build (also generates RSS feed via getStaticProps in production)
pnpm start            # next start (production server)
pnpm lint             # next lint (eslint-config-next/core-web-vitals)
```

There is no test suite.

`.env.local` requires `NEXT_PUBLIC_SITE_URL` (used by the RSS feed generator).

## Architecture

### Path alias
`@/*` → `src/*` (configured in `jsconfig.json`). Always import via `@/components/...`, `@/lib/...`, `@/images/...`, `@/styles/...`.

### Pages and routing
- `src/pages/*.jsx` — top-level routes (`index`, `about`, `clients`, `speaking`, `uses`, `thank-you`).
- `src/pages/articles/index.jsx` — article listing.
- `src/pages/articles/<slug>/index.mdx` — individual articles.
- `next.config.mjs` sets `pageExtensions: ['jsx', 'mdx']`. Only `.jsx` and `.mdx` files in `src/pages` become routes.
- `src/pages/_app.jsx` wraps every page with `<Header />` / `<Footer />` and tracks `previousPathname` so article pages can render a "back" button.

### MDX articles
Each article is `src/pages/articles/<slug>/index.mdx` and **must**:
1. Import `ArticleLayout` from `@/components/ArticleLayout`.
2. Export a `meta` object: `{ author, date (YYYY-MM-DD string), title, description }`.
3. Default-export `(props) => <ArticleLayout meta={meta} {...props} />`.

`src/lib/getAllArticles.js` loads articles by globbing `*.mdx` and `*/index.mdx` under `src/pages/articles`, dynamically importing each, and sorting by `meta.date` descending. The article listing and homepage both call this.

`ArticleLayout` short-circuits to `children` when `isRssFeed` is true so the same component renders both the page and the feed item HTML.

### RSS feed
`src/lib/generateRssFeed.js` writes `public/rss/feed.xml` and `public/rss/feed.json`. It is invoked from `src/pages/index.jsx`'s `getStaticProps`, but **only when `process.env.NODE_ENV === 'production'`** — so the feed is regenerated as a side effect of `next build`, not during `next dev`. The author block (`Spencer Sharp` / `spencer@planetaria.tech`) is template boilerplate left over from Spotlight; update it before relying on the feed.

### Components
`src/components/` holds presentational primitives (`Card`, `Container`, `Section`, `Prose`, `Button`, `SocialIcons`) and layout shells (`Header`, `Footer`, `SimpleLayout`, `ArticleLayout`). All use Tailwind classes directly — there is no CSS-in-JS or CSS modules layer. Conditional class merging uses `clsx`.

### Styling
- `src/styles/tailwind.css` — Tailwind entrypoint, imported once in `_app.jsx`.
- `src/styles/prism.css` — code-block syntax highlighting (rehype-prism).
- `tailwind.config.js` — Spotlight-style typography/color extensions; dark mode is class-driven.
- Prettier is configured with `singleQuote: true`, no semicolons, and `prettier-plugin-tailwindcss` (which auto-sorts class names). Match this style when editing.
