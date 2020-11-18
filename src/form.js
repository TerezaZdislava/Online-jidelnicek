import React from 'react';
import ReactDOM from 'react-dom';
import { FormParent } from './Formparent.js';

ReactDOM.render(
  <div className="content">
    {/* <h1>Interaktivní formulář</h1> */}
    <div className="intro">
      {/* <p>
        Abychom ti mohli sestavit jídelníček na míru, potřebujeme od tebe
        vyplnit pár základních informací.
      </p> */}
    </div>
    <FormParent />
    {/* <button
      type="submit"
      className="btn btn-primary"
      disabled={isSubmitting}
      onClick={() => {
        const odpovedi = ['A', 'B'];
        let vysledek = 0;
        for (let i = 0; i < odpovedi.length; i++) {
          if (values.answers[i].answer === odpovedi[i]) {
            vysledek++;
          }
        }
        console.log(vysledek);
        alert('Získali jste celkem ' + vysledek + ' bodů 🎉');
      }}
    >
      Výsledek
    </button> */}
  </div>,

  document.getElementById('app'),
  // document.getElementById('app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
