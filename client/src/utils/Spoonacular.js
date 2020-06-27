import axios from "axios";

export default {
  getRecipes: function (dietRestrictions, calories, dietType) {
    return axios.get(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=8cbc427f40924ae7b06b6e2d4c0ce89f&timeframe=week?targetCalories=" +
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
