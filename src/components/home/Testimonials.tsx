import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Natalia Golovata',
    treatment: 'Microneedling',
    stars: 5,
    quote: 'I recently had a microneedling treatment on my face, done by Eva, and I couldn\'t be more pleased with the experience! From the moment I walked in, Eva made me feel completely at ease. She explained the entire process clearly and answered all of my questions with patience and professionalism.'
  },
  {
    id: 2,
    name: 'Amy White',
    treatment: 'Laser Hair Removal',
    stars: 5,
    quote: 'Professional, friendly, knowledgeable and makes you feel at ease and looked after. Have been getting laser hair removal with Eva and wouldn\'t go anywhere else.'
  },
  {
    id: 3,
    name: 'Sophia Ambrose',
    treatment: 'Polynucleotides',
    stars: 5,
    quote: 'I\'ve been visiting Eva at Hi-Tech for a year now and have seen a wonderful improvement in my skin by following her advice. The thing that\'s made the biggest difference is the polynucleotide injections - the results are really miraculous, I look ten years younger!'
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8 md:p-12">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    size={20} 
                    className={i < testimonials[current].stars ? "text-secondary-500 fill-secondary-500" : "text-neutral-300"}
                  />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic text-neutral-700 mb-6">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-primary-800 text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-neutral-500">
                  {testimonials[current].treatment} Client
                </p>
              </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-primary-600' : 'bg-neutral-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-neutral-50 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} className="text-primary-800" />
      </button>
      
      <button 
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-neutral-50 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} className="text-primary-800" />
      </button>
    </div>
  );
};

export default Testimonials;