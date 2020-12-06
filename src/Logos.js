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
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    .imageLogo {
      width: 50%;
    }
  }
  @media (min-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;

const Logos = (props) => {
  return (
    <StyledLogos>
      <a href={props.http}>
        <img
          onClick={(e) => (e.href = 'https://apify.com')}
          className="imageLogo"
          src={props.src}
          alt={props.alt}
        />
      </a>
    </StyledLogos>
  );
};

export default Logos;
