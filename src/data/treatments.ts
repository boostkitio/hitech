// src/data/treatments.ts
import { Treatment } from '../types/treatment';

export const treatments: Treatment[] = [
  // Skin Tightening
  {
    id: 'sofwave',
    name: 'Sofwave',
    description: 'Non-Invasive Skin Tightening & Lifting',
    longDescription: 'Sofwave uses FDA-cleared SUPERB™ ultrasound technology to stimulate your body\'s natural collagen production. Tighten and lift skin on the face, neck, and brow — with no needles, no surgery, and no downtime.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Sofwave/Sofwave_19.jpeg?updatedAt=1772384370699',
    benefits: [
      'Single session treatment',
      'No downtime required',
      'Safe for all skin types and tones',
      'FDA-cleared technology',
      'Non-invasive — no needles or surgery',
      'Results last up to 2 years'
    ],
    treatmentAreas: 'Face, neck, brow',
    sessions: '1 session',
    duration: '30–45 minutes',
    results: 'Visible improvement over 12 weeks, lasting up to 2 years',
    recovery: 'None',
    price: 'From £500',
    faqs: [
      {
        question: 'What is Sofwave and how does it work?',
        answer: 'Sofwave uses proprietary SUPERB™ ultrasound technology to deliver precise energy at 1.5mm depth in the mid-dermis, triggering your body\'s natural collagen regeneration process.'
      },
      {
        question: 'Is Sofwave painful?',
        answer: 'Most patients describe the sensation as warm and tolerable. The integrated Sofcool™ cooling system protects the skin surface, making the treatment comfortable without anaesthesia.'
      },
      {
        question: 'How many sessions do I need?',
        answer: 'Most patients achieve excellent results with just one session. Annual maintenance treatments are recommended for long-term results.'
      }
    ]
  },

  // Hair Removal Treatments
  {
    id: 'soprano-ice-platinum',
    name: 'Soprano Laser Hair Removal',
    description: 'The Gold Standard in Pain-Free Hair Removal',
    longDescription: 'Experience the revolutionary Soprano Ice Platinum technology - the most advanced laser hair removal system available. Our state-of-the-art device combines three laser wavelengths to target different tissue depths, ensuring effective treatment for all skin types.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Soprano_Ice_MaleHiTech.webp?updatedAt=1760367075535',
    benefits: [
      'Virtually painless treatment',
      'Suitable for all skin types',
      'Permanent hair reduction',
      'No downtime required',
      'FDA-approved technology'
    ],
    treatmentAreas: 'Face, body, intimate areas',
    sessions: '6-8 for optimal results',
    duration: '15-60 minutes',
    results: 'Permanent reduction',
    recovery: 'None',
    price: 'From £150 per session',
    faqs: [
      {
        question: 'How does Soprano Ice Platinum compare to other laser systems?',
        answer: 'Soprano Ice Platinum is the most advanced laser hair removal system available, combining three wavelengths for optimal results across all skin types and hair colors.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'The treatment is virtually painless thanks to the built-in cooling system and advanced technology.'
      },
      {
        question: 'What areas can be treated?',
        answer: 'We can treat virtually any area of the body including face, underarms, arms, back, legs, and intimate areas.'
      }
    ]
  },
  {
    id: 'apilus-xcell',
    name: 'Apilus xCell Electrolysis',
    description: 'Permanent Hair Removal for All Hair Types',
    longDescription: 'The Apilus xCell represents the pinnacle of electrolysis technology. Perfect for treating white, blonde, red, or grey hairs that laser cannot target, as well as smaller, precise areas.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/electrolysisHi_Tech.webp?updatedAt=1758015869551&tr=w-662%2Ch-503%2Cfo-custom%2Ccm-extract',
    benefits: [
      '100% permanent hair removal',
      'Treats all hair colors',
      'Precision targeting',
      'Safe for all skin types',
      'Ideal for facial hair and small areas'
    ],
    duration: '10-60 minute sessions',
    results: '100% permanent hair removal',
    recovery: 'None',
    price: 'From £80 per session',
    faqs: [
      {
        question: 'How does electrolysis compare to Soprano laser hair removal?',
        answer: 'Electrolysis is the only FDA-approved method for permanent hair removal and can treat all hair colors, unlike laser which works best on dark hair.'
      },
      {
        question: 'Is electrolysis painful?',
        answer: 'Most clients describe the sensation as a mild tingling or pricking feeling. We use advanced technology to minimize discomfort.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'The number of sessions varies based on the treatment area and hair growth cycle, typically ranging from 8-15 sessions for optimal results.'
      }
    ]
  },

  // Skin Rejuvenation
  {
    id: 'hydrafacial',
    name: 'HydraFacial Treatment',
    description: 'Instant Radiance with Patented Vortex Technology',
    longDescription: 'HydraFacial is a non-invasive, pain-free facial treatment that uses patented Vortex Fusion Technology to cleanse, extract, and hydrate your skin. This revolutionary treatment delivers immediate, visible results with no downtime, leaving your skin glowing, refreshed, and rejuvenated.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/HydraFacial_HiTech_3.webp?updatedAt=1760800038396',
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
    treatmentAreas: 'Face, neck, décolletage, back, hands',
    sessions: '1 session for instant results',
    course: 'Monthly treatments recommended',
    frequency: 'Every 4 weeks for optimal results',
    touchups: 'Regular maintenance sessions',
    duration: '30-60 minutes depending on treatment level',
    results: 'Immediate radiant glow, improved skin texture and hydration',
    recovery: 'None',
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
  },
  {
    id: 'skinpen-microneedling',
    name: 'SkinPen Microneedling',
    description: 'Collagen Induction Therapy for Natural Skin Renewal',
    longDescription: 'SkinPen is the first FDA-cleared microneedling device, creating controlled micro-injuries to stimulate your body\'s natural healing process and collagen production.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/microneedlingHi_Tech.webp?updatedAt=1758015096316',
    treats: [
      'Fine lines and wrinkles',
      'Acne scars',
      'Surgical scars',
      'Large pores',
      'Uneven skin texture',
      'Stretch marks'
    ],
    downtime: '24-48 hours',
    results: 'Visible improvement in 4-6 weeks',
    duration: '60-90 minutes',
    price: 'From £250 per session',
    faqs: [
      {
        question: 'How does SkinPen differ from other microneedling devices?',
        answer: 'SkinPen is the first and only FDA-cleared microneedling device, ensuring the highest standards of safety and efficacy.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'We typically recommend a series of 3-6 treatments spaced 4-6 weeks apart for optimal results.'
      },
      {
        question: 'What is the recovery process like?',
        answer: 'You may experience redness and mild swelling for 24-48 hours. We provide detailed aftercare instructions to ensure optimal healing.'
      }
    ]
  },
  {
    id: 'lynton-ipl',
    name: 'Lynton IPL Treatments',
    description: 'Advanced Photo-Rejuvenation Technology',
    longDescription: 'Our Lynton IPL system delivers precise light energy to target specific skin concerns without damaging surrounding tissue.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/iplHi_Tech.webp?updatedAt=1758016880043&tr=w-660%2Ch-502%2Cfo-custom%2Ccm-extract',
    treatmentOptions: [
      'Pigmentation Removal: Age spots, sun damage, freckles',
      'Vascular Treatments: Spider veins, rosacea, broken capillaries',
      'Skin Rejuvenation: Overall skin tone and texture improvement',
      'Acne Management: Active acne and acne scarring'
    ],
    sessions: '3-6 treatments recommended',
    downtime: 'Minimal to none',
    duration: '30-60 minutes',
    price: 'From £180 per session',
    faqs: [
      {
        question: 'What skin concerns can IPL treat?',
        answer: 'IPL can effectively treat pigmentation, vascular concerns, acne, and general skin rejuvenation.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients see optimal results after 3-6 sessions, spaced 3-4 weeks apart.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'There is minimal to no downtime. You may experience slight redness that typically subsides within a few hours.'
      }
    ]
  },
  {
    id: 'lynton-rf',
    name: 'Lynton Radio-Frequency',
    description: 'Non-Surgical Skin Tightening & Lifting',
    longDescription: 'Advanced RF technology heats the deeper layers of skin to stimulate collagen production and achieve a natural lifting effect.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Lynton_Radiofrequency_Hi_Tech.webp?updatedAt=1758025815760',
    benefits: [
      'Skin tightening and firming',
      'Wrinkle reduction',
      'Facial contouring',
      'Jowl lifting',
      'No surgery or injections'
    ],
    treatmentAreas: 'Face, neck, décolletage',
    results: 'Progressive improvement over 3-6 months',
    duration: '45-60 minutes',
    price: 'From £200 per session',
    faqs: [
      {
        question: 'How does RF treatment work?',
        answer: 'RF energy heats the deeper layers of skin, stimulating collagen production and causing immediate tissue contraction.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'We typically recommend a series of 6-8 treatments for optimal results.'
      },
      {
        question: 'When will I see results?',
        answer: 'You may see immediate lifting effects, with continued improvement over 3-6 months as collagen production increases.'
      }
    ]
  },
  {
    id: 'lynton-laser',
    name: 'Lynton Laser Resurfacing',
    description: 'Precision Skin Renewal',
    longDescription: 'Our fractional laser technology removes damaged skin layer by layer with precision, revealing fresh, healthy skin beneath.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/lynton%20resurfacingHi_Tech.webp?updatedAt=1758016130538',
    treats: [
      'Deep wrinkles',
      'Acne scars',
      'Sun damage',
      'Age spots',
      'Uneven skin tone',
      'Skin laxity'
    ],
    downtime: '5-7 days',
    results: 'Dramatic skin improvement',
    duration: '30-60 minutes',
    price: 'From £300 per session',
    faqs: [
      {
        question: 'What is the recovery process like?',
        answer: 'You can expect 5-7 days of downtime, with redness and peeling as the skin heals and regenerates.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'Most clients achieve optimal results with 1-3 treatments, depending on their skin concerns.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'We use topical anesthesia to ensure your comfort during the procedure.'
      }
    ]
  },
  {
    id: 'dermalux-led',
    name: 'Dermalux LED Light Therapy',
    description: 'Healing Light for Healthy Skin',
    longDescription: 'Medical-grade LED phototherapy using clinically proven wavelengths to trigger the skin\'s natural rejuvenation processes.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/ledHi_Tech.webp?updatedAt=1758015096364',
    treatmentOptions: [
      'Red Light: Anti-ageing, collagen stimulation',
      'Blue Light: Acne treatment, antibacterial',
      'Near-Infrared: Healing, pain relief'
    ],
    duration: '30 minutes',
    frequency: '2-3 times per week initially',
    downtime: 'None',
    price: 'From £60 per session',
    faqs: [
      {
        question: 'How does LED light therapy work?',
        answer: 'LED therapy uses specific wavelengths of light to trigger cellular processes that rejuvenate and repair the skin.'
      },
      {
        question: 'Is LED therapy safe?',
        answer: 'Yes, LED therapy is completely safe and non-invasive with no harmful UV rays.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'We recommend an initial course of 6-12 sessions, 2-3 times per week, followed by maintenance treatments.'
      }
    ]
  },
  
  // Injectable Treatments
  {
    id: 'botox',
    name: 'Botox',
    description: 'Precision Wrinkle Relaxation',
    longDescription: 'Our expert practitioners use advanced injection techniques to achieve natural-looking results that preserve your facial expressions while smoothing unwanted lines.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/botox2Hi_Tech.webp?updatedAt=1758015091455',
    treatmentAreas: [
      'Forehead lines',
      'Crow\'s feet',
      'Frown lines (11s)',
      'Bunny lines',
      'Lip flip',
      'Gummy smile correction',
      'Jawline slimming',
      'Hyperhidrosis (excessive sweating)'
    ],
    duration: '15-30 minutes',
    results: '3-4 months',
    downtime: 'None',
    price: 'From £200 per area',
    faqs: [
      {
        question: 'How long does Botox last?',
        answer: 'Botox results typically last 3-4 months, with some variation based on individual metabolism and treatment area.'
      },
      {
        question: 'When will I see results?',
        answer: 'Initial results are visible within 3-5 days, with full results at 14 days.'
      },
      {
        question: 'Will I look frozen?',
        answer: 'Our expert practitioners use precise techniques to ensure natural-looking results that preserve your facial expressions.'
      }
    ]
  },
  {
    id: 'polynucleotides',
    name: 'Polynucleotides',
    description: 'Next-Generation Skin Regeneration',
    longDescription: 'Bio-stimulating injectable treatment that activates fibroblasts to produce collagen and elastin naturally.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.webp?updatedAt=1758015583169',
    benefits: [
      'Deep hydration',
      'Improved skin elasticity',
      'Reduced fine lines',
      'Enhanced skin quality',
      'Natural regeneration'
    ],
    treatmentAreas: 'Face, neck, hands, décolletage',
    course: '3 treatments, 4 weeks apart',
    duration: '30-45 minutes',
    price: 'From £200 per treatment',
    faqs: [
      {
        question: 'What are polynucleotides?',
        answer: 'Polynucleotides are filtered DNA fragments that stimulate cellular regeneration and collagen production.'
      },
      {
        question: 'How long do results last?',
        answer: 'Results can last 6-12 months, with maintenance treatments recommended.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'Minimal downtime with possible mild swelling for 24-48 hours.'
      }
    ]
  },
  {
    id: 'skin-boosters',
    name: 'Skin Boosters',
    description: 'Injectable Hydration from Within',
    longDescription: 'Hyaluronic acid-based treatments that hydrate skin from the inside out, improving skin quality, elasticity, and radiance.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/skinboosterHi_Tech.webp?updatedAt=1758016013283',
    treatmentOptions: [
      'Profhilo',
      'Seventy Hyal',
      'Juvederm Volite'
    ],
    benefits: [
      'Intense hydration',
      'Improved skin texture',
      'Natural glow',
      'Increased firmness'
    ],
    duration: '30 minutes',
    results: '6-9 months',
    price: 'From £250 per treatment',
    faqs: [
      {
        question: 'How do skin boosters work?',
        answer: 'Skin boosters deliver hyaluronic acid beneath the skin surface to hydrate and stimulate collagen production from within.'
      },
      {
        question: 'How many treatments will I need?',
        answer: 'We typically recommend 2-3 initial treatments, followed by maintenance every 6-9 months.'
      },
      {
        question: 'What\'s the difference between skin boosters and dermal fillers?',
        answer: 'Skin boosters improve overall skin quality and hydration, while fillers add volume to specific areas.'
      }
    ]
  },
  {
    id: 'mesotox',
    name: 'Mesotox',
    description: 'Micro-Botox for Skin Refinement',
    longDescription: 'An innovative technique using diluted Botox injected superficially to improve skin quality without freezing facial expressions.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/mesotox2Hi_Tech.webp?updatedAt=1758016811961&tr=w-645%2Ch-502%2Cfo-custom%2Ccm-extract',
    benefits: [
      'Reduces pore size',
      'Improves skin texture',
      'Controls oil production',
      'Subtle lifting effect',
      'Natural-looking results'
    ],
    duration: '30-45 minutes',
    results: 'Glowing, refined skin for 3-4 months',
    downtime: 'Minimal',
    price: 'From £350 per treatment',
    faqs: [
      {
        question: 'How is Mesotox different from regular Botox?',
        answer: 'Mesotox uses diluted Botox injected superficially into the skin rather than the muscle, improving skin quality without affecting facial movement.'
      },
      {
        question: 'What areas can be treated?',
        answer: 'Mesotox is ideal for the face, neck, and décolletage.'
      },
      {
        question: 'When will I see results?',
        answer: 'Results appear within 5-7 days and continue to improve over 2-3 weeks.'
      }
    ]
  },
  
  // Advanced Therapies
  {
    id: 'asce-exosomes',
    name: 'ASCE+ Exosomes',
    description: 'Cutting-Edge Regenerative Treatment',
    longDescription: 'Revolutionary topical treatment containing billions of growth factors and proteins to accelerate skin healing and regeneration.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/exosomesHi_Tech.webp?updatedAt=1758025538820&tr=w-663%2Ch-502%2Cfo-custom%2Ccm-extract',
    benefits: [
      'Accelerated healing post-procedure',
      'Enhanced treatment results',
      'Reduced inflammation',
      'Improved skin quality',
      'Scar improvement'
    ],
    duration: '15 minutes (add-on treatment)',
    price: 'From £150 per application',
    faqs: [
      {
        question: 'What are exosomes?',
        answer: 'Exosomes are tiny vesicles containing growth factors, proteins, and RNA that promote cellular regeneration and healing.'
      },
      {
        question: 'When are exosomes used?',
        answer: 'Exosomes are typically applied after treatments like microneedling or laser to enhance results and speed healing.'
      },
      {
        question: 'Are exosomes safe?',
        answer: 'Yes, ASCE+ exosomes are rigorously tested and proven safe for topical application.'
      }
    ]
  },
  {
    id: 'prp-hair',
    name: 'PRP Hair Restoration',
    description: 'Natural Hair Growth Stimulation',
    longDescription: 'Platelet-Rich Plasma therapy uses your body\'s own growth factors to stimulate dormant hair follicles and promote new hair growth.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/PRP_Hair_Restoration_Hi_Tech.webp?updatedAt=1758018498017',
    benefits: [
      'Natural hair growth',
      'Increased hair density',
      'Stronger hair follicles',
      'No synthetic products'
    ],
    course: '3-4 treatments, monthly',
    duration: '60-90 minutes',
    price: 'From £500 per treatment',
    faqs: [
      {
        question: 'How does PRP work for hair loss?',
        answer: 'PRP contains growth factors that stimulate dormant hair follicles and promote new hair growth when injected into the scalp.'
      },
      {
        question: 'Who is a good candidate for PRP?',
        answer: 'PRP works best for those with thinning hair or early-stage hair loss, not complete baldness.'
      },
      {
        question: 'How long before I see results?',
        answer: 'Initial results are visible after 3-4 months, with continued improvement over 6-12 months.'
      }
    ]
  },
  {
    id: 'relaxing-facials',
    name: 'Relaxing Facials',
    description: 'Luxury Skincare Experiences',
    longDescription: 'Bespoke facial treatments combining professional-grade products with relaxation techniques for the ultimate pampering experience.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/facial2Hi_Tech.webp?updatedAt=1758016255995',
    treatmentOptions: [
      'Hydrating Facial',
      'Anti-Ageing Facial',
      'Brightening Facial',
      'Deep Cleansing Facial',
      'Sensitive Skin Facial'
    ],
    duration: '60-90 minutes',
    price: 'From £95 per treatment',
    faqs: [
      {
        question: 'What does a facial include?',
        answer: 'Our facials include cleansing, exfoliation, extraction if needed, massage, mask application, and finishing serums.'
      },
      {
        question: 'How often should I have a facial?',
        answer: 'We recommend monthly facials for optimal skin health, though this can vary based on individual needs.'
      },
      {
        question: 'Can I wear makeup after a facial?',
        answer: 'We recommend avoiding makeup for at least 6 hours after your facial to allow your skin to breathe and absorb the treatment products.'
      }
    ]
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    description: 'Professional Skin Resurfacing',
    longDescription: 'Medical-grade chemical solutions to exfoliate damaged skin layers and reveal healthier, more radiant skin.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/chemicalpeelHi_Tech.webp?updatedAt=1758016298221',
    peelTypes: [
      'Light Peels: Glow enhancement, mild exfoliation',
      'Medium Peels: Pigmentation, fine lines, acne',
      'Deep Peels: Significant sun damage, deep wrinkles'
    ],
    course: '3-6 treatments recommended',
    downtime: 'Varies by peel depth',
    price: 'From £150 per treatment',
    faqs: [
      {
        question: 'Which peel is right for me?',
        answer: 'During your consultation, we\'ll assess your skin and recommend the most appropriate peel type for your concerns.'
      },
      {
        question: 'What is the recovery like?',
        answer: 'Recovery varies from no downtime for light peels to 7-10 days for deeper peels.'
      },
      {
        question: 'How often can I have a peel?',
        answer: 'Light peels can be done monthly, while deeper peels may require 3-6 months between treatments.'
      }
    ]
  },
  {
    id: 'zo-skincare',
    name: 'ZO Medical Skincare',
    description: 'Prescription-Strength Home Care',
    longDescription: 'Dr. Zein Obagi\'s advanced skincare line, available exclusively through medical professionals.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/ZOSkincare_Hi_Tech.webp?updatedAt=1758017254420&tr=w-972%2Ch-774%2Cfo-custom%2Ccm-extract',
    productLines: [
      'Anti-aging protocols',
      'Acne management systems',
      'Pigmentation correction',
      'Rosacea care',
      'Post-procedure recovery'
    ],
    price: 'From £45 per product',
    faqs: [
      {
        question: 'Do I need a consultation for ZO products?',
        answer: 'Yes, a consultation is required for prescription items to ensure the products are suitable for your skin.'
      },
      {
        question: 'What makes ZO different from other skincare?',
        answer: 'ZO uses medical-grade ingredients and advanced delivery systems only available through medical professionals.'
      },
      {
        question: 'Will I experience any side effects?',
        answer: 'Some products may cause initial irritation as your skin adjusts. We provide full guidance on product introduction.'
      }
    ]
  },
  {
    id: 'permanent-makeup',
    name: 'Permanent Makeup',
    description: 'By Master Artist Natalia',
    longDescription: 'Semi-permanent cosmetic tattooing for effortless, long-lasting beauty.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Permanent_MakeUpHiTech.webp?updatedAt=1760367075758',
    services: [
      'Microblading/Nano brows',
      'Powder brows',
      'Combination brows',
      'Lip blush',
      'Eyeliner (top and bottom)',
      'Scalp micropigmentation'
    ],
    duration: '2-3 hours initial appointment',
    results: '1-3 years',
    touchups: 'Annual maintenance recommended',
    price: 'From £350 per treatment',
    faqs: [
      {
        question: 'How long does permanent makeup last?',
        answer: 'Results typically last 1-3 years depending on the treatment, skin type, and lifestyle factors.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'We use topical anesthetics to ensure your comfort throughout the procedure.'
      },
      {
        question: 'What is the healing process?',
        answer: 'Initial healing takes 7-10 days, with full results visible after 4-6 weeks.'
      }
    ]
  }
];
