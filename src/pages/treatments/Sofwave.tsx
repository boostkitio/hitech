import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Clock, Shield, Zap, Target, Sparkles, Timer, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMAGEKIT_BASE = 'https://ik.imagekit.io/boostkit/HiTech/Sofwave';

const allGalleryImages = [
  { src: `${IMAGEKIT_BASE}/Sofwave_19.jpeg`, alt: 'Sofwave facial treatment in progress' },
  { src: `${IMAGEKIT_BASE}/Sofwave_12.jpeg`, alt: 'Sofwave jawline treatment being performed' },
  { src: `${IMAGEKIT_BASE}/Sofwave_9.jpeg`, alt: 'Sofwave treatment on forehead area' },
  { src: `${IMAGEKIT_BASE}/Sofwave_10.jpeg`, alt: 'Sofwave face treatment with practitioner' },
  { src: `${IMAGEKIT_BASE}/Sofwave_1.jpeg`, alt: 'Introducing Sofwave skin tightening' },
  { src: `${IMAGEKIT_BASE}/Sofwave_8.jpeg`, alt: 'Sofwave before and after jawline results - 1 month follow-up' },
  { src: `${IMAGEKIT_BASE}/Sofwave_13.jpeg`, alt: 'Sofwave before and after face lifting results' },
  { src: `${IMAGEKIT_BASE}/Sofwave_14.jpeg`, alt: 'Sofwave before and after facial rejuvenation results' },
  { src: `${IMAGEKIT_BASE}/Sofwave_15.jpeg`, alt: 'Sofwave before and after frontal face results - 1 month follow-up' },
  { src: `${IMAGEKIT_BASE}/Sofwave_16.jpeg`, alt: 'Sofwave before and after profile results - 5 month follow-up' },
  { src: `${IMAGEKIT_BASE}/Sofwave_17.jpeg`, alt: 'Sofwave before and after jawline and neck tightening results' },
];

const treatmentExperienceImages = allGalleryImages.slice(0, 3);
const beforeAfterImages = allGalleryImages.slice(5);

const pricingOptions = [
  {
    area: 'Full Face, Brow Lift & Neck',
    price: '£2,000',
    description: 'Complete rejuvenation for maximum results across all key areas.',
  },
  {
    area: 'Full Face',
    price: '£1,700',
    description: 'Target fine lines, wrinkles, and skin laxity across the entire face.',
  },
  {
    area: 'Lower Face & Neck',
    price: '£1,500',
    description: 'Address jowls, jawline definition, and neck laxity in one session.',
  },
  {
    area: 'Neck',
    price: '£1,300',
    description: 'Tighten and lift the neck area for a more youthful profile.',
  },
  {
    area: 'Brow Lift',
    price: '£500',
    description: 'Non-surgical brow elevation for a refreshed, open-eyed appearance.',
  },
];

const quickFacts = [
  { icon: Clock, label: 'Duration', value: '30–45 mins' },
  { icon: Sparkles, label: 'Results Last', value: 'Up to 2 years' },
  { icon: Target, label: 'Sessions', value: '1 session' },
  { icon: Timer, label: 'Downtime', value: 'No downtime' },
];

const benefits = [
  {
    title: 'Single Session Treatment',
    description: 'Achieve visible results in just one 30–45 minute session with no need for repeat visits.',
  },
  {
    title: 'No Downtime',
    description: 'Resume your normal activities immediately after treatment — no recovery period required.',
  },
  {
    title: 'Safe for All Skin Types',
    description: 'Unlike light-based therapies, Sofwave uses ultrasound technology that is safe for all skin tones.',
  },
  {
    title: 'FDA-Cleared Technology',
    description: 'Cleared by the FDA for eyebrow lifting, submental and neck tissue lifting, and reducing fine lines and wrinkles.',
  },
  {
    title: 'Non-Invasive',
    description: 'No needles, no surgery, and no anaesthesia required. A comfortable, non-invasive treatment experience.',
  },
  {
    title: 'Clinically Proven Results',
    description: 'Multi-centre studies show 72% patient satisfaction, with results continuing to improve over 12 weeks.',
  },
];

