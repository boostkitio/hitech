import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Mail } from 'lucide-react';

const SkinMembershipPage: React.FC = () => {

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [membershipRef, membershipInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [stepsRef, stepsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Skin Membership | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Join our exclusive Skin Membership programme at HiTech Aesthetics for consistent, professional skin treatments tailored to your needs."
        />
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
                "name": "Skin Membership",
                "item": "https://hitechaesthetics.com/skin-membership"
              }
            ]
          })}
        </script>
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
            <h1 className="text-white mb-6">HiTech Aesthetics Skin Membership</h1>
            <p className="text-xl text-neutral-100">
              Problematic skin? Breakouts? Pigmentation? Acne scarring? Dehydration? Dull skin?
            </p>
            <p className="text-xl text-neutral-100 mt-4">
              Or maybe you have good skin and want it to stay that way! This is where our skin membership comes in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Details Section */}
      <section
        ref={membershipRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={membershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Why Skin Membership?</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  We know skin changes take time and commitment. We also know how busy life gets and how hard it is to find time for facials and other skin treatments.
                </p>
                <p>
                  Skin needs also change every season and it is difficult for people to know what to book. So many of us want to commit to getting regular treatments, and with this in mind, we created a skin membership.
                </p>
                <p className="font-medium text-primary-800">
                  Think of it like a gym membership or personal training; consistency and professional input will get you the best results.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.vagaro.com/hitechaesthetics/book-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center justify-center"
                >
                  Book Online
                </a>
                <a
                  href="mailto:info@hitechaesthetics.com"
                  className="btn btn-secondary inline-flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={membershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/consultationHi_Tech.webp?updatedAt=1758015091660"
                alt="Skin Membership at HiTech Aesthetics"
                effect="blur"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={stepsRef}
        className="py-20 bg-neutral-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
              Come in once a month for a year and get whichever skin treatment is right for you, depending on how your skin behaves.
            </p>
            <p className="text-neutral-600 max-w-3xl mx-auto mt-4">
              Please book online a free consultation or email us if you'd like to sign up.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.vagaro.com/hitechaesthetics/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center justify-center"
              >
                Book Online
              </a>
              <a
                href="mailto:info@hitechaesthetics.com"
                className="btn btn-secondary inline-flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Skin Assessment</h3>
              <p className="text-neutral-600">
                We assess your skin by performing an in-depth skin analysis and set a realistic treatment plan in place.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">Payment Plan</h3>
              <p className="text-neutral-600">
                You pay £500 upfront at the end of the consultation if this is suitable for you and then £189.99 per month for the rest of the year.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Monthly Treatments</h3>
              <p className="text-neutral-600">
                Visit us monthly for a customised skin treatment tailored to your needs. Our therapist can recommend the most suitable treatment for you. We love combining treatments for the best results.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                04
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective Care</h3>
              <p className="text-neutral-600">
                This works out more cost-effectively, and you don't have to think about what to do. We have an hour to do whichever treatment is right for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments & Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Available Treatments */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-50 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Available Treatments</h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Hydrafacial</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Chemical Peels</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>IPL</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Radio Frequency skin tightening</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Microneedling</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>LED Light Therapy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Skin Booster</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Exosomes</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500 mt-6 italic">
                Please note: This does not include any hair removal treatments for face or body.
              </p>
            </motion.div>

            {/* Member Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-600 text-white rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Member Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-white mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">15% off Obagi and ZO Obagi medical-grade skincare products</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-white mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">10% off any laser hair removal packages</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Skin?</h2>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our Skin Membership and start your journey towards healthier, more radiant skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.vagaro.com/hitechaesthetics/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center justify-center font-bold"
            >
              Book Free Consultation
            </a>
            <a
              href="mailto:info@hitechaesthetics.com"
              className="btn btn-primary inline-flex items-center justify-center font-bold"
            >
              <Mail size={18} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkinMembershipPage;
