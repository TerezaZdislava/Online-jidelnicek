import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const StyledFormFood = styled.div`
  padding: 1rem;

  .formFood-all {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 5%;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  .formFood-message {
    background-color: #c1c1c169;
    width: 100%;
  }
`;

const FormFood = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <StyledFormFood>
      <div class="formFood-all">
        <p className="formFood-message">
          Jaké potraviny se nemají v jídelníčku vyskytovat?
        </p>
        <div className="formFood">
          <div
            className="formFood-group"
            role="group"
            aria-labelledby="checkbox-group"
          >
            <label>
              <Field type="checkbox" name="excludedFood" value="maso" />
              Maso
            </label>
            <label>
              <Field type="checkbox" name="excludedFood" value="mléko" />
              Mléko
            </label>
            <label>
              <Field type="checkbox" name="excludedFood" value="vejce" />
              Vejce
            </label>
            <label>
              <Field type="checkbox" name="excludedFood" value="lepek" />
              Lepek
            </label>
          </div>
        </div>
      </div>
    </StyledFormFood>
  );
};

export default FormFood;
