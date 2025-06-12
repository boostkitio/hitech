import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | HiTech Aesthetics</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-primary-50 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <h1 className="text-6xl mb-6">404</h1>
          <h2 className="text-2xl mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="btn btn-primary inline-flex items-center">
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;