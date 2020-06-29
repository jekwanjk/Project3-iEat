import axios from "axios";

export default {
  //Get user information from the database
  getUserInfo: function () {
    return axios.get("/user");
  },

  // Add recipes to database
  recordRecipes: function (finalRecipes) {
    return axios.post("/api/recipes", finalRecipes);
  },

  createUser: function (userData) {
    return axios.post("/register", userData);
  }
};
