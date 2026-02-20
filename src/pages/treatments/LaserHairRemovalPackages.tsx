import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const maintenancePackage = {
  name: 'Maintenance Full Body Laser Hair Removal Package',
  price: '£350',
  priceNote: 'per session',
  treatmentTime: '1 hour 15 minutes',
  deposit: '£165',
  areas: [
    'Lower legs (including knees)',
    'Upper legs',
    'Bikini',
    'Underarms',
    'Upper arms',
    'Lower arms',
  ],
  description: 'Maintain beautifully smooth, long-lasting results with our exclusive full body laser maintenance package, designed for clients who have already completed a course of treatments and wish to preserve their outcome.',
  note: 'Areas within this package cannot be exchanged; however, additional areas may be added at an additional investment.',
  consultation: 'All treatments are subject to individual suitability following a professional consultation to ensure the safest and most effective results.',
  tagline: 'Experience clinical precision, comfort and consistently refined results with every session.',
};

const LaserHairRemovalPackages: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the Soprano Ice Platinum laser work?',
      answer: 'The Soprano Ice Platinum uses advanced in-motion technology that combines three wavelengths to target hair follicles at different depths. The system includes a cooling mechanism that keeps your skin comfortable throughout the treatment, making it virtually painless.'
    },
    {
      question: 'Is it suitable for all skin types?',
      answer: 'Yes, the Soprano Ice Platinum is safe and effective for all skin types, including darker skin tones that may not be suitable for other laser systems.'
    },
    {
      question: 'How often should I have maintenance sessions?',
      answer: 'Maintenance frequency varies by individual. Most clients benefit from a session every 8 to 12 weeks to keep results looking their best. Your practitioner will recommend a schedule tailored to you during your consultation.'
    },
    {
      question: 'Is the treatment painful?',
      answer: 'The Soprano Ice Platinum is designed to be virtually painless. Most clients describe the sensation as a warm, tingling feeling. The built-in cooling system ensures your comfort throughout the treatment.'
    },
    {
      question: 'Who is the maintenance package for?',
      answer: 'This package is designed for clients who have already completed a full course of laser hair removal treatments and wish to maintain their smooth, hair-free results over time.'
    },
    {
      question: 'What should I do to prepare for treatment?',
      answer: 'Shave the treatment area 24 hours before your appointment, avoid sun exposure or tanning for 2 weeks prior, and avoid waxing or plucking for 4 weeks before treatment. Full pre-treatment guidelines will be provided at your consultation.'
    },
    {
      question: 'Can I add extra areas to the package?',
      answer: 'The areas included in the maintenance package cannot be exchanged; however, additional areas may be added at an additional investment. Please discuss your requirements during your consultation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Maintenance Full Body Laser Hair Removal Package | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Maintain beautifully smooth results with our full body laser maintenance package at £350 per session. Soprano Ice Platinum technology in Tunbridge Wells."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Maintenance Full Body Laser Hair Removal Package",
            "description": "Full body laser hair removal maintenance package using Soprano Ice Platinum technology",
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
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
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
                "name": "Maintenance Full Body Laser Hair Removal Package",
                "item": "https://hitechaesthetics.com/treatments/laser-hair-removal-packages"
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
                {maintenancePackage.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {maintenancePackage.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">{maintenancePackage.price} {maintenancePackage.priceNote} | {maintenancePackage.treatmentTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Package Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wide font-medium">Investment</p>
                    <p className="text-2xl font-bold text-primary-600">{maintenancePackage.price} <span className="text-base font-normal text-neutral-600">{maintenancePackage.priceNote}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wide font-medium">Treatment Time</p>
                    <p className="text-lg font-semibold text-neutral-800">{maintenancePackage.treatmentTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wide font-medium">Deposit</p>
                    <p className="text-lg font-semibold text-neutral-800">{maintenancePackage.deposit}</p>
                  </div>
                </div>
              </div>

              <h2 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-4">Treatment Areas</h2>
              <div className="space-y-3 mb-8">
                {maintenancePackage.areas.map((area, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{area}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 text-sm text-neutral-600">
                <p>{maintenancePackage.note}</p>
                <p>{maintenancePackage.consultation}</p>
              </div>

              <p className="text-primary-700 font-medium italic mb-8">{maintenancePackage.tagline}</p>

              <Link
                to="/contact"
                className="btn btn-primary w-full"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                Why Choose Our Soprano Laser Hair Removal?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Soprano Ice Platinum Technology
                  </h3>
                  <p className="text-neutral-600">
                    The gold standard in Soprano laser hair removal, combining three wavelengths for optimal results across all skin types.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Virtually Painless
                  </h3>
                  <p className="text-neutral-600">
                    Built-in cooling system ensures maximum comfort throughout your treatment with minimal discomfort.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    All Skin Types Welcome
                  </h3>
                  <p className="text-neutral-600">
                    Safe and effective for all skin tones, including darker skin that may not be suitable for other laser systems.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Long-Lasting Results
                  </h3>
                  <p className="text-neutral-600">
                    Preserve your smooth, hair-free results with our dedicated maintenance package, keeping you looking your best long after your initial course.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-neutral-50 p-6 rounded-lg cursor-pointer border border-neutral-200 hover:border-primary-300 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-0 pr-4">
                      {faq.question}
                    </h3>
                    <span className={`transition-transform duration-200 text-primary-600 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-neutral-600 mt-4"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Maintain Your Results?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your consultation today and let our expert practitioners help you preserve your beautifully smooth, long-lasting results.
            </p>
            <Link
              to="/contact"
              className="btn btn-secondary"
            >
              Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LaserHairRemovalPackages;
