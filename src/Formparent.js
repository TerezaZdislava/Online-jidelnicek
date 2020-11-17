import React, { useState } from 'react';
import './App.css';
import { FormUserDetails } from './FormUserDetails';
import FormFood from './FormFood';
import FormActivity from './FormActivity';
import { Success } from './Success';

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
    form3: {
      questions: [
        {
          question: 'Kolik jídel denně preferuješ?',
          choices: [
            { option: 'A', answer: '3 jídla (snídaně, oběd, večeře)' },
            { option: 'A', answer: '5 jídel (svačiny mezi hlavními jídly)' },
          ],
        },
        {
          question: 'Sportuješ během týdne?',
          choices: [
            { option: 'A', answer: 'Nesportuji.' },
            { option: 'B', answer: 'Sportuji 1 - 2x týdně.' },
            { option: 'C', answer: 'Sportuji 3 - 4x týdně.' },
            {
              option: 'D',
              answer:
                'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
            },
          ],
        },
        {
          question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne?',
          choices: [
            {
              option: 'A',
              answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.',
            },
            {
              option: 'B',
              answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
            },
            {
              option: 'C',
              answer:
                'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
            },
          ],
        },
      ],
    },
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
    case 3:
      return (
        <FormActivity
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      // console.log(formData);
      // alert(formData);
      return <Success formData={formData} />;
  }
};
