import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Zap, Droplets, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreatmentLevel {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  duration: string;
  description: string;
  includes: string[];
  badge?: string;
}

const treatmentLevels: TreatmentLevel[] = [
  {
    id: 'signature',
    name: 'Syndeo HydraFacial Signature',
    price: '£109',
    originalPrice: '',
    duration: '30 minutes',
    description: 'Essential cleansing and hydration for instant radiance.',
    includes: [
      'Deep cleanse and exfoliation',
      'Gentle peel to loosen dirt and debris',
      'Painless extraction using vacuum technology',
      'Hydration with nourishing serums',
      'Immediate visible results'
    ]
  },
  {
    id: 'deluxe',
    name: 'HydraFacial Deluxe',
    price: '£169',
    originalPrice: '',
    duration: '45 minutes',
    description: 'Enhanced treatment with personalised skin boosters and LED therapy.',
    includes: [
      'All Signature treatment benefits',
      'Customised skin booster serum',
      'LED light therapy for enhanced results',
      'Targeted treatment for specific concerns',
      'Extended relaxation time'
    ],
    badge: 'POPULAR'
  },
  {
    id: 'platinum',
    name: 'HydraFacial Platinum',
    price: '£189',
    originalPrice: '',
    duration: '60 minutes',
    description: 'The ultimate HydraFacial experience with lymphatic drainage and premium serums.',
    includes: [
      'All Deluxe treatment benefits',
      'Lymphatic drainage massage',
      'Premium advanced serums',
      'Extended treatment time',
      'Maximum skin rejuvenation',
      'Ultimate luxury experience'
    ],
    badge: 'ULTIMATE'
  }
];

