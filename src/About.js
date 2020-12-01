import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';

const StyledAbout = styled.div`
  

`;

const About = () => {
  return (
    <StyledAbout>
      <Card
        img="danca.png"
        alt="Daniela Kůsová"
        name="Daniela Kůsová, tvůrce"
        text="Věřím, že online jídelníček přibližuje  široké veřejnosti způsob, jak přemýšlet nad stravováním a dokáže přispět ke snížení rizik, které jsou spojeny s obezitou."
      />
      <Card
        img="foodmenu.png"
        alt="Tereza Baštová"
        name="Tereza Baštová, tvůrce"
        text="BLABLABLABLA"
      />
    </StyledAbout>
  );
};

export default About;
