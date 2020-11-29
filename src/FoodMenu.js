import React from 'react';
import styled from 'styled-components';
import Meal from './Meal.js';

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
*/
const StyledSection = styled.section`
  padding: 1rem;
  border-radius: 5px;
  .foodMenu {
    border-radius: 5%;
    border: 1px solid black;
    padding: 1rem;
  }
  h1 {
    color: black;
    font-size: 2rem;
  }
`;

const FoodMenu = () => {
  const jsonForm = localStorage.getItem('menu');
  if (jsonForm == null) {
    return <div>Nemáš vyplněný formulář</div>;
  }
  const menu = JSON.parse(jsonForm);
  return (
    <StyledSection>
      <h1>Jídelníček</h1>
      <div className="foodMenu">
        <Meal title="Snídaně" data={menu.breakfast} className="breakfast" />
        <Meal
          title="Dopolední svačina"
          data={menu.snackBef}
          className="snackBef"
        />
        <Meal title="Oběd" data={menu.lunch} className="lunch" />
        <Meal
          title="Odpolední svačina"
          data={menu.snackAfter}
          className="snackAfter"
        />
        <Meal title="Večeře" data={menu.dinner} className="dinner" />
      </div>
    </StyledSection>
  );
};

export default FoodMenu;
