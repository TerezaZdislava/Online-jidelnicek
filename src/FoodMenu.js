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
  position: relative;
  padding: 1rem;
  .foodMenu {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
    overflow-x: hidden;
  }
  h1 {
    color: black;
    font-size: 2rem;
  }
  .headerimage {
    height: 10rem;
    position: absolute;
    right: 0;
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
      <img
        className="headerimage"
        src={'./assets/img/foodmenu.png'}
        alt="Online-jídelníček"
      />
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
