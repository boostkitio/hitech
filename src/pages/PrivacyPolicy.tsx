import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <Helmet>
      <title>Privacy Policy | HiTech Aesthetics</title>
      <meta name="description" content="Read our privacy policy to learn how we handle your data at HiTech Aesthetics." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">This is a placeholder for the Privacy Policy. Please replace with your actual privacy policy content before going live.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
    <p className="mb-4">Describe what information you collect from users here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
    <p className="mb-4">Describe how you use the collected information here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
    <p className="mb-4">Describe user rights regarding their data here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at info@hitechaesthetics.com.</p>
  </div>
);

export default PrivacyPolicy; 