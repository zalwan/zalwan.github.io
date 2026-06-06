---
name: zalwan-sveltekit
description: Use when working in the zalwan.github.io SvelteKit portfolio, including routes, components, resume/blog data, static deployment, MCP setup, or Playwright smoke tests.
---

# Zalwan SvelteKit Portfolio

## Workflow

- Start by reading nearby components/data before editing. This site is small and pattern consistency matters more than new abstractions.
- Use the Svelte MCP docs first for Svelte or SvelteKit questions when the MCP server is available.
- Prefer minimal production-safe changes. Avoid unrelated architecture changes.
- Use `pnpm` only; the repo declares `packageManager: pnpm@11.5.2`.

## Stack

- Svelte 5 with runes, SvelteKit 2, Vite 8, TypeScript, Tailwind CSS 4, mdsvex, static adapter.
- Content lives in `src/lib/data/*`, `resume.json`, and `src/content/blog/*.svx`.
- UI lives mostly in `src/lib/components/*` and `src/routes/*/+page.svelte`.
- Deployment is static GitHub Pages via `.github/workflows/deploy.yml`.

## Verification

Run these after code or tooling changes:

```sh
pnpm run check
pnpm run lint
pnpm run test:e2e
pnpm run build
```

If the dev browser shows a blank page after dependency upgrades, restart Vite with:

```sh
pnpm run dev -- --host 127.0.0.1 --force
```

## Browser Testing

- Playwright tests live in `tests/e2e`.
- Keep tests smoke-level: main route renders, important headings exist, and key media/links are present.
- Do not assert brittle animation or generated class names.
