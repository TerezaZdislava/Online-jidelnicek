import React, { useEffect } from 'react';
import './assets/form.css';

export const Success = ({ formData }) => {
  useEffect(() => {
    fetch(`/api/hello`)
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }, []);

  //tady budu upravovat data co vylezly y backendu
  //tohle uvidi uzivatel

  return (
    <div>
      <h1>Thank You</h1>
      <p>You will get an email with further instructions</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};
