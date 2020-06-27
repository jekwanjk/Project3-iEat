import axios from "axios";

export default {
  getRecipes: function (dietRestrictions, calories, dietType) {
    return axios.get(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=e4dd8c896acb49c3a477774ef868e953&timeframe=week?targetCalories=" +
        calories +
        "?diet=" +
        dietType +
        "?exclude=" +
        dietRestrictions
    );
  },
  getImgIngredients: function (query) {
    return axios.get(query);
  }
};
