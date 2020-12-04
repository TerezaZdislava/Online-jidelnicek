import styled from 'styled-components';
import React from 'react';

const StyledPhotogallery = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .photogallery {
    display: flex;
    flex-wrap: wrap;
    positon: relative;
    img {
      positon: absolute;
      width: 33.333%;
      height: 33.333%%;
      filter: brightness(0.5);
      transition: 0s ease;
    }
    img:hover {
      filter: brightness(1);
      filter: drop-shadow(2px 4px 6px black);
      transform: scale(1.05);
      z-index: 1;
    }
  }
  .divTriangles {
    height: fit-content;
    display: flex;
    position: absolute;
    top: 0;
  }
  .triangles2,
  .triangles {
    width: 100%;
    display: flex;
    top: 0;
  }
  .triangle4 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 300px 30px 0;
    border-color: transparent #ffffff transparent transparent;
  }
  .triangle3 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 300px 0 0;
    border-color: #ffffff transparent transparent transparent;
  }
  .divTriangles2 {
    height: fit-content;
    display: flex;
    position: absolute;
    bottom: 0;
  }
  .triangle5 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 0 300px;
    border-color: transparent transparent transparent #ffffff;
  }
  .triangle6 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 30px 300px;
    border-color: transparent transparent #ffffff transparent;
  }
  @media (min-width: 550px) {
    .triangle3 {
      border-width: 40px 500px 0 0;
    }
    .triangle4 {
      border-width: 0 500px 40px 0;
    }
    .triangle6 {
      border-width: 0 0 40px 500px;
    }
    .triangle5 {
      border-width: 40px 0 0 500px;
    }
  }
  @media (min-width: 1000px) {
    .triangle3 {
      border-width: 50px 625px 0 0;
    }
    .triangle4 {
      border-width: 0 625px 50px 0;
    }
    .triangle6 {
      border-width: 0 0 50px 625px;
    }
    .triangle5 {
      border-width: 50px 0 0 625px;
    }
  }
  @media (min-width: 1250px) {
    .triangle3 {
      border-width: 60px 950px 0 0;
    }
    .triangle4 {
      border-width: 0 950px 60px 0;
    }
    .triangle6 {
      border-width: 0 0 60px 950px;
    }
    .triangle5 {
      border-width: 60px 0 0 950px;
    }
  }
`;

const Photogallery = () => {
  return (
    <StyledPhotogallery>
      <div className="photogallery">
        <img src={`./assets/img/fotogalerie1.jpg`} alt="food1" />
        <img src={`./assets/img/fotogalerie2.jpg`} alt="food2" />
        <img src={`./assets/img/fotogalerie3.jpg`} alt="food3" />
        <img src={`./assets/img/fotogalerie4.jpg`} alt="food4" />
        <img src={`./assets/img/fotogalerie5.jpg`} alt="food5" />
        <img src={`./assets/img/fotogalerie6.jpg`} alt="food6" />
        <img src={`./assets/img/fotogalerie7.jpg`} alt="food7" />
        <img src={`./assets/img/fotogalerie8.jpg`} alt="food8" />
        <img src={`./assets/img/fotogalerie9.jpg`} alt="food9" />
        <img src={`./assets/img/fotogalerie10.jpg`} alt="food10" />
        <img src={`./assets/img/fotogalerie11.jpg`} alt="food11" />
        <img src={`./assets/img/fotogalerie12.jpg`} alt="food12" />
      </div>
      <div className="divTriangles">
        <div className="triangles">
          <div className="triangle4"></div>
          <div className="triangle3"></div>
        </div>
      </div>
      <div className="divTriangles2">
        <div className="triangles2">
          <div className="triangle5"></div>
          <div className="triangle6"></div>
        </div>
      </div>
    </StyledPhotogallery>
  );
};
export default Photogallery;
