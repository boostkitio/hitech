import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge, Award, Heart, Sparkles, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [clinicRef, clinicInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const teamMembers = [
    {
      id: 1,
      name: 'Eva Whittle',
      role: 'Practice Owner & Lead Practitioner',
      image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Eva is the heart of our clinic, bringing years of expertise in aesthetic treatments and a passion for helping clients achieve their beauty goals. Her dedication to excellence ensures every client receives the highest standard of care.',
      qualifications: [
        'Advanced Aesthetic Practitioner Certification',
        'Allergan Medical Institute Graduate',
        'Save Face Accredited Practitioner',
        'British College of Aesthetic Medicine Member',
        'Level 7 Advanced Injectable Treatments'
      ],
      specialties: ['Botox & Anti-wrinkle treatments', 'Dermal Fillers', 'Skin Boosters', 'Treatment Planning']
    },
    {
      id: 2,
      name: 'Dr. Sarah Mitchell',
      role: 'Senior Aesthetic Practitioner',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Dr. Mitchell brings medical expertise and artistic vision to every treatment. With over 8 years in aesthetic medicine, she specializes in advanced procedures and natural-looking results.',
      qualifications: [
        'MB ChB Medicine Degree',
        'PG Cert Aesthetic Medicine',
        'Advanced Botox & Filler Certification',
        'Lynton Laser Training Certification',
        'Medical Council Registration'
      ],
      specialties: ['Injectable treatments', 'Laser procedures', 'Skin rejuvenation', 'Medical aesthetics']
    },
    {
      id: 3,
      name: 'Natalia Kowalski',
      role: 'Master Permanent Makeup Artist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Natalia is our resident permanent makeup specialist with international training and certification. Her artistry and precision create beautiful, natural-looking permanent makeup results.',
      qualifications: [
        'International Permanent Makeup Certification',
        'Microblading Specialist Diploma',
        'Scalp Micropigmentation Certification',
        'Health & Safety in Cosmetic Tattooing',
        'Color Theory & Facial Anatomy Training'
      ],
      specialties: ['Microblading', 'Powder Brows', 'Lip Blush', 'Scalp Micropigmentation']
    }
  ];
  
  const clinicImages = [
    {
      id: 1,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Eva2_Lo.jpg?updatedAt=1749813392239',
      alt: 'Reception area',
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Eva3_Lo.jpg?updatedAt=1749813392216',
      alt: 'Treatment room',
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Eva1_Lo.jpg?updatedAt=1749813392184',
      alt: 'Consultation room',
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/boostkit/HiTech/Eva_Lo.jpg?updatedAt=1749813392115',
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
        <title>About Us | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Meet our team of expert practitioners at HiTech Aesthetics. Learn about our mission, our clinic, and our commitment to excellence in medical aesthetics."
        />
      </Helmet>
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-20 bg-primary-800 text-white"
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
                <h3 className="text-xl mb-4">Expert care led by Eva Whittle</h3>
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
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <LazyLoadImage
                src="https://ik.imagekit.io/boostkit/HiTech/Eva.jpg?updatedAt=1749813265775"
                alt="HiTech Aesthetics Clinic"
                effect="blur"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Hidden for now 
      <section ref={teamRef} className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Meet Our Expert Team</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Our team of highly skilled practitioners brings together years of expertise and aesthetic artistry to deliver exceptional results in a warm and professional environment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="relative h-80 overflow-hidden">
                  <LazyLoadImage
                    src={member.image}
                    alt={member.name}
                    effect="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-secondary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-600 mb-4">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-neutral-800 mb-2">Qualifications:</h4>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-1">•</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-neutral-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
      */}
      
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
                className="rounded-lg overflow-hidden shadow-md h-64 md:h-80"
              >
                <LazyLoadImage
                  src={image.image}
                  alt={image.alt}
                  effect="blur"
                  className="w-full h-full object-cover"
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
      <section className="py-20 bg-primary-700 text-white">
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