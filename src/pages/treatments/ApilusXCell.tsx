import React from 'react';
import TreatmentPage from './TreatmentTemplate';

const ApilusXCell: React.FC = () => {
  const treatment = {
    id: 'apilus-xcell',
    name: 'Apilus xCell Electrolysis',
    description: 'Permanent hair removal solution for all hair types, including white and blonde hairs.',
    longDescription: 'Apilus xCell Electrolysis is the most advanced permanent hair removal solution available. Using state-of-the-art technology, this treatment effectively removes unwanted hair of any color or type, including white, blonde, and fine hairs that cannot be treated with laser.',
    image: '/images/treatments/apilus-xcell.jpg',
    benefits: [
      'Permanent hair removal',
      'Effective on all hair colors and types',
      'Precise treatment targeting',
      'Minimal discomfort',
      'Suitable for all skin types',
      'No risk of paradoxical hair growth'
    ],
    treatmentAreas: [
      'Face',
      'Eyebrows',
      'Upper lip',
      'Chin',
      'Neck',
      'Bikini area',
      'Any body area'
    ],
    sessions: 'Multiple sessions required for permanent results',
    course: 'Customized treatment plan based on hair growth',
    frequency: 'Every 2-4 weeks',
    touchups: 'Occasional maintenance sessions may be needed',
    duration: '15-60 minutes depending on area',
    results: 'Permanent hair removal after completing the course',
    recovery: 'Minimal downtime, slight redness may occur',
    price: 'From £45 per 15 minutes',
    faqs: [
      {
        question: 'How does Apilus xCell work?',
        answer: 'Apilus xCell uses advanced electrolysis technology to permanently remove hair by targeting the hair follicle with precise electrical current. The system includes automatic current adjustment and advanced waveform technology for maximum comfort and effectiveness.'
      },
      {
        question: 'Is it suitable for all hair types?',
        answer: 'Yes, Apilus xCell is effective on all hair types and colors, including white, blonde, and fine hairs that cannot be treated with laser hair removal.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'The number of sessions varies depending on the treatment area, hair density, and individual hair growth cycles. Your practitioner will create a customized treatment plan during your consultation.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'Most clients experience minimal discomfort. The Apilus xCell system includes advanced technology to minimize any discomfort during treatment.'
      },
      {
        question: 'What is the recovery time?',
        answer: 'There is minimal downtime after treatment. You may experience slight redness or swelling in the treated area, which typically subsides within a few hours.'
      }
    ]
  };

  return <TreatmentPage treatment={treatment} />;
};

export default ApilusXCell; 