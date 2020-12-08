import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import styled from 'styled-components';
import RadioButtonGroup from './RadioButtonGroup.js';

const StyledFormActivity = styled.div`
  padding: 1rem;
  position: relative;
  .FormActivityAll {
    display: block;
    margin-top: 1rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
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

export const numberOfMealsSchema = yup
  .string()
  .required('Počet jídel je povinná otázka');
export const sportFrequencySchema = yup
  .string()
  .required('Jak často sportuješ je povinná otázka');
export const jobActivitySchema = yup
  .string()
  .required('Denní aktivita je povinná otázka');

export const FormActivity = ({ values }) => {
  const validate = (schema, value) => {
    console.log('Validate');
    try {
      schema.validateSync(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormActivity>
      <div className="FormActivityAll">
        <RadioButtonGroup
          values={values}
          question="Kolik jídel denně preferuješ?"
          name="numberOfMeals"
          validate={(value) => {
            validate(numberOfMealsSchema, value);
          }}
          answers={[
            { value: '3', label: '3 jídla (snídaně, oběd, večeře)' },
            { value: '5', label: '5 jídel (svačiny mezi hlavními jídly)' },
          ]}
        />

        <RadioButtonGroup
          values={values}
          question="Sportuješ během týdne?"
          name="sportFrequency"
          validate={(value) => {
            validate(sportFrequencySchema, value);
          }}
          answers={[
            { value: '0.8', label: 'Nesportuji.' },
            { value: '1', label: 'Sportuji 1 - 2x týdně.' },
            { value: '1.2', label: 'Sportuji 3 - 4x týdně.' },
            {
              value: '1.7',
              label:
                'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
            },
          ]}
        />

        <RadioButtonGroup
          values={values}
          question="Jaké je máš zaměstnání, popřípadě náplň dne?"
          name="jobActivity"
          validate={(value) => {
            validate(jobActivitySchema, value);
          }}
          answers={[
            {
              value: '0.8',
              label: 'Nejsem aktivní. Jezdím autem. Sedavé zaměstnání.',
            },
            {
              value: '1',
              label: 'Jsem středně aktivní. Chodím často pěšky.',
            },
            {
              value: '1.35',
              label:
                'Jsem většinu dne na nohou. Mám fyzicky náročné zaměstnání.',
            },
          ]}
        />
      </div>
    </StyledFormActivity>
  );
};

export default FormActivity;
