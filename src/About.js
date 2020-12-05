import React from 'react';
import styled from 'styled-components';
import Medailon from './Medailon.js';

const StyledAbout = styled.div`
  margin: 0;
  display: block;
  h2 {
    font-size: 1rem;
    margin: 10%;
  }
  @media (min-width: 1000px) {
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1.3rem;
    h2 {
      font-size: 1.5rem;
    }
    .medailonky {
      display: flex;
      align-items: top;
      .medailon {
        width: 30%;
        height: fit-content;
      }
    }
  }
  @media (min-width: 1200px) {
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>Na projektu se podílely:</h2>
      <div className="medailonky">
        <Medailon
          className="medailon"
          title="Tvůrkyně webu"
          img="terkadanca.png"
          alt="Daniela Kůsová a Tereza Baštová"
          name="Daniela Kůsová a Tereza Baštová"
          text="Věříme, že online jídelníček přibližuje široké veřejnosti způsob, jak přemýšlet nad stravováním a dokáže přispět ke snížení rizik, které jsou spojeny s obezitou."
        />
        <Medailon
          className="medailon"
          title="Výživová poradkyně"
          img="janicka.jpg"
          alt="Výživová poradkyně"
          name="Ing. Jana Slámová"
          text="Do zdravého životního stylu jsem se doslova zamilovala. Je skvělé, že ho mohu šířit dál mezi další nadšence. Diety, které představují pro člověka velké restrikce nejsou pro člověka dlouhodobě udržitelné a většina dietářů se poté vrátí na svůj výchozí bod a nebo se dokonce dostaví jojo efekt. Svým klientům chci ukazovat cestu, která možná bude pomalejší než zázračné diety z reklam, ale bude zdravá pro tělo a dosažené výsledky si udržíte dlouhodobě. Všem Vám držím moc palce v cestě za Vašimi sny."
        />
        <Medailon
          className="medailon"
          title="Food fotografka"
          img="terkadanca.png"
          alt="Maky Bašková"
          name="Food fotografka"
          text="ahoj"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
