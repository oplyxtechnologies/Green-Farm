# Scope of Work (SOW): Agricultural Commercial Farm Web Platform

## 1. Project Overview
The objective of this project is to develop a high-performance, SEO-optimized web platform for an agricultural commercial farm. The project consists of two primary applications built within a monorepo structure: a public-facing static/ISR website and a secure administrative dashboard for content and inquiry management.

## 2. Technology Stack
*   **Architecture:** Turborepo (Monorepo)
*   **Framework:** Next.js (App Router, React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Animations:** GSAP (GreenSock Animation Platform)
*   **Smooth Scrolling:** Lenis (`@studio-freight/react-lenis`)
*   **Database/Backend:** PostgreSQL (via Supabase or Prisma)

## 3. Project Architecture (Monorepo)
*   `apps/web`: Public website (runs on port 3000)
*   `apps/admin`: Private dashboard (runs on port 3001)
*   `packages/ui`: Shared UI components (Tailwind, Lucide, Shadcn UI)
*   `packages/db`: Database schema and client configurations

## 4. Deliverables & Features

### Part A: Public Website (`apps/web`)
A highly optimized, aesthetically pleasing website focusing on fast load times and organic SEO.
*   **Pages:**
    *   Home (Featuring a Video Hero section)
    *   About Us
    *   Produce (Crops)
    *   News / Blog
    *   Careers
    *   Contact Us
    *   Privacy Policy
    *   Terms and Conditions
*   **Key Features:**
    *   **Video Hero:** HTML5 native video background on the homepage (autoplay, muted, loop).
    *   **Animations:** Complex scroll and entrance animations using GSAP.
    *   **Smooth Scroll:** Buttery smooth scrolling implementation via Lenis.
    *   **SEO:** Implementation of Next.js Metadata API for static and dynamic pages (Produce, News).

### Part B: Admin Dashboard (`apps/admin`)
A secure portal to manage the farm's digital footprint.
*   **Layout:** Sidebar navigation panel.
*   **Modules:**
    *   **Manage CMS:** Update static text on pages (About, Produce descriptions).
    *   **Blog/News Manager:** Create, edit, publish, and delete news articles.
    *   **Work/Careers Manager:** Post and manage job openings.
    *   **Contact Enquiries:** View and manage submissions from the public website's contact form.

## 5. Timeline & Milestones
*   **Phase 1:** Monorepo setup, database schema creation, and shared UI configuration.
*   **Phase 2:** Public Website UI development (static pages, animations, layout).
*   **Phase 3:** Admin Dashboard UI development and API Route integrations.
*   **Phase 4:** Content integration, SEO optimization, and final QA testing.
*   **Phase 5:** Deployment (e.g., Vercel) and hand-off.