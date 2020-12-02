import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu } from '@styled-icons/feather/Menu';
import { useHistory } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  font-weight: 500;
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 1;
  height: ${(props) => (props.isOpen ? '100%' : 'auto')};
  ul {
    padding: 0;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    list-style-type: none;
    background-color: white;
    width: 100%;
    margin: 0;
  }
  .topMenu {
    height: 60px;
    background-color: white;
    box-shadow: 0px 5px 4px 0px rgba(50, 50, 50, 0.3);
    justify-content: space-between;
    display: flex;
    width: 100%;
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
    text-decoration: none;
    display: inline-block;
    width: 100%;
  }
  svg {
    margin: 12px;
  }
  @media (min-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    height: 60px;
    justify-content: space-between;
    svg {
      display: none;
    }
    .topMenu {
      width: 40%;
      box-shadow: none;
    }
    li {
      width: 15%;
      border-top: none;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 50%;
      flex-direction: row;
      height: 60px;
      padding-right: 2rem;
    }
    .logo {
      cursor: pointer;
    }
  }
  @media (min-width: 1000px) {
    font-size: 1.5rem;
    ul {
      width: 40%;
      font-size: 1.5rem;
    }
    .topMenu {
      margin-left: 2rem;
      font-size: 1.8rem;
    }
  }
`;

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  function toggleMenu(event) {
    setOpen((value) => !value);
    event.stopPropagation();
    //prestane probublavat event dolu na spodni elementy
  }

  function handleHeaderClick(event) {
    if (event.target === event.currentTarget) {
      toggleMenu(event);
    }
  }

  return (
    <StyledHeader isOpen={open} onClick={handleHeaderClick}>
      <div className="topMenu">
        <div onClick={() => history.push('/')} className="logo">
          <span className="logo1">ONLINE</span>
          <span className="logo2">JÍDELNÍČEK</span>
        </div>
        <Menu size="1.4em" onClick={toggleMenu} />
      </div>
      {/* <ul onClick={window.innerWidth > 750 ? { toggleMenu } : null}> */}
      <ul onClick={toggleMenu}>
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
