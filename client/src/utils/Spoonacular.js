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

      // "https://api.spoonacular.com/mealplanner/generate?apiKey=8cbc427f40924ae7b06b6e2d4c0ce89f&timeframe=week?targetCalories=" +
      // calories +
      // "?diet=" +
      // dietType +
      // "?exclude=" +
      // dietRestrictions
    );
  },
  getImgIngredients: function (query) {
    return axios.get(query);
  }
};
