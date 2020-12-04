import React from 'react';
import styled from 'styled-components';

const StyledLogos = styled.div`
  margin: 0;
  display: flex;

  @media (min-width: 1000px) {
    displax: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logos = (props) => {
  return (
    <StyledLogos>
      <div>
        <img
          onClick={(e) => (e.href = 'apify.com')}
          className="imageLogo"
          src={props.src}
          alt={props.alt}
        />
      </div>
    </StyledLogos>
  );
};

export default Logos;
