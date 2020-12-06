import React from 'react';
import styled from 'styled-components';
import Meal from './Meal.js';
import { useHistory } from 'react-router-dom';

const StyledSection = styled.section`
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding: 1rem;
  button {
    margin-top: 2 rem;
    background-color: rgb(255, 0, 55);
    width: 17rem;
    height: 3rem;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Poppins';
  }
  .foodMenu {
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
    overflow: hidden;
  }
  .headerimage {
    height: 8rem;
    position: absolute;
    right: 0;
    top: -1rem;
    z-index: 0;
    overflow: visible;
  }
  h1 {
    position: relative;
    color: white;
    font-size: 1.6rem;
    font-family: 'Poppins';
  }
  .buttonPDF {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
  @media (min-width: 550px) {
    padding-left: 15%;
    padding-right: 15%;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  @media (min-width: 750px) {
    padding-left: 25%;
    padding-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
    button {
      cursor: pointer;
    }
  }
  @media (min-width: 1200px) {
    padding-left: 30%;
    padding-right: 30%;
    .headerimage {
      height: 10rem;
      right: 1rem;
   }
    button {
    margin-top: 2 rem;
    width: 20rem;
    height: 4rem;
    font-size: 1.3rem;
  }
  .buttonPDF {
    margin: 5rem;
  }
  h1 {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;
const StyledDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding: 1rem;

  .whyMenu {
    padding: 1rem;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
  }
  h1 {
    color: white;
    font-size: 1.6rem;
    font-family: 'Poppins';
  }
  .buttonArea {
    display: flex;
    justify-content: center;
    alig-items: center;
    padding: 1rem;
  }
  button {
    background-color: rgb(255, 0, 55);
    width: 170px;
    height: 40px;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
  }

  @media (min-width: 550px) {
    padding-left: 15%;
    padding-right: 15%;
  }
  @media (min-width: 750px) {
    button {
      cursor: pointer;
    }
    padding-left: 25%;
    padding-right: 25%;
    font-size: 1.3rem;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    padding-left: 30%;
    padding-right: 30%;
  }
`;

const FoodMenu = () => {
  const jsonForm = localStorage.getItem('menu');
  const history = useHistory();

  if (jsonForm == null) {
    return (
      <StyledDiv img={`./assets/img/foodimage-form.jpg`}>
        <h1>Online generátor jídelníčku</h1>
        <div className="whyMenu">
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
            Aplikace Ti navrhne na míru chutný jídelníček zatím na jeden den.
            Ale plánujeme brzy rozšíření na celý měsíc! Využij tedy možnost si
            postavit jídelníček zatím zdarma.
          </p>
        </div>
        <div className="buttonArea">
          <button onClick={() => history.push(`/form`)}>Chci jídelníček</button>
        </div>
      </StyledDiv>
    );
  }
  const menu = JSON.parse(jsonForm);
  return (
    <StyledSection img={`./assets/img/foodimage-form.jpg`}>
      <h1>
        Jídelníček
        <img
          className="headerimage"
          src={'./assets/img/foodmenu.png'}
          alt="Online-jídelníček"
        />
      </h1>
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
