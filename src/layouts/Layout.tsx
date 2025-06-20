import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import PopupDisplayController from '../components/popups/PopupDisplayController';
import WhatsAppWidget from '../components/common/WhatsAppWidget';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans-serif bg-white">
      <Header />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <PopupDisplayController />
      <WhatsAppWidget />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;