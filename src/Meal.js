import React from 'react';

const Meal = ({ className, title, data }) => {
  if (data == null) return null;

  return (
    <div className={className}>
      <h4>{title}</h4>
      <h5>{data.name}</h5>
      <div className="ingredients">
        <h4>Ingredience</h4>
        <div>
          {data.ingrediences.map((ingredience) => (
            <React.Fragment key={ingredience.name}>
              <div>{ingredience.name}</div>
              <div>{ingredience.grams}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="steps">
        <h4>Postup</h4>
        <div>{data.steps}</div>
      </div>
    </div>
  );
};
export default Meal;
