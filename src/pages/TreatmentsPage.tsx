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
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    description: 'Restore lost volume, smooth lines, enhance features, and rejuvenate your appearance with our premium dermal fillers.',
    longDescription: 'Our dermal filler treatments use premium hyaluronic acid products to restore lost volume, enhance facial contours, and reduce the appearance of lines and wrinkles. Each treatment is tailored to your unique facial structure and aesthetic goals, ensuring natural-looking results that enhance your features without changing your essential character.',
    image: 'https://images.pexels.com/photos/7298701/pexels-photo-7298701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '30-60 minutes',
    results: '6-18 months',
    recovery: 'Minimal downtime',
    price: 'From £350',
    faqs: [
      {
        question: 'Are dermal fillers painful?',
        answer: 'We use numbing cream and fillers containing local anaesthetic to ensure your comfort. Most clients experience only mild discomfort during treatment.'
      },
      {
        question: 'When will I see results?',
        answer: 'Results are visible immediately, with optimal results seen after any initial swelling subsides, typically within 1-2 weeks.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Common side effects include temporary swelling, redness, and bruising at injection sites. These typically resolve within a few days.'
      }
    ]
  },
  {
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Treatment',
    description: 'Smooth away fine lines and wrinkles with our targeted anti-ageing injectable treatments.',
    longDescription: 'Our anti-wrinkle injections work by temporarily relaxing the facial muscles that cause dynamic wrinkles such as frown lines, crow\'s feet, and forehead lines. Administered with precision by our medical practitioners, these treatments provide a refreshed, more youthful appearance while maintaining natural facial expressions.',
    image: 'https://images.pexels.com/photos/7446147/pexels-photo-7446147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '15-30 minutes',
    results: '3-4 months',
    recovery: 'No downtime',
    price: 'From £195',
    faqs: [
      {
        question: 'When will I see results from anti-wrinkle treatments?',
        answer: 'Results typically begin to appear 3-5 days after treatment, with full results visible after 10-14 days.'
      },
      {
        question: 'Will I look frozen or unnatural?',
        answer: 'Our skilled practitioners use precise techniques to ensure you maintain natural expressions while reducing the appearance of wrinkles.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'There is no downtime required. You can resume normal activities immediately, though we recommend avoiding strenuous exercise for 24 hours.'
      }
    ]
  },
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    description: 'Revitalise your complexion with our advanced skin rejuvenation treatments for a radiant, youthful glow.',
    longDescription: 'Our comprehensive skin rejuvenation treatments address multiple concerns including texture, tone, fine lines, and overall skin health. Using a combination of medical-grade technologies and products, we create customised treatment plans to reveal fresher, more radiant skin. Options include advanced facials, medical-grade peels, laser treatments, and microneeedling.',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3736397/pexels-photo-3736397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/3786178/pexels-photo-3786178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '45-60 minutes',
    results: 'Progressive improvement',
    recovery: '1-3 days',
    price: 'From £125',
    faqs: [
      {
        question: 'How many treatments will I need?',
        answer: 'Most clients benefit from a series of 3-6 treatments, spaced 3-4 weeks apart, followed by maintenance sessions.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'Downtime varies depending on the specific treatment, ranging from no downtime to 3-5 days of mild redness and peeling.'
      },
      {
        question: 'How soon will I see results?',
        answer: 'You may notice an immediate glow after treatment, with progressive improvement in skin texture and tone over 4-6 weeks.'
      }
    ]
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    description: 'Transform your skin texture and tone with our selection of medical-grade chemical peels.',
    longDescription: 'Our medical-grade chemical peels use carefully formulated acids to exfoliate the skin and promote cell renewal. From gentle lactic acid peels to more intensive TCA peels, we offer a range of options to address concerns such as acne, pigmentation, fine lines, and dull skin. Each peel is selected based on your skin type and concerns to ensure optimal results.',
    image: 'https://images.pexels.com/photos/6766591/pexels-photo-6766591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/3764679/pexels-photo-3764679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '30-45 minutes',
    results: '1-4 weeks',
    recovery: '3-7 days',
    price: 'From £95',
    faqs: [
      {
        question: 'Are chemical peels painful?',
        answer: 'You may experience mild tingling or warming sensations during treatment. Our practitioners monitor your comfort level throughout the procedure.'
      },
      {
        question: 'How often can I have a chemical peel?',
        answer: 'This depends on the strength of the peel. Light peels can be performed every 2-4 weeks, while deeper peels may require several months between treatments.'
      },
      {
        question: 'What should I do after a chemical peel?',
        answer: 'Post-treatment care includes avoiding sun exposure, using gentle skincare products, and applying sunscreen daily. Detailed aftercare instructions will be provided.'
      }
    ]
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description: 'Stimulate collagen production for smoother, firmer skin with our advanced microneedling treatments.',
    longDescription: 'Microneedling uses fine needles to create controlled micro-injuries to the skin, triggering the body\'s natural healing process and stimulating collagen and elastin production. This minimally invasive treatment improves skin texture, reduces scarring, minimizes pores, and enhances overall skin quality. We offer traditional microneedling as well as radiofrequency microneedling for enhanced results.',
    image: 'https://images.pexels.com/photos/7479753/pexels-photo-7479753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/3764695/pexels-photo-3764695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '45-60 minutes',
    results: '4-6 weeks',
    recovery: '1-3 days',
    price: 'From £195',
    faqs: [
      {
        question: 'Is microneedling suitable for all skin types?',
        answer: 'Microneedling is suitable for most skin types and concerns. During your consultation, we\'ll assess your skin to ensure it\'s appropriate for your specific situation.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients benefit from a series of 3-6 treatments, spaced 4-6 weeks apart, with maintenance sessions as needed.'
      },
      {
        question: 'What is the recovery like?',
        answer: 'Your skin may appear red and feel tight immediately after treatment, similar to a mild sunburn. This typically subsides within 24-72 hours.'
      }
    ]
  },
  {
    id: 'laser-treatments',
    name: 'Laser Treatments',
    description: 'Target specific skin concerns with precision using our state-of-the-art laser technologies.',
    longDescription: 'Our advanced laser treatments harness the power of focused light energy to address a range of skin concerns including pigmentation, vascular issues, hair removal, and skin rejuvenation. Each treatment is tailored to your specific needs, using precise settings to ensure safety and effectiveness for your skin type and concern.',
    image: 'https://images.pexels.com/photos/7446139/pexels-photo-7446139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeAfter: [
      {
        before: 'https://images.pexels.com/photos/3764025/pexels-photo-3764025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        after: 'https://images.pexels.com/photos/3764375/pexels-photo-3764375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    duration: '30-60 minutes',
    results: 'Varies by treatment',
    recovery: '1-7 days',
    price: 'From £175',
    faqs: [
      {
        question: 'Are laser treatments painful?',
        answer: 'Comfort levels vary depending on the specific laser and treatment area. Many clients describe the sensation as similar to a rubber band snap. We use cooling techniques to enhance comfort.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'This varies by treatment and concern. For example, laser hair removal typically requires 6-8 sessions, while pigmentation treatments may show significant improvement after 1-3 sessions.'
      },
      {
        question: 'Is there any downtime after laser treatments?',
        answer: 'Downtime varies by treatment type. Some laser treatments have minimal downtime, while more intensive treatments may require several days of recovery.'
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