import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(7),
  },
}));

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

const FormBodyFat = ({ formData, setFormData, nextStep, prevStep, values }) => {
  //const [direction, setDirection] = useState('back');
  //className="formBodyFat"
  const classes = useStyles();

  return (
    <div>
      {/* {(values, setFieldValue) => ( */}
      <div className={classes.form}>
        <Typography id="discrete-slider-always" gutterBottom>
          Kolik máte přibližně tuku v těle?
        </Typography>
        <Slider
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          name="formBodyFat"
          value={20}
          min={15}
          max={50}
          onChange={(e, v) => {
            setFieldValue('formBodyFat', v);
          }}
        />
      </div>
    </div>
  );
};

export default FormBodyFat;
