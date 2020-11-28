import React from 'react';
import { render } from 'react-dom';
import Home from './Home.js';
import FoodMenu from './FoodMenu.js';
import FormParent from './FormParent.js';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/form.module.css';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/foodmenu', component: FoodMenu },
  { path: '/form', component: FormParent },
];

render(
  <Router>
    <header>
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
    </header>
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  </Router>,
  document.querySelector('#app'),
);
