import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <div className="content">
    <h1>Podnikni virtuální výlet z gauče!</h1>
    <div className="intro">
      <p>
        Milý návštěvnku, místo vyprávění o sobě jsem Ti přichystala jsem kvíz,
        kde můžeš otestovat znalost Česka a imaginárně si procestovat pár míst.
      </p>
      <p>
        Proč mě to napadlo? Své pracovní dny trávím mimojiné tvorbou
        cestovatelské inspirace a prostě jsem se musela o ty boží tipy podělit i
        s Tebou. A také jsem si chtěla nanečisto zkusit formulář v Reactu. Za
        chvíli ho budu tvořit na projektu a mnohem obsáhlejší, tak ať to mám
        potrénované.
      </p>
      <p className="cta">👇 Otestuj své znalosti 👇</p>
    </div>
    <App />
  </div>,

  document.getElementById('app'),
  // document.getElementById('app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
