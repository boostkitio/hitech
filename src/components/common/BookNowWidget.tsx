import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const BookNowWidget: React.FC = () => {
  return (
    <Link
      to="/booking"
      className="fixed bottom-20 right-6 bg-primary-800 text-white rounded-full px-5 py-3 shadow-lg hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors z-40 md:hidden flex items-center justify-center gap-2"
      aria-label="Book Now"
    >
      <Calendar size={20} />
      <span className="font-semibold text-sm">Book Now</span>
    </Link>
  );
};

export default BookNowWidget;
