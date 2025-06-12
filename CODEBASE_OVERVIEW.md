# HiTech Aesthetics Codebase Overview

This document provides a high-level overview of the HiTech Aesthetics codebase, its structure, technologies, and key implementation patterns. It is intended to help new developers quickly understand how the project is organized and how its main features work.

---

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State/Context:** React Context API
- **Backend/DB/Auth:** Supabase
- **UI Libraries:** Lucide React (icons), Framer Motion (animations), React Helmet Async (SEO)
- **Deployment:** Netlify

---

## Project Structure
```
/src
  /components      # Reusable UI and logic components
    /common        # Shared utilities (auth, widgets, etc.)
    /home          # Homepage-specific components
    /layout        # Header, Footer, etc.
    /popups        # Popup system
    /ui            # UI primitives (spinners, images)
  /contexts        # React context providers (e.g., AuthContext)
  /layouts         # Layout wrappers (e.g., main site layout)
  /lib             # External library configs (e.g., Supabase client)
  /pages           # All routeable pages (Home, About, Treatments, etc.)
    /treatments    # Individual treatment detail pages & template
  /types           # TypeScript type definitions
```

---

## Routing & Pages
- **App.tsx** sets up all routes using React Router v6, with lazy loading for performance.
- **Layout.tsx** wraps all main pages with a shared header, footer, and popup controller.
- **TreatmentsPage.tsx** lists all treatments and links to individual treatment pages.
- **Individual treatment pages** (e.g., `/treatments/soprano-ice-platinum`) are implemented in `/pages/treatments/` and use a shared `TreatmentTemplate` for consistent layout.
- **AdminDashboardPage** is a protected route, only accessible to authenticated users.

---

## Authentication
- Managed via **Supabase** and the `AuthContext` in `/contexts/AuthContext.tsx`.
- Provides `login`, `logout`, and user/session state to the app.
- Protected routes use the `ProtectedRoute` component to restrict access.

---

## State & Data Flow
- Most data is static (treatments, FAQs, etc.) and defined in page components or imported from type files.
- Global state (auth) is managed via React Context.
- No Redux or other global state libraries are used.

---

## Styling & UI
- **Tailwind CSS** is used for all styling, with utility classes throughout.
- **Framer Motion** is used for page and element animations.
- **Lucide React** provides iconography.
- **React Helmet Async** is used for SEO/meta tags.

---

## Notable Patterns
- **Lazy Loading:** All main pages and treatment pages are lazy-loaded for performance.
- **Component Reuse:** Shared UI (header, footer, spinners, etc.) is modularized in `/components`.
- **Type Safety:** All major data structures (treatments, FAQs) are typed in `/types`.
- **Responsive Design:** Layouts and components are mobile-first and responsive.
- **SEO:** Each page sets its own meta tags using Helmet.

---

## Environment Variables
- `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are required for Supabase integration (set in Netlify for deployment).

---

## Development & Deployment
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`
- **Lint:** `npm run lint`
- **Type check:** `npm run typecheck`
- **Deploy:** Pushed to Netlify, with SPA routing supported via `_redirects` file.

---

## Additional Notes
- All documentation is in `/docs`.
- Images and assets are managed in `/public` and described in `/docs/ASSETS_GUIDE.md`.
- The codebase is designed for easy extension (e.g., adding new treatments, pages, or admin features).

---

For more details, see the README and docs folder. 