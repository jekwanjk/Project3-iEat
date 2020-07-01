import React, { useState } from "react";
import API from "../utils/API";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../components/LoginForm/style.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = function () {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.validateUser({ email, password })
      .then((res) => {
        console.log("handleSubmit res:", res);
        // JYH - initialize the fields
        setEmail("");
        setPassword("");
        // JYH - redirect to the recipes page
        window.location.replace("/recipes");
      })
      .catch(() => console.log("handSubmit validateUser ERROR"));
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" size="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" size="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block size="large" disabled={!validateForm()} type="submit">
          <strong>Login</strong>
        </Button>
      </form>
    </div>
  );
}
export default LogIn;
