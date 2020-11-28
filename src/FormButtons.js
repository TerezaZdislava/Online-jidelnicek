import React from 'react';

const FormButtons = ({ isFirst, isLast, setStep }) => {
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
      {isLast ? (
        <button className="tlacitko" type="submit" variant="contained">
          Odeslat formular
        </button>
      ) : (
        <button
          className="tlacitko"
          type="button"
          variant="contained"
          onClick={nextStep}
        >
          Další
        </button>
      )}
    </div>
  );
};

export default FormButtons;

//&& podmineny render
