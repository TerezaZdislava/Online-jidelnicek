import styled from 'styled-components';
import React from 'react';

const StyledContent = styled.div`
  display: block;
  box-shadow: rgba(50, 50, 50, 0.3) 1px 1px 10px 0px;
  background-color: white;
  margin-top: 10rem;
  border-radius: 10px;
  padding: 2rem;
  margin: 20px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
  h5 {
    font-style: italic;
    margin-top: 0.5rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.2rem;
    margin-top: 0;
  }
  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;
const Content = (props) => {
  return (
    <StyledContent>
      <h4>Za pár minut můžeš mít svůj jídelníček:</h4>
      <h5>Jak to funguje?</h5>
      <div className="text">
        <p>
          Aplikace Ti na míru navrhne chutný jídelníček na pár dní. K tomu
          dostaneš praktický nákupní seznam.📝
        </p>
        <p>
          Stačí vyplnit několik otázek ohledně Tvého cíle, aktivity nebo
          preferencí v jídle.
        </p>
      </div>
    </StyledContent>
  );
};

export default Content;
