<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

Personal portfolio website for Samsul Maarif (samsulmaarif.com). Single-page app with sections: Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer.

## Tech Stack

- **Next.js 16.2.6** (App Router) with React 19.2.4
- **Tailwind CSS 4** — uses `@theme` directive in `globals.css`, NOT v3 config files
- **TypeScript** with strict mode
- **ESLint 9** with `eslint-config-next`

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (has existing errors — see below)
```

No test suite exists.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, theme initializer script
  page.tsx            # "use client" — main SPA page with all state + DOM effects
  globals.css         # Tailwind v4 @theme tokens + extensive custom CSS
  data.json           # Centralized portfolio content (profile, skills, projects, etc.)
  components/         # All section components (Hero, About, Skills, etc.)
```

- Components in `app/components/` are server components by default
- `page.tsx` is the only client component — it owns all state and DOM manipulation
- Data is imported from `data.json` into components directly

## Key Conventions

- **Tailwind CSS 4**: Uses `@theme { }` block in CSS for design tokens, not `tailwind.config.js`
- **Theme switching**: Dark/light mode via `localStorage('theme')` + `document.documentElement.classList`
- **Path alias**: `@/*` maps to project root (e.g., `@/app/components/...`)
- **Custom fonts**: JetBrains Mono, Space Grotesk, Syne via `next/font/google`
- **Icons**: Material Symbols Outlined (loaded via Google Fonts link in layout)

## Known Issues

ESLint reports existing errors:
- `app/components/Contact.tsx`: Unescaped apostrophes in JSX
- `app/page.tsx`: Unused variables (`sections`), setState in effect
- `app/components/About.tsx`: Unused variable (`initials`)
- `app/layout.tsx`: Custom font warning

## Architecture Notes

- `page.tsx` does heavy DOM manipulation (scroll spy, intersection observers, tilt effects, particles) — not typical React patterns
- All portfolio content lives in `app/data.json` — edit this file to update content
- No API routes or backend — fully static deployment (Vercel)
- `features.md` tracks planned improvements with priority ordering
