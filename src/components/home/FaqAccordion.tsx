import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ data
const faqs = [
  {
    id: 1,
    question: 'How long do results typically last?',
    answer: 'The duration of results varies depending on the treatment. Dermal fillers typically last 6-18 months, while anti-wrinkle treatments usually last 3-6 months. Skin rejuvenation treatments may require maintenance sessions every few months for optimal results. During your consultation, we\'ll provide a personalised timeline based on your specific treatment plan.'
  },
  {
    id: 2,
    question: 'Are the treatments painful?',
    answer: 'We prioritise your comfort during all procedures. Many of our treatments involve minimal discomfort, and we use various techniques to ensure a comfortable experience, including topical anaesthetics, cooling devices, and fine needles. Most clients report only mild sensations during treatment, and any discomfort typically subsides quickly afterward.'
  },
  {
    id: 3,
    question: 'How much downtime should I expect?',
    answer: 'Downtime varies by treatment. Many of our procedures, such as anti-wrinkle injections, have minimal to no downtime, allowing you to return to your daily activities immediately. Treatments like chemical peels and microneedling may result in redness and mild swelling for 1-3 days. We\'ll provide detailed aftercare instructions and recovery expectations for your specific treatment.'
  },
  {
    id: 4,
    question: 'Are consultations complimentary?',
    answer: 'Yes, we offer complimentary initial consultations. This allows us to assess your needs, discuss your aesthetic goals, and recommend the most suitable treatments for you. The consultation also provides an opportunity for you to ask questions and learn more about the procedures you\'re interested in.'
  }
];

const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={faq.id}
          className="border border-neutral-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
            onClick={() => toggleFaq(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span className="font-medium text-primary-800">{faq.question}</span>
            <ChevronDown 
              className={`transform transition-transform duration-300 text-primary-600 ${
                activeIndex === index ? 'rotate-180' : ''
              }`} 
              size={20}
            />
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`faq-answer-${faq.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 border-t border-neutral-200 bg-neutral-50">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;