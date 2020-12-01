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
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: baseline;
    // -webkit-border-radius: 10px;
    // -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  // .messageToForm {
  //   background-color: #c1c1c169;
  //   width: 100%;
  // }
  // .headerimage {
  //   height: 10rem;
  //   position: absolute;
  //   right: 0;
  //   opacity: 70%;
  // }
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
          question="Jaké je máš zaměstnání, popřípadě náplň dne, kromě sportu?"
          name="jobActivity"
          validate={(value) => {
            validate(jobActivitySchema, value);
          }}
          answers={[
            {
              value: '0.8',
              label: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.',
            },
            {
              value: '1',
              label: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
            },
            {
              value: '1.35',
              label:
                'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
            },
          ]}
        />
      </div>
    </StyledFormActivity>
  );
};

export default FormActivity;
