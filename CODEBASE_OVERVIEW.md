# HiTech Aesthetics Codebase Overview

This document provides a high-level overview of the HiTech Aesthetics codebase, its structure, technologies, and key implementation patterns. It is intended to help new developers quickly understand how the project is organized and how its main features work.

---

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State/Context:** Local component state and hooks
- **Content Management:** Decap CMS (Git-backed)
- **UI Libraries:** Lucide React (icons), Framer Motion (animations), React Helmet Async (SEO)
- **Deployment:** Netlify

---

## Project Structure
```
/src
  /components      # Reusable UI and logic components
    /common        # Shared utilities (widgets, announcements, etc.)
    /home          # Homepage-specific components
    /layout        # Header, Footer, etc.
    /popups        # Popup system
    /ui            # UI primitives (spinners, images)
  /data            # JSON data sources (treatments, promotions)
  /layouts         # Layout wrappers (e.g., main site layout)
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
- **Decap CMS** is served from the static `/public/admin/` directory and handles promo editing outside the React router.

---

## Promotions & CMS
- Decap CMS (configured in `public/admin/config.yml`) provides a Git-backed UI for managing popup promotions.
- Published promotions are stored in `src/data/promotions.json` and bundled with the site at build time.
- Popups are displayed by `PopupDisplayController`, which reads active promotions and schedules their display.

---

## State & Data Flow
- Most data is static (treatments, FAQs, etc.) and defined in page components or imported from type files.
- Promotions and announcements come from `src/data/promotions.json`, edited through Decap CMS.
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
- `VITE_IMAGEKIT_URL_ENDPOINT` and `VITE_IMAGEKIT_PUBLIC_KEY` power the ImageKit integration used across treatment imagery.

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
