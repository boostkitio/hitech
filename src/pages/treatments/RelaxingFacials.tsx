import React from 'react';
import TreatmentLayout from './TreatmentLayout';
import { treatments } from '../../data/treatments';

const RelaxingFacials: React.FC = () => {
  const treatment = treatments.find(t => t.id === 'relaxing-facials');
  
  if (!treatment) {
    return <div>Treatment not found</div>;
  }

  return <TreatmentLayout treatment={treatment} />;
};

export default RelaxingFacials;