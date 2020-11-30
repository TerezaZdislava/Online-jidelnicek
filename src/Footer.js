import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  h5 {
    margin-top: 20rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>
        Copyright©2O2O,Online-jidelnicek.cz ve spolupráci s APIFY a Digitální
        akademie - Web CZECHITAS
      </h5>
    </StyledFooter>
  );
};

export default Footer;
