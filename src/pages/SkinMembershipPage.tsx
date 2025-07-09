import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const SkinMembershipPage: React.FC = () => {
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [membershipRef, membershipInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [tiersRef, tiersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Skin Membership | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Join our exclusive Skin Membership program at HiTech Aesthetics for year-round skin perfection. Discover our membership tiers and benefits."
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
            <h1 className="text-white mb-6">Skin Membership</h1>
            <p className="text-xl text-neutral-100">
              Unlock exclusive access to premium skincare treatments and enjoy radiant, healthy skin all year round with our tailored membership program.
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
              <h2 className="mb-6">Your Path to Flawless Skin</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Our Skin Membership is designed for those who are committed to achieving and maintaining their best-ever skin. We believe that consistency is key to long-lasting results, which is why we've created a program that makes exceptional skincare accessible and rewarding.
                </p>
                <p>
                  As a member, you'll receive a personalised treatment plan, regular advanced treatments, and exclusive discounts on our full range of products and services. Let us be your partner in your journey to radiant confidence.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl mb-4">Membership Perks</h3>
                <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li>Regular advanced facial treatments</li>
                    <li>Exclusive discounts on all treatments and products</li>
                    <li>Priority booking and flexible scheduling</li>
                    <li>Personalised skincare plan and progress tracking</li>
                    <li>Invitations to member-only events</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={membershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/membership-placeholder.jpg"
                alt="Skin Membership at HiTech Aesthetics"
                effect="blur"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section 
        ref={tiersRef}
        className="py-20 bg-neutral-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tiersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Choose Your Membership</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              We offer several tiers to suit your individual skincare needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border rounded-lg p-8 text-center bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Glow</h3>
                <p className="text-4xl font-bold text-primary-600 mb-4">£99<span className="text-lg font-normal">/month</span></p>
                <ul className="text-left space-y-3 my-6 text-neutral-600">
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> One signature treatment per month</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 10% off other treatments</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 5% off retail products</li>
                </ul>
                <Link to="/contact" className="btn btn-primary w-full font-bold shadow-lg">Select Plan</Link>
            </div>

            {/* Tier 2 (Most Popular) */}
            <div className="border-2 border-primary-600 rounded-lg p-8 text-center bg-white shadow-2xl relative">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
                <h3 className="text-2xl font-bold mb-4">Radiance</h3>
                <p className="text-4xl font-bold text-primary-600 mb-4">£149<span className="text-lg font-normal">/month</span></p>
                <ul className="text-left space-y-3 my-6 text-neutral-600">
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> One advanced treatment per month</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 15% off other treatments</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 10% off retail products</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> Priority booking</li>
                </ul>
                <Link to="/contact" className="btn btn-primary w-full font-bold shadow-lg">Select Plan</Link>
            </div>

            {/* Tier 3 */}
            <div className="border rounded-lg p-8 text-center bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ultimate</h3>
                <p className="text-4xl font-bold text-primary-600 mb-4">£249<span className="text-lg font-normal">/month</span></p>
                <ul className="text-left space-y-3 my-6 text-neutral-600">
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> Two signature/advanced treatments per month</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 20% off other treatments</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> 15% off retail products</li>
                    <li className="flex items-center"><Star size={16} className="text-yellow-500 mr-2"/> Exclusive event access</li>
                </ul>
                <Link to="/contact" className="btn btn-primary w-full font-bold shadow-lg">Select Plan</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Skin?</h2>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our Skin Membership and start your journey towards a more radiant you.
          </p>
          <Link to="/contact" className="btn btn-primary font-bold shadow-lg">
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default SkinMembershipPage; 