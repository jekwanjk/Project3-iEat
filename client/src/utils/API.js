import axios from "axios";
export default {
  //Get user information from the database
  getUserInfo: function (user) {
    console.log("getUserInfo - user", user);
    return axios.get("/user", user);
  },
  // Add recipes to database
  recordRecipes: function (userData) {
    return axios.post("/api/recipes", userData);
  },

  getRecipes: function (userData) {
    console.log("getRecipes", userData);
    return axios.get("/api/recipes/" + userData.name);
  },

  createUser: function (userData) {
    return axios.post("/register", userData);
  }
};
