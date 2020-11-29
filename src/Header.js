import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: grey;
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0);
  ul {
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  li {
    padding-right: 40px;
    padding-left: 40px;
  }
  a {
    color: rgb(0, 0, 0);
    list-style: none;
    align-items: center;
    margin: 0;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
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