const Hydrafacial: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const treatmentSteps = [
    {
      icon: Sparkles,
      title: 'Cleanse & Exfoliate',
      description: 'Gentle removal of dead skin cells and surface debris with a refreshing exfoliation.'
    },
    {
      icon: Zap,
      title: 'Extract & Peel',
      description: 'Painless extraction using vacuum technology whilst applying salicylic and glycolic acid to loosen impurities.'
    },
    {
      icon: Droplets,
      title: 'Hydrate & Nourish',
      description: 'Intensive hydration with customised serums tailored to your skin\'s unique needs.'
    }
  ];

  const skinConcerns = [
    'Fine lines and wrinkles',
    'Acne and blackheads',
    'Enlarged or congested pores',
    'Uneven skin tone and texture',
    'Hyperpigmentation and sun damage',
    'Dull and dehydrated skin',
    'Rosacea and sensitive skin',
    'Oily or combination skin'
  ];

  const faqs = [
    {
      question: 'What is HydraFacial and how does it work?',
      answer: 'HydraFacial uses patented Vortex-Fusion Technology to cleanse, extract, and hydrate your skin in three simple steps. This revolutionary system deeply cleanses pores, removes dead skin cells, and delivers nourishing serums for immediate, visible results. The treatment is completely painless and suitable for all skin types.'
    },
    {
      question: 'What makes HydraFacial different from a regular facial?',
      answer: 'Unlike traditional facials, HydraFacial uses advanced Vortex technology to deliver superior cleansing and hydration. The vacuum-based extraction is gentle yet highly effective, and the simultaneous serum infusion ensures deeper penetration of active ingredients. You\'ll see immediate results with no downtime or irritation.'
    },
    {
      question: 'Which HydraFacial treatment level is right for me?',
      answer: 'The Signature treatment is perfect for first-time clients or those seeking essential cleansing and hydration. The Deluxe level includes customised boosters and LED therapy for enhanced results. The Platinum treatment offers the ultimate experience with lymphatic drainage and premium serums. During your consultation, we\'ll help you choose the perfect treatment for your skin goals.'
    },
    {
      question: 'What skin concerns does HydraFacial treat?',
      answer: 'HydraFacial effectively addresses multiple skin concerns including fine lines and wrinkles, acne, congested pores, uneven texture, hyperpigmentation, sun damage, dullness, dehydration, and rosacea. The treatment can be customised with specific serums to target your individual concerns.'
    },
    {
      question: 'Is there any downtime after a HydraFacial?',
      answer: 'No, there is absolutely no downtime. You can return to your normal activities immediately and even apply makeup straight after if needed. Your skin will look radiant and feel refreshed right away, making it the perfect treatment before special events.'
    },
    {
      question: 'How often should I have HydraFacial treatments?',
      answer: 'For optimal long-term results, we recommend monthly HydraFacial treatments. However, you\'ll see immediate visible improvements after just one session. Some clients with specific concerns may benefit from more frequent treatments initially, which we can discuss during your consultation.'
    },
    {
      question: 'Is HydraFacial suitable for sensitive skin?',
      answer: 'Yes, HydraFacial is suitable for all skin types, including sensitive skin. The treatment is gentle, non-invasive, and completely pain-free. Our practitioners will customise the treatment and select serums specifically for your skin type and sensitivity level.'
    },
    {
      question: 'Can I have HydraFacial if I have active acne?',
      answer: 'Yes, HydraFacial is excellent for acne-prone skin. The deep cleansing and extraction process helps clear congested pores and remove impurities without irritation. We can also incorporate specific serums to target active breakouts and prevent future blemishes.'
    },
    {
      question: 'When will I see results from HydraFacial?',
      answer: 'You\'ll see immediate results after your first treatment. Your skin will appear brighter, smoother, and more hydrated straight away. With regular monthly treatments, you\'ll experience cumulative benefits including improved skin texture, reduced fine lines, and a healthy, lasting glow.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>HydraFacial Treatment in Tunbridge Wells | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Experience the revolutionary HydraFacial treatment at HiTech Aesthetics. Instant results with no downtime. Signature, Deluxe & Platinum options from £109. Book now!"
        />
        <meta
          name="keywords"
          content="HydraFacial Tunbridge Wells, facial treatment, skin rejuvenation, hydrating facial, Vortex Fusion Technology, Syndeo HydraFacial"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "HydraFacial Treatment",
            "description": "Revolutionary facial treatment using Vortex Fusion Technology to cleanse, extract, and hydrate skin with immediate visible results",
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
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "109",
              "highPrice": "189",
              "priceCurrency": "GBP"
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
                "name": "HydraFacial",
                "item": "https://hitechaesthetics.com/treatments/hydrafacial"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="container mx-auto px-4" style={{ marginTop: '5.5rem' }}>
          <Link to="/treatments" className="btn btn-outline btn-sm mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Treatments
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  HydraFacial Treatment
                </h1>
                <p className="text-xl text-neutral-600 mb-4">
                  Experience instant radiance with the revolutionary HydraFacial treatment
                </p>
                <p className="text-lg text-neutral-700">
                  Transform your skin in just 30 minutes with our advanced Syndeo HydraFacial technology.
                  This non-invasive, pain-free treatment uses patented Vortex-Fusion Technology to cleanse,
                  extract, and hydrate your skin, delivering immediate, visible results with no downtime.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://ik.imagekit.io/boostkit/HiTech/hydrafacialHi_Tech.webp?updatedAt=1758016094803&tr=w-600"
                  alt="HydraFacial Treatment"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Levels - Pricing Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Choose Your HydraFacial Experience
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                From essential refreshment to ultimate rejuvenation, we have the perfect treatment for your skin goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {treatmentLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    level.badge ? 'ring-2 ring-primary-400' : 'border border-neutral-200'
                  } relative`}
                >
                  {level.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {level.badge}
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {level.name}
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-primary-600">
                        {level.price}
                      </span>
                      {level.originalPrice && (
                        <span className="text-xl text-neutral-400 line-through">
                          {level.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-neutral-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{level.duration}</span>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      {level.description}
                    </p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {level.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`btn w-full ${
                      level.badge ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    Book Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - 3 Step Process */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <img
                  src="https://ik.imagekit.io/boostkit/HiTech/Verified-Provider-Sticker_6-inches_2025x800.webp?updatedAt=1760368488429"
                  alt="HydraFacial Verified Provider"
                  className="h-32 w-auto"
                />
              </motion.div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                How HydraFacial Works
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Experience the power of patented Vortex-Fusion Technology in three simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-sm font-semibold text-primary-600 mb-2">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What It Treats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Skin Concerns We Treat
                </h2>
                <p className="text-lg text-neutral-600">
                  HydraFacial is suitable for all skin types and effectively addresses multiple concerns
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skinConcerns.map((concern, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center bg-neutral-50 p-4 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{concern}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Why Choose HydraFacial?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Immediate Visible Results',
                    description: 'See and feel the difference right after your first treatment with instantly glowing, radiant skin.'
                  },
                  {
                    title: 'Zero Downtime',
                    description: 'Resume your normal activities immediately. Perfect for busy lifestyles and pre-event preparations.'
                  },
                  {
                    title: 'Suitable for All Skin Types',
                    description: 'Safe and effective for sensitive, dry, oily, combination, and acne-prone skin.'
                  },
                  {
                    title: 'Painless & Relaxing',
                    description: 'Enjoy a comfortable, soothing experience with no discomfort or irritation.'
                  },
                  {
                    title: 'Customisable Treatment',
                    description: 'Tailored to your specific skin concerns with personalised serum selections.'
                  },
                  {
                    title: 'Clinically Proven Technology',
                    description: 'Patented Vortex-Fusion Technology backed by scientific research and millions of satisfied clients worldwide.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
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
                    <span
                      className={`transition-transform duration-200 text-primary-600 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    >
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
              Ready to Experience the HydraFacial Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your HydraFacial treatment today and discover why it's the world's most popular facial treatment.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Book Your Treatment
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hydrafacial;
