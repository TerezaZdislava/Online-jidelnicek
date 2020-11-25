import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './assets/form.module.css';
import * as yup from 'yup';
import classNames from 'classnames';

const validationSchema = yup.object().shape({
  option0: yup.string().required('At least one checkbox is required'),
  option1: yup.string().required('At least one checkbox is required'),
  option2: yup.string().required('At least one checkbox is required'),
});

const questions = [
  {
    question: 'Kolik jídel denně preferuješ?',
    choices: [
      { option: 'A1', answer: '3 jídla (snídaně, oběd, večeře)' },
      { option: 'B1', answer: '5 jídel (svačiny mezi hlavními jídly)' },
    ],
  },
  {
    question: 'Sportuješ během týdne?',
    choices: [
      { option: 'A2', answer: 'Nesportuji.' },
      { option: 'B2', answer: 'Sportuji 1 - 2x týdně.' },
      { option: 'C2', answer: 'Sportuji 3 - 4x týdně.' },
      {
        option: 'D2',
        answer: 'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
      },
    ],
  },
  {
    question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne?',
    choices: [
      {
        option: 'A3',
        answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.',
      },
      {
        option: 'B3',
        answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
      },
      {
        option: 'C3',
        answer: 'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
      },
    ],
  },
];

const InputFeedback = ({ error }) => {
  console.log(error);
  return error ? (
    <div className={classNames('input-feedback')}>{error}</div>
  ) : null;
};

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  props,
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames('radio-button')}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children,
}) => {
  const classes = classNames(
    'input-field',
    {
      'is-success': value || (!error && touched), // handle prefilled or user-filled
      'is-error': !!error && touched,
    },
    className,
  );
  return (
    <div className={classes}>
      <div>
        {/* <legend>{label}</legend> */}
        {children}
        {touched || <InputFeedback error={error} />}
      </div>
    </div>
  );
};

//stary funkcni bez validace

// const FormActivity = ({ formData, setFormData, nextStep, prevStep }) => {
//   const [direction, setDirection] = useState('back');
//   return (
//     // <Formik enableReinitialize={true} initialValues={userSelection}>
//     //   {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
//     <Formik
//       initialValues={formData}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log(JSON.stringify(values, null, 2));
//         setFormData(values);
//         direction === 'back' ? prevStep() : nextStep();
//       }}
//     >
//       {({ values, handleBlur, handleChange, errors, touched }) => (
//         <Form>
//           {questions.map((q, index) => (
//             <div className="card" key={index}>
//               <div className="card-body">
//                 <h6 className="formactivity-question">{q.question}</h6>
//                 <div className="formactivity-choices px-2" name="option">
//                   {q.choices.map((choice) => (
//                     <div className="formactivity-check" key={choice.option}>
//                       <input
//                         type="radio"
//                         id={choice.option}
//                         className="form-check-input"
//                         name={`answers[${index}].answer`}
//                         value={choice.option}
//                         touched={touched.option}
//                         checked={
//                           values.answers && values.answers[index]
//                             ? values.answers[index].answer === choice.option
//                             : false
//                         }
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                       <label
//                         name="option"
//                         className="form-check-label clickable"
//                         htmlFor={choice.option}
//                       >
//                         {choice.answer}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
//           <div>
//             <button
//               className="tlacitko"
//               type="submit"
//               variant="contained"
//               onClick={() => setDirection('back')}
//             >
//               Zpět
//             </button>
//             <button
//               className="tlacitko"
//               type="submit"
//               variant="contained"
//               onClick={() => setDirection('forward')}
//             >
//               Další
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

const FormActivity = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');
  return (
    // <Formik enableReinitialize={true} initialValues={userSelection}>
    //   {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
        setFormData(values);
        direction === 'back' ? prevStep() : nextStep();
      }}
    >
      {({ values, handleBlur, handleChange, errors, touched }) => (
        <Form>
          <div className="card" key="0">
            <div className="card-body">
              <h6 className="formactivity-question">{questions[0].question}</h6>
              <RadioButtonGroup
                className="formactivity-choices px-2"
                id="option0"
                label="One of these please"
                value={values.option0}
                error={errors.option0}
                touched={touched.option0}
              >
                {questions[0].choices.map((choice) => (
                  <div className="formactivity-check" key={choice.option}>
                    <Field
                      component={RadioButton}
                      id={choice.option}
                      className="form-check-input"
                      // name={`answers[${index}].answer`}
                      name="option0"
                      label={choice.answer}
                    />
                    {/* <label
                      name="option"
                      className="form-check-label clickable"
                      htmlFor={choice.option}
                    >
                      {choice.answer}
                    </label> */}
                  </div>
                ))}
                <ErrorMessage
                  component="div"
                  name="option0"
                  className="invalid-feedback"
                />
              </RadioButtonGroup>

              <h6 className="formactivity-question">{questions[1].question}</h6>
              <RadioButtonGroup
                className="formactivity-choices px-2"
                id="option1"
                label="One of these please"
                value={values.option1}
                error={errors.option1}
                touched={touched.option1}
              >
                {questions[1].choices.map((choice) => (
                  <div className="formactivity-check" key={choice.option}>
                    <Field
                      component={RadioButton}
                      id={choice.option}
                      className="form-check-input"
                      // name={`answers[${index}].answer`}
                      name="option1"
                      value={choice.option}
                      label={choice.answer}
                    />
                    {/* <label
                      name="option"
                      className="form-check-label clickable"
                      htmlFor={choice.option}
                    >
                      {choice.answer}
                    </label> */}
                  </div>
                ))}
              </RadioButtonGroup>

              <h6 className="formactivity-question">{questions[2].question}</h6>
              <RadioButtonGroup
                className="formactivity-choices px-2"
                id="option2"
                label="One of these please"
                value={values.option2}
                error={errors.option2}
                touched={touched.option2}
              >
                {questions[2].choices.map((choice) => (
                  <div className="formactivity-check" key={choice.option}>
                    <Field
                      component={RadioButton}
                      id={choice.option}
                      className="form-check-input"
                      // name={`answers[${index}].answer`}
                      name="option2"
                      value={choice.option}
                      label={choice.answer}
                    />
                    {/* <label
                      name="option2"
                      className="form-check-label clickable"
                      htmlFor={choice.option}
                    >
                      {choice.answer}
                    </label> */}
                  </div>
                ))}
              </RadioButtonGroup>
            </div>
          </div>
          ))
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <div>
            <button
              className="tlacitko"
              type="button"
              variant="contained"
              onClick={() => prevStep()}
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
  );
};

// function Activity() {
//   return (
//     <div>
//       <Questions />
//     </div>
//   );
// }

export default FormActivity;

// zdroje kodu:
// https://formik.org/docs/overview
// https://codesandbox.io/s/gifted-brown-xemxi?file=/src/App.js:2405-2429
