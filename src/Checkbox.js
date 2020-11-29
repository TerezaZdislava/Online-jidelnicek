import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/feather/CheckSquare';
import { Square } from '@styled-icons/feather/Square';

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isChecked ? 'red' : 'white')};
  color: ${(props) => (props.isChecked ? 'white' : 'auto')};
  width: 100%;
  input {
    visibility: hidden;
    margin: 0;
    width: 0;
    border: none;
    height: 40px;
  }

  svg {
    margin-right: 0.5rem;
    margin-left: 1.5rem;
  }
`;

const Checkbox = (props) => {
  const checked = props.formValues[props.name].includes(props.value);
  return (
    <StyledCheckbox isChecked={checked}>
      {checked ? (
        <CheckSquare size="1.4em"></CheckSquare>
      ) : (
        <Square size="1.4em"></Square>
      )}
      <Field type="checkbox" name={props.name} value={props.value} />
      {props.label}
    </StyledCheckbox>
  );
};

export default Checkbox;
