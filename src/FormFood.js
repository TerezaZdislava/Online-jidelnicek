import React from 'react';
import { Field } from 'formik';
import './assets/form.module.css';

const FormFood = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <React.Fragment>
      <p className="formFood-otazka">
        Jaké potraviny se nemají v jídelníčku vyskytovat?
      </p>
      <div className="formFood">
        <div
          className="formFood-group"
          role="group"
          aria-labelledby="checkbox-group"
        >
          <label>
            <Field type="checkbox" name="exludedFood" value="Maso" />
            Maso
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Mléko" />
            Mléko
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Vejce" />
            Vejce
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Ryby" />
            Ryby
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Lepek" />
            Lepek
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Rajčata" />
            Rajčata
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Tofu" />
            Tofu
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Houby" />
            Houby
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="Avokádo" />
            Avokádo
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormFood;
