import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Dot } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PriceListPage: React.FC = () => {
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

  const laserHairRemovalData = {
    small: [
      { area: 'Upper lip', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Chin', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Jawline', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Centre brow', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Cheeks', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Sideburns', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Neck or back of neck', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Fingers/toes', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Nostrils', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
      { area: 'Nipples', single: '£80', '3': '£230', '6': '£270', '8': '£350' },
    ],
    medium: [
        { area: 'Knees', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Feet', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Hands', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Shoulders', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Perianal', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Naval', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Back or front of thighs', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
        { area: 'Ears', single: '£95', '3': '£260', '6': '£300', '8': '£390' },
    ],
    large: [
        { area: 'Underarms', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Brazilian/Hollywood/Bikini extend', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Lower legs', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Upper legs', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Buttocks', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Upper back', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Middle back (male)', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Lower back', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Lower arms', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Upper arms', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Chest', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
        { area: 'Abdomen', single: '£105', '3': '£300', '6': '£330', '8': '£450' },
    ],
    packages: [
        {
          name: 'Body Package',
          price: '£999',
          sessions: '6 sessions',
          areas: ['Underarms', 'Bikini', 'Lower legs', 'Knees', 'Toes & Feet']
        },
        {
          name: 'Face Package',
          price: '£999',
          sessions: '6 sessions',
          areas: ['Upper lip', 'Chin', 'Cheeks', 'Sideburns', 'Jawline']
        },
        {
          name: 'Male Body Package',
          price: '£999',
          sessions: '6 sessions',
          areas: ['Full back & shoulders']
        },
    ]
  };
  
  const electrolysisData = [
    { duration: '10 minutes', price: '£35' },
    { duration: '20 minutes', price: '£55' },
    { duration: '30 minutes', price: '£75' },
  ];

  const lyntonData = {
    resurfacing: [
      { area: 'Top lip', single: '£75', course: '£150' },
      { area: 'Lower face (cheeks, nose, chin, upper lip, jawline)', single: '£250', course: '£1,000' },
      { area: 'Full face', single: '£350', course: '£999' },
      { area: 'Chest', single: '£250', course: '£600' },
      { area: 'Face & neck', single: '£450', course: '£1,200' },
    ],
    rebright: [
      { area: 'Singular lesion', single: '£75', course: '£195' },
      { area: 'Nose or chin', single: '£100', course: '£220' },
      { area: 'Cheeks', single: '£100', course: '£220' },
      { area: 'Cheeks & nose', single: '£150', course: '£380' },
      { area: 'Half face', single: '£180', course: '£460' },
      { area: 'Full face', single: '£200', course: '£510' },
      { area: 'Full face & neck or chest', single: '£300', course: '£650' },
      { area: 'Full face & neck', single: '£250', course: '£500' },
      { area: 'Neck', single: '£155', course: '£395' },
      { area: 'Chest', single: '£180', course: '£460' },
      { area: 'Hands', single: '£150', course: '£380' },
    ],
    rejuvenation: [
      { area: 'Half face', single: '£135', course: '£350' },
      { area: 'Full face', single: '£175', course: '£450' },
      { area: 'Full face & chest or neck', single: '£200', course: '£500' },
      { area: 'Full face, neck & chest', single: '£250', course: '£600' },
      { area: 'Neck', single: '£125', course: '£300' },
      { area: 'Chest', single: '£150', course: '£350' },
      { area: 'Hands', single: '£100', course: '£250' },
    ],
    acne: [
        { area: 'Half face', single: '£130', course: '£800' },
        { area: 'Full face', single: '£150', course: '£720' },
        { area: 'Shoulders', single: '£150', course: '£720' },
        { area: 'Chest', single: '£150', course: '£720' },
        { area: 'Full back', single: '£250', course: '£1,200' },
    ],
    remodel: [
      { area: 'Small area (eyes or mouth)', single: '£50', course: '£240', time: '45 mins' },
      { area: 'Half face', single: '£80', course: '£385', time: '45 mins' },
      { area: 'Full face', single: '£110', course: '£530', time: '60 mins' },
      { area: 'Full face & neck', single: '£140', course: '£675', time: '75 mins' },
      { area: 'Full face, neck & chest', single: '£220', course: '£1,055', time: '90 mins' },
    ],
    packages: [
        { name: 'Regime 1', price: '£699', save: '£231', items: ['3 x Full face Remodel', '3 x Full face Rebright'], note: 'can be paid in 2 installments of £350' },
        { name: 'Regime 2', price: '£999', save: '£381-£651 depending on selection', items: ['3 x Full face Resurface', '3 x Full face Rebright or Remodel'], note: 'can be paid in 2 installments of £500' },
        { name: 'Regime 3', price: '£1,350', save: '£630', items: ['3 x Full face Resurface', '3 x Full face Rebright', '3 x Full face Remodel'], note: 'can be paid in 3 installments of £450' },
    ]
  };
  
  const hydrafacialData = [
    { name: 'Syndeo HydraFacial Signature', price: '£109', duration: '30 minutes' },
    { name: 'HydraFacial Deluxe', price: '£169', duration: '45 minutes' },
    { name: 'HydraFacial Platinum', price: '£189', duration: '60 minutes' },
    { name: 'Course of 3 HydraFacials', price: '£500' },
    { name: 'Course of 6 HydraFacials', price: '£965' },
    { name: 'Course of 12 HydraFacials', price: '£1,700' },
  ];

  const otherPrices = {
    skinpen: [
        { name: 'SkinPen single session', price: '£300' },
        { name: 'SkinPen course of 3 sessions', price: '£600' },
        { name: 'SkinPen with exosomes single session', price: '£350' },
        { name: 'SkinPen with exosomes 3 sessions', price: '£900' },
    ],
    dermalux: [
        { name: 'Single treatment', price: '£45' },
        { name: 'Course of 6', price: '£240' },
        { name: 'Course of 12', price: '£450' },
        { name: 'Add-on to any facial or laser treatment', price: '£30' },
    ],
    prp: [
        { name: 'Hair loss treatment 1 session', price: '£350' },
        { name: 'Hair loss treatment 3 sessions', price: '£800' },
        { name: 'Hair loss treatment 6 sessions', price: '£1,500' },
        { name: 'Vampire facial', price: '£350' },
        { name: 'PRP + Exosome face or hair 1 session', price: '£600' },
        { name: 'PRP + Exosome face or hair 3 sessions', price: '£1,500' },
    ],
    botox: [
        { area: '1 area', price: '£200' },
        { area: '2 areas', price: '£250' },
        { area: '3 areas', price: '£280' },
        { area: 'Eyebrow lift', price: '£180' },
        { area: 'Under-eye lines', price: '£160' },
        { area: 'Bunny lines/nose wrinkles', price: '£160' },
        { area: 'Gummy smiles', price: '£160' },
        { area: 'Lip flips', price: '£160' },
        { area: 'Down-facing smiles (DAO)', price: '£180' },
        { area: 'Nasal flaring', price: '£160' },
        { area: 'Nose tip lift', price: '£150' },
        { area: 'Teeth grinding/masseter', price: '£350' },
        { area: 'Platysmal bands/Nefertiti neck', price: 'From £350' },
        { area: 'Jawline slimming', price: 'From £350' },
        { area: 'Excessive sweating', price: '£350' },
        { area: 'Trap tox or swan neck', price: 'From £400' },
        { area: 'Mesotox', price: '£250' },
    ],
    peels: [
        { name: 'Glycolic chemical peel', price: '£80', duration: '30 minutes' },
    ],
    facials: [
        { name: 'Deep cleansing facial with extraction and Dermalux LED light therapy', price: '£150', duration: '75 minutes' },
        { name: 'Glow facial by ZO Obagi including Dermalux LED light therapy', price: '£120' },
    ],
    boosters: [
        { name: 'Sunekos', session1: '£300', session4: '£1,000', note: 'Protocol of 4 sessions recommended' },
        { name: 'Profhilo', session1: '£300', session2: '£500', note: 'Protocol of minimum 2 sessions recommended' },
        { name: 'Jalupro', session1: '£150', session3: '£350', note: 'Protocol of 3 sessions recommended' },
    ],
    fatDissolving: [
        { name: '1 small area', price: '£175' },
        { name: '1 large area', price: '£275' },
        { name: '2 large areas', price: '£450' },
    ],
    polynucleotides: [
        { area: 'Small Areas (eyes, upper lip & chin)', session1: '£200', session3: '£600', note: 'Protocol of 3 sessions recommended' },
        { area: 'Large Areas (décolletage, neck, cheeks, belly, hands)', session1: '£350', session3: '£1,000', note: 'Protocol of 3 sessions recommended' },
    ],
    permanentMakeup: [
        { name: 'Eyebrows, lip blush, and eyeliner', price: '£350 (first session)' },
        { name: 'Top-up session', price: '£150' },
    ],
    giftCards: [
        { name: '£50' }, { name: '£100' }, { name: '£200' },
    ]
  };

  type PriceRow = {
    area?: string;
    duration?: string;
    name?: string;
    single?: string;
    price?: string;
    '3'?: string;
    '6'?: string;
    '8'?: string;
    course?: string;
  };

  const PriceTable = ({ title, headers, data, note }: { title: string, headers: string[], data: PriceRow[], note?: string }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-primary-800 mb-4">{title}</h3>
      {note && <p className="text-neutral-600 mb-4">{note}</p>}
      <div className="overflow-x-auto relative">
        {/* Fade effect for scroll cue */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent z-10 hidden sm:block" />
        <div className="min-w-full bg-white border border-neutral-200 rounded-lg shadow-sm">
          {/* Headers */}
          <div className="grid grid-cols-5 bg-neutral-50 font-semibold text-left text-sm text-neutral-600 uppercase tracking-wider hidden sm:grid">
            {headers.map(h => <div key={h} className="p-4">{h}</div>)}
          </div>
          {/* Data */}
          <div>
            {data.map((row, i) => (
              <>
                {/* Desktop row */}
                <div key={i} className="grid grid-cols-5 text-left border-t border-neutral-200 hidden sm:grid">
                  <div className="p-4 font-medium text-neutral-800">{row.area || row.duration || row.name}</div>
                  <div className="p-4 text-neutral-600">{row.single || row.price}</div>
                  <div className="p-4 text-neutral-600">{row['3'] || row.course}</div>
                  <div className="p-4 text-neutral-600">{row['6']}</div>
                  <div className="p-4 text-neutral-600">{row['8']}</div>
                </div>
                {/* Mobile stacked row */}
                <div key={i + '-mobile'} className="flex flex-col border-t border-neutral-200 sm:hidden p-4 text-sm">
                  <div className="font-medium text-neutral-800 mb-1">{row.area || row.duration || row.name}</div>
                  {row.single || row.price ? <div className="flex justify-between"><span className="text-neutral-600">{headers[1]}:</span> <span>{row.single || row.price}</span></div> : null}
                  {row['3'] || row.course ? <div className="flex justify-between"><span className="text-neutral-600">{headers[2]}:</span> <span>{row['3'] || row.course}</span></div> : null}
                  {row['6'] ? <div className="flex justify-between"><span className="text-neutral-600">{headers[3]}:</span> <span>{row['6']}</span></div> : null}
                  {row['8'] ? <div className="flex justify-between"><span className="text-neutral-600">{headers[4]}:</span> <span>{row['8']}</span></div> : null}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  const SimplePriceList = ({ title, data, note }: { title: string, data: {name: string, price?: string, duration?: string}[], note?: string }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-primary-900 mb-4">{title}</h2>
      {note && <p className="text-neutral-600 mb-4">{note}</p>}
      <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 space-y-4">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
            <p className="text-neutral-800">{item.name}{item.duration && <span className="text-sm text-neutral-500 ml-2">({item.duration})</span>}</p>
            <p className="font-semibold text-primary-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const NoteBox = ({ text }: { text: string }) => (
    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 flex items-baseline text-primary-800 my-6">
      <Check size={20} className="mr-3 flex-shrink-0" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Treatment Price List | HiTech Aesthetics</title>
        <meta name="description" content="View our complete price list for all aesthetic treatments in Tunbridge Wells, including Soprano laser hair removal, injectables, facials, and more. Transparent pricing for all services." />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-20 bg-primary-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-custom text-center"
        >
          <h1 className="text-white mb-6">Clinic Treatment Price List</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transparent pricing for our full range of advanced aesthetic treatments. Please note that prices are subject to change and a consultation may be required.
          </p>
        </motion.div>
      </section>

      <main>
          {/* Soprano Ice Platinum */}
          <section id="soprano-ice-platinum" className="py-20 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-primary-900 mb-2">Soprano Laser Hair Removal</h2>
                <p className="text-lg text-neutral-600 mb-4">Virtually Pain-Free Permanent Hair Reduction</p>
                <NoteBox text="Patch test required for all new clients" />
                <PriceTable title="Small Areas" headers={['Area', 'Single', '3 Sessions', '6 Sessions', '8 Sessions']} data={laserHairRemovalData.small} />
                <PriceTable title="Medium Areas" headers={['Area', 'Single', '3 Sessions', '6 Sessions', '8 Sessions']} data={laserHairRemovalData.medium} />
                <PriceTable title="Large Areas" headers={['Area', 'Single', '3 Sessions', '6 Sessions', '8 Sessions']} data={laserHairRemovalData.large} />
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-primary-800 mb-6">Popular Laser Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {laserHairRemovalData.packages.map((pkg, i) => (
                      <div key={i} className="bg-white border-2 border-primary-200 rounded-lg shadow-lg p-6">
                        <h4 className="text-xl font-bold text-primary-900 mb-2">{pkg.name}</h4>
                        <p className="text-2xl font-bold text-primary-600 mb-2">{pkg.price}</p>
                        <p className="text-sm text-neutral-600 mb-4">({pkg.sessions})</p>
                        <ul className="space-y-2">
                          {pkg.areas.map((area, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-700">{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </section>

          {/* Electrolysis */}
          <section id="electrolysis" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Apilus xCell Pro Electrolysis" data={electrolysisData.map(e => ({ name: e.duration, price: e.price }))} />
            </div>
          </section>
          
          {/* Lynton */}
          <section id="lynton-3juve" className="py-20 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">Lynton 3JUVE IPL & Laser Treatments</h2>
                <PriceTable title="Skin Resurfacing" headers={['Area', 'Single', 'Course of 3', '', '']} data={lyntonData.resurfacing} />
                <PriceTable title="Rebright - Intense Pulsed Light (IPL)" note="For facial veins or pigment removal" headers={['Area', 'Single', 'Course of 3', '', '']} data={lyntonData.rebright} />
                <PriceTable title="Skin Rejuvenation" headers={['Area', 'Single', 'Course of 3', '', '']} data={lyntonData.rejuvenation} />
                <PriceTable title="Acne Treatments" headers={['Area', 'Single', 'Course of 6', '', '']} data={lyntonData.acne} />
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-primary-800 mb-4">Remodel - Radio Frequency</h3>
                    <p className="text-neutral-600 mb-4">For skin tightening and lifting</p>
                    <div className="overflow-x-auto">
                        <div className="min-w-full bg-white border border-neutral-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-4 bg-neutral-50 font-semibold text-left text-sm text-neutral-600 uppercase tracking-wider">
                                {['Area', 'Single', 'Course of 6', 'Time'].map(h => <div key={h} className="p-4">{h}</div>)}
                            </div>
                            <div>
                                {lyntonData.remodel.map((row, i) => (
                                    <div key={i} className="grid grid-cols-4 text-left border-t border-neutral-200">
                                        <div className="p-4 font-medium text-neutral-800">{row.area}</div>
                                        <div className="p-4 text-neutral-600">{row.single}</div>
                                        <div className="p-4 text-neutral-600">{row.course}</div>
                                        <div className="p-4 text-neutral-600">{row.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-primary-800 mb-4">3JUVE Combination Packages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {lyntonData.packages.map(pkg => (
                            <div key={pkg.name} className="bg-white border-2 border-primary-200 rounded-lg shadow-lg p-6 flex flex-col">
                                <h4 className="text-xl font-bold text-primary-800">{pkg.name}</h4>
                                <p className="font-semibold text-2xl text-secondary-500 my-4">{pkg.price}</p>
                                <ul className="space-y-2 mb-4">
                                    {pkg.items.map(item => <li key={item} className="flex items-start"><Dot className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />{item}</li>)}
                                </ul>
                                <div className="mt-auto">
                                    <p className="font-semibold text-primary-800">Save {pkg.save}</p>
                                    {pkg.note && <p className="text-sm text-neutral-500 mt-2">{pkg.note}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </section>

          {/* HydraFacial */}
          <section id="hydrafacial" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Syndeo HydraFacial Treatments" data={hydrafacialData} />
            </div>
          </section>

          {/* Other Sections */}
          <section id="skinpen" className="py-20 bg-white">
            <div className="container-custom">
              <SimplePriceList title="SkinPen Microneedling" data={otherPrices.skinpen} />
            </div>
          </section>
          <section id="dermalux" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Dermalux LED Light Therapy" data={otherPrices.dermalux} />
            </div>
          </section>
          <section id="prp" className="py-20 bg-white">
            <div className="container-custom">
              <SimplePriceList title="PRP Skin and Hair Restoration" data={otherPrices.prp} />
            </div>
          </section>

          <section id="botox" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Anti-Wrinkle Injections (Botox)</h2>
              <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {otherPrices.botox.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-neutral-100 pb-4 last:border-b-0">
                      <p className="text-neutral-800">{item.area}</p>
                      <p className="font-semibold text-primary-800">{item.price}</p>
                  </div>
                  ))}
              </div>
            </div>
          </section>
          
          <section id="chemical-peels" className="py-20 bg-white">
            <div className="container-custom">
              <SimplePriceList title="Chemical Peels" data={otherPrices.peels} />
            </div>
          </section>

          <section id="facials" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Facials" data={otherPrices.facials} />
            </div>
          </section>

          <section id="skin-boosters" className="py-20 bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Skin Boosters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {otherPrices.boosters.map(b => (
                      <div key={b.name} className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
                          <h3 className="text-xl font-semibold text-primary-800">{b.name}</h3>
                          <p className="text-sm text-neutral-500 mb-4">{b.note}</p>
                          <div className="space-y-2">
                              <div className="flex justify-between"><p>1 session</p><p className="font-medium">{b.session1}</p></div>
                              {b.session2 && <div className="flex justify-between"><p>2 sessions</p><p className="font-medium">{b.session2}</p></div>}
                              {b.session3 && <div className="flex justify-between"><p>3 sessions</p><p className="font-medium">{b.session3}</p></div>}
                              {b.session4 && <div className="flex justify-between"><p>4 sessions</p><p className="font-medium">{b.session4}</p></div>}
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </section>

          <section id="fat-dissolving" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Fat Dissolving (Lemon Bottle)" data={otherPrices.fatDissolving} />
            </div>
          </section>

           <section id="polynucleotides" className="py-20 bg-white">
             <div className="container-custom">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Vitaran Polynucleotides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {otherPrices.polynucleotides.map(p => (
                      <div key={p.area} className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
                          <h3 className="text-xl font-semibold text-primary-800">{p.area}</h3>
                          <p className="text-sm text-neutral-500 mb-4">{p.note}</p>
                          <div className="space-y-2">
                              <div className="flex justify-between"><p>1 session</p><p className="font-medium">{p.session1}</p></div>
                              <div className="flex justify-between"><p>3 sessions</p><p className="font-medium">{p.session3}</p></div>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </section>

          <section id="permanent-makeup" className="py-20 bg-neutral-50">
            <div className="container-custom">
              <SimplePriceList title="Permanent Makeup by Master Natalia" data={otherPrices.permanentMakeup} />
            </div>
          </section>

           <section id="gift-cards" className="py-20 bg-white">
             <div className="container-custom">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Gift Cards</h2>
                <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
                    <p className="text-neutral-600 mb-4">Available in the following denominations. Gift cards can be used for all treatments and do not expire.</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        {otherPrices.giftCards.map(card => (
                            <div key={card.name} className="bg-secondary-500 text-white font-bold text-lg rounded-md px-6 py-3 shadow">
                                {card.name}
                            </div>
                        ))}
                    </div>
                    <p className="text-neutral-600 text-sm">
                        Contact the clinic to request a digital or physical copy on <a href="mailto:info@hitechaesthetics.com" className="text-primary-600 hover:text-primary-800 underline">info@hitechaesthetics.com</a>
                    </p>
                </div>
             </div>
           </section>
      </main>
    </>
  );
};

export default PriceListPage;
