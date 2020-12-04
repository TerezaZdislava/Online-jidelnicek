import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const StyledBodyFat = styled.div`
  padding: 1rem;
  .formBodyFat-all {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  .formBodyMessage {
    margin: 10px;
    text-align: center;
  }
  .imageFat {
    width: 100px;
    height: auto;
  }
  .styledSlider {
    width: 85%;
    color: rgb(255, 0, 55);
  }
  h5 {
    font-weight: 600;
    font-size: 1.3rem;
    padding: 0.7rem;
  }
  @media (min-width: 550px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 1.3rem;
    h5 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

const marks = [
  {
    value: 0,
    label: '0 %',
  },
  {
    value: 50,
    label: '50 %',
  },
];

function valuetext(value) {
  return `${value}%`;
}

function getManPicture(formBodyFat) {
  if (formBodyFat < 8) {
    return 'man-8.png';
  } else if (formBodyFat <= 12) {
    return 'man-12.png';
  } else if (formBodyFat <= 15) {
    return 'man-15.png';
  } else if (formBodyFat <= 20) {
    return 'man-20.png';
  } else if (formBodyFat <= 25) {
    return 'man-25.png';
  } else if (formBodyFat <= 30) {
    return 'man-30.png';
  } else if (formBodyFat <= 35) {
    return 'man-35.png';
  }
  return 'man-35.png';
}
function getWomanPicture(formBodyFat) {
  if (formBodyFat <= 15) {
    return 'woman-15.png';
  } else if (formBodyFat <= 20) {
    return 'woman-20.png';
  } else if (formBodyFat <= 25) {
    return 'woman-25.png';
  } else if (formBodyFat <= 30) {
    return 'woman-30.png';
  } else if (formBodyFat <= 35) {
    return 'woman-35.png';
  } else if (formBodyFat <= 40) {
    return 'woman-40.png';
  } else if (formBodyFat <= 45) {
    return 'woman-45.png';
  }
  return 'woman-45.png';
}

const FormBodyFat = ({ values, setFieldValue }) => {
  return (
    <StyledBodyFat>
      <div className="formBodyFat-all">
        <h5 id="discrete-slider-always" className="formBodyMessage">
          Kolik máte přibližně procent tuku v těle?
        </h5>
        <img
          className="imageFat"
          src={`./assets/img/${
            values.gender === '0.8'
              ? getWomanPicture(values.formBodyFat)
              : getManPicture(values.formBodyFat)
          }`}
          alt="tuky v tele"
        />
        <Slider
          className="styledSlider"
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          name="formBodyFat"
          value={values.formBodyFat}
          min={0}
          max={50}
          onChange={(e, v) => {
            setFieldValue('formBodyFat', v);
          }}
        />
      </div>
    </StyledBodyFat>
  );
};

export default FormBodyFat;
