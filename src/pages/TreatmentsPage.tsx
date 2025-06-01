import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Clock, KeyRound as Pound, Sparkles } from 'lucide-react';

const treatments = [
  {
    id: 'apilus-xcell',
    name: 'Apilus xCell Pur',
    description: 'The most advanced technology in permanent hair removal',
    longDescription: 'Experience the next generation of permanent hair removal with Apilus xCell Pur, utilizing cutting-edge technology for superior results. This advanced system combines radiofrequency with multi-polar technology to target hair follicles with precision, making it effective for all skin types and hair colors. The treatment is virtually painless, with no downtime, and provides long-lasting, smooth results.',
    image: '/images/treatments/apilus-xcell.webp',
    beforeAfter: [
      {
        before: '/images/treatments/apilus-before.webp',
        after: '/images/treatments/apilus-after.webp'
      }
    ],
    duration: '30-90 minutes',
    results: 'Permanent reduction',
    recovery: 'None',
    price: 'From £150 per session',
    faqs: [
      {
        question: 'How does Apilus xCell Pur compare to other hair removal methods?',
        answer: 'Apilus xCell Pur is more advanced than traditional laser hair removal, with the ability to treat all skin types and hair colors. It uses a combination of technologies for more effective and comfortable treatments.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients see significant results in 6-8 sessions, with some requiring up to 10-12 for optimal hair reduction. Sessions are typically spaced 4-6 weeks apart.'
      },
      {
        question: 'Is there any downtime after treatment?',
        answer: 'There is no downtime with Apilus xCell Pur. You may experience slight redness or sensitivity immediately after treatment, but this typically subsides within a few hours.'
      }
    ]
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description: 'Stimulate collagen renewal and revitalise your skin with ultra-hygienic microneedling for a radiant, even-toned complexion.',
    longDescription: 'Our microneedling treatments use ultra-fine, medical-grade needles to create controlled micro-injuries that trigger your skin\'s natural healing process. This stimulates collagen and elastin production, resulting in firmer, more youthful-looking skin. The treatment is performed under the highest hygiene standards to ensure safety and effectiveness.',
    image: '/images/treatments/microneedling.webp',
    beforeAfter: [
      {
        before: '/images/treatments/microneedling-before.webp',
        after: '/images/treatments/microneedling-after.webp'
      }
    ],
    duration: '60-90 minutes',
    results: '3-6 months',
    recovery: '2-3 days',
    price: 'From £250',
    faqs: [
      {
        question: 'Is microneedling painful?',
        answer: 'We apply a topical numbing cream before treatment to minimize discomfort. Most patients describe the sensation as mild to moderate.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'We typically recommend a series of 3-6 treatments spaced 4-6 weeks apart for optimal results.'
      },
      {
        question: 'When will I see results?',
        answer: 'Initial results may be visible within a few days, with continued improvement over 4-6 weeks as collagen production increases.'
      }
    ]
  },
  {
    id: 'soprano-laser',
    name: 'Soprano Laser Hair Removal',
    description: 'Experience lasting smoothness with our pain-free, guided laser technology that targets hair follicles with pinpoint precision.',
    longDescription: 'Our advanced Soprano laser hair removal system delivers comfortable, effective, and permanent hair reduction for all skin types. The innovative technology combines three different wavelengths to safely target hair follicles while protecting the surrounding skin. Experience virtually pain-free treatments with our in-motion technique and built-in cooling system.',
    image: '/images/treatments/laser-hair-removal.webp',
    beforeAfter: [
      {
        before: '/images/treatments/laser-before.webp',
        after: '/images/treatments/laser-after.webp'
      }
    ],
    duration: '15-60 minutes',
    results: 'Permanent reduction',
    recovery: 'None',
    price: 'From £99 per session',
    faqs: [
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients need 6-8 sessions spaced 4-6 weeks apart for optimal results, as hair grows in different cycles.'
      },
      {
        question: 'Is it painful?',
        answer: 'The Soprano system features advanced cooling technology, making it one of the most comfortable hair removal options available.'
      },
      {
        question: 'What areas can be treated?',
        answer: 'We can treat virtually any area of the body including face, underarms, arms, back, legs, and bikini line.'
      }
    ]
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels & Facials',
    description: 'Unlock your skin\'s glow with science-backed peels and facials tailored to your unique texture and tone.',
    longDescription: 'Our medical-grade chemical peels and advanced facials are customized to address your specific skin concerns, whether it\'s acne, hyperpigmentation, aging, or dullness. Using clinically-proven ingredients and techniques, we help reveal smoother, brighter, and more youthful-looking skin. Each treatment is tailored to your skin type and goals for optimal results.',
    image: '/images/treatments/chemical-peel.webp',
    beforeAfter: [
      {
        before: '/images/treatments/peel-before.webp',
        after: '/images/treatments/peel-after.webp'
      }
    ],
    duration: '30-90 minutes',
    results: 'Immediate, improves with series',
    recovery: '1-7 days',
    price: 'From £120',
    faqs: [
      {
        question: 'What skin concerns can chemical peels address?',
        answer: 'Our peels can improve acne, fine lines, sun damage, uneven skin tone, rough texture, and signs of aging.'
      },
      {
        question: 'Is there downtime after a chemical peel?',
        answer: 'This depends on the peel depth. Light peels have minimal downtime, while deeper peels may require a few days of recovery.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'We typically recommend a series of 3-6 treatments spaced 2-4 weeks apart for optimal results.'
      }
    ]
  },
  {
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Injections',
    description: 'Subtly rejuvenate your appearance with expertly administered injectables that soften lines while preserving natural expression.',
    longDescription: 'Our anti-wrinkle injections are expertly administered to smooth dynamic wrinkles caused by facial expressions. The treatment temporarily relaxes targeted muscles to soften lines on the forehead, between the brows, and around the eyes. Our experienced practitioners focus on achieving natural-looking results that maintain your ability to express emotions while reducing the appearance of fine lines and wrinkles.',
    image: '/images/treatments/anti-wrinkle.webp',
    beforeAfter: [
      {
        before: '/images/treatments/wrinkle-before.webp',
        after: '/images/treatments/wrinkle-after.webp'
      }
    ],
    duration: '15-30 minutes',
    results: '3-4 months',
    recovery: 'None',
    price: 'From £200',
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer: 'Results typically begin to appear within 3-5 days, with full effects visible after 2 weeks.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'Most patients describe the sensation as a small pinch. We use ultra-fine needles to maximize comfort.'
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 3-4 months. With regular treatments, results may last longer as the treated muscles become trained to relax.'
      }
    ]
  }
];

const TreatmentsPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  
  return (
    <>
      <Helmet>
        <title>Our Treatments | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Explore our range of advanced aesthetic treatments at HiTech Aesthetics, from dermal fillers and anti-wrinkle injections to skin rejuvenation and laser therapies."
        />
      </Helmet>
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-20 bg-primary-800 text-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">Our Treatments</h1>
            <p className="text-xl text-neutral-100">
              Discover our comprehensive range of advanced aesthetic treatments, each delivered with precision and personalised care.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  key={treatment.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className="card h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <LazyLoadImage
                      src={treatment.image}
                      alt={treatment.name}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3">{treatment.name}</h3>
                    <p className="text-neutral-600 mb-4">{treatment.description}</p>
                    <a 
                      href={`#${treatment.id}`}
                      className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(treatment.id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                        setActiveAccordion(treatment.id);
                      }}
                    >
                      Learn more
                      <ChevronDown size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Detailed Treatment Information */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Treatment Details</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Click on each treatment below to learn more about the procedure, expected results, and pricing.
            </p>
          </div>
          
          <div className="space-y-6">
            {treatments.map((treatment) => (
              <div 
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-neutral-50 transition-colors"
                  onClick={() => toggleAccordion(treatment.id)}
                  aria-expanded={activeAccordion === treatment.id}
                >
                  <h3 className="text-xl">{treatment.name}</h3>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-primary-600 ${
                      activeAccordion === treatment.id ? 'rotate-180' : ''
                    }`} 
                    size={20}
                  />
                </button>
                
                {activeAccordion === treatment.id && (
                  <div className="p-6 pt-0 border-t border-neutral-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <p className="text-neutral-700 mb-6">{treatment.longDescription}</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Clock size={20} className="mx-auto mb-2 text-primary-600" />
                            <p className="text-sm text-neutral-500">Duration</p>
                            <p className="font-medium">{treatment.duration}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Sparkles size={20} className="mx-auto mb-2 text-primary-600" />
                            <p className="text-sm text-neutral-500">Results</p>
                            <p className="font-medium">{treatment.results}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Clock size={20} className="mx-auto mb-2 text-primary-600" />
                            <p className="text-sm text-neutral-500">Recovery</p>
                            <p className="font-medium">{treatment.recovery}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Pound size={20} className="mx-auto mb-2 text-primary-600" />
                            <p className="text-sm text-neutral-500">Price</p>
                            <p className="font-medium">{treatment.price}</p>
                          </div>
                        </div>
                        
                        <h4 className="text-lg mb-3">Treatment FAQs</h4>
                        <div className="space-y-3 mb-6">
                          {treatment.faqs.map((faq, index) => (
                            <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                              <p className="font-medium text-primary-800 mb-1">{faq.question}</p>
                              <p className="text-sm text-neutral-600">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                        
                        <Link to="/contact" className="btn btn-primary inline-block">
                          Book a Consultation
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="text-lg mb-4">Before & After</h4>
                        <div className="space-y-4">
                          {treatment.beforeAfter.map((images, index) => (
                            <div key={index} className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-center text-sm text-neutral-500 mb-2">Before</p>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                  <LazyLoadImage
                                    src={images.before}
                                    alt={`${treatment.name} Before`}
                                    effect="blur"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              <div>
                                <p className="text-center text-sm text-neutral-500 mb-2">After</p>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                  <LazyLoadImage
                                    src={images.after}
                                    alt={`${treatment.name} After`}
                                    effect="blur"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Transform Your Look?</h2>
            <p className="text-xl mb-8 text-neutral-200">
              Book a consultation with our expert practitioners to discuss the best treatment options for your aesthetic goals.
            </p>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;