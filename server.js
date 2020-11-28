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
      goal *
      gender *
      ((sportFrequency + jobActivity) / 2)) /
    1789
  );
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function recalculatedMacros(meal, coefficient) {
  meal.calories = Math.round(meal.calories * coefficient);
  meal.ingrediences = meal.ingrediences.map((ingredience) => {
    ingredience.grams = Math.round(ingredience.grams * coefficient);
    return ingredience;
  });

  return meal;
}

function processForm(form) {
  const breakfastArr = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);

    return meal.mealDev === 'snídaně' && hasNoExclusions;
  });

  const snackBefArr = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);

    return meal.mealDev === 'svačinaDopo' && hasNoExclusions;
  });

  const lunchArr = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);

    return meal.mealDev === 'oběd' && hasNoExclusions;
  });

  const snackAfterArr = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);

    return meal.mealDev === 'svačinaOdpo' && hasNoExclusions;
  });

  const dinnerArr = transformedData.filter((meal) => {
    const hasNoExclusions = form.excludedFood.reduce((result, food) => {
      return result && !meal.excludedFood.includes(food);
    }, true);

    return meal.mealDev === 'večeře' && hasNoExclusions;
  });

  /// rozdělili jsme data json do pěti konstant

  const coefficient = getCoefficient(form);

  const breakfast = recalculatedMacros(
    breakfastArr[getRandomNumber(breakfastArr.length)],
    coefficient,
  );

  const lunch = recalculatedMacros(
    lunchArr[getRandomNumber(lunchArr.length)],
    coefficient,
  );

  const dinner = recalculatedMacros(
    dinnerArr[getRandomNumber(dinnerArr.length)],
    coefficient,
  );

  if (form.numberOfMeals === 3) {
    return {
      breakfast,
      lunch,
      dinner,
    };
  } else {
    const snackBef = recalculatedMacros(
      snackBefArr[getRandomNumber(snackBefArr.length)],
      coefficient,
    );

    const snackAfter = recalculatedMacros(
      snackAfterArr[getRandomNumber(snackAfterArr.length)],
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

app.post('/api/form', (req, res) => {
  //post = data z frontendu zpracuji na backendu
  //muzu si to pojmenovat, ale musi zacinat lomitkem
  console.log(req.body); //tady prijde json vystup //tady budu VOLAT FUNKCI
  const menu = processForm(req.body);
  res.send(menu);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
//zapina server
//npm i nodemon -g - ukaze mi zmeny na backendu a nemusim zapinat a vypinat, automaticky se propisou zmeny

///testing
//nase logika
//return {jidelnicek - cista data}
//neuvidi to zatim uzivatel
/*let gender = 0.8;
let weight = 70;
let formBodyFat = 20;
let jobActivity = 1.2;
let sportFrequency = 1;
let goal = 0.8;
let excludedFood = ['mléko', 'maso'];
let numberOfMeals = 5;

const form = {
  gender,
  weight,
  goal,
  sportFrequency,
  jobActivity,
  formBodyFat,
  excludedFood,
  numberOfMeals,
};

console.log('PROCESSED FORM');
console.log(JSON.stringify(processForm(form), null, 2));

// console.log(JSON.stringify(transformData(data), null, 2));*/
