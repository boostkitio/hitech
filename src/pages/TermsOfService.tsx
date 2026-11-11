import { Helmet } from 'react-helmet-async';

const TermsOfService = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <Helmet>
      <title>Terms of Service | HiTech Aesthetics</title>
      <meta name="description" content="Read our terms of service for using HiTech Aesthetics website and services." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">This is a placeholder for the Terms of Service. Please replace with your actual terms before going live.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
    <p className="mb-4">Describe the rules for using your website and services here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">User Responsibilities</h2>
    <p className="mb-4">Describe user responsibilities here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
    <p className="mb-4">Describe your limitation of liability here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us at info@hitechaesthetics.com.</p>
  </div>
);

export default TermsOfService; 