# CLAUDE.md - Development Assistant Notes

## Project Overview
HiTech Aesthetics is a React-based website built with Vite, TypeScript, and Tailwind CSS. It features a modern aesthetic medical practice website with admin functionality.

## Technology Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Backend**: Supabase (Authentication & Database)
- **Routing**: React Router v6
- **Deployment**: Netlify
- **UI Libraries**: Lucide React (icons), React Helmet Async (SEO)

## Key Features
1. **Public Pages**: Home, About, Treatments, Contact
2. **Authentication**: Login system with Supabase
3. **Admin Dashboard**: Protected route for managing popup messages
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
  /contexts - React contexts (AuthContext)
  /layouts - Layout wrapper
  /lib - External library configs (Supabase)
  /pages - All page components
```

## Environment Variables
Required for deployment:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

## Important Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Recent Changes (February 2025)
- Fixed authentication flow with proper environment variables on Netlify
- Added _redirects file for SPA routing support
- Cleaned up debug console.log statements
- Removed unused .bolt and .claude directories
- Organized documentation into /docs folder
- Kept OptimizedImage component for future use

## Common Issues & Solutions
1. **404 on routes in production**: Ensure _redirects file exists in public folder
2. **Auth not working**: Check environment variables are set in Netlify (VITE_ prefix, not REACT_APP_)
3. **Supabase connection**: Verify environment variables are correctly set

## Development Notes
- Always use VITE_ prefix for environment variables
- OptimizedImage component available for future image optimization needs
- Font files are stored in public/fonts and loaded via @font-face in CSS
- All pages are lazy loaded for better performance

## Future Considerations
- Implement image optimization when more images are added
- Consider adding more admin features to the dashboard
- Potential for adding booking system integration