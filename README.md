# Recompiled Podcast Site

Recompiled is a SvelteKit site for the Recompiled podcast. It includes:
- A custom landing page with hero, episodes, hosts, and about sections
- A server endpoint that fetches and parses the podcast RSS feed
- Styling and motion tuned for desktop and mobile

## Stack

- SvelteKit + Vite
- TypeScript (with Svelte type checking)
- ESLint + Prettier
- Vitest
- Vercel adapter for deployment

## Local Development

Install dependencies:

```sh
npm install
```

Start dev server:

```sh
npm run dev
```

Start dev server and open browser:

```sh
npm run dev -- --open
```

## Quality Checks

Type and Svelte checks:

```sh
npm run check
```

Linting:

```sh
npm run lint
```

Unit tests:

```sh
npm run test
```

## Build

Create production build:

```sh
npm run build
```

Preview production build locally:

```sh
npm run preview
```

## Deployment and Hosting (Vercel)

This project is configured for Vercel via @sveltejs/adapter-vercel.

Typical deployment flow:
1. Push changes to your Git provider branch.
2. Vercel detects the push and runs build.
3. If build passes, Vercel publishes a new deployment.

Optional environment variable:
- PODCAST_RSS_URL: Override the default RSS feed URL used by the server endpoint.

If PODCAST_RSS_URL is not set, the app uses the default podcast RSS URL in the API route.

## Project Notes

- Main page route: src/routes/+page.svelte
- RSS API route: src/routes/api/spotify/+server.ts
- Global styles: src/app.css
