import React from 'react';
import styled from 'styled-components';
import Logos from './Logos.js';

const StyledPartners = styled.div`
  margin: 0;
  display: block;

  @media (min-width: 1000px) {
    displax: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Partners = () => {
  return (
    <StyledPartners>
      <Logos src="./assets/img/logoCzechitas.png" alt="Czechitas" />
      <Logos src="./assets/img/logoApify.png" alt="APIFY" />
    </StyledPartners>
  );
};

export default Partners;
