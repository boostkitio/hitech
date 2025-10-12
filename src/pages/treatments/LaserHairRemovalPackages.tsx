import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Package {
  id: string;
  name: string;
  price: string;
  sessions: number;
  areas: string[];
  description: string;
}

const packages: Package[] = [
  {
    id: 'body-package',
    name: 'Body Package',
    price: '£999',
    sessions: 6,
    areas: ['Underarms', 'Bikini', 'Lower legs', 'Knees', 'Toes & Feet'],
    description: 'Comprehensive body hair removal covering essential areas for smooth, hair-free skin.'
  },
  {
    id: 'face-package',
    name: 'Face Package',
    price: '£999',
    sessions: 6,
    areas: ['Upper lip', 'Chin', 'Cheeks', 'Sideburns', 'Jawline'],
    description: 'Complete facial hair removal for a smooth, flawless complexion.'
  },
  {
    id: 'male-body-package',
    name: 'Male Body Package',
    price: '£999',
    sessions: 6,
    areas: ['Full back & shoulders'],
    description: 'Specialised package for male clients targeting back and shoulder hair removal.'
  }
];

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
      question: 'How many sessions will I need?',
      answer: 'All our packages include 6 sessions for optimal results. Sessions are typically spaced 4-6 weeks apart to target hair follicles at different growth stages.'
    },
    {
      question: 'Is the treatment painful?',
      answer: 'The Soprano Ice Platinum is designed to be virtually painless. Most clients describe the sensation as a warm, tingling feeling. The built-in cooling system ensures your comfort throughout the treatment.'
    },
    {
      question: 'When will I see results?',
      answer: 'You may notice some hair reduction after the first session, but significant results typically become visible after 3-4 sessions. Complete results are achieved after completing the full 6-session package.'
    },
    {
      question: 'What should I do to prepare for treatment?',
      answer: 'Shave the treatment area 24 hours before your appointment, avoid sun exposure or tanning for 2 weeks prior, and avoid waxing or plucking for 4 weeks before treatment. Full pre-treatment guidelines will be provided at your consultation.'
    },
    {
      question: 'Can I combine packages?',
      answer: 'Yes, you can purchase multiple packages if you wish to treat different areas. We can discuss the best combination during your consultation to suit your needs and goals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Laser Hair Removal Packages | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Discover our comprehensive laser hair removal packages using Soprano Ice Platinum technology. Face, body, and male packages from £999 for 6 sessions in Tunbridge Wells."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Laser Hair Removal Packages",
            "description": "Comprehensive laser hair removal treatment packages using Soprano Ice Platinum technology",
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
                "name": "Laser Hair Removal Packages",
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
                Laser Hair Removal Packages
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Experience the gold standard in pain-free hair removal with our Soprano Ice Platinum technology.
                Choose from our comprehensive packages designed to target your specific needs.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">6 Sessions | From £999</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-primary-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    {pkg.name}
                  </h2>
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {pkg.price}
                  </div>
                  <div className="text-neutral-600 mb-6">
                    {pkg.sessions} sessions
                  </div>
                  <p className="text-neutral-600 mb-6">
                    {pkg.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">
                      Treatment Areas
                    </h3>
                    {pkg.areas.map((area, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                Why Choose Our Laser Hair Removal?
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
                    The gold standard in laser hair removal, combining three wavelengths for optimal results across all skin types.
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
                    Achieve permanent hair reduction with our comprehensive 6-session packages, saving you time and money.
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
              Ready to Start Your Hair-Free Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your free consultation today and discover which package is perfect for you.
              Our expert practitioners will create a personalised treatment plan.
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
