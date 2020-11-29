import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  autoPlay,
  virtualize,
  bindKeyboard,
} from 'react-swipeable-views-utils';
import styled from 'styled-components';

// const EnhancedSwipeableViews = bindKeyboard(
//   autoPlay(virtualize(SwipeableViews)),
// );
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StyledContent = styled.div`
  img {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <StyledContent>
      <AutoPlaySwipeableViews>
        <img src={'./assets/img/jidlo-1.jpg'} alt="jidlo1" />
        <img src={'./assets/img/jidlo-2.jpg'} alt="jidlo2" />
        <img src={'./assets/img/jidlo-3.jpg'} alt="jidlo3" />
        <img src={'./assets/img/jidlo-4.jpg'} alt="jidlo4" />
        <img src={'./assets/img/jidlo-5.jpg'} alt="jidlo5" />
        <img src={'./assets/img/jidlo-6.jpg'} alt="jidlo6" />
        <img src={'./assets/img/jidlo-7.jpg'} alt="jidlo7" />
      </AutoPlaySwipeableViews>
      <div>
        <p>
          Získej zdravý a chutný jídelníček přímo na míru. Za pár minut a
          zadarmo.
        </p>
      </div>
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
