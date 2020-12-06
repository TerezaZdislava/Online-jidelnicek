const express = require('express'); //framework na server
const bodyParser = require('body-parser'); //pomuze zpracovat pozadavky z frontendu
const data = require('./data.json');
const transformData = require('./transformData');
const app = express();
const port = process.env.PORT || 5000; //muzu si tuto promennou nadefinovat teoreticky sama, default 5000
//tady napisu funkci, budu psat logiku funkce
const path = require('path');
const transformedData = transformData(data);

const getCoefficient = (form) => {
  const {
    gender,
    goal,
    weight,
    sportFrequency,
    jobActivity,
    formBodyFat,
  } = form;

  return (
    (((weight - (formBodyFat / 100) * weight) * 21.6 + 370) *
      ((goal + gender + sportFrequency + jobActivity) / 4)) /
    1789
  );
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomMealWithRecalculatedMacros(mealArray, coefficient) {
  // Vybere náhodné jídlo z pole receptů (mealArray)
  const meal = mealArray[getRandomNumber(mealArray.length)];
  // Přepočítá kalorie
  meal.calories = Math.round(meal.calories * coefficient);
  // Přepočítá gramy jednotliváých ingrediencí
  meal.ingrediences = meal.ingrediences.map((ingredience) => {
    ingredience.grams = Math.round(ingredience.grams * coefficient);
    return ingredience;
  });
  return meal;
}
function processForm(form) {
  // Vybere pouze jídla, které neobsahují excludedFood
  const dataWithoutExludedFood = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);
    return hasNoExclusions;
  });
  const breakfastArr = dataWithoutExludedFood.filter(
    (meal) => meal.mealDev === 'snídaně',
  );
  const lunchArr = dataWithoutExludedFood.filter(
    (meal) => meal.mealDev === 'oběd',
  );
  const dinnerArr = dataWithoutExludedFood.filter(
    (meal) => meal.mealDev === 'večeře',
  );
  // Výpočet koeficientu
  const coefficient = getCoefficient(form);
  // Výběr náhodného jídla s přepočítanými makry
  const breakfast = getRandomMealWithRecalculatedMacros(
    breakfastArr,
    coefficient,
  );
  const lunch = getRandomMealWithRecalculatedMacros(lunchArr, coefficient);
  const dinner = getRandomMealWithRecalculatedMacros(dinnerArr, coefficient);
  if (form.numberOfMeals === 3) {
    return {
      breakfast,
      lunch,
      dinner,
    };
  } else {
    // Pokud 5 jídel tak přidáme i svačiny
    const snackBefArr = dataWithoutExludedFood.filter(
      (meal) => meal.mealDev === 'svačinaDopo',
    );
    const snackAfterArr = dataWithoutExludedFood.filter(
      (meal) => meal.mealDev === 'svačinaOdpo',
    );
    const snackBef = getRandomMealWithRecalculatedMacros(
      snackBefArr,
      coefficient,
    );
    const snackAfter = getRandomMealWithRecalculatedMacros(
      snackAfterArr,
      coefficient,
    );
    return {
      breakfast,
      snackBef,
      lunch,
      snackAfter,
      dinner,
    };
  }
}

app.use(bodyParser.json()); //prevede na json format
app.use(bodyParser.urlencoded({ extended: true }));
const buildPath = express.static(path.join(__dirname, 'dist'));
app.use(buildPath);
app.post('/api/form', (req, res) => {
  //post = data z frontendu zpracuji na backendu
  //muzu si to pojmenovat, ale musi zacinat lomitkem
  console.log(req.body); //tady prijde json vystup //tady budu VOLAT FUNKCI
  const menu = processForm(req.body);
  res.send(menu);
});

app.use('/*', buildPath);

app.listen(port, () => console.log(`Listening on port ${port}`));
//zapina server
//npm i nodemon -g - ukaze mi zmeny na backendu a nemusim zapinat a vypinat, automaticky se propisou zmeny

// const form = {
//   gender,
//   weight,
//   goal,
//   sportFrequency,
//   jobActivity,
//   formBodyFat,
//   excludedFood,
//   numberOfMeals,
// };

// console.log('PROCESSED FORM');
// console.log(JSON.stringify(processForm(form), null, 2));
