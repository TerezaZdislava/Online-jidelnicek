import React from 'react';
import styled from 'styled-components';
import Logos from './Logos.js';

const StyledPartners = styled.div`
  margin: 5%;
  display: block;
  justify-content: center;
  align-items: center;
  @media (min-width: 550px) {
    padding: 0 15rem;
    display: flex;
    flex-wrap: wrap;
    .logo2 {
      width: 40%;
    }
    .logo2 {
      width: auto;
      height: fit-content;
    }
  }
`;

const Partners = () => {
  return (
    <StyledPartners>
      <div className="logo">
        <Logos
          http="https://czechitas.cz"
          src="./assets/img/logoCzechitas.png"
          alt="Czechitas"
        />
      </div>
      <div className="logo2">
        <Logos
          http="https://apify.com"
          src="./assets/img/logoApify.png"
          alt="APIFY"
        />
      </div>
    </StyledPartners>
  );
};

export default Partners;