const treatedAreas = [
  'Forehead and brow lifting',
  'Full face tightening',
  'Jawline definition',
  'Jowl reduction',
  'Neck tightening and lifting',
  'Submental (under chin) lifting',
  'Fine lines and wrinkle reduction',
  'Overall skin laxity',
];

const faqs = [
  {
    question: 'What is Sofwave and how does it work?',
    answer: 'Sofwave uses proprietary Synchronous Ultrasound Parallel Beam (SUPERB™) technology to deliver precise ultrasound energy at 1.5mm depth in the mid-dermis. This generates controlled heat that triggers neocollagenesis — your body\'s natural process of producing new collagen. The integrated Sofcool™ cooling mechanism protects the skin\'s surface throughout the treatment.',
  },
  {
    question: 'How is Sofwave different from HIFU or other ultrasound treatments?',
    answer: 'Unlike traditional HIFU (High-Intensity Focused Ultrasound) which targets a single focal point deep in the tissue, Sofwave uses parallel beam technology to treat a wider area at a precise 1.5mm depth in the mid-dermis. This makes the treatment more comfortable, more consistent, and eliminates the risk of nerve damage associated with deeper treatments.',
  },
  {
    question: 'What results can I expect from Sofwave?',
    answer: 'You may notice initial results within one week as mild tissue contraction occurs. The full results develop over 12 weeks as new collagen regenerates. Clinical studies show significant improvement in skin laxity, with results lasting up to two years. Annual maintenance sessions are recommended to preserve your results.',
  },
  {
    question: 'Is Sofwave painful?',
    answer: 'Most patients describe the sensation as warm and tolerable. The integrated Sofcool™ cooling system continuously protects the skin surface, making the treatment comfortable without the need for anaesthesia. Some patients may feel brief moments of warmth during the procedure.',
  },
  {
    question: 'Who is a good candidate for Sofwave?',
    answer: 'Sofwave is ideal for patients who are beginning to notice mild to moderate skin laxity, fine lines, and wrinkles. It is suitable for all skin types and tones. The best candidates are typically those looking for a non-invasive alternative to surgical facelifts. A consultation will help determine if Sofwave is the right treatment for you.',
  },
  {
    question: 'Are there any side effects?',
    answer: 'Side effects are minimal and temporary. You may experience mild redness or slight swelling immediately after treatment, which typically resolves within a few hours. No serious adverse events have been reported in clinical trials.',
  },
  {
    question: 'How long does the treatment take?',
    answer: 'A full face treatment takes approximately 30–45 minutes. Individual areas such as a brow lift can be completed in as little as 15–20 minutes. You can return to your normal activities immediately afterwards.',
  },
  {
    question: 'How many sessions do I need?',
    answer: 'Most patients achieve excellent results with just one session. For optimal long-term maintenance, we recommend annual top-up treatments. During your consultation, we will create a personalised treatment plan based on your specific goals.',
  },
  {
    question: 'What is the cost of Sofwave treatment?',
    answer: 'Pricing varies by treatment area. A brow lift starts from £500, full face treatment is £1,700, and our most popular option — full face, brow lift, and neck — is £2,000. We are currently offering special introductory pricing. Contact the clinic for a consultation to discuss the best option for you.',
  },
];

