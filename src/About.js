import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  h5 {
    color: red;
  }
`;

const About = () => {
  
  return (
    <StyledAbout>
      <div>Daniela Kůsová a Tereza Baštová info</div>
    </StyledAbout>
  );
};

export default About;
