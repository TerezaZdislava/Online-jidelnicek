import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

const questions = [
  {
    question: 'Kolik jídel denně preferuješ?',
    choices: [
      { option: 'A', answer: '3 jídla (snídaně, oběd, večeře)' },
      { option: 'A', answer: '5 jídel (svačiny mezi hlavními jídly)' },
    ],
  },
  {
    question: 'Sportuješ během týdne?',
    choices: [
      { option: 'A', answer: 'Nesportuji.' },
      { option: 'B', answer: 'Sportuji 1 - 2x týdně.' },
      { option: 'C', answer: 'Sportuji 3 - 4x týdně.' },
      {
        option: 'D',
        answer: 'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
      },
    ],
  },
  {
    question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne?',
    choices: [
      {
        option: 'A',
        answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.',
      },
      {
        option: 'B',
        answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
      },
      {
        option: 'C',
        answer: 'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
      },
    ],
  },
];

const FormActivity = ({ formData, setFormData, nextStep, prevStep }) => {
  const [direction, setDirection] = useState('back');
  return (
    // <Formik enableReinitialize={true} initialValues={userSelection}>
    //   {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
    <Formik
      initialValues={formData}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2)); //co to je?
        setFormData(values);
        direction === 'back' ? prevStep() : nextStep();
      }}
    >
      {({ values, handleBlur, handleChange }) => (
        <Form>
          {questions.map((q, index) => (
            <div className="card" key={index}>
              {/* <div className="card-header">Hádej</div> */}
              <div className="card-body">
                <h6 className="card-title">{q.question}</h6>
                <div className="question-choices px-2">
                  {q.choices.map((choice) => (
                    <div className="form-check" key={choice.option}>
                      <input
                        type="radio"
                        id={choice.option}
                        className="form-check-input"
                        name={`answers[${index}].answer`}
                        value={choice.option}
                        checked={
                          values.answers && values.answers[index]
                            ? values.answers[index].answer === choice.option
                            : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label
                        className="form-check-label clickable"
                        htmlFor={choice.option}
                      >
                        <span className="mr-2">{choice.option} )</span>
                        {choice.answer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <div>
            <button
              type="submit"
              variant="contained"
              onClick={() => setDirection('back')}
            >
              Back
            </button>
            <button
              type="submit"
              variant="contained"
              onClick={() => setDirection('forward')}
            >
              Continue
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
