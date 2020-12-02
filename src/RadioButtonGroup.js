import styled from 'styled-components';
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { CheckCircle } from '@styled-icons/feather/CheckCircle';
import { Circle } from '@styled-icons/feather/Circle';

const StyledRadioButtonGroup = styled.div`
  display: block;
  margin-bottom: 1rem;
  input {
    visibility: hidden;
    width: 0;
    margin: 0;
    height: 40px;
    order: 2;
  }
  h5 {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0;
    padding: 0.7rem;
  }
  .radio-answers {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      padding-left: 1.5rem;
      padding-right: 0.7rem;
      justify-content: space-between;
      svg {
        order: 3;
      }
      &.checked {
        background-color: rgb(255, 0, 55);

        color: white;
      }
    }
  }
`;

const RadioButtonGroup = ({ question, name, answers, validate, values }) => {
  return (
    <StyledRadioButtonGroup>
      <h5 id="my-radio-group">{question}</h5>
      <div
        className="radio-answers"
        role="group"
        aria-labelledby="my-radio-group"
      >
        {answers.map((answer) => {
          const checked = values[name] === answer.value ? 'checked' : '';
          return (
            <label className={checked}>
              <Field
                type="radio"
                name={name}
                value={answer.value}
                validate={validate}
              />
              {answer.label}
              {checked ? <CheckCircle size="1.4em" /> : <Circle size="1.4em" />}
            </label>
          );
        })}
      </div>
      <ErrorMessage name={name} />
    </StyledRadioButtonGroup>
  );
};

export default RadioButtonGroup;
