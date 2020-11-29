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
    background-color: #c1c1c169;
    margin: 2rem 1;
  }
  .imageFat {
    width: 100px;
    height: auto;
  }
  .styledSlider {
    width: 85%;
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
    return 'man-8.jpg';
  } else if (formBodyFat <= 12) {
    return 'man-12.jpg';
  } else if (formBodyFat <= 15) {
    return 'man-15.jpg';
  } else if (formBodyFat <= 20) {
    return 'man-20.jpg';
  } else if (formBodyFat <= 25) {
    return 'man-25.jpg';
  } else if (formBodyFat <= 30) {
    return 'man-30.jpg';
  } else if (formBodyFat <= 35) {
    return 'man-35.jpg';
  }
  return 'man-35.jpg';
}
function getWomanPicture(formBodyFat) {
  if (formBodyFat < 15) {
    return 'woman-15.jpg';
  } else if (formBodyFat <= 20) {
    return 'woman-20.jpg';
  } else if (formBodyFat <= 25) {
    return 'woman-25.jpg';
  } else if (formBodyFat <= 30) {
    return 'woman-30.jpg';
  } else if (formBodyFat <= 35) {
    return 'woman-35.jpg';
  } else if (formBodyFat <= 40) {
    return 'woman-40.jpg';
  } else if (formBodyFat <= 45) {
    return 'woman-45.jpg';
  }
  return 'woman-45.jpg';
}

const FormBodyFat = ({ values, setFieldValue }) => {
  return (
    <StyledBodyFat>
      <div className="formBodyFat-all">
        <div id="discrete-slider-always" className="formBodyMessage">
          Kolik máte přibližně tuku v těle?
        </div>
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
