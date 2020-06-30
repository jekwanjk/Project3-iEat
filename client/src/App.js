import React from "react";
import "./App.css";
import SignUp from "./pages/SignUp.js";
import Recipes from "./pages/Recipes.js";
import Shopping from "./pages/Shopping.js";
function App() {
  return (
    <div>
      <SignUp />
      {/* <Recipes /> */}
      <Shopping />
    </div>
  );
}
export default App;
