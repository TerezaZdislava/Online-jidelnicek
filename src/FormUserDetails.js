import React from 'react';
import { Field } from 'formik';
import './assets/form.module.css';
import * as yup from 'yup';

export const genderSchema = yup.string().required('Povinná otázka');
export const goalSchema = yup.string().required('Cíl je povinná otázka');
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
              <Field type="radio" name="gender" value="0.8" />
              Žena
            </label>
            <label>
              <Field type="radio" name="gender" value="1.2" />
              Muž
            </label>
          </div>
        </div>
        <div className="otazka">
          <div id="my-radio-group">Pomocí jídelníčku chci:</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="goal" value="0.8" />
              Zdravě zhubnout
            </label>
            <label>
              <Field type="radio" name="goal" value="1" />
              Jíst zdravěji a udržet si váhu
            </label>
            <label>
              <Field type="radio" name="goal" value="1.2" />
              Nabrat na váze
            </label>
          </div>
        </div>
        <div className="otazka">
          <label htmlFor="form1.weight">Kolik vážíte kg?</label>
          <Field
            type="number"
            name="weight"
            label="Váha"
            margin="normal"
            placeholder="Zadej svou váhu v kg"
            //error={touched.weight && errors.weight}
            //helperText={touched.weight && errors.weight}
            validate={(value) => validate(weightSchema, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FormUserDetails;
