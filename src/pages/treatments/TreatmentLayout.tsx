import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Sparkles, AlertCircle, PoundSterling, Calendar, RefreshCw, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Treatment } from '../../types/treatment';

interface TreatmentLayoutProps {
  treatment: Treatment;
}

const TreatmentLayout: React.FC<TreatmentLayoutProps> = ({ treatment }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>{treatment.name} | HiTech Aesthetics</title>
        <meta name="description" content={treatment.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": treatment.name,
            "description": treatment.longDescription,
            "procedureType": "Cosmetic",
            "performedBy": {
              "@type": "MedicalBusiness",
              "name": "HiTech Aesthetics",
              "url": "https://hitechaesthetics.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9 Goods Station Road",
                "addressLocality": "Tunbridge Wells",
                "postalCode": "TN1 2DJ",
                "addressCountry": "GB"
              },
              "telephone": "+441892338157"
            },
            ...(treatment.treatmentAreas && {
              "bodyLocation": Array.isArray(treatment.treatmentAreas)
                ? treatment.treatmentAreas.join(', ')
                : treatment.treatmentAreas
            }),
            ...(treatment.duration && { "duration": treatment.duration }),
            ...(treatment.recovery && { "followup": treatment.recovery }),
            ...(treatment.downtime && !treatment.recovery && { "followup": treatment.downtime }),
            ...(treatment.price && { "estimatedCost": treatment.price }),
            ...(treatment.benefits && { "indication": treatment.benefits.join(', ') })
          })}
        </script>
        {treatment.faqs && treatment.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": treatment.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hitechaesthetics.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://hitechaesthetics.com/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": treatment.name,
                "item": `https://hitechaesthetics.com/treatments/${treatment.id}`
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="container mx-auto px-4" style={{ marginTop: '5.5rem' }}>
          <Link
            to="/treatments"
            className="btn btn-outline btn-sm mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Treatments
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {treatment.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {treatment.longDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* Right Column - Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Benefits */}
                {treatment.benefits && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Benefits
                    </h2>
                    <ul className="space-y-3">
                      {treatment.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Treatment Options */}
                {treatment.treatmentOptions && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Treatment Options
                    </h2>
                    <ul className="space-y-3">
                      {treatment.treatmentOptions.map((option, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Treats */}
                {treatment.treats && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      What We Treat
                    </h2>
                    <ul className="space-y-3">
                      {treatment.treats.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Services */}
                {treatment.services && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Services Available
                    </h2>
                    <ul className="space-y-3">
                      {treatment.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Product Lines */}
                {treatment.productLines && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Product Lines
                    </h2>
                    <ul className="space-y-3">
                      {treatment.productLines.map((product, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Peel Types */}
                {treatment.peelTypes && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Peel Types
                    </h2>
                    <ul className="space-y-3">
                      {treatment.peelTypes.map((peel, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-neutral-600">{peel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Treatment Areas */}
                {treatment.treatmentAreas && (
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Treatment Areas
                    </h2>
                    <p className="text-neutral-600">
                      {Array.isArray(treatment.treatmentAreas)
                        ? treatment.treatmentAreas.join(', ')
                        : treatment.treatmentAreas}
                    </p>
                  </div>
                )}

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {treatment.duration && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <Clock className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Duration</h3>
                      <p className="text-neutral-600">{treatment.duration}</p>
                    </div>
                  )}
                  
                  {treatment.results && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <Sparkles className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Results</h3>
                      <p className="text-neutral-600">{treatment.results}</p>
                    </div>
                  )}
                  
                  {(treatment.recovery || treatment.downtime) && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <AlertCircle className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Recovery</h3>
                      <p className="text-neutral-600">{treatment.recovery || treatment.downtime}</p>
                    </div>
                  )}
                  
                  {treatment.sessions && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <Calendar className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Sessions</h3>
                      <p className="text-neutral-600">{treatment.sessions}</p>
                    </div>
                  )}
                  
                  {treatment.course && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <Users className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Course</h3>
                      <p className="text-neutral-600">{treatment.course}</p>
                    </div>
                  )}
                  
                  {treatment.frequency && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <RefreshCw className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Frequency</h3>
                      <p className="text-neutral-600">{treatment.frequency}</p>
                    </div>
                  )}
                  
                  {treatment.touchups && (
                    <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                      <RefreshCw className="w-6 h-6 text-primary-600 mb-2" />
                      <h3 className="font-medium text-neutral-900 mb-1">Touch-ups</h3>
                      <p className="text-neutral-600">{treatment.touchups}</p>
                    </div>
                  )}
                  
                  <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                    <PoundSterling className="w-6 h-6 text-primary-600 mb-2" />
                    <h3 className="font-medium text-neutral-900 mb-1">Investment</h3>
                    <p className="text-primary-600 text-lg font-semibold">{treatment.price}</p>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-8">
                  <Link
                    to="/booking"
                    className="btn btn-primary btn-lg w-full"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {treatment.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm cursor-pointer border border-neutral-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-0">
                        {faq.question}
                      </h3>
                      <span className={`transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>▼</span>
                    </div>
                    {openFaq === index && (
                      <p className="text-neutral-600 mt-4">{faq.answer}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default TreatmentLayout;