import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import CookieConsent from './components/common/CookieConsent';
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const SkinMembershipPage = lazy(() => import('./pages/SkinMembershipPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const PriceListPage = lazy(() => import('./pages/PriceListPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
// Lazy load treatment pages
const Hydrafacial = lazy(() => import('./pages/treatments/Hydrafacial'));
const SopranoIcePlatinum = lazy(() => import('./pages/treatments/SopranoIcePlatinum'));
const LaserHairRemovalPackages = lazy(() => import('./pages/treatments/LaserHairRemovalPackages'));
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
            <Route path="skin-membership" element={<SkinMembershipPage />} />
            <Route path="treatments/hydrafacial" element={<Hydrafacial />} />
            <Route path="treatments/soprano-ice-platinum" element={<SopranoIcePlatinum />} />
            <Route path="treatments/laser-hair-removal-packages" element={<LaserHairRemovalPackages />} />
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
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="price-list" element={<PriceListPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <CookieConsent />
    </>
  );
}

export default App;
