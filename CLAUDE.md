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
  content/
    blog/               -- blog post content (.svx files with frontmatter)
  lib/
    index.ts            -- barrel export for all components and data
    components/
      Header.svelte     -- site navigation header
      Footer.svelte     -- site footer
      Hero.svelte       -- hero section with profile, social links, logos
      Logos.svelte       -- tech logo carousel/display
      MainWrapper.svelte -- page wrapper layout
      ThemeProvider.svelte -- dark theme wrapper (gradient bg)
      ExperienceCard.svelte -- work experience card with role timeline
      ProjectCard.svelte    -- project portfolio card
      SkillCard.svelte      -- skill category with keyword badges
      BlogCard.svelte       -- blog post preview card
    data/
      index.ts          -- barrel export for all data modules
      hero.ts           -- profile info, contact links, social media links
      logo.ts           -- tech/tool logo data
      navbar.ts         -- navigation items with routes and emojis
      resume.ts         -- resume data (experience, projects, skills, languages)
      blog.ts           -- blog post loader (getPosts, getPost)
  routes/
    +layout.svelte      -- root layout (SEO meta, Header, Footer, MainWrapper)
    +layout.ts          -- enables `prerender = true` for all routes
    +page.svelte        -- home page (Hero component)
    +error.svelte       -- error page
    layout.css          -- root CSS (Tailwind imports + plugins)
    about/+page.svelte  -- about page (summary, experience, skills, languages)
    blog/
      +page.svelte      -- blog listing page
      +page.ts          -- blog listing data loader
      [slug]/
        +page.svelte    -- blog post detail page with prose styling
        +page.ts        -- blog post data loader with entries() for prerendering
    contact/+page.svelte -- contact page (email, phone, location, LinkedIn, website)
    projects/+page.svelte -- projects portfolio grid
static/
  img/                  -- images (hero portrait, etc.)
  robots.txt
  sitemap.xml
  *.svg                 -- tech logos (deno, next, shadcn, tailwind)
```

## Architecture Patterns

### Component Conventions
- All components are in `src/lib/components/` and exported via `src/lib/index.ts`
- Import components from `$lib` (e.g., `import { Hero, ExperienceCard } from '$lib'`)
- Components use Svelte 5 runes: `$props()` for props, snippet `{@render children()}` for slots
- TypeScript is used in all `<script lang="ts">` blocks

### Data Layer
- Static data lives in `src/lib/data/` with typed exports
- Data modules are grouped by feature (hero, logo, navbar, resume, blog)
- All data is re-exported through `src/lib/data/index.ts` and `src/lib/index.ts`
- Access via: `import data from '$lib/data'` then `data.resume.experience`
- Resume data (`resume.ts`) is the single source of truth -- `hero.ts` imports from it
- Blog data (`blog.ts`) uses `import.meta.glob` to scan `.svx` files at build time

### Resume Data Flow
- `resume.json` (source) -> `src/lib/data/resume.ts` (typed data module)
- `hero.ts` imports `summary` and `basics` from `resume.ts` (single source of truth)
- Pages import from `data.resume` for experience, projects, skills, languages
- Contact page sources email, phone, location, website, LinkedIn from `resume.basics`

### Blog System
- Blog posts are `.svx` files in `src/content/blog/` with YAML frontmatter
- Required frontmatter: `title`, `slug`, `description`, `date`, `tags`, `published`
- `blog.ts` provides `getPosts()` (sorted by date) and `getPost(slug)` functions
- Posts are loaded via `import.meta.glob('/src/content/blog/*.svx', { eager: true })`
- Dynamic `[slug]` route uses `entries()` for static prerendering of all posts
- Blog post pages use `@tailwindcss/typography` (`prose`) for article styling

### Styling
- Tailwind CSS v4 with CSS-first configuration (no `tailwind.config.js`)
- Plugins loaded via `@plugin` directive in `layout.css`: `@tailwindcss/forms`, `@tailwindcss/typography`
- Dark theme with slate/black gradient background (set in ThemeProvider)
- Amber accent color palette throughout
- Responsive design: mobile-first with `lg:` breakpoint adjustments
- Blog post pages use `prose prose-invert prose-amber` for markdown content

### Routing
- File-based routing via SvelteKit
- Pages: `/`, `/about`, `/blog`, `/blog/[slug]`, `/projects`, `/contact`
- All pages are prerendered (static site generation)
- Blog `[slug]` route exports `entries()` to generate static pages for each post
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
- Resume data in `resume.ts` is the single source of truth for profile information
- Adding a new blog post only requires creating a `.svx` file in `src/content/blog/`
