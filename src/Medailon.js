import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: block;
  position: relative;
  margin-top: 10rem;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 50, 0.3) 1px 1px 10px 0px;
  background-color: white;
  margin-top: 10rem;
  height: 200 px;
  padding: 2rem;
  margin: 20px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
  h5 {
    font-style: italic;
    margin-top: 0.5rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .profileImage {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    opacity: unset;
    border: rgb(255, 0, 55) 2px dotted;
  }
  .textaboutus {
    line-height: 1.7;
  }
`;

const Medailon = (props) => {
  return (
    <StyledCard>
      <h4>{props.title}</h4>
      <img
        className="profileImage"
        src={`./assets/img/${props.img}`}
        alt={`${props.alt}`}
      />
      <h5>{props.name}</h5>
      <div className="textaboutus">{props.text}</div>
    </StyledCard>
  );
};

export default Medailon;
