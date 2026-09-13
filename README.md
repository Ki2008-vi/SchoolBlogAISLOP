# Schoolblog

A [Vite](https://vite.dev) + React + TypeScript single-page app with [Tailwind CSS v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com) components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck (`tsc --noEmit`) then production build to `dist/`
- `npm run preview` — preview the production build

## Structure

- `src/pages/` — route pages (Home, NotFound). Routing is handled by [wouter](https://github.com/molefrog/wouter).
- `src/components/ui/` — shadcn/ui components
- `src/lib/utils.ts` — `cn()` class merge helper
- `src/hooks/`, `src/contexts/` — app hooks and the light/dark theme context
- `shared/const.ts` — shared constants resolved via the `@shared/*` path alias

## Environment

Copy `.env.example` to `.env` and fill in values:

- `VITE_ANALYTICS_ENDPOINT` / `VITE_ANALYTICS_WEBSITE_ID` — optional Umami analytics

Hero and gallery images load from `/images/...` in the `public/` directory (see `src/pages/Home.tsx`).