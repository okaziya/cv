# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV website for Liza Blomdahl, deployed as a static site to GitHub Pages at https://okaziya.github.io/cv/. Built with Next.js 14 (static export), styled-components, and Bootstrap. Supports two locales (English and Swedish) with a PDF export feature using @react-pdf/renderer.

## Commands

- `npm run dev` — Start dev server (sets `NEXT_PUBLIC_SITE_URL=http://localhost:3000/cv`)
- `npm run build` — Static export build (outputs to `out/`)
- `npm run start` — Serve the built site locally via `serve` (requires `mkdir -p dist && ln -sf ../out dist/cv` for correct basePath)
- `npm run lint` — Lint with ESLint (`next lint`, extends `next/core-web-vitals`)
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Check formatting without writing (used in CI)

No test scripts are configured. `package.json` pins `engines.node` to `>=22`.

## Architecture

**Routing:** Next.js App Router with `app/[locale]/` dynamic segment. The root `app/page.tsx` auto-redirects to `/en` or `/sv` based on `navigator.language`. Static params are generated for both locales in `app/[locale]/layout.tsx`.

**i18n:** Locale strings live in `locales/en.ts` and `locales/sv.ts` as plain TypeScript objects (not a framework). Components access the current locale via `useLocale()` from `context/LocaleContext.tsx`, then import and index into the locale files directly.

**Styling:** styled-components with a theme (`styles/theme.js`) provided via `ThemeWrapper`. `StyledComponentsRegistry` (`lib/registry.tsx`) collects CSS during SSR so styles are inlined in the static HTML. Bootstrap CSS is imported globally. Component-level styles use co-located `.styles.ts/.tsx` files. Shared style utilities are in `styles/` (typography, media breakpoints, layout, sections). The theme is typed by augmenting styled-components' `DefaultTheme` in `styles/styled.d.ts`, derived from `theme.js` so `theme.*` access is type-safe.

**PDF export:** `components/CvDocument.tsx` is a standalone @react-pdf/renderer `<Document>` with hardcoded Swedish content for the downloadable CV PDF. It is loaded via dynamic import with `ssr: false` in `Header.tsx` to avoid breaking static export. The `PDFViewer` in `app/[locale]/page.tsx` can be uncommented for live preview during development. Note: CvDocument content is manually maintained and may drift from the locale files.

**Static export config:** `next.config.js` sets `output: "export"`, `basePath: "/cv"`, and `images: { unoptimized: true }`. Image paths must go through `utils/imagePath.ts` to respect the base path.

**CI/CD:** Two GitHub Actions workflows, both on Node 24. `.github/workflows/nextjs.yml` builds and deploys to GitHub Pages on push to `main`. `.github/workflows/lint.yml` ("Run Lint on PR") runs ESLint and the Prettier format check on every pull request.

## CV Dimensions

The site presents two conceptual CV types, reflecting different career perspectives:

**Employment CV** — traditional chronological work history. Each entry represents an employer relationship: company, job title, dates, and highlights of what was accomplished. Both locales (`en.ts` and `sv.ts`) contain employment data in `workExperience.experiences`.

**Consultant CV** — extends the employment CV with client assignment details. When the subject worked at a consulting firm, individual client assignments (project name, client, tech stack, role, dates) are captured separately from the employer relationship. This data lives in the `assignmentsText` field on each experience entry. Currently only populated in `sv.ts`; `en.ts` has `assignmentsText: null` on all entries.

**AEO (Answer Engine Optimization):** JSON-LD structured data (Schema.org) is generated in `utils/jsonld.ts` and injected in `app/[locale]/layout.tsx`. English (`/cv/en`) uses `generateJsonLdForEmploymentCv` (employer-level entries). Swedish (`/cv/sv`) uses `generateJsonLdForConsultantCv` which parses `assignmentsText` markdown into individual assignment entries. Per-locale `<title>`, `<meta description>`, canonical URLs, hreflang alternates, and Open Graph tags are generated via `generateMetadata` in the locale layout. `public/robots.txt` and `public/sitemap.xml` are also included.

## Key Conventions

- Config constants (contact info, site metadata) live in `config.ts`
- Components use barrel exports via `index.ts` files
- Custom hooks are in `hooks/` (e.g., `useIsMobile`)
- Types are defined in `types/index.ts`
- Lint and format before committing: `npm run lint` and `npm run format` (CI checks both on PRs)
- Keep `README.md` in sync with the code as the project changes (commands, workflow, conventions), alongside this file
