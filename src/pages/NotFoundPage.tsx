import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | HiTech Aesthetics</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the HiTech Aesthetics homepage." />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white p-12 rounded-lg shadow-xl"
          >
            <h1 className="text-6xl md:text-9xl font-bold text-primary-600">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mt-4 mb-2">Page Not Found</h2>
            <p className="text-lg text-neutral-600 mb-8">
              We're sorry, but the page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn btn-primary inline-flex items-center">
                <ArrowLeft size={18} className="mr-2" />
                Return to Homepage
              </Link>
              <Link to="/treatments" className="btn btn-outline inline-flex items-center">
                <Search size={18} className="mr-2" />
                Browse Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;