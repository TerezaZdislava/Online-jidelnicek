import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './App.css';
import FormUserDetails, {
  genderSchema,
  goalSchema,
  weightSchema,
} from './FormUserDetails';
import FormBodyFat from './FormBodyFat';
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
  gender: genderSchema,
  goal: goalSchema,
  weight: weightSchema,
  numberOfMeals: numberOfMealsSchema,
  sportFrequency: sportFrequencySchema,
  jobActivity: jobActivitySchema,
});

const initialValues = {
  gender: 'Men',
  goal: '1',
  weight: '',
  exludedFood: '',
  numberOfMeals: 'A',
  sportFrequency: 'A',
  jobActivity: 'A',
  formBodyFat: '20',
};

const stepComponents = [
  <FormUserDetails />,
  <FormFood />,
  <FormActivity />,
  <FormBodyFat />,
];

const FormParent = () => {
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
          {stepComponents.map((stepComponent) => {
            return (
              <div>
                {stepComponent}
                <FormButtons
                  setStep={setStep}
                  isFirst={isFirst}
                  isLast={isLast}
                />
              </div>
            );
          })}
          {/* <FormButtons setStep={setStep} isFirst={isFirst} isLast={isLast} /> */}
        </Form>
      )}
    </Formik>
  );
};

export default FormParent;
