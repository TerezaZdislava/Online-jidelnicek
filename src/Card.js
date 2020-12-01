import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: block;
  position: relative;
  margin-top: 10rem;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
  background-color: white;
  margin-top: 10rem;
  weight: auto;
  height: 200 px;
  padding: 2rem;
  margin: 20px;

  .profileImage {
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;

const Card = (props) => {
  return (
    <StyledCard>
      <img
        className="profileImage"
        src={`./assets/img/${props.img}`}
        alt={`${props.alt}`}
      />
      <h5>{props.name}</h5>
      <div>{props.text}</div>
    </StyledCard>
  );
};

export default Card;
