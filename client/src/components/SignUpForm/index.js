import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignUpForm(props) {
  return (
    <form className="signup">
      <div className="form-group">
        <label htmlFor="userName">User Name:</label>
        <input
          value={props.userName}
          onChange={props.handleInputChange}
          name="userName"
          type="text"
          className="form-control"
          placeholder="Type in user name"
          id="userName"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={props.email}
          onChange={props.handleInputChange}
          name="email"
          type="email"
          className="form-control"
          placeholder="Type in your email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={props.password}
          onChange={props.handleInputChange}
          name="password"
          type="password"
          className="form-control"
          placeholder="Type in your password"
          id="password"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
