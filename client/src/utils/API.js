import axios from "axios";

export default {
  //Get user information from the database
  getUserInfo: function () {
    return axios.get("/api/recipes");
  }
};
