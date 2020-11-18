import React from 'react';
import { Formik, Form, Field } from 'formik';
import './assets/form.css';
// import { Header } from './Header';

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="formormUserDetails">
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
      >
        {({ errors, touched }) => (
          <Form className="formular1">
            <div className="otazka">
              <label htmlFor="firstName">First Name1</label>
              <Field name="form1.gender" label="Pohlaví" margin="normal" />
            </div>
            <div className="otazka">
              <label htmlFor="firstName">Věk</label>
              <Field name="form1.age" label="Věk" margin="normal" />
            </div>
            <div className="otazka">
              <label htmlFor="firstName">Výška</label>
              <Field name="form1.height" label="Výška" margin="normal" />
            </div>
            <div className="otazka">
              <label htmlFor="firstName">Váha</label>
              <Field name="form1.weight" label="Váha" margin="normal" />
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
