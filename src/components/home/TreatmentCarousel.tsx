import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { treatments } from '../../data/treatments';

// Import treatments from the TreatmentsPage or a shared treatments data file.
// Filter to only include the specified featured treatments by id.

const featuredIds = [
  'soprano-ice-platinum',
  'apilus-xcell',
  'botox',
  'skinpen-microneedling',
  'skin-boosters',
  'lynton-ipl',
  'asce-exosomes',
];

const featuredTreatments = treatments.filter(t => featuredIds.includes(t.id));

const getVisibleTreatmentsCount = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
  }
  return 3;
};

const TreatmentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleTreatmentsCount());
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleTreatmentsCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (featuredTreatments.length - visibleCount + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (featuredTreatments.length - visibleCount + 1)) % (featuredTreatments.length - visibleCount + 1)
    );
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, currentIndex, visibleCount, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
          transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
        >
          {featuredTreatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="card h-full group">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <LazyLoadImage
                    src={treatment.image}
                    alt={treatment.name}
                    effect="blur"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{treatment.name}</h3>
                  <p className="text-neutral-600 mb-4 h-24 overflow-hidden">{treatment.description}</p>
                  <Link to={`/treatments/${treatment.id}`} className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-neutral-100 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-primary-800" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-neutral-100 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-primary-800" />
      </button>
    </div>
  );
};

export default TreatmentCarousel;