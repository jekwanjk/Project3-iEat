import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function LogOut() {
  API.logoutUser().then(() => {
    console.log("LogOut");
    window.location.replace("/login");
  });
}

export default LogOut;
