# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rize Labs company website — a single-page React app positioned as a research-to-production studio for AI and cryptography. Showcases services, case studies (Encifher, Henosis, Aze, BananaHQ), and trust signals. Originally scaffolded with Lovable.

## Commands

- **Dev server:** `npm run dev` (runs on port 8080)
- **Build:** `npm run build` (production) or `npm run build:dev` (development mode)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Tech Stack

- **React 18 + TypeScript + Vite** (SWC plugin for fast refresh)
- **Tailwind CSS** with CSS variables for theming (dark mode via `class` strategy)
- **shadcn/ui** components in `src/components/ui/` (Radix primitives, default style, CSS variables enabled)
- **React Router** for routing, **TanStack React Query** for data fetching
- **Poppins** is the primary font (`font-poppins` / `font-sans`)

## Architecture

- `src/App.tsx` — Root component with providers (QueryClient, Tooltip, Toaster, BrowserRouter) and route definitions
- `src/pages/` — Route-level pages (`Index.tsx` is the main landing page, `NotFound.tsx` for 404)
  - **Index.tsx page flow:** Navbar → Hero (headline + CTAs) → Trust Strip (Backed by + Built for) → What We Do (4 service cards) → About (dark section) → What We've Built (portfolio case studies) → Contact → Footer
- `src/components/` — Custom components (`ProductCard`, `Footer`, `Logo`, `SketchButton`)
- `src/components/ui/` — shadcn/ui primitives (do not manually edit; use `npx shadcn-ui@latest add <component>`)
- `src/lib/utils.ts` — Utility functions (includes `cn()` for class merging)
- `src/hooks/` — Custom hooks (`use-mobile`, `use-toast`)

## Path Aliases

`@` is aliased to `./src` (configured in both `vite.config.ts` and `tsconfig`). Always use `@/` imports.

## Adding Routes

Add new routes in `src/App.tsx` above the `"*"` catch-all route.
