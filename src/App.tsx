import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import CookieConsent from './components/common/CookieConsent';
import WhatsAppWidget from './components/common/WhatsAppWidget';
import ProtectedRoute from './components/common/ProtectedRoute';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));

// Lazy load treatment pages
const SopranoIcePlatinum = lazy(() => import('./pages/treatments/SopranoIcePlatinum'));
const ApilusXCell = lazy(() => import('./pages/treatments/ApilusXCell'));
const SkinPenMicroneedling = lazy(() => import('./pages/treatments/SkinPenMicroneedling'));
const LyntonIPL = lazy(() => import('./pages/treatments/LyntonIPL'));
const LyntonRF = lazy(() => import('./pages/treatments/LyntonRF'));
const LyntonLaser = lazy(() => import('./pages/treatments/LyntonLaser'));
const DermaluxLED = lazy(() => import('./pages/treatments/DermaluxLED'));
const Botox = lazy(() => import('./pages/treatments/Botox'));
const Mesotox = lazy(() => import('./pages/treatments/Mesotox'));
const Polynucleotides = lazy(() => import('./pages/treatments/Polynucleotides'));
const SkinBoosters = lazy(() => import('./pages/treatments/SkinBoosters'));
const ASCEExosomes = lazy(() => import('./pages/treatments/ASCEExosomes'));
const PRPHair = lazy(() => import('./pages/treatments/PRPHair'));
const RelaxingFacials = lazy(() => import('./pages/treatments/RelaxingFacials'));
const ChemicalPeels = lazy(() => import('./pages/treatments/ChemicalPeels'));
const ZOSkincare = lazy(() => import('./pages/treatments/ZOSkincare'));
const PermanentMakeup = lazy(() => import('./pages/treatments/PermanentMakeup'));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="treatments" element={<TreatmentsPage />} />
            <Route path="treatments/soprano-ice-platinum" element={<SopranoIcePlatinum />} />
            <Route path="treatments/apilus-xcell" element={<ApilusXCell />} />
            <Route path="treatments/skinpen-microneedling" element={<SkinPenMicroneedling />} />
            <Route path="treatments/lynton-ipl" element={<LyntonIPL />} />
            <Route path="treatments/lynton-rf" element={<LyntonRF />} />
            <Route path="treatments/lynton-laser" element={<LyntonLaser />} />
            <Route path="treatments/dermalux-led" element={<DermaluxLED />} />
            <Route path="treatments/botox" element={<Botox />} />
            <Route path="treatments/mesotox" element={<Mesotox />} />
            <Route path="treatments/polynucleotides" element={<Polynucleotides />} />
            <Route path="treatments/skin-boosters" element={<SkinBoosters />} />
            <Route path="treatments/asce-exosomes" element={<ASCEExosomes />} />
            <Route path="treatments/prp-hair" element={<PRPHair />} />
            <Route path="treatments/relaxing-facials" element={<RelaxingFacials />} />
            <Route path="treatments/chemical-peels" element={<ChemicalPeels />} />
            <Route path="treatments/zo-skincare" element={<ZOSkincare />} />
            <Route path="treatments/permanent-makeup" element={<PermanentMakeup />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Standalone routes (e.g., without the main layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />
        </Routes>
      </Suspense>
      <CookieConsent />
      <WhatsAppWidget />
    </>
  );
}

export default App;