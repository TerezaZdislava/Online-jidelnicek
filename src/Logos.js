import React from 'react';
import styled from 'styled-components';

const StyledLogos = styled.div`
  margin: 0 30%;
  display: block;
  justify-content: center;
  align-items: center;
  .imageLogo {
    width: 90%;
  }
  @media (min-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    .imageLogo {
      width: 50%;
    }
  }
  @media (min-width: 1000px) {
    .imageLogo {
      width: 40%;
    }
  }
`;

const Logos = (props) => {
  return (
    <StyledLogos>
      <img
        onClick={(e) => (e.href = 'apify.com')}
        className="imageLogo"
        src={props.src}
        alt={props.alt}
      />
    </StyledLogos>
  );
};

export default Logos;
