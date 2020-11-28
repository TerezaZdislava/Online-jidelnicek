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
  gender: null,
  goal: null,
  weight: null,
  excludedFood: [],
  numberOfMeals: null,
  sportFrequency: null,
  jobActivity: null,
  formBodyFat: '',
};

const requiredFieldPerStep = {
  0: ['gender', 'goal', 'weight'],
};

const stepComponents = [FormUserDetails, FormFood, FormActivity, FormBodyFat];
// const stepComponents = [FormUserDetails];
const FormParent = () => {
  const [step, setStep] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const setDisabled = (value) => {
    setNextDisabled(value);
  };
  const isFirst = step === 0;
  const isLast = step === stepComponents.length - 1;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        values.gender = Number(values.gender);
        values.goal = Number(values.goal);
        values.jobActivity = Number(values.jobActivity);
        values.numberOfMeals = Number(values.numberOfMeals);
        values.sportFrequency = Number(values.sportFrequency);
        fetch('/api/form', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(values), // body data type must match "Content-Type" header
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => localStorage.setItem('form', JSON.stringify(data)));
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched, values, setFieldValue, submitForm }) => {
        const pageButtonsDisabled = {
          0:
            !values.gender ||
            !values.weight ||
            !values.goal ||
            errors.gender ||
            errors.weight ||
            errors.goal,
          1: false,
          2:
            !values.numberOfMeals ||
            !values.sportFrequency ||
            !values.jobActivity ||
            errors.numberOfMeals ||
            errors.sportFrequency ||
            errors.jobActivity,
          3: !values.formBodyFat || errors.formBodyFat,
        };
        return (
          <Form className="formular1">
            <SwipeableViews index={step}>
              {stepComponents.map((StepComponent) => {
                return (
                  <div>
                    <StepComponent
                      touched={touched}
                      errors={errors}
                      setNextDisabled={setDisabled}
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                );
              })}
            </SwipeableViews>
            <FormButtons
              setStep={setStep}
              submitForm={submitForm}
              isFirst={isFirst}
              isLast={isLast}
              nextDisabled={pageButtonsDisabled[step]}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormParent;
