import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    display: block;
    height: 60px;
    width: 100%;
    font-size: 0.8rem;
    box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);
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
  @media (min-width: 1000px) {

    display: flex;
    justify-content: space-around;
    font-size:1 rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <span className="copyright">Copyright©2O2O, </span>
        <span className="logo1">ONLINE</span>
        <span className="logo2">JÍDELNÍČEK</span>
      </div>
      <div className="e-mail">
        V případě dotazů či spolupráce nás kontaktuj:{' '}
        <a href={`mailto:${`info@online-jidelnicek.cz`}`}>
          info@online-jidelnicek.cz
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
