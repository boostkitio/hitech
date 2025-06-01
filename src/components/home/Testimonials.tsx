import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sophia Clarke',
    treatment: 'Dermal Fillers',
    stars: 5,
    quote: 'My experience at HiTech Aesthetics was exceptional from start to finish. The team took the time to understand exactly what I wanted, and the results exceeded my expectations. I couldn\'t be happier with my refreshed appearance!',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'James Wilson',
    treatment: 'Anti-Wrinkle Treatment',
    stars: 5,
    quote: 'As a busy professional, I appreciate the efficiency and attention to detail at HiTech Aesthetics. The anti-wrinkle treatment was quick, painless, and delivered incredibly natural-looking results. I look refreshed without appearing "done".',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Thompson',
    treatment: 'Skin Rejuvenation',
    stars: 5,
    quote: 'The skin rejuvenation treatments at HiTech Aesthetics have transformed my skin. After struggling with hyperpigmentation for years, I finally found a solution that works. The practitioners are true experts in their field.',
    image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Michael Brooks',
    treatment: 'Microneedling',
    stars: 4,
    quote: 'HiTech Aesthetics provides a level of service that\'s rare to find. The microneedling treatment has improved my acne scarring significantly. The environment is luxurious and the staff incredibly knowledgeable.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name}
                className="w-full h-64 md:h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary-900/30"></div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
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