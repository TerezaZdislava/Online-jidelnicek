import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './assets/form.module.css';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  age: yup
    .number()
    .required('Zadej svůj věk')
    .max(100, 'Zadejte věk mezi 18 a 100 roky')
    .min(18, 'Zadejte věk mezi 18 a 100 roky'),
  height: yup
    .number()
    .required('Zadej svou výšku v cm')
    .max(220, 'Zadejte výšku mezi 150 a 220 cm')
    .min(150, 'Zadejte výšku mezi 150 a 220 cm'),
  weight: yup
    .number()
    .required('Zadej svou váhu v kg')
    .max(150, 'Zadejte váhu mezi 40 a 150kg')
    .min(40, 'Zadejte váhu mezi 40 a 150kg'),
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="formUserDetails">
      <h1>Formulář</h1>
      <p>
        Abychom ti mohli sestavit jídelníček na míru, potřebujeme od tebe
        vyplnit pár základních informací.
      </p>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="formular1">
            {/* <div className="otazka">
              <label htmlFor="firstName">First Name1</label>
              <Field name="form1.gender" label="Pohlaví" margin="normal" />
            </div> */}
            <div className="otazka">
              <label htmlFor="form1.age">Věk</label>
              <Field
                name="age"
                label="Věk"
                margin="normal"
                placeholder="Zadej svůj věk"
                error={touched.age && errors.age}
                helperText={touched.age && errors.age}
              />
              <ErrorMessage
                component="div"
                name="age"
                className="invalid-feedback"
              />
            </div>
            <div className="otazka">
              <label htmlFor="form1.height">Výška</label>
              <Field
                name="height"
                label="Výška"
                margin="normal"
                placeholder="Zadej svou výšku v cm"
                error={touched.height && errors.height}
                helperText={touched.height && errors.height}
              />
              <ErrorMessage
                component="div"
                name="height"
                className="invalid-feedback"
              />
            </div>
            <div className="otazka">
              <label htmlFor="form1.weight">Váha</label>
              <Field
                name="weight"
                label="Váha"
                margin="normal"
                placeholder="Zadej svou váhu v kg"
                error={touched.weight && errors.weight}
                helperText={touched.weight && errors.weight}
              />
              <ErrorMessage
                component="div"
                name="weight"
                className="invalid-feedback"
              />
            </div>
            <button className="tlacitko" type="submit">
              Další
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

//co je proboha tohle...
// FormUserDetails.propTypes = {
//   formData: PropTypes.object.isRequired,
//   setFormData: PropTypes.func.isRequired,
//   nextStep: PropTypes.func.isRequired,
// };
