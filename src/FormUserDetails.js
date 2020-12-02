import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import RadioButtonGroup from './RadioButtonGroup.js';
import CustomField from './CustomField.js';

export const genderSchema = yup.string().required('Povinná otázka');
export const goalSchema = yup.string().required('Cíl je povinná otázka');
export const weightSchema = yup
  .number()
  .required('Zadej svou váhu v kg')
  .max(150, 'Zadejte váhu mezi 40 a 150kg')
  .min(40, 'Zadejte váhu mezi 40 a 150kg')
  .typeError('Zadejte váhu mezi 40 a 150kg');

const StyledFormUserDetails = styled.div`
  padding: 1rem;
  position: relative;
  .formUserDetails {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

export const FormUserDetails = ({ errors, touched, values }) => {
  const validate = (schema, value) => {
    console.log('Validate');
    try {
      schema.validateSync(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormUserDetails>
      <div className="formUserDetails">
        <div>
          <RadioButtonGroup
            values={values}
            question="Jsem:"
            name="gender"
            validate={(value) => {
              validate(genderSchema, value);
            }}
            answers={[
              { value: '0.8', label: 'Žena' },
              { value: '1.2', label: 'Muž' },
            ]}
          />

          <RadioButtonGroup
            values={values}
            question="Pomocí jídelníčku chci:"
            name="goal"
            validate={(value) => {
              validate(goalSchema, value);
            }}
            answers={[
              { value: '0.8', label: 'Zdravě zhubnout' },
              { value: '1', label: 'Jíst zdravěji a udržet si váhu' },
              { value: '1.2', label: 'Nabrat svalovou hmotu' },
            ]}
          />
          <CustomField
            question="Kolik vážíte kg?"
            type="number"
            name="weight"
            placeholder="Zadej svou váhu v kg"
            validate={(value) => {
              validate(weightSchema, value);
            }}
          />
        </div>
      </div>
    </StyledFormUserDetails>
  );
};

export default FormUserDetails;