const Sofwave: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const payl8rRef = useRef<HTMLIFrameElement>(null);

  const openLightbox = (galleryIndex: number) => setLightboxIndex(galleryIndex);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allGalleryImages.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allGalleryImages.length) % allGalleryImages.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  // The Payl8r embed is a fixed-layout, cross-origin page that sends no resize
  // messages, so its height can't be read directly. Estimate it from the
  // iframe's rendered width so the whole page fits with no inner scrollbar.
  // Reference heights measured from the Payl8r page (width px -> height px):
  // 288->3660, 343->3443, 500->2856, 768->2610. The 100px buffer keeps the
  // estimate above the real height; re-measure these points if Payl8r changes
  // the page (the iframe falls back to its own scrollbar if the estimate is short).
  useEffect(() => {
    const iframe = payl8rRef.current;
    if (!iframe) return;
    const estimateHeight = (w: number) =>
      w <= 500 ? 2856 + (500 - w) * 3.7 : 2856 - (w - 500) * 0.9;
    const applyHeight = () => {
      const width = iframe.getBoundingClientRect().width;
      if (width > 0) {
        iframe.style.height = `${Math.ceil(estimateHeight(width)) + 100}px`;
      }
    };
    applyHeight();
    const observer = new ResizeObserver(applyHeight);
    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Sofwave Skin Tightening in Tunbridge Wells | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Sofwave non-invasive skin tightening at HiTech Aesthetics, Tunbridge Wells. FDA-cleared SUPERB™ ultrasound technology for face, neck & brow lifting. Single session, no downtime. Book now!"
        />
        <meta
          name="keywords"
          content="Sofwave Tunbridge Wells, skin tightening, non-invasive facelift, brow lift, neck tightening, SUPERB ultrasound, collagen stimulation, anti-ageing treatment"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Sofwave Skin Tightening Treatment",
            "description": "Non-invasive skin tightening treatment using FDA-cleared SUPERB™ ultrasound technology to stimulate collagen production for face, neck and brow lifting.",
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
            "bodyLocation": "Face, neck, brow",
            "duration": "PT45M",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "500",
              "highPrice": "2000",
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
                "name": "Sofwave",
                "item": "https://hitechaesthetics.com/treatments/sofwave"
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
                <div className="inline-block bg-secondary-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  Special Offer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Sofwave
                </h1>
                <p className="text-xl text-primary-700 font-medium mb-4">
                  Non-Invasive Skin Tightening & Lifting
                </p>
                <p className="text-lg text-neutral-700 mb-8">
                  Harness the power of FDA-cleared SUPERB™ ultrasound technology to stimulate
                  your body's natural collagen production. Tighten and lift skin on the face,
                  neck, and brow — with no needles, no surgery, and no downtime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/booking" className="btn btn-primary">
                    Book Consultation
                  </Link>
                  <a href="#pricing" className="btn btn-outline">
                    View Pricing
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={`${IMAGEKIT_BASE}/Sofwave_3.jpeg?tr=w-600`}
                  alt="Sofwave non-invasive skin tightening treatment"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Facts Bar */}
        <section className="bg-primary-800">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <fact.icon className="w-7 h-7 text-primary-200 mx-auto mb-2" />
                  <p className="text-primary-300 text-sm font-medium uppercase tracking-wide mb-1">
                    {fact.label}
                  </p>
                  <p className="text-white text-lg font-bold">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  How Sofwave Works
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Sofwave's proprietary SUPERB™ technology delivers precise ultrasound energy to
                  stimulate your body's natural collagen regeneration process.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <img
                  src={`${IMAGEKIT_BASE}/Sofwave_6.jpeg?tr=w-900`}
                  alt="Sofwave machine and handpiece delivering SUPERB ultrasound technology"
                  className="w-full max-w-3xl mx-auto rounded-xl"
                  loading="lazy"
                />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    step: '1',
                    title: 'Ultrasound Energy Delivery',
                    description: 'SUPERB™ parallel beam technology delivers focused ultrasound energy at precisely 1.5mm depth in the mid-dermis.',
                  },
                  {
                    icon: Shield,
                    step: '2',
                    title: 'Controlled Heating with Cooling',
                    description: 'The energy generates controlled heat to stimulate collagen, whilst the integrated Sofcool™ system protects the skin surface.',
                  },
                  {
                    icon: Sparkles,
                    step: '3',
                    title: 'Natural Collagen Regeneration',
                    description: 'Your body\'s natural healing response triggers neocollagenesis — producing fresh, new collagen over the following weeks.',
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-neutral-50 rounded-xl p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-sm font-semibold text-primary-600 mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sofwave: How It Works Video */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Sofwave: How It Works
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Watch how Sofwave's SUPERB™ ultrasound technology delivers precise energy to tighten and lift your skin
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full rounded-xl overflow-hidden shadow-lg"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://imagekit.io/player/embed/boostkit/HiTech/Sofwave/Sofwave%E2%84%A2%20How%20It%20Works.mp4?controls=true&autoplay=false&loop=false&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fboostkit%2FHiTech%2FSofwave%2FSofwave%25E2%2584%25A2%2520How%2520It%2520Works.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1772393977027"
                  title="Sofwave: How It Works"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Treatment Experience */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  The Treatment Experience
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  A comfortable, relaxing procedure performed by our experienced practitioners
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {treatmentExperienceImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={`${img.src}?tr=w-500`}
                      alt={img.alt}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Treatment Areas
                </h2>
                <p className="text-lg text-neutral-600">
                  Sofwave effectively treats multiple areas of the face and neck
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {treatedAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center bg-white p-4 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Special Offer
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Sofwave Treatment Pricing
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Choose the treatment area that best suits your goals. All prices include a thorough consultation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={option.area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {option.area}
                    </h3>
                    <div className="text-4xl font-bold text-primary-600 mb-3">
                      {option.price}
                    </div>
                    <p className="text-neutral-600 text-sm mb-6">
                      {option.description}
                    </p>
                    <Link
                      to="/booking"
                      className="btn w-full btn-outline"
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spread the Cost — Payl8r Calculator */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Spread the Cost
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Spread the cost of your Sofwave treatment over 6 to 24 months
                  with Payl8r. Enter an amount in the calculator below to see your
                  estimated monthly repayments.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <iframe
                  ref={payl8rRef}
                  src="https://payl8r.com/retailers/payment-detail?retailer=hitechaes953wbviu2n4"
                  title="Payl8r finance calculator"
                  className="w-full h-[2900px] border-0"
                  loading="lazy"
                />
              </motion.div>
              <p className="text-sm text-neutral-500 text-center mt-4">
                Finance provided by Payl8r. Subject to status and affordability checks.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Why Choose Sofwave?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
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
                    <p className="text-neutral-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Real Results
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  See the transformative results our patients have achieved with Sofwave
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beforeAfterImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                    onClick={() => openLightbox(5 + index)}
                  >
                    <img
                      src={`${img.src}?tr=w-500`}
                      alt={img.alt}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Press */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <Award className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Award-Winning Technology
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Sofwave has been recognised by leading beauty and medical publications worldwide
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={`${IMAGEKIT_BASE}/Sofwave_2.jpeg?tr=w-600`}
                    alt="Sofwave multi-award winning technology - SHAPE, ELLE, Cosmopolitan, NewBeauty awards"
                    className="w-full rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-2">ELLE Future of Beauty Winner</h3>
                    <p className="text-neutral-600 text-sm">Recognised for innovation in non-invasive skin tightening technology.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-2">SHAPE Best Skin Award</h3>
                    <p className="text-neutral-600 text-sm">Honoured for outstanding results in skin rejuvenation and lifting.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-2">Featured in British Vogue</h3>
                    <p className="text-neutral-600 text-sm">Praised by leading publications as a breakthrough in non-surgical face lifting.</p>
                  </div>
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
              Ready to Turn Back the Clock?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your Sofwave consultation today and discover how a single treatment can transform your skin.
            </p>
            <Link to="/booking" className="btn btn-secondary">
              Book Your Consultation
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {lightboxIndex + 1} / {allGalleryImages.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 md:p-3 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={`${allGalleryImages[lightboxIndex].src}?tr=w-1200`}
              alt={allGalleryImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 md:p-3 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sofwave;
