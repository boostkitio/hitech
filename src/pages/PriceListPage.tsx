import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, CheckCircle, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PriceListPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [laserRef, laserInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [electrolysisRef, electrolysisInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [lyntonRef, lyntonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Laser Hair Removal Data
  const laserSmallAreas = [
    { area: 'Upper Lip', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Chin', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Jawline', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Centre Brow', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Cheeks', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Sideburns', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Neck/Back of Neck', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Fingers/Toes', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Nostrils', single: '£80', three: '£230', six: '£270', eight: '£350' },
    { area: 'Nipples', single: '£80', three: '£230', six: '£270', eight: '£350' },
  ];

  const laserMediumAreas = [
    { area: 'Knees', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Feet', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Hands', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Shoulders', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Perianal', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Naval', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Back/Front Thighs', single: '£95', three: '£260', six: '£300', eight: '£390' },
    { area: 'Ears', single: '£95', three: '£260', six: '£300', eight: '£390' },
  ];

  const laserLargeAreas = [
    { area: 'Underarms', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Brazilian/Hollywood/Bikini Extended', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Lower Legs', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Upper Legs', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Buttocks', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Upper Back', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Middle Back (Male)', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Lower Back', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Lower Arms', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Upper Arms', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Chest', single: '£105', three: '£300', six: '£330', nine: '£450' },
    { area: 'Abdomen', single: '£105', three: '£300', six: '£330', nine: '£450' },
  ];

  const laserPackages = [
    { package: 'Full Legs', sessions: '6 Sessions', price: '£899' },
    { package: 'Full Face & Neck', sessions: '6 Sessions', price: '£1,299' },
    { package: 'Full Back', sessions: '6 Sessions', price: '£899' },
    { package: 'Bikini Extended & Underarms', sessions: '6 Sessions', price: '£555' },
  ];

  // Lynton Treatments Data
  const skinResurfacing = [
    { area: 'Top Lip', single: '£75', course: '£150' },
    { area: 'Lower Face', single: '£250', course: '£1,000' },
    { area: 'Full Face', single: '£350', course: '£999' },
    { area: 'Chest', single: '£250', course: '£600' },
    { area: 'Face & Neck', single: '£450', course: '£1,200' },
  ];

  const rebrightIPL = [
    { area: 'Single Lesion', single: '£75', course: '£195' },
    { area: 'Nose or Chin', single: '£100', course: '£220' },
    { area: 'Cheeks', single: '£100', course: '£220' },
    { area: 'Cheeks & Nose', single: '£150', course: '£380' },
    { area: 'Half Face', single: '£180', course: '£460' },
    { area: 'Full Face', single: '£200', course: '£510' },
    { area: 'Full Face & Neck/Chest', single: '£300', course: '£650' },
    { area: 'Neck', single: '£155', course: '£395' },
    { area: 'Chest', single: '£180', course: '£460' },
    { area: 'Hands', single: '£150', course: '£380' },
  ];

  const skinRejuvenation = [
    { area: 'Half Face', single: '£135', course: '£350' },
    { area: 'Full Face', single: '£175', course: '£450' },
    { area: 'Full Face & Chest/Neck', single: '£200', course: '£500' },
    { area: 'Full Face, Neck & Chest', single: '£250', course: '£600' },
    { area: 'Neck', single: '£125', course: '£300' },
    { area: 'Chest', single: '£150', course: '£350' },
    { area: 'Hands', single: '£100', course: '£250' },
  ];

  const acneTreatments = [
    { area: 'Half Face', single: '£130', course: '£800' },
    { area: 'Full Face', single: '£150', course: '£720' },
    { area: 'Shoulders', single: '£150', course: '£720' },
    { area: 'Chest', single: '£150', course: '£720' },
    { area: 'Full Back', single: '£250', course: '£1,200' },
  ];

  return (
    <>
      <Helmet>
        <title>Price List | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Transparent pricing for all our aesthetic treatments. From laser hair removal to skin rejuvenation - view our complete price list."
        />
      </Helmet>

      {/* Header Section */}
      <section ref={headerRef} className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
            </div>
            <h1 className="text-white mb-6">Treatment Price List</h1>
            <p className="text-xl text-neutral-100 mb-8">
              Transparent pricing for premium aesthetic treatments. Invest in yourself - because you're worth it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="text-secondary-300 mr-2" size={20} />
                <span>Complimentary Consultation</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="text-secondary-300 mr-2" size={20} />
                <span>Expert Practitioners</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="text-secondary-300 mr-2" size={20} />
                <span>Latest Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soprano Ice Platinum Laser Section */}
      <section ref={laserRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={laserInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 max-w-md mx-auto text-center mb-4">
                <span className="text-primary-800 font-semibold">SOPRANO ICE PLATINUM LASER HAIR REMOVAL</span>
              </div>
              <h2 className="mb-4">Virtually Pain-Free Permanent Hair Reduction</h2>
              <p className="text-neutral-600 max-w-3xl mx-auto mb-6">
                Experience our award-winning laser technology for effective, comfortable hair removal on all skin types.
              </p>
              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 max-w-md mx-auto text-center">
                <span className="text-secondary-800 font-medium">✓ Patch Test Required for All New Clients</span>
              </div>
            </div>

            {/* Small Areas */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Small Areas</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Session</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">3 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">6 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">8 Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laserSmallAreas.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4">{item.three}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.six}</td>
                        <td className="text-center py-4 px-4">{item.eight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medium Areas */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Medium Areas</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Session</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">3 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">6 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">8 Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laserMediumAreas.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4">{item.three}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.six}</td>
                        <td className="text-center py-4 px-4">{item.eight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Large Areas */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Large Areas</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Session</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">3 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">6 Sessions</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">9 Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laserLargeAreas.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4">{item.three}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.six}</td>
                        <td className="text-center py-4 px-4">{item.nine}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Popular Packages */}
            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">🎯 Popular Laser Packages</h3>
                <p className="text-primary-600">Exceptional value for our most requested combinations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {laserPackages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                    <h4 className="font-semibold text-primary-800 mb-2">{pkg.package}</h4>
                    <p className="text-sm text-neutral-600 mb-3">{pkg.sessions}</p>
                    <p className="text-2xl font-bold text-secondary-600">{pkg.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Electrolysis Section */}
      <section ref={electrolysisRef} className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={electrolysisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-secondary-100 rounded-full px-6 py-3 mb-4">
              <span className="text-secondary-800 font-semibold">⚡ APILUS XCELL PRO ELECTROLYSIS</span>
            </div>
            <h2 className="mb-4">The Gold Standard for Permanent Hair Removal</h2>
            <p className="text-neutral-600 mb-8">Effective on all hair types and colours</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { duration: '10 minutes', price: '£30' },
                { duration: '20 minutes', price: '£60' },
                { duration: '30 minutes', price: '£80' },
                { duration: '60 minutes', price: '£150' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="text-secondary-600 mr-2" size={24} />
                    <span className="font-semibold text-primary-800">{item.duration}</span>
                  </div>
                  <p className="text-2xl font-bold text-secondary-600">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lynton Treatments Section */}
      <section ref={lyntonRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={lyntonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-primary-100 rounded-full px-6 py-3 mb-4">
                <span className="text-primary-800 font-semibold">🌸 LYNTON 3JUVE IPL & LASER TREATMENTS</span>
              </div>
              <h2 className="mb-4">Advanced Skin Treatments</h2>
            </div>

            {/* Skin Resurfacing */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2">SKIN RESURFACING</h3>
              <p className="text-neutral-600 mb-6">Reveal smoother, younger-looking skin</p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Treatment</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Course of 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skinResurfacing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* REBRIGHT IPL */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2">REBRIGHT IPL - Vein & Pigmentation Removal</h3>
              <p className="text-neutral-600 mb-6">Clear complexion treatments</p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Treatment</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Course of 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rebrightIPL.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Skin Rejuvenation */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2">SKIN REJUVENATION</h3>
              <p className="text-neutral-600 mb-6">Turn back the clock on ageing</p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Treatment</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Course of 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skinRejuvenation.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Acne Treatments */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2">ACNE TREATMENTS</h3>
              <p className="text-neutral-600 mb-6">Clear skin confidence</p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-primary-800 font-semibold">Area</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Single Treatment</th>
                      <th className="text-center py-4 px-4 text-primary-800 font-semibold">Course of 6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acneTreatments.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                        <td className="py-4 px-6 font-medium">{item.area}</td>
                        <td className="text-center py-4 px-4">{item.single}</td>
                        <td className="text-center py-4 px-4 bg-primary-50 font-semibold text-primary-800">{item.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Radio Frequency */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">REMODEL RADIO FREQUENCY</h3>
              <p className="text-neutral-600 mb-6">Non-surgical lifting and tightening</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-primary-800 mb-2">Small Area (Eyes/Mouth)</h4>
                  <p className="text-lg font-bold text-secondary-600 mb-2">£50 Single | £240 Course of 6</p>
                  <p className="text-sm text-neutral-600">45 minutes duration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>Prices are subject to change</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>Package deals cannot be combined with other offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>Consultation required for all new clients</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>Results may vary between individuals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>Full aftercare provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-0.5" size={16} />
                    <span>All treatments begin with complimentary consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Phone className="text-secondary-300" size={48} />
            </div>
            <h2 className="text-white mb-6">📞 Book Your Consultation Today</h2>
            <p className="text-xl text-neutral-100 mb-8">
              All treatments begin with a complimentary consultation to ensure the best results for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn btn-secondary btn-lg inline-flex items-center"
              >
                <Calendar className="mr-2" size={20} />
                Book Consultation
              </Link>
              <a 
                href="tel:+441892338157" 
                className="btn btn-outline-white btn-lg inline-flex items-center"
              >
                <Phone className="mr-2" size={20} />
                Call 01892 338157
              </a>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-secondary-300">✨ Invest in yourself - because you're worth it ✨</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PriceListPage;