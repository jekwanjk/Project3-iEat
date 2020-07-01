import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import navbar
import SignUp from "./pages/SignUp.js";
import Recipes from "./pages/Recipes.js";
import Shopping from "./pages/Shopping.js";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    
    <Router>
      <div>
    <Navbar />
    <Wrapper>
        <Route exact path="/" component={Recipes} /> 
        <Route exact path="/recipes" component={Recipes} /> 
        <Route exact path="/shopping" component={Shopping} />
     </Wrapper>
        </div>
    </Router>
    
  );
}
export default App;
