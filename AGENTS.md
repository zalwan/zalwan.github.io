You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## Project Workflow

- Use `pnpm` for all package and script operations.
- For Svelte/SvelteKit implementation work, read nearby components and data modules before editing.
- Prefer Svelte 5 runes and existing local patterns; avoid unrelated architecture changes.
- Validate code changes with:
  - `pnpm run check`
  - `pnpm run lint`
  - `pnpm run test:e2e`
  - `pnpm run build`
- If the dev browser renders blank after dependency upgrades, restart Vite with `pnpm run dev -- --host 127.0.0.1 --force`.

## Codex Setup

- Workspace MCP config lives in `.vscode/mcp.json`.
- The Svelte MCP and Playwright MCP servers are launched through `.vscode/mcp-*.js` wrappers so the setup works from WSL/Linux and Windows.
- Project-specific Codex skill lives in `.codex/skills/zalwan-sveltekit`.
- Playwright browser smoke tests live in `tests/e2e`.
