# CLAUDE.md - zalwan.github.io

## Project Overview

Personal portfolio website for **Rizal Suryawan** ("Zalwan Studio"), deployed as a static site to GitHub Pages at `https://zalwan.github.io`. Built with SvelteKit, Svelte 5, Tailwind CSS v4, and mdsvex for markdown content.

## MCP Tools Policy

- **Always use MCP Context7** to look up documentation for any library, framework, or tool used in this project (SvelteKit, Svelte 5, Tailwind CSS, Vite, mdsvex, etc.) before writing code. Do not rely on training data alone -- fetch current docs via Context7.
- **Always use MCP Chrome DevTools** to inspect, debug, and verify UI changes in the browser. Take snapshots/screenshots to confirm layout, responsiveness, and visual correctness after making changes.

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5 (runes mode: `$props()`, `$state()`, `$derived()`, `$effect()`)
- **Adapter**: `@sveltejs/adapter-static` -- fully prerendered static site (`export const prerender = true`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (uses CSS-first config with `@import 'tailwindcss'`, `@plugin` directives)
- **Markdown**: mdsvex (`*.svx` files supported)
- **Icons**: `@lucide/svelte`
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm (see `.npmrc`)
- **Build Tool**: Vite 7

## Commands

- `pnpm dev` -- start dev server
- `pnpm build` -- production build (static output)
- `pnpm preview` -- preview production build
- `pnpm check` -- svelte-check + TypeScript validation
- `pnpm lint` -- prettier check + eslint
- `pnpm format` -- auto-format with prettier

## Project Structure

```
src/
  app.html              -- HTML shell template
  app.d.ts              -- SvelteKit type declarations
  lib/
    index.ts            -- barrel export for all components and data
    components/
      Header.svelte     -- site navigation header
      Footer.svelte     -- site footer
      Hero.svelte       -- hero section with profile, social links, logos
      Logos.svelte       -- tech logo carousel/display
      MainWrapper.svelte -- page wrapper layout
      ThemeProvider.svelte -- dark theme wrapper (gradient bg)
    data/
      index.ts          -- barrel export for all data modules
      hero.ts           -- profile info, contact links, social media links
      logo.ts           -- tech/tool logo data
      navbar.ts         -- navigation items with routes and emojis
  routes/
    +layout.svelte      -- root layout (SEO meta, Header, Footer, MainWrapper)
    +layout.ts          -- enables `prerender = true` for all routes
    +page.svelte        -- home page (Hero component)
    +error.svelte       -- error page
    layout.css          -- root CSS (Tailwind imports + plugins)
    about/+page.svelte
    blog/+page.svelte
    contact/+page.svelte
    projects/+page.svelte
static/
  img/                  -- images (hero portrait, etc.)
  robots.txt
  sitemap.xml
  *.svg                 -- tech logos (deno, next, shadcn, tailwind)
```

## Architecture Patterns

### Component Conventions
- All components are in `src/lib/components/` and exported via `src/lib/index.ts`
- Import components from `$lib` (e.g., `import { Hero } from '$lib'`)
- Components use Svelte 5 runes: `$props()` for props, snippet `{@render children()}` for slots
- TypeScript is used in all `<script lang="ts">` blocks

### Data Layer
- Static data lives in `src/lib/data/` with typed exports
- Data modules are grouped by feature (hero, logo, navbar)
- All data is re-exported through `src/lib/data/index.ts` and `src/lib/index.ts`
- Access via: `import data from '$lib/data'` then `data.hero.profileData`

### Styling
- Tailwind CSS v4 with CSS-first configuration (no `tailwind.config.js`)
- Plugins loaded via `@plugin` directive in `layout.css`: `@tailwindcss/forms`, `@tailwindcss/typography`
- Dark theme with slate/black gradient background (set in ThemeProvider)
- Amber accent color palette throughout
- Responsive design: mobile-first with `lg:` breakpoint adjustments

### Routing
- File-based routing via SvelteKit
- Pages: `/`, `/about`, `/blog`, `/projects`, `/contact`
- All pages are prerendered (static site generation)
- SEO: Open Graph + Twitter Card meta tags in root layout and per-page

## Code Style

- **Formatting**: Prettier with tabs, single quotes, no trailing commas, 100 char print width
- **Linting**: ESLint with TypeScript + Svelte plugins; `no-undef` is off (per typescript-eslint recommendation)
- **Svelte files**: parsed by `prettier-plugin-svelte`
- **CSS classes**: sorted by `prettier-plugin-tailwindcss`

## Important Notes

- This is a **static site** -- no server-side rendering, no API routes, no dynamic server logic
- All routes are prerendered at build time via `adapter-static`
- The site URL is `https://zalwan.github.io`
- Images use WebP format for performance (hero image)
- Navigation items can be disabled via the `disabled` flag in `navbar.ts`
