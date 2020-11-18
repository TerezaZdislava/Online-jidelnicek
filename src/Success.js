import React from 'react';
import './assets/form.css';

export const Success = ({ formData }) => {
  return (
    <div>
      <h1>Thank You</h1>
      <p>You will get an email with further instructions</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};
