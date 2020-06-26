import axios from "axios";

export default {
  getRecipes: function (dietRestrictions, calories, dietType) {
    return axios.get(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=74ca71e3b38347748d5c7af071094e47&timeframe=week?targetCalories=" +
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
