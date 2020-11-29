import styled from 'styled-components';
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const StyledField = styled.div`
  color: black;
`;

const CustomField = ({ question, name, validate, type, placeholder }) => {
  return (
    <StyledField>
      <label htmlFor={name}>{question}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        validate={validate}
      />
      <ErrorMessage name={name} />
    </StyledField>
  );
};

export default CustomField;
