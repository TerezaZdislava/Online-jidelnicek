import styled from 'styled-components';
import React from 'react';
import { Timer } from '@styled-icons/open-iconic/Timer';
import { LocationFood } from '@styled-icons/zondicons/LocationFood';
import { Person } from '@styled-icons/open-iconic/Person';

const StyledContent = styled.div`
  text-align: center;
  .card {
    margin: 10%;
    font-size: 0.8rem;
  }
  @media (min-width: 750px) {
    display: flex;
    justify-content: center;
    .card {
      margin: 8% 5% 5% 5%;
      font-size: 1rem;
      width: 20%;
    }
  }
  @media (min-width: 1200px) {
  }
`;
const Content = () => {
  return (
    <StyledContent>
      <div className="card">
        <Timer size="1.4em" />
        <p>
          Získej jídelníček online, snadno a do 5 minut. Stačí vyplnit krátký
          dotazník.
        </p>
      </div>
      <div className="card">
        <Person size="1.4em" />
        <p>
          Jídelníček bude na míru přesně pro Tebe. Stačí vyplnit, jak jsi
          aktivní, jakou máš postavu, cíle nebo preference v jídle.
        </p>
      </div>
      <div className="card">
        <LocationFood size="1.4em" />
        <p>
          Garantujeme, že si pochutnáš! Připravili jsme pestrý jídelníček plný
          zdravých dobrot. Porce jsou tak akorát velké vzhledem ke Tvé spotřebě
          kalorií.
        </p>
      </div>
    </StyledContent>
  );
};

export default Content;
