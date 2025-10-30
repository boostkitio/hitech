import React from 'react';
import { Link } from 'react-router-dom';

const BookNowWidget: React.FC = () => {
  return (
    <Link
      to="/booking"
      className="fixed top-24 right-0 bg-primary-800/80 text-white py-4 px-2 shadow-md hover:bg-primary-900/80 focus:outline-none transition-all z-40 md:hidden"
      aria-label="Book Now"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
    >
      <span className="font-bold text-xs tracking-wider">BOOK</span>
    </Link>
  );
};

export default BookNowWidget;
