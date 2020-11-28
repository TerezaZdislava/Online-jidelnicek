import React from 'react';

const FormButtons = ({ isFirst, isLast, setStep, submitForm }) => {
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {!isFirst && (
        <button
          className="tlacitko"
          type="button"
          variant="contained"
          onClick={prevStep}
        >
          Zpět
        </button>
      )}
      <button
        className="tlacitko"
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
    </div>
  );
};

export default FormButtons;

//&& podmineny render
