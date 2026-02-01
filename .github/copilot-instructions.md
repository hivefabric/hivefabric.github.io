# AI Agent Coding Instructions for Hive - Distributed Agent Fabric

## Project Overview
This is a React + TypeScript web application (deployed via GitHub Pages) for **Hive**, an open-source platform for distributed autonomous agents. The app is a marketing/documentation site built with Vite and served from a GitHub Pages repo at `hivefabric.github.io`.

**Key fact**: The entire UI is a single React component (`App.tsx`), not split into multiple files. All styling uses Tailwind CSS configured inline in `index.html`.

## Technology Stack
- **Framework**: React 19 with TypeScript 5.8
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN-loaded, configured in `index.html`)
- **UI Components**: Lucide React icons
- **Environment**: Node.js required; Vite dev server runs on port 3000

## Critical Workflows

### Development
```bash
npm install    # Install dependencies
npm run dev    # Start Vite dev server (localhost:3000, bound to 0.0.0.0)
npm run build  # Build for production (outputs to /dist)
npm run preview # Preview production build locally
```

**Important**: Environment configuration is in `.env.local` with `GEMINI_API_KEY` exposed via Vite's `define` option to JavaScript. The `vite.config.ts` injects this into `process.env.GEMINI_API_KEY` and `process.env.API_KEY`.

### Deployment
The GitHub Actions workflow (`.github/workflows/static.yml`) automatically deploys `/dist` to GitHub Pages on push to `main`. No manual deployment steps needed.

## Architecture & Component Patterns

### Single-File React Architecture (`App.tsx`)
All components live in one 566-line file. This is intentional for a simple landing page:
- **Reusable component patterns**: `Button`, `SectionHeader`, `FeatureCard` (custom UI components)
- **Component signature pattern**: Props typed inline as `{ prop: Type }` in the function parameter
- **Styling**: All classes use Tailwind with custom color tokens from the theme (e.g., `bg-nr-teal`, `text-nr-dark`, `border-nr-border`)

### Custom Color Palette
Defined in `index.html` Tailwind config (not in a separate CSS file):
- `nr-dark`: `#1D252C` (main text)
- `nr-darker`: `#0D1216` (dark backgrounds)
- `nr-teal`: `#007E8A` (primary accent, CTA buttons)
- `nr-green`: `#00A5ad` (secondary accent)
- `nr-gray`: `#F3F4F5` (light backgrounds)
- `nr-border`: `#E3E4E5` (border color)
- `nr-text`: `#2A343E` (secondary text)

When adding new UI elements, **use these custom color tokens instead of generic Tailwind colors** to maintain brand consistency.

### Component Examples

**Button Component**: Accepts `variant` prop (`primary`, `secondary`, `outline`, `ghost`), optional `icon` from lucide-react, and `href` for links.

**FeatureCard**: Icon-based card with title, description, and optional badges. Features hover effects (left border, icon scale).

## Development Conventions

1. **TypeScript as React.ReactNode**: Imported at top; used for prop type hints (e.g., `children?: React.ReactNode`)
2. **Lucide Icons**: Import icons from `lucide-react` and use as React components (e.g., `<Cpu className="h-6 w-6" />`)
3. **Inline Styling**: No separate CSS files; all styles in className props using Tailwind
4. **Hover/Interactive States**: Use `group` classes for hover effects on parent/child elements (e.g., `group` + `group-hover:opacity-100`)
5. **Mobile Responsiveness**: Use `md:` prefix for tablet+ breakpoints (common pattern: `text-sm md:text-lg`)

## Key Files & Their Roles
- **[App.tsx](App.tsx)**: Single monolithic React component with all UI sections
- **[index.tsx](index.tsx)**: Entry point; mounts React app to `#root` div
- **[index.html](index.html)**: HTML template with Tailwind CDN and theme config
- **[vite.config.ts](vite.config.ts)**: Build config with React plugin, env var injection, path alias `@/`
- **[tsconfig.json](tsconfig.json)**: TypeScript config with `@/*` path alias
- **[package.json](package.json)**: Dependencies (React 19, lucide-react, @vitejs/plugin-react)
- **[metadata.json](metadata.json)**: App metadata (name, description, permissions)

## Important Notes for AI Agents
- **No testing framework**: No Jest/Vitest setup; focus on component preview via `npm run dev`
- **No environment setup docs**: `.env.local` is user-created (not in repo); document its structure if creating new env vars
- **Path alias**: `@/` resolves to repo root, but for simple single-file app, rarely used
- **GitHub Pages deployment**: Built files go to `/dist`; don't manually edit deployed files
- **Tailwind config in HTML**: Unlike typical projects, Tailwind theme is inline in `index.html` `<script>` tag, not in a separate config file

## When Adding Features
1. Keep new components in `App.tsx` unless it becomes unmaintainably large
2. Use existing component patterns (Button, SectionHeader, FeatureCard) for consistency
3. Apply the custom color palette (nr-*) for all new elements
4. Test responsive behavior with Tailwind breakpoints (`md:`, `lg:`, etc.)
5. Export new env vars from `vite.config.ts` if needed; document in this file
