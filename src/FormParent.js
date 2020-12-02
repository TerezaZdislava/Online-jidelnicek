import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
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
import FormButtons from './FormButtons';
import SwipeableViews from 'react-swipeable-views';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
  formBodyFat: 20,
};

const requiredFieldPerStep = {
  0: ['gender', 'goal', 'weight'],
};

const stepComponents = [FormUserDetails, FormFood, FormActivity, FormBodyFat];
// const stepComponents = [FormUserDetails];
const FormParent = () => {
  const initialPage =
    localStorage.getItem('formPage') != null
      ? JSON.parse(localStorage.getItem('formPage'))
      : 0;
  const history = useHistory();
  const [step, setStep] = useState(initialPage);

  useEffect(() => {
    localStorage.setItem('formPage', Number(step));
  }, [step]);

  const isFirst = step === 0;
  const isLast = step === stepComponents.length - 1;

  const StyledContainer = styled.div`
    h1 {
      margin: 0;
      padding-top: 30px;
      padding-left: 30px;
      font-weight: 600;
      font-size: 1.6rem;

      z-index: 2;
    }
    .headerimage {
      height: 10rem;
      position: absolute;
      top: -20px;
      right: 0;
      z-index: 0;
    }
    @media (min-width: 400px) {
      h1 {
        display: flex;
        justify-content: center;
      }
    }
  `;

  return (
    <StyledContainer>
      <Formik
        initialValues={
          localStorage.getItem('form')
            ? JSON.parse(localStorage.getItem('form'))
            : initialValues
        }
        onSubmit={(values) => {
          values.gender = Number(values.gender);
          values.goal = Number(values.goal);
          values.jobActivity = Number(values.jobActivity);
          values.numberOfMeals = Number(values.numberOfMeals);
          values.sportFrequency = Number(values.sportFrequency);
          console.log(values);
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
            .then((data) => {
              localStorage.setItem('menu', JSON.stringify(data));
              localStorage.removeItem('form');
              localStorage.removeItem('formPage');
              history.push('/foodmenu');
            })
            .catch((error) => {
              alert(
                'Jejda, něco se porouchalo. Jídelníček v tuto chvíli nelze vytvořit.',
                error,
              );
            });
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
          localStorage.setItem('form', JSON.stringify(values));
          return (
            <Form className="formular1">
              <SwipeableViews disabled={true} index={step}>
                {stepComponents.map((StepComponent) => {
                  return (
                    <div>
                      <h1>Formulář</h1>

                      <img
                        className="headerimage"
                        src={'./assets/img/foodmenu.png'}
                        alt="Online-jídelníček"
                      />
                      <StepComponent
                        touched={touched}
                        errors={errors}
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                      <FormButtons
                        setStep={setStep}
                        submitForm={submitForm}
                        isFirst={isFirst}
                        isLast={isLast}
                        nextDisabled={pageButtonsDisabled[step]}
                      />
                    </div>
                  );
                })}
              </SwipeableViews>
              {/* <FormButtons
                setStep={setStep}
                submitForm={submitForm}
                isFirst={isFirst}
                isLast={isLast}
                nextDisabled={pageButtonsDisabled[step]}
              /> */}
            </Form>
          );
        }}
      </Formik>
    </StyledContainer>
  );
};

export default FormParent;
