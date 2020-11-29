import React, { useRef } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu } from '@styled-icons/feather/Menu';

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color:  white;
  font-weight: 500;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0);
  position: relative;
  z-index: 1;

  ul {
    padding-right: 4px;
    padding-left: 30px;
    display: none;
    flex-direction: column;
    list-style-type: none;
    background-color: grey;
    width: 100%;
    margin: 0;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  p {
    margin: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 40px;

  }
  li {
    padding 10px;
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
    position: absolute;
    right: 0px;
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
      <p>Online Jídelníček</p>
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
      <Menu size="1.4em" onClick={toggleMenu} />
    </StyledHeader>
  );
};

export default Header;
