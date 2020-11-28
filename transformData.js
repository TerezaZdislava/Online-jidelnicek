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
      result.ingrediences.push({
        name: ingredience1.trim(),
        grams: grams1,
      });
    }
    if (ingredience2) {
      result.ingrediences.push({
        name: ingredience2.trim(),
        grams: grams2,
      });
    }
    if (ingredience3) {
      result.ingrediences.push({
        name: ingredience3.trim(),
        grams: grams3,
      });
    }
    if (ingredience4) {
      result.ingrediences.push({
        name: ingredience4.trim(),
        grams: grams4,
      });
    }
    if (ingredience5) {
      result.ingrediences.push({
        name: ingredience5.trim(),
        grams: grams5,
      });
    }
    return result;
  });
}

module.exports = transformData;
