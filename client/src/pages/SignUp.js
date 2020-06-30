import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SignUpForm from "../components/SignUpForm";
function SignUp() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: ""
    // Add remaining properties here
  });
  // After user has entered the sign up form, we will check the user who sign up for the recipes to see if he/she already exists in database
  useEffect(() => {
    console.log("useEffect");
    API.getUserInfo(user)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  }, [user]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.createUser(user)
      .then((res) => {
        console.log("handleFormSubmit res:", res);
      })
      .catch(() => console.log("handleFormSubmit saveUser ERROR"));
  };
  return (
    <>
      <SignUpForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        userName={user.userName}
        email={user.email}
        password={user.password}
      ></SignUpForm>
    </>
  );
}
export default SignUp;
