import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './assets/form.module.css';

const FormFood = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');
  return (
    <div className="formFood">
      <p className="formFood-otazka">
        Jaké potraviny se nemají v jídelníčku vyskytovat?
      </p>
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
            <div
              className="formFood-group"
              role="group"
              aria-labelledby="checkbox-group"
            >
              <label>
                <Field type="checkbox" name="form2.choices" value="Maso" />
                Maso
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Mléko" />
                Mléko
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Vejce" />
                Vejce
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Ryby" />
                Ryby
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Lepek" />
                Lepek
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Rajčata" />
                Rajčata
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Tofu" />
                Tofu
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Houby" />
                Houby
              </label>
              <label>
                <Field type="checkbox" name="form2.choices" value="Avokádo" />
                Avokádo
              </label>
            </div>

            <div>
              <button
                className="tlacitko"
                type="submit"
                variant="contained"
                onClick={() => setDirection('back')}
              >
                Zpět
              </button>
              <button
                className="tlacitko"
                type="submit"
                variant="contained"
                onClick={() => setDirection('forward')}
              >
                Další
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFood;
