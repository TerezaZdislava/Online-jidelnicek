import React, { useRef } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu } from '@styled-icons/feather/Menu';

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: white;
  font-weight: 500;
  font-size: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0);
  position: relative;
  z-index: 1;
  box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);

  ul {
    padding: 0;
    display: none;
    flex-direction: column;
    list-style-type: none;
    background-color: white;
    width: 100%;
    margin: 0;
  }
  .topMenu {
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .logo {
    margin: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
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
  li {
    padding: 10px 20px;
    border-top: 1px solid #80808040;
  }
  a {
    color: rgb(0, 0, 0);
    list-style: none;
    align-items: center;
    margin: 0;
    text-decoration: none;
  }
  svg {
    margin: 12px;
  }
`;

const Header = () => {
  const ulRef = useRef(null);

  function toggleMenu() {
    const ul = ulRef.current;
    const currentStyle = window.getComputedStyle(ul);
    if (currentStyle.display === 'flex') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'flex';
    }
  }

  return (
    <StyledHeader>
      <div className="topMenu">
        <div className="logo">
          <span className="logo1">ONLINE</span>
          <span className="logo2">JÍDELNÍČEK</span>
        </div>
        <Menu size="1.4em" onClick={toggleMenu} />
      </div>
      <ul ref={ulRef}>
        <li>
          <Link to="/">Domů</Link>
        </li>
        <li>
          <Link to="/form">Formulář</Link>
        </li>
        <li>
          <Link to="/foodmenu">Jídelníček</Link>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
