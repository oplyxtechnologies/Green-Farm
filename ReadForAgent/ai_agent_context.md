# AI Coding Agent Context and Guidelines

## Project Overview
You are assisting in building an Agricultural Commercial Farm web platform. The project is structured as a Turborepo monorepo containing two main Next.js applications: a public website (`apps/web`) and an admin dashboard (`apps/admin`).

## Tech Stack
*   **Core:** Next.js (App Router), TypeScript, React.
*   **Styling:** Tailwind CSS, Lucide React (for icons).
*   **Web App Specific:** GSAP (animations), Lenis (smooth scroll).
*   **Admin App Specific:** Shadcn UI (for dashboard components).

## Monorepo Structure
```text
/
├── apps/
│   ├── web/        # Public site (Port 3000)
│   └── admin/      # Admin dashboard (Port 3001)
├── packages/
│   ├── ui/         # Shared Tailwind components
│   ├── db/         # Database schema
│   ├── eslint-config/
│   └── typescript-config/
```

## Coding Rules & Guidelines

### 1. General Rules
*   **TypeScript:** Write strict, fully typed TypeScript. Avoid `any`. Define interfaces for all API responses and database models.
*   **Component Architecture:** Use React Server Components (RSC) by default. Only use the `"use client"` directive when necessary (e.g., for GSAP animations, hooks, or interactive forms).
*   **Tailwind:** Group utility classes logically. Use `cn()` utility (clsx + tailwind-merge) for conditional classes.

### 2. `apps/web` (Public Website) Rules
*   **Animations:** When using GSAP in React, ALWAYS use the `@gsap/react` plugin and the `useGSAP()` hook to handle proper cleanup and prevent memory leaks.
*   **Scrolling:** Ensure Lenis is configured at the root layout level so it wraps all pages smoothly.
*   **SEO:** Export `metadata` or `generateMetadata` from every `page.tsx` file to ensure strong SEO.
*   **Media:** Video hero sections must use the `<video>` tag with `autoPlay`, `muted`, `loop`, and `playsInline` attributes.

### 3. `apps/admin` (Dashboard) Rules
*   **UI Components:** Use Shadcn UI for fast, accessible component building (data tables, sidebars, forms, dialogs).
*   **Data Fetching:** Use Next.js Server Actions or Route Handlers for fetching and mutating CMS data.
*   **State:** Use React Hook Form with Zod validation for all data entry forms (Blog creation, Work updates, etc.).

## Agent Task Protocol
When asked to implement a feature, always ask for clarification on which app (`web` or `admin`) you are modifying if it is not explicitly stated. Prioritize performance, type safety, and clean aesthetic layouts.