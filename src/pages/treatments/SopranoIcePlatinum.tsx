import React from 'react';
import TreatmentPage from './TreatmentTemplate';

const SopranoIcePlatinum: React.FC = () => {
  const treatment = {
    id: 'soprano-ice-platinum',
    name: 'Soprano Ice Platinum Laser Hair Removal',
    description: 'The gold standard in pain-free hair removal, suitable for all skin types.',
    longDescription: 'Experience the revolutionary Soprano Ice Platinum laser hair removal system, the most advanced and comfortable hair removal solution available. This cutting-edge technology combines three wavelengths to effectively target hair follicles while keeping your skin cool and comfortable throughout the treatment.',
    image: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    benefits: [
      'Virtually painless treatment',
      'Suitable for all skin types',
      'Fast and efficient treatment',
      'No downtime required',
      'Long-lasting results',
      'Treats multiple body areas'
    ],
    treatmentAreas: [
      'Face',
      'Arms',
      'Legs',
      'Back',
      'Chest',
      'Bikini area',
      'Full body'
    ],
    sessions: '6-8 sessions recommended for optimal results',
    course: 'Initial course of 6-8 sessions',
    frequency: 'Every 4-6 weeks',
    touchups: 'Annual maintenance sessions recommended',
    duration: '15-60 minutes depending on area',
    results: 'Permanent hair reduction after completing the course',
    recovery: 'No downtime, resume normal activities immediately',
    price: 'From £150 per session',
    faqs: [
      {
        question: 'How does Soprano Ice Platinum work?',
        answer: 'The Soprano Ice Platinum uses a unique in-motion technology that combines three wavelengths to target hair follicles at different depths. The system includes a cooling mechanism that keeps your skin comfortable throughout the treatment.'
      },
      {
        question: 'Is it suitable for all skin types?',
        answer: 'Yes, the Soprano Ice Platinum is safe and effective for all skin types, including darker skin tones that may not be suitable for other laser systems.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients require 6-8 sessions for optimal results, spaced 4-6 weeks apart. The exact number depends on your hair type, colour, and the treatment area.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'The Soprano Ice Platinum is designed to be virtually painless. Most clients describe the sensation as a warm, tingling feeling. The built-in cooling system ensures your comfort throughout the treatment.'
      },
      {
        question: 'When will I see results?',
        answer: 'You may notice some hair reduction after the first session, but significant results typically become visible after 3-4 sessions. Complete results are achieved after completing the full course of treatments.'
      }
    ]
  };

  return <TreatmentPage treatment={treatment} />;
};

export default SopranoIcePlatinum; 