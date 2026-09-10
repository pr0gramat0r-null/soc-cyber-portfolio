# Copilot instructions

## Project overview

This is a single-page React portfolio built with Vite. `src/main.jsx` mounts `App`, and `src/App.jsx` composes the page from the top-level UI sections: `Navbar`, `Hero`, `Projects`, `Writeups`, `Contact`, and `Footer`. Reusable presentation pieces such as `SectionTitle` live in `src/components/`.

Most portfolio content is centralized in `src/data/profile.js`. The `profile`, `stats`, `certifications`, `projects`, and `writeups` exports are consumed by sections rather than being duplicated in JSX. When changing portfolio copy, links, project metadata, or write-up entries, update this data module first.

Styling is primarily Tailwind utility classes enabled by `@tailwindcss/vite`, with global visual foundations in `src/index.css` (fonts, page background, grid overlay, selection color, and the monospace font helper). Components use Framer Motion for entrance and viewport animations and Lucide React for icons. `tailwind.config.js` is retained for content scanning and theme extension.

## Commands

Run these from the repository root:

```bash
npm install       # install dependencies
npm run dev       # start Vite on port 5173
npm run build     # create the production bundle in dist/
npm run preview   # serve the production bundle locally
```

There is no configured lint command. The `test` script is still the default placeholder (`echo "Error: no test specified" && exit 1`), and no test runner or test files are present, so there is currently no full-suite or single-test command. The GitHub Actions workflow runs `npm ci`, `npm run build --if-present`, and `npm test` on Node 18, 20, and 22; the placeholder test script therefore causes CI to fail until testing is added or the script is changed.

## Code conventions

- Keep page sections as focused default-exported components under `src/components/`; compose them in `App.jsx` rather than putting section markup directly in the root.
- Prefer adding or editing repeated portfolio content in `src/data/profile.js` and render it with `.map()`. Preserve the existing data shapes: project objects use `title`, `description`, `tags`, `status`, and optional `url`; write-ups are two-item `[title, description]` tuples.
- Section navigation depends on matching IDs. `Navbar.jsx` derives anchors from the visible link labels by lowercasing and removing hyphens, so a renamed link or section must keep the generated anchor and section `id` synchronized.
- Use Tailwind utilities for component-local layout, spacing, color, responsive behavior, and states. Keep global selectors and visual primitives in `src/index.css`.
- Preserve the existing visual language: dark near-black surfaces, emerald accents, slate text, monospace labels, rounded bordered cards, and responsive `md`/`lg` layouts.
- External links consistently use `target="_blank"` with `rel="noreferrer"`. Keep that behavior for new external profile and project links.
- Use Framer Motion only where an interaction or entrance effect is part of the section’s presentation; follow the existing `initial`/`animate` or `whileInView` patterns and avoid adding animation to static content unnecessarily.
