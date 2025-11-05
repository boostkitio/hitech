import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';
import TreatmentCarousel from '../components/home/TreatmentCarousel';
import Testimonials from '../components/home/Testimonials';
import FaqAccordion from '../components/home/FaqAccordion';
import LogoCarousel from '../components/home/LogoCarousel';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [treatmentsRef, treatmentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <>
      <Helmet>
        <title>HiTech Aesthetics | Luxury Medical Aesthetics Clinic Tunbridge Wells</title>
        <meta 
          name="description" 
          content="HiTech Aesthetics offers premium medical aesthetic treatments in Tunbridge Wells with cutting-edge technology and personalised care. Book your consultation today."
        />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 bg-gray-700">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://storage.googleapis.com/msgsndr/pF2lyzt5pPbW0L7E1ITW/media/67cf1f3c1007d119f4051285.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/80 to-gray-700/60"></div>
        
        {/* Content */}
        <div className="container-custom relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-white mb-6">Redefining Beauty Through Technology</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Experience the art of transformation with our advanced medical aesthetic treatments tailored to your unique beauty.
            </p>
            <h4 className="text-lg font-light text-white mb-4">By Appointment only</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn btn-secondary">
                Book A Visit
              </Link>
              <Link to="/treatments" className="btn btn-outline border-white text-white hover:bg-white/10">
                Explore Treatments
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight size={24} className="text-white transform rotate-90" />
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="section bg-primary-50 py-20"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Why Choose HiTech Aesthetics</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                We combine cutting-edge technology with expert practitioners to deliver safe, effective, and personalised treatments.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl mb-3">Expert Practitioners</h3>
              <p className="text-neutral-600">
                Our team consists of fully qualified medical professionals with years of experience in aesthetic medicine.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl mb-3">Advanced Technology</h3>
              <p className="text-neutral-600">
                We invest in the latest medical-grade technology to ensure safe, effective and comfortable treatments.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-500" size={24} />
              </div>
              <h3 className="text-xl mb-3">Inclusive, Individual Care</h3>
              <p className="text-neutral-600">
                We create bespoke treatment plans that honour your unique aesthetic vision, welcoming clients of all genders and identities in a safe, affirming environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Carousel Section */}
      <section
        ref={treatmentsRef}
        className="section bg-primary-50 py-20"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={treatmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Featured Treatments</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our range of advanced aesthetic treatments designed to enhance your natural beauty.
            </p>
          </motion.div>
          
          <TreatmentCarousel />
          
          <div className="text-center mt-12">
            <Link to="/treatments" className="btn btn-primary inline-flex items-center">
              View All Treatments
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-primary-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Read about the experiences of those who have undergone treatments at HiTech Aesthetics.
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>
      
      {/* Logos Section */}
      <section className="section bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Trusted Partners & Technologies</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We partner with industry-leading brands to bring you the safest and most effective treatments available.
            </p>
          </div>
          <LogoCarousel />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-primary-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about our treatments and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Begin Your Transformation Today</h2>
            <p className="text-xl mb-8 text-white">
              Schedule your personalised consultation and take the first step towards enhancing your natural beauty.
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;