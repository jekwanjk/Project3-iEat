import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Spoonacular from "../utils/Spoonacular";
import ShoppingHeader from "../components/ShoppingHeader";
// import { Row, Col } from "antd";

function Shopping() {
  const [user, setUser] = useState({
    name: "Amanda",
    dietRestrictions: "peanuts",
    calories: 2000,
    dietType: "Gluten Free"
    // Add remaining properties here
  });
  const [recipes, setRecipes] = useState({
    recipeItems: [{}]
    // Add remaining properties here
  });

  useEffect(() => {
    console.log("useEffect");
    loadRecipes();
  }, [user]);

  const loadRecipes = function () {
    API.getRecipes(user)
      .then((res) => {
        console.log("load recipes res", res);
        console.log("res.data[0].recipes[0]", res.data[0].recipes[0]);
        console.log(
          "recipes[0].ingredients",
          res.data[0].recipes[0].ingredients
        );
        setRecipes({ recipeItems: res.data[0].recipes });
        console.log("setRecipes -- recipes.recipes", recipes);
      })
      .catch(() => console.log("loadRecipes ERROR"));
  };

  return (
    <div>
      <h1>Shopping List</h1>
    </div>
  );
}

export default Shopping;
