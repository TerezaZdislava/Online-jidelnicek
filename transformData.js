function transformData(data) {
  return data.map((recipe) => {
    const {
      name,
      calories,
      exclude,
      mealDev,
      steps,
      ingredience1,
      ingredience2,
      ingredience3,
      ingredience4,
      ingredience5,
      grams1,
      grams2,
      grams3,
      grams4,
      grams5,
    } = recipe;
    const result = {
      name: name.trim(),
      calories,
      mealDev: mealDev.trim(),
      steps,
      excludedFood: [],
      ingrediences: [],
    };
    if (exclude) {
      result.excludedFood = exclude
        .split(',')
        .map((exlucedFoodName) => exlucedFoodName.trim())
        .filter(
          (exlucedFoodName) => exlucedFoodName && exlucedFoodName.length > 0,
        );
    }
    if (ingredience1) {
      const ingredience = {
        name: ingredience1.trim(),
      };
      if (grams1) {
        ingredience.grams = grams1;
      } else {
        ingredience.isArbitrary = true;
      }
      result.ingrediences.push(ingredience);
    }
    if (ingredience2) {
      const ingredience = {
        name: ingredience2.trim(),
      };
      if (grams2) {
        ingredience.grams = grams2;
      } else {
        ingredience.isArbitrary = true;
      }
      result.ingrediences.push(ingredience);
    }
    if (ingredience3) {
      const ingredience = {
        name: ingredience3.trim(),
      };
      if (grams3) {
        ingredience.grams = grams3;
      } else {
        ingredience.isArbitrary = true;
      }
      result.ingrediences.push(ingredience);
    }
    if (ingredience4) {
      const ingredience = {
        name: ingredience4.trim(),
      };
      if (grams4) {
        ingredience.grams = grams4;
      } else {
        ingredience.isArbitrary = true;
      }
      result.ingrediences.push(ingredience);
    }
    if (ingredience5) {
      const ingredience = {
        name: ingredience3.trim(),
      };
      if (grams5) {
        ingredience.grams = grams5;
      } else {
        ingredience.isArbitrary = true;
      }
      result.ingrediences.push(ingredience);
    }
    return result;
  });
}

module.exports = transformData;
