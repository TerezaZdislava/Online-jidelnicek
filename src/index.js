import React from 'react';
import { render } from 'react-dom';
import Header from './Header.js';
import Home from './Home.js';
import FoodMenu from './FoodMenu.js';
import FormParent from './FormParent.js';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/index.css';
import './assets/font/font.css';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/foodmenu', component: FoodMenu },
  { path: '/form', component: FormParent },
];

render(
  <Router>
    <Header />
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  </Router>,
  document.querySelector('#app'),
);
