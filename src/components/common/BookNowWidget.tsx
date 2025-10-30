import React from 'react';
import { Link } from 'react-router-dom';

const BookNowWidget: React.FC = () => {
  return (
    <Link
      to="/booking"
      className="fixed bottom-20 right-6 bg-primary-800 text-white rounded-full px-6 py-3 shadow-lg hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors z-40 md:hidden flex items-center justify-center"
      aria-label="Book Now"
    >
      <span className="font-semibold text-sm">Book Now</span>
    </Link>
  );
};

export default BookNowWidget;
