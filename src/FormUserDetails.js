import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './assets/form.module.css';
import * as yup from 'yup';

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

export const FormUserDetails = ({ errors, touched, setNextDisabled }) => {
  const validate = (schema, value) => {
    console.log('Validate');
    try {
      schema.validateSync(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Formulář</h1>
      <p>
        Abychom ti mohli sestavit jídelníček na míru, potřebujeme od tebe
        vyplnit pár základních informací.
      </p>
      <div className="FormUserDetails">
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
  );
};

export default FormUserDetails;
