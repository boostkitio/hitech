import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { treatments } from '../data/treatments';
import OptimizedImage from '../components/ui/OptimizedImage';

const TreatmentsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80; // Fallback to 80px
        
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const treatmentCategories = {
    hairRemoval: {
      title: "Hair Removal Treatments",
      description: "Advanced solutions for permanent hair reduction, suitable for all skin types.",
      treatments: treatments.filter(t => ['soprano-ice-platinum', 'apilus-xcell'].includes(t.id))
    },
    injectables: {
      title: "Injectable Treatments",
      description: "Restore volume, smooth lines, and enhance your features with our range of injectable treatments.",
      treatments: treatments.filter(t => ['botox', 'skin-boosters', 'polynucleotides', 'prp-hair', 'mesotox'].includes(t.id))
    },
    skinRejuvenation: {
      title: "Skin Rejuvenation",
      description: "A comprehensive range of treatments to improve skin texture, tone, and overall appearance.",
      treatments: treatments.filter(t => ['lynton-ipl', 'lynton-laser', 'lynton-rf', 'skinpen-microneedling', 'chemical-peels', 'relaxing-facials', 'zo-skincare', 'asce-exosomes'].includes(t.id))
    },
    advancedTherapies: {
      title: "Advanced Therapies",
      description: "Specialized treatments using cutting-edge technology for targeted results.",
      treatments: treatments.filter(t => ['dermalux-led', 'permanent-makeup'].includes(t.id))
    }
  };


  const TreatmentCard = ({ treatment }: { treatment: typeof treatments[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer group"
    >
      <Link to={`/treatments/${treatment.id}`} className="block" style={{ textDecoration: 'none' }}>
        <div className="w-full aspect-[1.5] overflow-hidden">
          <OptimizedImage
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-neutral-900 mb-1 font-display">{treatment.name}</h3>
          <div className="text-lg text-primary-700 mb-2 font-sans">{treatment.description}</div>
          <div className="text-neutral-700 text-base">{treatment.longDescription}</div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Aesthetic Treatments in Tunbridge Wells | HiTech Aesthetics</title>
        <meta name="description" content="Explore our wide range of advanced aesthetic treatments in Tunbridge Wells, including laser hair removal, injectables, skin rejuvenation, and facials. Book your consultation today." />
      </Helmet>

      <section className="pt-32 pb-20 bg-primary-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-custom text-center"
        >
          <h1 className="text-white mb-6">Our Treatments</h1>
          <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
            Discover our comprehensive selection of industry-leading aesthetic treatments, tailored to meet your unique skincare and beauty goals.
          </p>
        </motion.div>
      </section>

      <main>
        {Object.entries(treatmentCategories).map(([key, category], index) => (
          <section
            key={key}
            id={key}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
          >
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">{category.title}</h2>
                <p className="text-lg text-neutral-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.treatments.map(treatment => (
                  <TreatmentCard key={treatment.id} treatment={treatment} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default TreatmentsPage;