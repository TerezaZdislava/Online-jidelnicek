import React from 'react';
import { Field } from 'formik';
import './assets/form.module.css';
import * as yup from 'yup';

export const ageSchema = yup
  .number()
  .required('Zadej svůj věk')
  .max(100, 'Zadejte věk mezi 18 a 100 roky')
  .min(18, 'Zadejte věk mezi 18 a 100 roky');
export const heightSchema = yup
  .number()
  .required('Zadej svou výšku v cm')
  .max(220, 'Zadejte výšku mezi 150 a 220 cm')
  .min(150, 'Zadejte výšku mezi 150 a 220 cm');
export const weightSchema = yup
  .number()
  .required('Zadej svou váhu v kg')
  .max(150, 'Zadejte váhu mezi 40 a 150kg')
  .min(40, 'Zadejte váhu mezi 40 a 150kg');

const validate = (schema, value) => {
  try {
    schema.validateSync(value);
  } catch (error) {
    // Tady by bylo fajn zobrazit uživateli nějakou chybu místo console.logu
    console.log(error);
  }
};

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

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  return (
    <React.Fragment>
      <h1>Formulář</h1>
      <p>
        Abychom ti mohli sestavit jídelníček na míru, potřebujeme od tebe
        vyplnit pár základních informací.
      </p>
      <div className="FormUserDetails">
        <div className="otazka">
          <label htmlFor="form1.age">Věk</label>
          <Field
            name="age"
            label="Věk"
            margin="normal"
            placeholder="Zadej svůj věk"
            //error={touched.age && errors.age}
            //helperText={touched.age && errors.age}
          />
        </div>
        <div className="otazka">
          <label htmlFor="form1.height">Výška</label>
          <Field
            name="height"
            label="Výška"
            margin="normal"
            placeholder="Zadej svou výšku v cm"
            //error={touched.height && errors.height}
            //helperText={touched.height && errors.height}
          />
        </div>
        <div className="otazka">
          <label htmlFor="form1.weight">Váha</label>
          <Field
            name="weight"
            label="Váha"
            margin="normal"
            placeholder="Zadej svou váhu v kg"
            //error={touched.weight && errors.weight}
            //helperText={touched.weight && errors.weight}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormUserDetails;
