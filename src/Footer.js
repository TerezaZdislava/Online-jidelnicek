import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  h5 {
    color: red;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>Ahoj a děkujeme APIFY CZECHITAS</h5>
    </StyledFooter>
  );
};

export default Footer;
