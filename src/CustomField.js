import styled from 'styled-components';
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const StyledField = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 0;
    padding: 0.7rem;
  }
  input {
    margin-top: 0.7rem;
    height: 25px;
    width: 92%;
    border: 1px solid red;
    border-radius: 0.3rem;
    padding: 0.2rem 0.6rem;
  }
  @media (min-width: 750px) {
    font-size: 1.3rem;
    label { 
      font-size: 1.5rem;
    }
    input {
      height: 35px;
      font-size: 1.3rem;
    }
`;

const CustomField = ({ question, name, validate, type, placeholder }) => {
  return (
    <StyledField>
      <label htmlFor={name}>
        <span>{question}</span>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          validate={validate}
        />
      </label>
      <ErrorMessage name={name} />
    </StyledField>
  );
};

export default CustomField;
