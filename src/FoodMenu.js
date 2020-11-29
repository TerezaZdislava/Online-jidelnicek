import React from 'react';

import Meal from "./Meal.js";

/*
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
// `;*/

const FoodMenu = () => {
  const jsonForm = localStorage.getItem('menu');
  if (jsonForm == null) {
    return <div>Nemáš vyplněný formulář</div>;
  }
  const menu = JSON.parse(jsonForm);
  return (
    <section>
      <h1>Jídelníček</h1>   
        <Meal title="Snídaně" data={menu.breakfast} className="breakfast" />
        <Meal title="Dopolední svačina" data={menu.snackBef} className="snackBef" />
        <Meal title="Oběd" data={menu.lunch} className="lunch" />
        <Meal title="Odpolední svačina" data={menu.snackAfter} className="snackAfter" />
        <Meal title="Večeře" data={menu.dinner} className="dinner" />
    </section>
  );
};

export default FoodMenu;
