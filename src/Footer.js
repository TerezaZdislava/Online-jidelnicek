import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  h5 {
    margin: 0 10%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>
        Copyright©2O2O, Online-jidelnicek.cz V případě dotazů nás kontaktujte:{' '}
        <e-mail>info@online-jidelnicek.cz</e-mail>
      </h5>
    </StyledFooter>
  );
};

export default Footer;
