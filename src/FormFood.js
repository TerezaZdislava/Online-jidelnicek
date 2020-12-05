import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.js';

const StyledFormFood = styled.div`
  padding: 1.5rem;
  .formFood-all {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-collapse: separate;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    overflow: hidden;
    perspective: 1px;
  }
  h5 {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 1.5rem;
  }
  .formFood-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

const FormFood = ({ values }) => {
  return (
    <StyledFormFood>
      <div className="formFood-all">
        <h5>Jaké potraviny se nemají v jídelníčku vyskytovat?</h5>
        <div
          className="formFood-group"
          role="group"
          aria-labelledby="checkbox-group"
        >
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="maso"
            label="Maso"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="mléko"
            label="Mléko"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="vejce"
            label="Vejce"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="lepek"
            label="Lepek"
          />
        </div>
      </div>
    </StyledFormFood>
  );
};

export default FormFood;
