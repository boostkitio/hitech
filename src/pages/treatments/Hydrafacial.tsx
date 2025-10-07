import React from 'react';
import TreatmentPage from './TreatmentTemplate';

const Hydrafacial: React.FC = () => {
  const treatment = {
    id: 'hydrafacial',
    name: 'HydraFacial Treatment',
    description: 'Experience instant radiance with the revolutionary HydraFacial treatment for all skin types.',
    longDescription: 'HydraFacial is a non-invasive, pain-free facial treatment that uses patented Vortex Fusion Technology to cleanse, extract, and hydrate your skin. This revolutionary treatment delivers immediate, visible results with no downtime, leaving your skin glowing, refreshed, and rejuvenated.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    benefits: [
      'Immediate, visible results',
      'No downtime or discomfort',
      'Suitable for all skin types',
      'Customisable to your skin concerns',
      'Deeply cleanses and hydrates',
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Clears congested pores'
    ],
    treatmentAreas: [
      'Face',
      'Neck',
      'Décolletage',
      'Back',
      'Hands'
    ],
    sessions: '1 session for instant results',
    course: 'Monthly treatments recommended',
    frequency: 'Every 4 weeks for optimal results',
    touchups: 'Regular maintenance sessions',
    duration: '30-60 minutes depending on treatment level',
    results: 'Immediate radiant glow, improved skin texture and hydration',
    recovery: 'No downtime, resume normal activities immediately',
    price: 'From £120 per session',
    faqs: [
      {
        question: 'What is HydraFacial and how does it work?',
        answer: 'HydraFacial uses patented Vortex Fusion Technology in a three-step process: cleanse and exfoliate to remove dead skin cells, extract to painlessly clear clogged pores, and hydrate to infuse skin with moisture and targeted serums. This revolutionary technology delivers instant, visible results.'
      },
      {
        question: 'What skin concerns does HydraFacial treat?',
        answer: 'HydraFacial effectively treats dull skin, dryness, acne, fine lines and wrinkles, congested pores, uneven skin texture, and signs of ageing. The treatment can be customised to address your specific skin concerns.'
      },
      {
        question: 'Is there any downtime after a HydraFacial?',
        answer: 'No, there is absolutely no downtime with HydraFacial. You can return to your normal activities immediately after treatment. Your skin will look radiant and feel refreshed straight away, making it perfect before special events.'
      },
      {
        question: 'What treatment levels are available?',
        answer: 'We offer three HydraFacial levels: Signature (30 minutes) for essential cleansing and hydration, Deluxe (45 minutes) which includes personalised boosters and LED therapy, and Platinum (60 minutes) featuring lymphatic drainage and premium serums for ultimate rejuvenation.'
      },
      {
        question: 'How often should I have HydraFacial treatments?',
        answer: 'For optimal results, we recommend monthly HydraFacial treatments. Regular sessions help maintain healthy, radiant skin and address concerns as they arise. However, you will see immediate results after just one treatment.'
      },
      {
        question: 'Is HydraFacial suitable for sensitive skin?',
        answer: 'Yes, HydraFacial is suitable for all skin types, including sensitive skin. The treatment is gentle, non-invasive, and pain-free. Our practitioners will customise the treatment and serums to suit your specific skin type and concerns.'
      }
    ]
  };

  return <TreatmentPage treatment={treatment} />;
};

export default Hydrafacial;
