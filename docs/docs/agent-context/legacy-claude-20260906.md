# Retained project reference

Preserved from the project's previous CLAUDE.md on 6 September 2026.
Read only sections relevant to the task. This document preserves technical
and business context; its historical workflow, model, permission and release
instructions are superseded by the workspace AGENTS.md. Validate versions,
commands, paths and live claims against current source before relying on them.

---

# CLAUDE.md - Development Assistant Notes

## Project Overview
HiTech Aesthetics is a React-based website built with Vite, TypeScript, and Tailwind CSS. It features a modern aesthetic medical practice website with admin functionality.

## Technology Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Content Management**: Decap CMS (Git-backed promotions)
- **Routing**: React Router v6
- **Deployment**: Netlify
- **UI Libraries**: Lucide React (icons), React Helmet Async (SEO)

## Key Features
1. **Public Pages**: Home, About, Treatments, Contact
2. **Promotions**: Popup offers managed through Decap CMS
3. **CMS Admin**: Static `/admin/` dashboard that writes to `src/data/promotions.json`
4. **Responsive Design**: Mobile-first approach
5. **Performance**: Lazy loading, code splitting
6. **SEO**: React Helmet for meta tags

## Project Structure
```
/src
  /components
    /common - Shared components (Logo, WhatsApp widget, etc.)
    /home - Homepage specific components
    /layout - Header and Footer
    /popups - Popup system
    /ui - UI utilities (LoadingSpinner, OptimizedImage)
  /data - JSON data sources (treatments, promotions)
  /layouts - Layout wrapper
  /pages - All page components
```

## Environment Variables
Required for deployment:
- `VITE_IMAGEKIT_URL_ENDPOINT` - ImageKit delivery endpoint
- `VITE_IMAGEKIT_PUBLIC_KEY` - ImageKit public key

## Important Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Recent Changes (February 2025)
- Migrated popup management from Supabase to a Git-backed Decap CMS workflow
- Retired Supabase authentication flow in favour of static build-time CMS edits
- Added _redirects file for SPA routing support
- Cleaned up debug console.log statements
- Removed unused .bolt and .claude directories
- Organized documentation into /docs folder
- Kept OptimizedImage component for future use
- Added interactive "Treatment Development Process" section to About page with:
  - Original static process section (4 steps with icons)
  - Interactive version with clickable steps and detailed explanations
  - Smooth animations and transitions using Framer Motion
  - Responsive design with sticky sidebar on larger screens

## Common Issues & Solutions
1. **404 on routes in production**: Ensure `_redirects` file exists in `public/`
2. **Decap CMS GitHub auth**: Confirm the `backend.repo` value in `public/admin/config.yml` matches the deployed repository
3. **Missing popup updates**: Trigger a Netlify rebuild after committing `src/data/promotions.json`

## Development Notes
- Always use VITE_ prefix for environment variables
- OptimizedImage component available for future image optimization needs
- Font files are stored in public/fonts and loaded via @font-face in CSS
- All pages are lazy loaded for better performance

## Future Considerations
- Implement image optimization when more images are added
- Consider extending Decap CMS with additional collections (blogs, testimonials)
- Potential for adding booking system integration
