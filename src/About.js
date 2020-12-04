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
          title="Nutriční terapeutka"
          img="terkadanca.png"
          alt="Janička"
          name="Janička"
          text="ahoj"
        />
        <Medailon
          className="medailon"
          title="Food fotografka"
          img="terkadanca.png"
          alt="Food fotografka"
          name="Food fotografka"
          text="ahoj"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
