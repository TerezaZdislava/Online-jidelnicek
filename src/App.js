import React from 'react';
import './App.css';
import { Formik } from 'formik';

const questions = [
  {
    question: 'K čemu původně sloužil krásný kamenný dům na prvním obrázku?',
    choices: [
      { option: 'A', answer: 'Jednalo se o plynárnu na acetylenový plyn.' },
      { option: 'B', answer: 'Letní sídlo podivínského majitele.' },
    ],
  },
  {
    question: 'V jaké obci se nachází "hobití" vinařské sklípky?',
    choices: [
      { option: 'A', answer: 'Bořetice' },
      { option: 'B', answer: 'Vrbice' },
    ],
  },
  {
    question: 'Jak se jmenuje bizarní balvan na obrázku?',
    choices: [
      { option: 'A', answer: 'Tchýnina zadnice' },
      { option: 'B', answer: 'Ďáblova prdel' },
    ],
  },
  {
    question: 'Můžete se v Edmundově soutěsce plavit na vlastní lodi?',
    choices: [
      { option: 'A', answer: 'Ne, pouze s místním převozníkem.' },
      { option: 'B', answer: 'Ano ' },
    ],
  },
  {
    question: 'Je ledová Jeskyně víl v Českém Švýcarsku celoročně přístupná?',
    choices: [
      { option: 'A', answer: 'Ano' },
      { option: 'B', answer: 'Ne' },
    ],
  },
  {
    question: 'Zámek Hrubá Skála, založil v 14. stol. jako hrad:',
    choices: [
      { option: 'A', answer: 'Rod Valdštejnů ' },
      { option: 'B', answer: 'Rod Smiřických' },
    ],
  },
  {
    question: 'Ze spirálové rozhledny v Kobylí se pokocháte výhledem:',
    choices: [
      { option: 'A', answer: 'na vinohrady Slovácka' },
      { option: 'B', answer: 'na vinohrady Pálavy' },
    ],
  },
  {
    question: 'Přehrada Les Království stojí na řece:',
    choices: [
      { option: 'A', answer: 'Orlici' },
      { option: 'B', answer: 'Labi' },
    ],
  },
  {
    question: 'Bývalý nacistický důl a tábor pro zajatce Rolava se nachází:',
    choices: [
      { option: 'A', answer: 'V Karlovarském kraji' },
      { option: 'B', answer: 'V Libereckém kraji' },
    ],
  },
  {
    question:
      'Fantastické výhledy na přírodu Českého Švýcarska si vychutnáte z:',
    choices: [
      { option: 'A', answer: 'Vilemíniny vyhlídky' },
      { option: 'B', answer: 'Mariiny vyhlídky' },
    ],
  },
  {
    question: 'Kostel na jednom z ostrůvků Novomlýnské nádrže se jmenuje:',
    choices: [
      { option: 'A', answer: 'kostela sv. Linharta' },
      { option: 'B', answer: 'kostela sv. Jana Nepomuckého' },
    ],
  },
  {
    question: 'Skalní reliéfy Čertovy hlavy jsou vysoké:',
    choices: [
      { option: 'A', answer: '6 metrů' },
      { option: 'B', answer: '9 metrů' },
    ],
  },
];

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  userSelection(length) {
    const initialValues = [];
    for (let i = 0; i < length; i++) {
      initialValues.push({ question: i, answer: '' });
    }

    return initialValues;
  }

  componentDidMount() {
    // Fetch all the questions and set state
    this.setState({ questions });
  }

  render() {
    const { questions } = this.state;
    const userSelection = { answers: this.userSelection(questions.length) };
    console.log(userSelection);

    return (
      <Formik enableReinitialize={true} initialValues={userSelection}>
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
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
                          <span className="mr-2">{choice.option} )</span>{' '}
                          {choice.answer}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <div className="tlacitko">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                onClick={() => {
                  const odpovedi = [
                    'A',
                    'B',
                    'B',
                    'A',
                    'A',
                    'A',
                    'B',
                    'B',
                    'A',
                    'B',
                    'A',
                    'B',
                  ];
                  let vysledek = 0;
                  for (let i = 0; i < odpovedi.length; i++) {
                    if (values.answers[i].answer === odpovedi[i]) {
                      vysledek++;
                    }
                  }
                  console.log(vysledek);
                  alert('Získali jste celkem ' + vysledek + ' bodů 🎉');
                }}
              >
                Výsledek
              </button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

function App() {
  return (
    <div>
      <Questions />
    </div>
  );
}

export default App;

// zdroje kodu:
// https://formik.org/docs/overview
// https://codesandbox.io/s/gifted-brown-xemxi?file=/src/App.js:2405-2429
