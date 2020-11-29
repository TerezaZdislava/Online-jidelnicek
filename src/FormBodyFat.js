import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const StyledBodyFat = styled.div``;

const marks = [
  {
    value: 15,
    label: '15 %',
  },
  {
    value: 20,
    label: '20 %',
  },
  {
    value: 25,
    label: '25 %',
  },
  {
    value: 30,
    label: '30 %',
  },
  {
    value: 45,
    label: '45 %',
  },
];

function valuetext(value) {
  return `${value}%`;
}

const FormBodyFat = ({ values, setFieldValue }) => {
  return (
    <StyledBodyFat>
      <Typography id="discrete-slider-always" gutterBottom>
        Kolik máte přibližně tuku v těle?
      </Typography>
      <img src={'./assets/img/bodyfatperc.jpg'} alt="tuky v tele" />
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        name="formBodyFat"
        value={values.formBodyFat}
        min={15}
        max={50}
        onChange={(e, v) => {
          setFieldValue('formBodyFat', v);
        }}
      />
    </StyledBodyFat>
  );
};

export default FormBodyFat;
