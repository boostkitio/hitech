import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Brush } from 'lucide-react';
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
  

  return (
    <>
      <Helmet>
        <title>About Our Clinic & Expert Team | HiTech Aesthetics</title>
        <meta
          name="description"
          content="Discover the philosophy behind HiTech Aesthetics. Meet our expert practitioners, learn about our advanced technology, and see our fully-accredited credentials."
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
                "name": "About",
                "item": "https://hitechaesthetics.com/about"
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
              <h2 className="mb-6">Welcome to HiTech Aesthetics</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg font-medium text-primary-800">
                  Where advanced technology meets timeless beauty.
                </p>
                <p>
                  Founded four years ago, HiTech Aesthetics was born from a vision to redefine aesthetic excellence, delivering transformative treatments with precision, artistry, and care.
                </p>
                <p>
                  Every detail of our clinic has been designed to provide a discreet, luxurious experience led by professionals who are passionate about innovation and results.
                </p>
                <p>
                  Our founder, Eva, is a mother and entrepreneur who set out to create a private sanctuary where clients could feel completely at ease—a place where science and sophistication work in harmony to reveal each individual's most confident, radiant self.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
                <p className="text-neutral-700 mb-4">
                  At HiTech Aesthetics, we specialise in advanced, results-driven treatments using world-renowned technologies for unparalleled performance and safety.
                </p>
                <p className="text-neutral-700 mb-4 font-medium">Our services include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-700">
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Soprano laser hair removal</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Apilus xCell electrolysis</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>HydraFacial</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Lynton IPL & laser skin resurfacing</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>SkinPen microneedling</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Obagi & ZO Skin Health</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Medical-grade chemical peels</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Anti-wrinkle injections & biostimulators</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Exosome & stem cell therapy</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Skin boosters</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 prose prose-lg max-w-none">
                <p>
                  Each treatment is tailored to your unique skin needs, ensuring a truly bespoke approach to beauty and wellbeing.
                </p>
                <p>
                  Our highly qualified clinicians undergo continuous training, upholding the highest standards of care and safety in a refined, serene environment.
                </p>
                <p>
                  We proudly offer our full range of treatments to both women and men seeking exceptional, natural-looking results.
                </p>
                <p className="font-medium text-primary-800">
                  Experience the precision, comfort, and enduring results of our market-leading Soprano laser technology, and discover a new era of confidence and rejuvenation with HiTech Aesthetics—where luxury meets innovation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/Eva_About.jpg?updatedAt=1759841745376"
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
                  Our master make up artist, Natalia, brings over 8 years of experience in creating natural, beautiful enhancements that frame and define your features.
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