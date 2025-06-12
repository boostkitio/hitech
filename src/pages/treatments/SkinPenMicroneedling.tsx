import React from 'react';
import TreatmentLayout from './TreatmentLayout';
import { treatments } from '../../data/treatments';

const SkinPenMicroneedling: React.FC = () => {
  const treatment = treatments.find(t => t.id === 'skinpen-microneedling');
  
  if (!treatment) {
    return <div>Treatment not found</div>;
  }

  return <TreatmentLayout treatment={treatment} />;
};

export default SkinPenMicroneedling;