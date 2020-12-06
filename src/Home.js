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
import Content from './Content.js';
import Photogallery from './Photogallery.js';
import Partners from './Partners.js';

// const EnhancedSwipeableViews = bindKeyboard(
//   autoPlay(virtualize(SwipeableViews)),
// );
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StyledContent = styled.div`
  display: block;
  overflow-x: hidden;
  font-size: 1.3rem;
  .imagesAndCta {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 150%;
    }
  }
  .divTriangles {
    display: flex;
    position: absolute;
    bottom: 0;
  }
  .triangles {
    bottom: 0;
    width: 100%;
    display: flex;
  }
  .triangle2 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 0 300px;
    border-color: transparent transparent transparent #ffffff;
  }
  .triangle1 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 30px 300px;
    border-color: transparent transparent #ffffff transparent;
  }
  .cta {
    justify-content: center;
    align-items: center;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .ctatext {
    font-family: 'Poppins';
    width: 65%;
    font-weight: 500;
    color: white;
    margin: 10% 0;
    border-radius: 5px;
    background-color: #632d2d8c;
    padding: 0 5%;
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
    margin: 0;
    cursor: pointer;
  }
  @media (min-width: 550px) {
    .triangle1 {
      border-width: 0 0 40px 500px;
    }
    .triangle2 {
      border-width: 40px 0 0 500px;
    }
    .cta {
      margin-top: 5%;
    }
    .ctatext {
      width: 40%;
      font-size: 1.8rem;
    }
    button {
      width: 12rem;
      height: 4rem;
    }
    .imagesAndCta img {
      width: 120%;
    }
  }
  @media (min-width: 1000px) {
    .triangle1 {
      border-width: 0 0 50px 625px;
    }
    .triangle2 {
      border-width: 50px 0 0 625px;
    }
    .ctatext {
      font-size: 2rem;
    }
    .imagesAndCta img {
      width: 100%;
    }
  }
  @media (min-width: 1250px) {
    .triangle1 {
      border-width: 0 0 60px 950px;
    }
    .triangle2 {
      border-width: 60px 0 0 950px;
    }
    .ctatext {
      font-size: 2.1rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
`;

const Home = () => {
  const jsonForm = localStorage.getItem('menu');
  const history = useHistory();
  return (
    <StyledContent>
      <div className="imagesAndCta">
        {/* <AutoPlaySwipeableViews>
          <img src={'./assets/img/jidlo-1.jpg'} alt="jidlo1" />
          <img src={'./assets/img/jidlo-2.jpg'} alt="jidlo2" />
          <img src={'./assets/img/jidlo-3.jpg'} alt="jidlo3" />
          <img src={'./assets/img/jidlo-4.jpg'} alt="jidlo4" />
          <img src={'./assets/img/jidlo-5.jpg'} alt="jidlo5" />
          <img src={'./assets/img/jidlo-6.jpg'} alt="jidlo6" />
          <img src={'./assets/img/jidlo-7.jpg'} alt="jidlo7" />
        </AutoPlaySwipeableViews> */}
        <img src={'./assets/img/foodhp10.jpg'} alt="jidlo na homepage" />
        <div className="divTriangles">
          <div className="triangles">
            <div className="triangle2"></div>
            <div className="triangle1"></div>
          </div>
        </div>
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
      <Content />
      <Photogallery />
      <About />
      <Partners />
    </StyledContent>
  );
};

export default Home;
