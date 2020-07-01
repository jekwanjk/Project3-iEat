import axios from "axios";

export default {
  //Get user information from the database
  getUserInfo: function (user) {
    console.log("getUserInfo - user", user);
    return axios.get("/user", user);
  },
  // Logout the current user
  logoutUser: function () {
    console.log("logoutUser");
    return axios.get("/logout");
  },
  // Validate user login credentials
  validateUser: function (loginInfo) {
    console.log("validateUser - loginInfo", loginInfo);
    return axios.post("/login", loginInfo);
  },
  // Add recipes to database
  recordRecipes: function (userData) {
    return axios.post("/api/recipes", userData);
  },

  getRecipes: function (userData) {
    console.log("API getRecipes", userData);
    return axios.get("/api/recipes/" + userData.name);
  },

  createUser: function (userData) {
    return axios.post("/register", userData);
  }
};
