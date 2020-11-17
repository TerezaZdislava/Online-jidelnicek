// import React from 'react';
// import './App.css';
// import { Formik } from 'formik';

// const questions = {
//   form1:{
//     otazka1: '',
//     otazka2: '',
//     otazka3: ''
//   },
//   form2: {
//     question: 'Sportujete během týdne?',
//     choices: [
//       { option: 'A', answer: 'Nesportuji.' },
//       { option: 'B', answer: 'Sportuji 1 - 2x týdně.' },
//       { option: 'C', answer: 'Sportuji 3 - 4x týdně.' },
//       {
//         option: 'D',
//         answer: 'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
//       },
//     ],
//   },
//   form3: {
//     question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne?',
//     choices: [
//       { option: 'A', answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.' },
//       {
//         option: 'B',
//         answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
//       },
//       {
//         option: 'C',
//         answer: 'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
//       },
//     ],
//   },
// };

// const questions = [
//   {
//     question: 'Sportujete během týdne?',
//     choices: [
//       { option: 'A', answer: 'Nesportuji.' },
//       { option: 'B', answer: 'Sportuji 1 - 2x týdně.' },
//       { option: 'C', answer: 'Sportuji 3 - 4x týdně.' },
//       {
//         option: 'D',
//         answer: 'Jsem sportovní nadšenec a dám si do těla minimálně 5x týdně.',
//       },
//     ],
//   },
//   {
//     question: 'Jaké je Vaše zaměstnání, popřípadě náplň dne?',
//     choices: [
//       { option: 'A', answer: 'Nejsem aktivní. Denně ujdu méně než 8 K kroků.' },
//       {
//         option: 'B',
//         answer: 'Jsem středně aktivní, nachodím kolem 8 K kroků.',
//       },
//       {
//         option: 'C',
//         answer: 'Jsem aktivní a většinu dne na nohou. Nachodím nad 10 K kroků',
//       },
//     ],
//   },
// ];

// class Questions extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questions: [],
//     };
//   }

//   userSelection(length) {
//     const initialValues = [];
//     for (let i = 0; i < length; i++) {
//       initialValues.push({ question: i, answer: '' });
//     }

//     return initialValues;
//   }

//   componentDidMount() {
//     // Fetch all the questions and set state
//     this.setState({ questions });
//   }

//   render() {
//     const { questions } = this.state;
//     const userSelection = { answers: this.userSelection(questions.length) };
//     console.log(userSelection);

//     return (
//       <Formik enableReinitialize={true} initialValues={userSelection}>
//         {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
//           <form onSubmit={handleSubmit}>
//             {questions.map((q, index) => (
//               <div className="card" key={index}>
//                 {/* <div className="card-header">Hádej</div> */}
//                 <div className="card-body">
//                   <h6 className="card-title">{q.question}</h6>
//                   <div className="question-choices px-2">
//                     {q.choices.map((choice) => (
//                       <div className="form-check" key={choice.option}>
//                         <input
//                           type="radio"
//                           id={choice.option}
//                           className="form-check-input"
//                           name={`answers[${index}].answer`}
//                           value={choice.option}
//                           checked={
//                             values.answers && values.answers[index]
//                               ? values.answers[index].answer === choice.option
//                               : false
//                           }
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                         />
//                         <label
//                           className="form-check-label clickable"
//                           htmlFor={choice.option}
//                         >
//                           <span className="mr-2">{choice.option} )</span>{' '}
//                           {choice.answer}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <pre>{JSON.stringify(values, null, 2)}</pre>
//             <div className="tlacitko">
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={isSubmitting}
//                 onClick={() => {
//                   const odpovedi = ['A', 'B'];
//                   let vysledek = 0;
//                   for (let i = 0; i < odpovedi.length; i++) {
//                     if (values.answers[i].answer === odpovedi[i]) {
//                       vysledek++;
//                     }
//                   }
//                   console.log(vysledek);
//                   alert('Získali jste celkem ' + vysledek + ' bodů 🎉');
//                 }}
//               >
//                 Výsledek
//               </button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     );
//   }
// }

// function Activity() {
//   return (
//     <div>
//       <Questions />
//     </div>
//   );
// }

// export default Activity;

// // zdroje kodu:
// // https://formik.org/docs/overview
// // https://codesandbox.io/s/gifted-brown-xemxi?file=/src/App.js:2405-2429
