import React from 'react';
import { render } from 'react-dom';
import Home from './Home.js';
import About from './About.js';
import { FormParent } from './FormParent.js';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/form.module.css';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
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
          <Link to="/about">O nás</Link>
        </li>
        <li>
          <Link to="/form">Formulář</Link>
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
