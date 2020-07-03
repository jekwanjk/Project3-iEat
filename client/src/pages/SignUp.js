import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SignUpForm from "../components/SignUpForm";
function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    calories: 0,
    dietRestrictions: "",
    dietType: "",
    city: "",
    state: "",
    zipCode: ""
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
    console.log(value);
  };

  const handleSelect = (e) => {
    console.log("SELECTION", e);
    // setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.createUser(user)
      .then((res) => {
        console.log("handleFormSubmit res:", res);
        // JYH - initialize the fields
        setUser({
          name: "",
          email: "",
          password: "",
          calories: 0,
          dietRestrictions: "",
          dietType: "",
          city: "",
          state: "",
          zipCode: ""
        });
        // JYH - redirect to the signin page
        window.location.replace("/login");
      })
      .catch(() => console.log("handleFormSubmit saveUser ERROR"));
  };
  return (
    <>
      {console.log(user.dietRestrictions, "Sign Up")}
      <SignUpForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleSelect={handleSelect}
        name={user.name}
        email={user.email}
        password={user.password}
        calories={user.calories}
        dietRestrictions={user.dietRestrictions}
        dietType={user.dietType}
        city={user.city}
        state={user.state}
        zipCode={user.zipCode}
      ></SignUpForm>
    </>
  );
}
export default SignUp;
