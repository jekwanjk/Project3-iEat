import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import navbar
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Recipes from "./pages/Recipes.js";
import Shopping from "./pages/Shopping.js";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home.js";


function App() {
  return (
    
    <Router>
      <div>
    <Navbar />
    <Wrapper>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/recipes" component={Recipes} /> 
        <Route exact path="/shopping" component={Shopping} />
     </Wrapper>
        </div>
    </Router>
    
  );
}
export default App;
