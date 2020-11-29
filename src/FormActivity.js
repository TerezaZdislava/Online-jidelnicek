import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import styled from 'styled-components';

// const validationSchema = yup.object().shape({
//   option0: yup.string().required('At least one checkbox is required'),
//   option1: yup.string().required('At least one checkbox is required'),
//   option2: yup.string().required('At least one checkbox is required'),
// });
const StyledFormActivity = styled.div`
  padding: 1rem;

  .FormActivityAll {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  .formactivity-question {
    background-color: #c1c1c169;
    width: 100%;
  }
`;

export const numberOfMealsSchema = yup
  .string()
  .required('Počet jídel je povinná otázka');
export const sportFrequencySchema = yup
  .string()
  .required('Jak často sportuješ je povinná otázka');
export const jobActivitySchema = yup
  .string()
  .required('Denní aktivita je povinná otázka');

// const validate = (schema, value) => {
//   try {
//     schema.validateSync(value);
//   } catch (error) {
//     // Tady by bylo fajn zobrazit uživateli nějakou chybu místo console.logu
//     console.log(error);
//   }
// };

const questions = [
  {
    question: 'Kolik jídel denně preferuješ?',
    choices: [
      { option: '3', answer: '3 jídla (snídaně, oběd, večeře)' },
      { option: '5', answer: '5 jídel (svačiny mezi hlavními jídly)' },
    ],
  },
  {
    question: 'Sportuješ během týdne?',
    choices: [
      { option: '0.8', answer: 'Nesportuji.' },
      { option: '1', answer: 'Sportuji 1 - 2x týdně.' },
      { option: '1.35', answer: 'Sportuji 3 - 4x týdně.' },
      {
        option: '1.7',
        answer: 'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
      },
    ],
  },
  {
    question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne, kromě sportu?',
    choices: [
      {
        option: '0.8',
        answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.',
      },
      {
        option: '1',
        answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
      },
      {
        option: '1.35',
        answer: 'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
      },
    ],
  },
];

const InputFeedback = ({ error }) => {
  console.log(error);
  return error ? (
    <div className={classNames('input-feedback')}>{error}</div>
  ) : null;
};

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  props,
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames('radio-button')}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const FormActivity = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');

  const validate = (schema, value) => {
    try {
      schema.validateSync(value);
    } catch (error) {
      // Tady by bylo fajn zobrazit uživateli nějakou chybu místo console.logu
      console.log(error);
    }
  };

  return (
    <StyledFormActivity>
      <div className="FormActivityAll">
        <div className="card" key="0">
          <div className="card-body">
            <h6 className="formactivity-question">{questions[0].question}</h6>

            <div role="group" aria-labelledby="my-radio-group">
              {questions[0].choices.map((choice) => (
                <div className="formactivity-check" key={choice.option}>
                  <Field
                    component={RadioButton}
                    id={choice.option}
                    className="form-check-input"
                    // name={`answers[${index}].answer`}
                    name="numberOfMeals"
                    label={choice.answer}
                    validate={(value) => validate(numberOfMealsSchema, value)}
                  />
                  <ErrorMessage name="numberOfMeals" />
                </div>
              ))}
            </div>
            <h6 className="formactivity-question">{questions[1].question}</h6>
            <div role="group" aria-labelledby="my-radio-group">
              {questions[1].choices.map((choice) => (
                <div className="formactivity-check" key={choice.option}>
                  <Field
                    component={RadioButton}
                    id={choice.option}
                    className="form-check-input"
                    // name={`answers[${index}].answer`}
                    name="sportFrequency"
                    label={choice.answer}
                    validate={(value) => validate(sportFrequencySchema, value)}
                  />
                  <ErrorMessage name="sportFrequency" />
                </div>
              ))}
            </div>
            <h6 className="formactivity-question">{questions[2].question}</h6>
            <div role="group" aria-labelledby="my-radio-group">
              {questions[2].choices.map((choice) => (
                <div className="formactivity-check" key={choice.option}>
                  <Field
                    component={RadioButton}
                    id={choice.option}
                    className="form-check-input"
                    name="jobActivity"
                    label={choice.answer}
                    validate={(value) => validate(jobActivitySchema, value)}
                  />
                  <ErrorMessage name="jobActivity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledFormActivity>
  );
};

export default FormActivity;

// zdroje kodu:
// https://formik.org/docs/overview
// https://codesandbox.io/s/gifted-brown-xemxi?file=/src/App.js:2405-2429
