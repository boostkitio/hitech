import React from 'react';
import TreatmentLayout from './TreatmentLayout';
import { treatments } from '../../data/treatments';

const PermanentMakeup: React.FC = () => {
  const treatment = treatments.find(t => t.id === 'permanent-makeup');
  
  if (!treatment) {
    return <div>Treatment not found</div>;
  }

  return <TreatmentLayout treatment={treatment} />;
};

export default PermanentMakeup;