import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

const FormFood = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');
  return (
    <div>
      <h1>Jaké potraviny se nemají v jídelníčku vyskytovat?</h1>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2)); //co to je?
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        {({ values }) => (
          <Form>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="form2.choices" value="Maso" />
                Maso
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Mleko" />
                Mleko
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Vejce" />
                Vejce
              </label>
            </div>

            <div>
              <button
                type="submit"
                variant="contained"
                onClick={() => setDirection('back')}
              >
                Back
              </button>
              <button
                type="submit"
                variant="contained"
                onClick={() => setDirection('forward')}
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFood;
