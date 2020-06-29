import axios from "axios";

export default {
  //Get user information from the database
  getUserInfo: function () {
    return axios.get("/user");
  },

  // Add recipes to database
  recordRecipes: function (userData) {
    return axios.post("/api/recipes", userData);
  },

  createUser: function (userData) {
    return axios.post("/register", userData);
  }
};
