import React from 'react';
import { Link } from 'react-router-dom';

const BookNowWidget: React.FC = () => {
  return (
    <Link
      to="/booking#widget"
      className="fixed top-24 right-0 bg-primary-600/80 text-white py-3 px-1.5 rounded-r-md shadow-md hover:bg-primary-600 focus:outline-none transition-all z-40 md:hidden"
      aria-label="Book Now"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
    >
      <span className="font-bold text-[10px] tracking-wider">BOOK NOW</span>
    </Link>
  );
};

export default BookNowWidget;
