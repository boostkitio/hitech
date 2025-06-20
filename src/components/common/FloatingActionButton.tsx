import React from 'react';
import { Link } from 'react-router-dom';

const FloatingActionButton: React.FC = () => {
  return (
    // This container positions the button on the screen.
    // It's fixed, vertically centered, and on the right.
    // It is only visible on mobile screens (md:hidden).
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 md:hidden">
      <Link
        to="/contact"
        className="block bg-black text-white font-sans font-bold py-4 px-2 rounded-l-lg shadow-lg hover:bg-neutral-800 transition-colors duration-300"
        // This style sets the text direction to vertical.
        style={{ writingMode: 'vertical-rl' }}
      >
        {/* This span rotates the text to be readable from top to bottom. */}
        <span className="inline-block transform rotate-180 uppercase tracking-widest">
          Book Now
        </span>
      </Link>
    </div>
  );
};

export default FloatingActionButton; 