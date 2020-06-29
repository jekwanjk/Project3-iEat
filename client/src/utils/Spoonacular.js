import axios from "axios";

export default {
  getRecipes: function (dietRestrictions, calories, dietType, apiKey) {
    return axios.get(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=" +
        apiKey +
        "&timeframe=week?targetCalories=" +
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
