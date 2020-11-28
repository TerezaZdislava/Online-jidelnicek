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
import SwipeableViews from 'react-swipeable-views';

const validationSchema = yup.object().shape({
  gender: genderSchema,
  goal: goalSchema,
  weight: weightSchema,
  numberOfMeals: numberOfMealsSchema,
  sportFrequency: sportFrequencySchema,
  jobActivity: jobActivitySchema,
});

const initialValues = {
  gender: '0.8',
  goal: '1',
  weight: null,
  exludedFood: '',
  numberOfMeals: '3',
  sportFrequency: '1',
  jobActivity: '1',
  formBodyFat: 20,
};

const stepComponents = [FormUserDetails, FormFood, FormActivity, FormBodyFat];

const FormParent = () => {
  const [step, setStep] = useState(0);

  const isFirst = step === 0;
  const isLast = step === stepComponents.length - 1;

  const renderStep = () => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="formular1">
          <SwipeableViews index={step}>
            {stepComponents.map((StepComponent) => {
              return (
                <div>
                  <StepComponent
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </div>
              );
            })}
          </SwipeableViews>
          <FormButtons setStep={setStep} isFirst={isFirst} isLast={isLast} />
        </Form>
      )}
    </Formik>
  );
};

export default FormParent;
