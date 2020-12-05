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
    .logo {
      width: 40%;
    }
  }
`;

const Partners = () => {
  return (
    <StyledPartners>
      <div className="logo">
        <Logos src="./assets/img/logoCzechitas.png" alt="Czechitas" />
      </div>
      <div className="logo">
        <Logos src="./assets/img/logoApify.png" alt="APIFY" />
      </div>
    </StyledPartners>
  );
};

export default Partners;
