import React from 'react';
import styled from 'styled-components';
import Medailon from './Medailon.js';

const StyledAbout = styled.div`
display: block;
@media (min-width: 550px) {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    h2 {
      margin-bottom: 4rem;
    }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>Kdo za projektem stojí?</h2>
      <Medailon
        title="Naše maličkost"
        img="terkadanca.png"
        alt="Daniela Kůsová a Tereza Baštová"
        name="Daniela Kůsová a Tereza Baštová"
        text="Věříme, že online jídelníček přibližuje široké veřejnosti způsob, jak přemýšlet nad stravováním a dokáže přispět ke snížení rizik, které jsou spojeny s obezitou."
      />
    </StyledAbout>
  );
};

export default About;
