import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  autoPlay,
  virtualize,
  bindKeyboard,
} from 'react-swipeable-views-utils';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import About from './About.js';

// const EnhancedSwipeableViews = bindKeyboard(
//   autoPlay(virtualize(SwipeableViews)),
// );
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StyledContent = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  img {
    width: 130%;
    opacity: 0.7;
  }
  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .ctatext {
    background-color: white;
    padding: 0 1.5rem;
    margin: 5rem;
    opacity: 0.8;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .ctatext2 {
    display: none;
  }
  .ctatext p {
    opacity: 1;
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
  .imagesAndCta {
    display: block;
    position: relative;
  }
  @media (min-width: 550px) {
    img {
      width: 100%;
      height: 70%;
      object-fit: cover;
      margin-right: 50%;
    }
    .cta {
      justify-content: flex-start;
      margin-top: 4%;
    }
    .ctatext {
      font-size: 1.6rem;
    }
    button {
      margin-top: 1rem;
      width: 12rem;
      height: 4rem;
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1000px) {
    .cta {
      justify-content: flex-start;
      margin-top: 9%;
    }
    .ctatext {
      font-size: 2.2rem;
    }
    button {
      margin-top: 3rem;
      width: 15rem;
      height: 5rem;
      font-size: 1.8rem;
    }
  }
  @media (min-width: 1250px) {
    .cta {
      justify-content: flex-start;
      margin-top: 12%;
    }
    .ctatext {
      font-size: 2.4rem;
    }
    button {
      margin-top: 4rem;
      width: 17rem;
      height: 7rem;
      font-size: 1.8rem;
    }
  }
`;

const Home = () => {
  const jsonForm = localStorage.getItem('menu');
  const history = useHistory();
  return (
    <StyledContent>
      <div className="imagesAndCta">
        <AutoPlaySwipeableViews>
          <img src={'./assets/img/jidlo-1.jpg'} alt="jidlo1" />
          <img src={'./assets/img/jidlo-2.jpg'} alt="jidlo2" />
          <img src={'./assets/img/jidlo-3.jpg'} alt="jidlo3" />
          <img src={'./assets/img/jidlo-4.jpg'} alt="jidlo4" />
          <img src={'./assets/img/jidlo-5.jpg'} alt="jidlo5" />
          <img src={'./assets/img/jidlo-6.jpg'} alt="jidlo6" />
          <img src={'./assets/img/jidlo-7.jpg'} alt="jidlo7" />
        </AutoPlaySwipeableViews>
        <div className="cta">
          <div className="ctatext">
            <p>Zdravý a chutný jídelníček na míru</p>
          </div>
          <button
            onClick={() =>
              history.push(jsonForm == null ? `/form` : `/foodmenu`)
            }
          >
            {jsonForm == null ? 'Chci jídelníček' : 'Můj jídelníček'}
          </button>
        </div>
      </div>
      <About />
    </StyledContent>
  );
};

export default Home;

// const Home = () => {
//   return (
// <React.Fragment>

//   <h1>Homeeee</h1>;
//   <SwipeableViews index={step}>

//   </SwipeableViews>
// </React.Fragment>

//   )
// }

// export default Home;

{
  /* <section id="intro">
      <h1 id="main">Online jídelníček na míru</h1>
      <p main>Najezte se chutně, zdravě a dosyta.</p>
    </section>

    <section id="content">
      <div id="foodDiv">
        <img id="food" src="./assets/img/talir3.png" alt="ukázka jídel" />
      </div>
      <div id="aboutApp">
        <p id="cta1">Vyzkoušej to!</p>
        <p id="cta2">Za pár minut můžeš mít svůj jídelníček:</p>
        <p class="cta3">
          👉 Stačí vyplnit tvé omezení v jídle. Díky tomu vyfiltrujeme správné
          recepty.
        </p>
        <p class="cta3">
          👉 Zadej, kolik měříš, vážíš, jak jsi přes den aktivní a jestli
          sportuješ. To nám pomůže zjistit ideální denní příjem kalorií.
        </p>
        <p class="cta3">👉 Také si vyber, kolik jídel denně preferuješ.</p>
        <p id="cta4">
          Aplikace Ti navrhne na míru chutný jídelníček na pár dní. K tomu
          dostaneš praktický nákupní seznam.📝
        </p>
      </div>
      <!-- <div id="showApp">
        <img src="./assets/img/ukazka-jidelnicku.png" alt="ukázka jídelníčku" />
      </div> -->
    </section> */
}
