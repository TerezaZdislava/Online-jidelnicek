import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: block;
  margin-left: 25%;
  width: 100%;
  box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);
  height: 60px;
  h5 {
    margin: 0;
    height: 60px;
    box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);
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
