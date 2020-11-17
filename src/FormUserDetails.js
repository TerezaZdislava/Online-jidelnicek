import React from 'react';
import { Formik, Form, Field } from 'formik';
// import { Header } from './Header';

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      {/* <Header title="Enter User Details" /> */}
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">First Name1</label>
            <Field name="form1.gender" label="Pohlaví" margin="normal" />
            <label htmlFor="firstName">First Name2</label>
            <Field name="form1.age" label="Věk" margin="normal" />
            <label htmlFor="firstName">First Name3</label>
            <Field name="form1.height" label="Výška" margin="normal" />
            <label htmlFor="firstName">First Name4</label>
            <Field name="form1.weight" label="Váha" margin="normal" />
            <button className="tlacitko" type="submit">
              Continue
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
