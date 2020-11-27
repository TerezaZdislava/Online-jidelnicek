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

const setFieldValue = (e, value) => {
  console.log(e);
  console.log('baaa  ' + value);
};

const formBodyfat = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');
  const classes = useStyles();

  return (
    <div className="formBodyfat">
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className={classes.form}>
            <Typography id="discrete-slider-always" gutterBottom>
              Kolik máte přibližně tuku v těle?
            </Typography>
            <Slider
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={1}
              marks={marks}
              valueLabelDisplay="on"
              name="slider"
              value={values.slide}
              min={15}
              max={50}
              onChange={(e, v) => {
                setFieldValue('slide', v);
              }}
            />
            <div>
              <button
                className="tlacitko"
                type="submit"
                variant="contained"
                onClick={() => setDirection('back')}
              >
                Zpět
              </button>
              <button
                className="tlacitko"
                type="submit"
                variant="contained"
                onClick={() => setDirection('forward')}
              >
                Další
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formBodyfat;
