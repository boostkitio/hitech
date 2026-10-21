# Retained project reference

Preserved from the project's previous CLAUDE.md on 6 September 2026.
Read only sections relevant to the task. This document preserves technical
and business context; its historical workflow, model, permission and release
instructions are superseded by the workspace AGENTS.md. Validate versions,
commands, paths and live claims against current source before relying on them.

---

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server at http://localhost:5173

# Build & Deploy
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for TypeScript/React issues
npx tsc --noEmit    # Type-check without building (no script defined)
```

## High-Level Architecture

### Application Structure
This is a **Vite + React SPA** for a medical aesthetics practice with:
- **Public website**: Marketing pages (Home, About, Treatments, Contact)
- **Promotion management**: Git-backed Decap CMS admin at `/admin/`
- **Popup delivery**: Client-side controller that reads static JSON data

### Key Architectural Patterns

1. **Route-based Code Splitting**
   - All pages use React.lazy() for automatic code splitting
   - Routes defined in App.tsx with React Router v6
   - 404 handling with NotFoundPage component

2. **Decap CMS Workflow**
   - `/public/admin/index.html` bootstraps Decap CMS with a GitHub backend
   - Editors update `src/data/promotions.json` through the CMS
   - Netlify rebuilds the site on commit to keep popups current

3. **Data Management**
   - Static treatment data in `src/data/treatments.ts`
   - Popup messages stored in `src/data/promotions.json`
   - No global state library required; React hooks manage local interactions

4. **Component Organization**
   - `/components/ui/`: Generic reusable components (Button, LoadingSpinner, OptimizedImage)
   - `/components/common/`: Shared app components (Logo, WhatsAppWidget, CookieConsent)
   - `/components/layout/`: Page structure components (Header, Footer)
   - Page-specific components colocated (e.g., /components/home/)

5. **Styling System**
   - Tailwind CSS with custom theme configuration
   - Brand colors: primary (teal), secondary (purple), neutral shades
   - Custom font: Ivy Presto Display for headings
   - Mobile-first responsive design

### Build Configuration

**Vite** is configured with:
- React plugin for JSX/TSX support
- Manual chunks for vendor code splitting (react, framer-motion)
- Terser minification in production
- Source maps disabled in production

### Environment Variables

Required for ImageKit integration:
- `VITE_IMAGEKIT_URL_ENDPOINT`: Your ImageKit delivery endpoint
- `VITE_IMAGEKIT_PUBLIC_KEY`: Public key used by the image components

Access in code via `import.meta.env.VITE_*`

### Deployment

Deployed on **Netlify** with:
- `_redirects` file for SPA routing (all routes → index.html)
- Environment variables set in Netlify dashboard
- Automatic builds from Git pushes

## Development Workflow

1. **Adding New Pages**
   - Create component in src/pages/
   - Add lazy-loaded route in App.tsx
   - Update navigation in Header.tsx if needed

2. **Working with Treatments**
   - Treatment data defined in src/data/treatments.ts
   - Individual treatment pages in src/pages/treatments/
   - Use existing TreatmentLayout for consistency

3. **Managing Promotions**
   - Update content through Decap CMS (`/admin/`) or edit `src/data/promotions.json`
   - Ensure each promotion has a unique `id` and `delaySeconds`
   - Active promotions (`isActive: true`) will be scheduled by `PopupDisplayController`

4. **Performance Considerations**
   - Use OptimizedImage component for images (placeholder ready)
   - Lazy load routes and heavy components
   - Keep bundle sizes small with code splitting
