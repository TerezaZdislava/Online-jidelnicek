import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './App.css';
import FormUserDetails, {
  ageSchema,
  heightSchema,
  weightSchema,
} from './FormUserDetails';
import FormBodyfat from './FormBodyfat';
import FormFood from './FormFood';
import FormActivity, {
  numberOfMealsSchema,
  sportFrequencySchema,
  jobActivitySchema,
} from './FormActivity';
import { Success } from './Success';
import './assets/form.module.css';
import FormButtons from './FormButtons';

const validationSchema = yup.object().shape({
  age: ageSchema,
  height: heightSchema,
  weight: weightSchema,
  numberOfMeals: numberOfMealsSchema,
  sportFrequency: sportFrequencySchema,
  jobActivity: jobActivitySchema,
});

const initialValues = {
  age: '',
  height: '',
  weight: '',
  numberOfMeals: 'A',
  sportFrequency: 'A',
  jobActivity: 'A',
};

const stepComponents = [<FormUserDetails />, <FormActivity />];

export const FormParent = () => {
  const [step, setStep] = useState(0);

  const isFirst = step === 0;
  const isLast = step === stepComponents.length - 1;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="formular1">
          {stepComponents.map((stepComponent) => stepComponent)}
          <FormButtons setStep={setStep} isFirst={isFirst} isLast={isLast} />
        </Form>
      )}
    </Formik>
  );
};
