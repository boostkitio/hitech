import React from 'react';
import { Link } from 'react-router-dom';

const BookNowWidget: React.FC = () => {
  return (
    <Link
      to="/booking"
      className="fixed top-24 right-0 bg-primary-800 text-white py-8 px-3 shadow-lg hover:bg-primary-900 focus:outline-none transition-colors z-40 md:hidden"
      aria-label="Book Now"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      <span className="font-bold text-sm tracking-widest">BOOK NOW</span>
    </Link>
  );
};

export default BookNowWidget;
