import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  .footer {
    display: flex;
    height: auto;
    justify-content: space-around;
    width: 100%;
    box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);
  }
  .logo {
    justify-content: wrap;
  }
  .logo2 {
    color: rgb(255, 0, 55);
    margin: 0;
    font-weight: 700;
  }
  .logo1 {
    color: black;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <span className="copyright">Copyright©2O2O</span>
        <div className="logo">
          <span className="logo1">ONLINE</span>
          <span className="logo2">JÍDELNÍČEK</span>
        </div>
        <div className="e-mail">
          "V případě dotazů či spolupráce nás kontaktuj:{' '}
          <a href={`mailto:${`info@online-jidelnicek.cz`}`}>
            info@online-jidelnicek.cz
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
