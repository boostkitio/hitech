import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <Helmet>
      <title>Cookie Policy | HiTech Aesthetics</title>
      <meta name="description" content="Read our cookie policy to learn how we use cookies at HiTech Aesthetics." />
    </Helmet>
    <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
    <p className="mb-4">This is a placeholder for the Cookie Policy. Please replace with your actual cookie policy content before going live.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">What Are Cookies?</h2>
    <p className="mb-4">Explain what cookies are here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Cookies</h2>
    <p className="mb-4">Describe how you use cookies here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Managing Cookies</h2>
    <p className="mb-4">Describe how users can manage cookies here.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about this Cookie Policy, please contact us at info@hitechaesthetics.com.</p>
  </div>
);

export default CookiePolicy; 