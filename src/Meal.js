import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMeal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  .expansion {
    & > * {
      margin: 0 1rem;
    }
    &.opened {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &.closed {
      display: none;
    }
  }

  h4 {
    display: flex;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }
  h5 {
    font-weight: 600;
    font-size: 1rem;
    margin: 0.7rem 0;
  }

  .ingrediences {
    margin-bottom: 1rem;
  }

  .ingredience-row {
    display: flex;
    justify-content: space-between;
    line-height: 2;
  }

  .ingredience-name {
    max-width: 15rem;
  }
  .ingredience-grams {
    font-weight: 600;
  }
  .ingredience-header {
    background-color: #c1c1c169;
    width: 100%;
    & > * {
      margin: 0.7rem;
      margin-left: 1rem;
    }
  }
`;

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Meal = ({ className, title, data }) => {
  const [open, setOpen] = useState(true);
  const expansionClassName = open ? 'expansion opened' : 'expansion closed';

  const handleToggle = () => {
    setOpen((value) => !value);
  };

  if (data == null) return null;

  const stepExists = data.steps != null;
  return (
    <StyledMeal className={className}>
      <div className="ingredience-header" onClick={handleToggle}>
        <h4>{title}</h4>
        <div>{data.name}</div>
      </div>
      <div className={expansionClassName}>
        <div className="ingrediences">
          <h5>Ingredience</h5>
          <div className="ingredience-text">
            {data.ingrediences.map((ingredience) => (
              <div className="ingredience-row" key={ingredience.name}>
                <div className="ingredience-name">
                  {capitalize(ingredience.name)}:
                </div>
                <div className="ingredience-grams">
                  {ingredience.grams != null
                    ? `${ingredience.grams}g`
                    : 'Libovolné množství'}
                </div>
              </div>
            ))}
          </div>
        </div>
        {stepExists && (
          <div className="steps">
            <h5>Postup</h5>
            <div>{data.steps}</div>
          </div>
        )}
      </div>
    </StyledMeal>
  );
};
export default Meal;
