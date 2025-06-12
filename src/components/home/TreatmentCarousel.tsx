import React, { useState } from 'react';
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
  'skinpen-microneedling',
  'lynton-ipl',
  'advanced-botox',
  'asce-exosomes',
  'polynucleotides',
];

const featuredTreatments = treatments.filter(t => featuredIds.includes(t.id));

const TreatmentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleTreatments = () => {
    // Show different number of treatments based on screen size
    // This is simplified - in a real implementation we'd use hooks to detect screen size
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 2;
    } else {
      return 3;
    }
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredTreatments.length - visibleTreatments() ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredTreatments.length - visibleTreatments() : prevIndex - 1
    );
  };
  
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div 
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * (100 / visibleTreatments())}%` }}
          transition={{ duration: 0.5 }}
        >
          {featuredTreatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <div className="card h-full">
                <div className="relative h-64 overflow-hidden">
                  <LazyLoadImage
                    src={treatment.image}
                    alt={treatment.name}
                    effect="blur"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{treatment.name}</h3>
                  <p className="text-neutral-600 mb-4">{treatment.description}</p>
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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-neutral-50 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-primary-800" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-neutral-50 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-primary-800" />
      </button>
    </div>
  );
};

export default TreatmentCarousel;