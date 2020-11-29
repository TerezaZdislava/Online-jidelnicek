import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

export const genderSchema = yup.string().required('Povinná otázka');
export const goalSchema = yup.string().required('Cíl je povinná otázka');
export const weightSchema = yup
  .number()
  .required('Zadej svou váhu v kg')
  .max(150, 'Zadejte váhu mezi 40 a 150kg')
  .min(40, 'Zadejte váhu mezi 40 a 150kg')
  .typeError('Zadejte váhu mezi 40 a 150kg');

// const validationSchema = yup.object().shape({
//   age: yup
//     .number()
//     .required('Zadej svůj věk')
//     .max(100, 'Zadejte věk mezi 18 a 100 roky')
//     .min(18, 'Zadejte věk mezi 18 a 100 roky'),
//   height: yup
//     .number()
//     .required('Zadej svou výšku v cm')
//     .max(220, 'Zadejte výšku mezi 150 a 220 cm')
//     .min(150, 'Zadejte výšku mezi 150 a 220 cm'),
//   weight: yup
//     .number()
//     .required('Zadej svou váhu v kg')
//     .max(150, 'Zadejte váhu mezi 40 a 150kg')
//     .min(40, 'Zadejte váhu mezi 40 a 150kg'),
// });

const StyledFormUserDetails = styled.div`
  padding: 1rem;

  .formUserDetails {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 5%;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  .messageToForm {
    background-color: #c1c1c169;
    width: 100%;
  }
`;

export const FormUserDetails = ({ errors, touched }) => {
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
      <h1>Formulář</h1>
      <div className="formUserDetails">
        <p className="messageToForm">
          Abychom ti mohli sestavit jídelníček na míru, potřebujeme od tebe
          vyplnit pár základních informací.
        </p>
        <div>
          <div className="otazka">
            <div id="my-radio-group">Jsem:</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="0.8"
                  validate={(value) => {
                    validate(genderSchema, value);
                  }}
                />
                Žena
              </label>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="1.2"
                  validate={(value) => {
                    validate(genderSchema, value);
                  }}
                />
                Muž
              </label>
            </div>
            <ErrorMessage name="gender" />
          </div>
          <div className="otazka">
            <div id="my-radio-group">Pomocí jídelníčku chci:</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field
                  type="radio"
                  name="goal"
                  value="0.8"
                  validate={(value) => {
                    validate(goalSchema, value);
                  }}
                />
                Zdravě zhubnout
              </label>
              <label>
                <Field
                  type="radio"
                  name="goal"
                  value="1"
                  validate={(value) => {
                    validate(goalSchema, value);
                  }}
                />
                Jíst zdravěji a udržet si váhu
              </label>
              <label>
                <Field
                  type="radio"
                  name="goal"
                  value="1.2"
                  validate={(value) => {
                    validate(goalSchema, value);
                  }}
                />
                Nabrat na váze
              </label>
            </div>
            <ErrorMessage name="goal" />
          </div>
          <div className="otazka">
            <label htmlFor="weight">Kolik vážíte kg?</label>
            <Field
              type="number"
              name="weight"
              label="Váha"
              margin="normal"
              placeholder="Zadej svou váhu v kg"
              validate={(value) => {
                validate(weightSchema, value);
              }}
            />
            <ErrorMessage name="weight" />
          </div>
        </div>
      </div>
    </StyledFormUserDetails>
  );
};

export default FormUserDetails;
