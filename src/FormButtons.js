import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 2rem;

  button {
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.2rem;

    &.next {
      color: white;
      background-color: rgb(255, 0, 55);
    }

    &.back {
      color: rgb(255, 0, 55);
      background-color: white;
      border: 1px solid rgb(255, 0, 55);
    }

    &:disabled {
      background-color: #c1c1c169;
    }
  }
`;

const FormButtons = ({
  isFirst,
  isLast,
  setStep,
  submitForm,
  nextDisabled,
}) => {
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <StyledButton>
      {!isFirst && (
        <button
          className="back"
          type="button"
          variant="contained"
          onClick={prevStep}
        >
          Zpět
        </button>
      )}
      <button
        disabled={nextDisabled}
        className="next"
        type="button"
        variant="contained"
        onClick={() => {
          if (isLast) {
            submitForm();
          } else {
            nextStep();
          }
        }}
      >
        {isLast ? 'Odeslat' : 'Další'}
      </button>
    </StyledButton>
  );
};

export default FormButtons;

//&& podmineny render
