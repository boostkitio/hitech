import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge, Award, Heart, Sparkles, Shield, Brush } from 'lucide-react';
import LogoCarousel from '../components/home/LogoCarousel';

const AboutPage: React.FC = () => {
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [nataliaRef, nataliaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [clinicRef, clinicInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const clinicImages = [
    {
      id: 1,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Clinic_1_Hi_Tech.webp?updatedAt=1758019128107&tr=w-800%2Ch-600%2Cfo-custom%2Ccm-extract',
      alt: 'Reception area',
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Clinic_2_Hi_Tech.webp?updatedAt=1758019083935&tr=w-800%2Ch-600%2Cfo-custom%2Ccm-extract',
      alt: 'Treatment room',
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Clinic_3_Hi_Tech.webp?updatedAt=1758019171238&tr=w-800%2Ch-600%2Cfo-custom%2Ccm-extract',
      alt: 'Consultation room',
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Clinic_4_Hi_Tech.webp?updatedAt=1758019083269&tr=w-800%2Ch-600%2Cfo-custom%2Ccm-extract',
      alt: 'Relaxation area',
    },
  ];
  
  const credentials = [
    { id: 1, name: 'Save Face Accredited', description: 'Government-approved treatment provider register', icon: <Badge className="text-primary-600" size={24} /> },
    { id: 2, name: 'British College of Aesthetic Medicine', description: 'Professional medical aesthetics training', icon: <Award className="text-primary-600" size={24} /> },
    { id: 3, name: 'Allergan Medical Institute', description: 'Advanced injectable treatment certification', icon: <Heart className="text-primary-600" size={24} /> },
    { id: 4, name: 'CQC Compliant', description: 'Meeting healthcare quality standards', icon: <Shield className="text-primary-600" size={24} /> },
    { id: 5, name: 'Lynton Certified', description: 'Authorized laser equipment training', icon: <Sparkles className="text-primary-600" size={24} /> },
    { id: 6, name: 'Insurance & Indemnity', description: 'Full professional coverage for all treatments', icon: <Award className="text-primary-600" size={24} /> }
  ];
  

  return (
    <>
      <Helmet>
        <title>About Our Clinic & Expert Team | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Discover the philosophy behind HiTech Aesthetics. Meet our expert practitioners, learn about our advanced technology, and see our fully-accredited credentials."
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
            <h1 className="text-white mb-6">About HiTech Aesthetics</h1>
            <p className="text-xl text-neutral-100">
              We combine medical expertise with artistic vision to create natural, beautiful results that enhance your confidence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Statement Section */}
      <section 
        ref={missionRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Our Philosophy</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  We specialise in unisex treatments including Soprano laser hair removal, SkinPen micro-needling, ZO chemical peels, lip augmentation, dermal fillers, anti-wrinkle injections, skin boosters, therapeutic massages, and advanced medical skincare.
                </p>
                <p>
                  Our fully qualified therapists stay ahead with continuous training, ensuring you receive personalised care in a friendly, safe, and professional setting. And yes, we proudly offer tailored treatments for men!
                </p>
                <p>
                  Experience the speed, safety, and lasting results of our market-leading Soprano laser technology. Discover a new level of confidence today.
                </p>
                <p className="font-medium">
                  Tailored treatments to your individual needs
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl mb-4">Expert care led by advanced technology</h3>
                <p className="text-neutral-600">
                  A warm and inviting experience
                </p>
              </div>
              
              {/* Credentials */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">Our Credentials & Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {credentials.map(credential => (
                    <div key={credential.id} className="flex items-start p-4 bg-neutral-50 rounded-lg">
                      <div className="mr-3 mt-1">
                        {credential.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-800 mb-1">{credential.name}</h4>
                        <p className="text-sm text-neutral-600">{credential.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/Eva_Main.jpg?updatedAt=1750439456434"
                alt="HiTech Aesthetics Clinic"
                effect="blur"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Logos Section */}
      <section className="py-20 bg-white">
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
      
      {/* Natalia Section */}
      <section 
        ref={nataliaRef}
        className="py-20 bg-neutral-50"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={nataliaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-6">Meet Natalia</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Our permanent makeup specialist, Natalia, brings over 5 years of experience in creating natural, beautiful enhancements that frame and define your features.
                </p>
                <p>
                  Specialising in microblading, powder brows, and lip blushing, Natalia combines artistic precision with advanced techniques to achieve results that look effortlessly natural.
                </p>
                <p>
                  Her attention to detail and commitment to understanding each client's unique features ensures that every treatment is tailored to enhance your natural beauty.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl mb-4">Specialist in Permanent Makeup</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="mr-3 mt-1">
                      <Brush className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-800 mb-1">Expert Techniques</h4>
                      <p className="text-sm text-neutral-600">Advanced microblading and powder brow techniques for natural-looking results</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="mr-3 mt-1">
                      <Heart className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-800 mb-1">Personalised Approach</h4>
                      <p className="text-sm text-neutral-600">Tailored treatments to enhance your unique features and natural beauty</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={nataliaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/Natalia.jpg?updatedAt=1750439420221"
                alt="Natalia - Permanent Makeup Specialist at HiTech Aesthetics"
                effect="blur"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Clinic Interior Section */}
      <section 
        ref={clinicRef}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clinicInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Luxurious Clinic</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Step into our beautifully designed space where every detail has been carefully considered to ensure your comfort and relaxation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={clinicInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md h-[400px]"
              >
                <LazyLoadImage
                  src={image.image}
                  alt={image.alt}
                  effect="blur"
                  className="w-full h-full object-cover"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Ready to experience our state-of-the-art clinic and meet our team?
            </p>
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
              Discover the HiTech Aesthetics difference. Schedule your consultation today and let us help you achieve your aesthetic goals with precision and care.
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;