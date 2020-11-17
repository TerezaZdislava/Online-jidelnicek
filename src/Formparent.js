import React, { useState } from 'react';
import './App.css';
import { FormUserDetails } from './FormUserDetails';
import FormFood from './FormFood';

export const FormParent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    form1: {
      gender: '',
      age: '',
      height: '',
      weight: '',
    },
    form2: {},
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormFood
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    // case 3:
    //   return (
    //     <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
    //   );
    default:
      console.log(formData);
    // return <Success />;
  }
};
