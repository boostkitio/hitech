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
- **Admin dashboard**: Protected routes for managing popup messages
- **Authentication**: Supabase-based login system

### Key Architectural Patterns

1. **Route-based Code Splitting**
   - All pages use React.lazy() for automatic code splitting
   - Routes defined in App.tsx with React Router v6
   - 404 handling with NotFoundPage component

2. **Authentication Flow**
   - AuthContext provides user state and methods globally
   - Protected routes check authentication before rendering
   - Supabase client initialized in src/lib/supabase.ts

3. **Data Management**
   - Static treatment data in src/data/treatments.ts
   - Popup messages stored in Supabase database
   - No state management library - React Context for auth only

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
- Manual chunks for vendor code splitting (react, supabase, framer-motion)
- Terser minification in production
- Source maps disabled in production

### Environment Variables

Required for Supabase integration:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

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

3. **Using Supabase**
   - Import client from src/lib/supabase.ts
   - Use AuthContext for user state
   - Check src/pages/admin/ for database query examples

4. **Performance Considerations**
   - Use OptimizedImage component for images (placeholder ready)
   - Lazy load routes and heavy components
   - Keep bundle sizes small with code splitting