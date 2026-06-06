# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Install dependencies and start a development server:

```sh
pnpm install
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Verification

```sh
pnpm run check
pnpm run lint
pnpm run test:e2e
pnpm run build
```

Install the local Playwright browser once when needed:

```sh
pnpm exec playwright install chromium
```

Note: Playwright `1.60.0` does not support bundled Chromium on Ubuntu 26.04 yet. The GitHub Actions workflow runs E2E tests on `ubuntu-24.04` for this reason.

## Codex Tooling

- Svelte MCP and Playwright MCP are configured in `.vscode/mcp.json`.
- Cross-platform MCP wrappers live in `.vscode/mcp-*.js`.
- The project Codex skill lives in `.codex/skills/zalwan-sveltekit`.
