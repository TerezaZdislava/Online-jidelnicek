import React from 'react';

const menu = {
  breakfast: {
    name: 'Vločky s tvarohem',
    calories: 370,
    mealDev: 'snídaně',
    steps: null,
    exlucedFood: ['mléko'],
    ingrediences: [
      {
        name: 'bezlepkové ovesné vločky',
        grams: 40,
      },
      {
        name: 'odtučněný tvaroh',
        grams: 100,
      },
      {
        name: 'ořechy',
        grams: 30,
      },
    ],
    steps: 'Cele to smichej',
  },
};

// const Sekce = styled.section`
//   font-size: 2em;
//   text-align: center;
//   color: blue;
// `;

const FoodMenu = () => {
  return (
    <section>
      <h1>Jídelníček</h1>
      <div className="meals">
        <div className="breakfast">
          <h4>Snidane</h4>
          <h5>{menu.breakfast.name}</h5>
          <div className="ingredients">
            <h4>Ingredience</h4>
            <div>
              {menu.breakfast.ingrediences.map((ingredience) => (
                <React.Fragment key={ingredience.name}>
                  <div>{ingredience.name}</div>
                  <div>{ingredience.grams}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="steps">
            <h4>Postup</h4>
            <div>{menu.breakfast.steps}</div>
          </div>
        </div>
        {/* <div className="lunch">
          <h4>Obed</h4>
          <h5>{menu.lunch.name}</h5>
          <div className="ingredients">
            <h4>Ingredience</h4>
            <div>
              {menu.lunch.ingrediences.map((ingredience) => (
                <React.Fragment key={ingredience.name}>
                  <div>{ingredience.name}</div>
                  <div>{ingredience.grams}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="steps">
            <h4>Postup</h4>
            <div>{menu.lunch.steps}</div>
          </div>
        </div>
        <div className="dinner">
          <h4>Večeře</h4>
          <h5>{menu.dinner.name}</h5>
          <div className="ingredients">
            <h4>Ingredience</h4>
            <div>
              {menu.lunch.ingrediences.map((ingredience) => (
                <React.Fragment key={ingredience.name}>
                  <div>{ingredience.name}</div>
                  <div>{ingredience.grams}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="steps">
            <h4>Postup</h4>
            <div>{menu.dinner.steps}</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FoodMenu;
