import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Home from './Home.js';
import About from './About.js';
import Form from './form.js';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/detail/:id?', component: Detail },
];

render(
  <Router>
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
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
