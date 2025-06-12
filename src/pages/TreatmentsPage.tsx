import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Clock, KeyRound as Pound, Sparkles } from 'lucide-react';
import { treatments } from '../data/treatments';

interface BeforeAfter {
  before: string;
  after: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Treatment {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  benefits?: string[];
  treatmentOptions?: string[];
  treats?: string[];
  services?: string[];
  productLines?: string[];
  peelTypes?: string[];
  treatmentAreas?: string | string[];
  sessions?: string;
  course?: string;
  frequency?: string;
  touchups?: string;
  duration?: string;
  results?: string;
  recovery?: string;
  downtime?: string;
  price: string;
  faqs: FAQ[];
  beforeAfter?: BeforeAfter[];
}

const hairRemovalIds = ['soprano-ice-platinum', 'apilus-xcell'];
const skinRejuvenationIds = [
  'skinpen-microneedling',
  'lynton-ipl',
  'lynton-rf',
  'lynton-laser',
  'dermalux-led',
];
const injectableIds = [
  'botox',
  'mesotox',
  'polynucleotides',
  'skin-boosters',
];
const advancedTherapiesIds = [
  'asce-exosomes',
  'prp-hair',
  'relaxing-facials',
  'chemical-peels',
  'zo-skincare',
  'permanent-makeup',
];

const sectionGroups = [
  {
    title: 'Hair Removal Treatments',
    ids: hairRemovalIds,
  },
  {
    title: 'Skin Rejuvenation',
    ids: skinRejuvenationIds,
  },
  {
    title: 'Injectable Treatments',
    ids: injectableIds,
  },
  {
    title: 'Advanced Therapies',
    ids: advancedTherapiesIds,
  },
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
          content="Explore our range of advanced aesthetic treatments at HiTech Aesthetics, from laser hair removal and skin rejuvenation to injectables and permanent makeup."
        />
      </Helmet>
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-20 bg-primary-600 text-white"
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
      
      {/* Treatments Sections */}
      {sectionGroups.map(section => (
        <section key={section.title} className="py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.filter(t => section.ids.includes(t.id)).map(treatment => (
                <div key={treatment.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/treatments/${treatment.id}`} className="block">
                    <div className="relative h-48">
                      <LazyLoadImage
                        src={treatment.image}
                        alt={treatment.name}
                        effect="blur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{treatment.name}</h3>
                      <p className="text-neutral-600 mb-2">{treatment.description}</p>
                      <p className="text-neutral-600 text-sm mb-2">{treatment.longDescription}</p>
                      {/* Optionally list benefits, areas, sessions, etc. */}
                      {treatment.benefits && (
                        <ul className="list-disc list-inside text-neutral-600 text-sm mb-2">
                          {treatment.benefits.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                      {treatment.treatmentAreas && (
                        <p className="text-neutral-600 text-xs mb-1"><strong>Areas:</strong> {Array.isArray(treatment.treatmentAreas) ? treatment.treatmentAreas.join(', ') : treatment.treatmentAreas}</p>
                      )}
                      {treatment.sessions && (
                        <p className="text-neutral-600 text-xs mb-1"><strong>Sessions:</strong> {treatment.sessions}</p>
                      )}
                      {treatment.duration && (
                        <p className="text-neutral-600 text-xs mb-1"><strong>Duration:</strong> {treatment.duration}</p>
                      )}
                      {treatment.results && (
                        <p className="text-neutral-600 text-xs mb-1"><strong>Results:</strong> {treatment.results}</p>
                      )}
                      <div className="mt-4">
                        <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded font-semibold text-sm">Learn More</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Detailed Treatment Information */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Treatment Details</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Click on each treatment below to learn more about the procedure, expected results, and pricing.
            </p>
          </div>
          
          <div className="space-y-6">
            {treatments.map((treatment: Treatment) => (
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
                    className={`transform transition-transform duration-300 text-primary-500 ${
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
                        
                        {/* Benefits or Treatment Options */}
                        {(treatment.benefits || treatment.treatmentOptions || treatment.treats || treatment.services || treatment.productLines || treatment.peelTypes) && (
                          <div className="mb-6">
                            <h4 className="text-lg mb-3">
                              {treatment.benefits ? 'Benefits' :
                               treatment.treatmentOptions ? 'Treatment Options' :
                               treatment.treats ? 'Treats' :
                               treatment.services ? 'Services' :
                               treatment.productLines ? 'Product Lines' :
                               treatment.peelTypes ? 'Peel Types' : ''}
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-neutral-600">
                              {(treatment.benefits || treatment.treatmentOptions || treatment.treats || treatment.services || treatment.productLines || treatment.peelTypes)?.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Treatment Details */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Clock size={20} className="mx-auto mb-2 text-primary-500" />
                            <p className="text-sm text-neutral-500">Duration</p>
                            <p className="font-medium">{treatment.duration || 'N/A'}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Sparkles size={20} className="mx-auto mb-2 text-primary-500" />
                            <p className="text-sm text-neutral-500">Results</p>
                            <p className="font-medium">{treatment.results || treatment.duration || 'N/A'}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Clock size={20} className="mx-auto mb-2 text-primary-500" />
                            <p className="text-sm text-neutral-500">Recovery</p>
                            <p className="font-medium">{treatment.recovery || treatment.downtime || 'None'}</p>
                          </div>
                          <div className="bg-neutral-50 p-4 rounded-lg text-center">
                            <Pound size={20} className="mx-auto mb-2 text-primary-500" />
                            <p className="text-sm text-neutral-500">Price</p>
                            <p className="font-medium">{treatment.price}</p>
                          </div>
                        </div>
                        
                        {/* Additional Information */}
                        {(treatment.treatmentAreas || treatment.sessions || treatment.course || treatment.frequency || treatment.touchups) && (
                          <div className="mb-6">
                            <h4 className="text-lg mb-3">Additional Information</h4>
                            <div className="space-y-2 text-neutral-600">
                              {treatment.treatmentAreas && (
                                <p><strong>Treatment Areas:</strong> {treatment.treatmentAreas}</p>
                              )}
                              {treatment.sessions && (
                                <p><strong>Sessions:</strong> {treatment.sessions}</p>
                              )}
                              {treatment.course && (
                                <p><strong>Course:</strong> {treatment.course}</p>
                              )}
                              {treatment.frequency && (
                                <p><strong>Frequency:</strong> {treatment.frequency}</p>
                              )}
                              {treatment.touchups && (
                                <p><strong>Touch-ups:</strong> {treatment.touchups}</p>
                              )}
                            </div>
                          </div>
                        )}
                        
                        <h4 className="text-lg mb-3">Treatment FAQs</h4>
                        <div className="space-y-3 mb-6">
                          {treatment.faqs.map((faq: FAQ, index: number) => (
                            <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                              <p className="font-medium text-primary-600 mb-1">{faq.question}</p>
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
                          {treatment.beforeAfter ? (
                            treatment.beforeAfter.map((images: BeforeAfter, index: number) => (
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
                            ))
                          ) : (
                            <div className="text-center text-neutral-500 py-8">
                              Before & After images available during consultation
                            </div>
                          )}
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
      <section className="py-20 bg-primary-600 text-white">
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