# Technical Documentation

## Table of Contents

- [Resume Data Integration](#resume-data-integration)
- [Blog System](#blog-system)
- [Component Reference](#component-reference)
- [Adding Content](#adding-content)

---

## Resume Data Integration

### Overview

Resume data is sourced from `resume.json` and transformed into a typed TypeScript module at `src/lib/data/resume.ts`. This module serves as the **single source of truth** for all profile-related content across the site.

### Data Flow

```
resume.json (source file)
    │
    ▼
src/lib/data/resume.ts (typed module)
    │
    ├──► src/lib/data/hero.ts (imports basics.name, basics.headline, summary)
    │       └──► Hero.svelte (home page)
    │
    ├──► /about page (summary, experience, skills, languages)
    ├──► /projects page (projects)
    └──► /contact page (basics: email, phone, location, website, linkedin)
```

### Type Definitions

```typescript
interface Role {
	id: string;
	position: string;
	period: string;
	description: string;
}

interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	period: string;
	website: string;
	description: string;
	roles: Role[]; // supports multi-role career progression
}

interface Project {
	id: string;
	name: string;
	period: string;
	website: string; // empty string if no link
	description: string;
}

interface Skill {
	id: string;
	name: string;
	keywords: string[]; // technology/tool tags
}

interface Language {
	id: string;
	language: string;
	fluency: string;
}
```

### Exported Data

| Export       | Type           | Used By                          |
| ------------ | -------------- | -------------------------------- |
| `summary`    | `string`       | Hero (via hero.ts), About page   |
| `basics`     | `object`       | Hero (via hero.ts), Contact page |
| `experience` | `Experience[]` | About page                       |
| `projects`   | `Project[]`    | Projects page                    |
| `skills`     | `Skill[]`      | About page                       |
| `languages`  | `Language[]`   | About page                       |

### Hero Integration

`hero.ts` imports from `resume.ts` to maintain a single source of truth:

```typescript
import { summary, basics } from './resume';

export const profileData = {
	badge: `✨ ${basics.headline}`,
	heading: "Hello! I'm",
	fullName: basics.name,
	description: summary
	// ...
};
```

---

## Blog System

### Overview

The blog uses **mdsvex** (markdown + Svelte) with a file-based content approach. Blog posts are `.svx` files stored in `src/content/blog/` and loaded at build time via Vite's `import.meta.glob`.

### Architecture

```
src/content/blog/
  ├── building-ai-agents-function-calling.svx
  ├── flutter-bloc-vs-provider.svx
  └── frontend-to-principal-engineer.svx

src/lib/data/blog.ts          ← data loader (getPosts, getPost)
src/lib/components/BlogCard.svelte  ← listing card component

src/routes/blog/
  ├── +page.ts                ← loads all posts for listing
  ├── +page.svelte            ← blog listing page
  └── [slug]/
      ├── +page.ts            ← loads single post + entries() for prerendering
      └── +page.svelte        ← article view with prose typography
```

### Blog Post Format

Each `.svx` file requires YAML frontmatter:

```yaml
---
title: 'Post Title'
slug: 'post-slug'
description: 'Short description for cards and SEO.'
date: '2026-04-28'
tags: ['Tag1', 'Tag2']
published: true
---
Your markdown content here. Supports all markdown features:
  - Headings (h2, h3, etc.)
  - Code blocks with syntax highlighting
  - Lists, tables, blockquotes
  - Bold, italic, links
```

### Data Loader API

**`getPosts(): Promise<BlogPost[]>`**

- Returns all published posts sorted by date (newest first)
- Filters out posts where `published: false`

**`getPost(slug: string): Promise<BlogPostWithContent | undefined>`**

- Returns a single post with its rendered Svelte component
- Returns `undefined` if not found or not published

### Static Prerendering

The `[slug]/+page.ts` exports an `entries()` function that tells SvelteKit which slugs to prerender:

```typescript
export const entries: EntryGenerator = async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
};
```

This ensures all blog posts are generated as static HTML at build time.

### Typography Styling

Blog post content uses Tailwind's `@tailwindcss/typography` plugin with dark theme overrides:

- `prose prose-invert` -- base dark mode typography
- `prose-amber` -- amber accent color for links and highlights
- Custom overrides for code blocks, headings, tables, and blockquotes

---

## Component Reference

### ExperienceCard

Displays a work experience entry with optional multi-role timeline.

```svelte
<ExperienceCard experience={exp} />
```

**Props:**

- `experience: Experience` -- experience data object

**Features:**

- Company name, position, location, website link
- Multi-role timeline with dot indicators (for career progression)
- Single-role simple layout (fallback)

### ProjectCard

Displays a project in the portfolio grid.

```svelte
<ProjectCard project={proj} />
```

**Props:**

- `project: Project` -- project data object

**Features:**

- Folder icon, project name, period badge
- External link icon (only if website URL exists)
- Hover effects with amber accent

### SkillCard

Displays a skill category with keyword badges.

```svelte
<SkillCard {skill} />
```

**Props:**

- `skill: Skill` -- skill data object

**Features:**

- Category name heading
- Keyword tags in a flex-wrap layout
- Hover effects on individual keyword badges

### BlogCard

Displays a blog post preview in the listing grid.

```svelte
<BlogCard {post} />
```

**Props:**

- `post: BlogPost` -- blog post metadata

**Features:**

- Date with calendar icon
- Title, description, tags (max 3 shown)
- Links to `/blog/{slug}`
- Arrow indicator on hover

---

## Adding Content

### Adding a New Blog Post

1. Create a new `.svx` file in `src/content/blog/`:

```bash
src/content/blog/my-new-post.svx
```

2. Add the required frontmatter:

```yaml
---
title: 'My New Post'
slug: 'my-new-post'
description: 'A brief description.'
date: '2026-05-03'
tags: ['Topic1', 'Topic2']
published: true
---
```

3. Write your content in markdown below the frontmatter.

4. The post will automatically appear in the blog listing and be prerendered.

> **Note:** Set `published: false` to draft a post without it appearing on the site.

### Updating Resume Data

Edit `src/lib/data/resume.ts` directly. Changes propagate to:

- Home page hero section (via `hero.ts`)
- About page (experience, skills, languages)
- Projects page
- Contact page

### Adding a New Experience Entry

Add to the `experience` array in `resume.ts`:

```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  position: 'Job Title',
  location: 'City, Country',
  period: 'Month Year - Present',
  website: 'https://company.com/',
  description: 'Brief description.',
  roles: []  // or add Role[] for multi-role progression
}
```

### Adding a New Project

Add to the `projects` array in `resume.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  period: '2026',
  website: 'https://project.com/',  // or '' if no link
  description: 'Project description.'
}
```
