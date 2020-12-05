import React from 'react';
import styled from 'styled-components';
import Meal from './Meal.js';
import { useHistory } from 'react-router-dom';

const StyledSection = styled.section`
  padding: 1rem;
  button {
    margin-top: 2 rem;
    background-color: rgb(255, 0, 55);
    width: 170px;
    height: 60px;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
  }
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
  .buttonPDF {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
    button {
      cursor: pointer;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;
const StyledDiv = styled.div`
  padding: 1rem;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
  background-color: white;
  h1 {
    color: black;
    font-size: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 0, 55);
    margin-top: 10 rem;
    margin-left: 3rem;
    width: 170px;
    height: 40px;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
  }

  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    button {
      cursor: pointer;
    }
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

const StyledPDF = styled.div``;

const FoodMenu = () => {
  const jsonForm = localStorage.getItem('menu');
  const history = useHistory();

  if (jsonForm == null) {
    return (
      <StyledDiv>
        <h1>Online generátor jídelníčku</h1>
        <p>Vyzkoušej to!</p>
        <p>Za 2 minuty můžeš mít svůj jídelníček:</p>
        <p>
          👉 Jídelníček na základě dat o tobě vypočítá hodnotu kalorií pro
          správné fungování tvého bazálního metabolismu.
        </p>
        <p>
          👉 Jídelníček bere v úvahu i to, jak jsi přes den aktivní a jestli
          sportuješ. To nám pomůže zjistit ideální denní příjem kalorií.
        </p>
        <p>
          👉 Generátor je výjimečný v tom, že si můžeš z jídelníčku odstranit
          potraviny, které nejíš. Také si stanovíš, kolik jídel za den chceš.
        </p>
        <p>
          Aplikace Ti navrhne na míru chutný jídelníček zatím na jeden den. Ale
          plánujeme brzy rozšíření na celý měsíc! Využij tedy možnost si
          postavit jídelníček zatím zdarma.
        </p>
        <button onClick={() => history.push(`/form`)}>Chci jídelníček</button>
      </StyledDiv>
    );
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
      <div className="buttonPDF">
        <form method="POST" action="https://api.online-jidelnicek.cz/pdf">
          <input name="type" value="json" type="hidden" />
          <input name="root" value="json" type="hidden" />
          <input name="data" value={JSON.stringify(menu)} type="hidden" />
          <button type="submit">Stáhni si jídelníček v PDF</button>
        </form>
      </div>
    </StyledSection>
  );
};

export default FoodMenu;
