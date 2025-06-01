import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import CookieConsent from './components/common/CookieConsent';
import WhatsAppWidget from './components/common/WhatsAppWidget';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="treatments" element={<TreatmentsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <CookieConsent />
      <WhatsAppWidget />
    </>
  );
}

export default App;