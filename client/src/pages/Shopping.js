import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ShoppingList from "../components/ShoppingList";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

function Shopping() {
  const [user, setUser] = useState({
    name: "Amanda",
    dietRestrictions: "peanuts",
    calories: 2000,
    dietType: "Gluten Free",
    recipes: []
  });

  // const [recipes, setRecipes] = useState({
  //   recipes: []
  // });

  useEffect(() => {
    console.log("useEffect");
    loadRecipes();
  }, []);

  const loadRecipes = () => {
    API.getRecipes(user)
      .then((res) => {
        // console.log("load recipes res", res);
        // console.log("res.data[0].recipes[0]", res.data[0].recipes[0]);
        // console.log(
        //   "recipes[0].ingredients",
        //   res.data[0].recipes[0].ingredients
        // );
        // console.log("res ... recipes", res.data[0].recipes);
        // const newArr = res.data[0].recipes.map(recipe => {
        //   console.log("loadRecipes - recipe", recipe);
        //   return recipe;
        // })
        createRecipies(res.data[0].recipes);
        // userRecipes = res.data[0].recipes;
        // console.log("userRecipes", userRecipes);
        // setUser( { ...user, recipes: res.data[0].recipes }  );
        // console.log("setUser -- user.recipes", user.recipes);
      })
      .catch((err) => console.log("loadRecipes ERROR", err));
  };

  const createRecipies = (recipes) => {
    // setRecipes({ recipes: recipes });
    // console.log("createRecipes - recipes", recipes.recipes);
    setUser({ ...user, name: "Amanda", recipes: [...recipes] });
    console.log("createRecipe - user recipes", user.recipes);
    // let timeout = setTimeout(function () {
    //   setRecipes({ ...recipes, recipes: [...recipes] });
    //   console.log("createRecipe - timeout - user recipes", recipes.recipes);
    // }, 3000);
    // if (user.name === "Amanda") setUser({ ...user, name: "Joe" });
    // else setUser({ ...user, name: "Amanda" });
    // if (user.recipes[0] !== undefined) {
    //   setTimeout(() => {
    //     console.log("clearTimeout");

    //     clearTimeout(timeout);
    //   }, 3000);
    // }
    // console.log("createRecipies - recipes", recipes);
    // setUser({ ...user, name: "Amanda", recipes: [...recipes] });
    // console.log("user", user);
    // console.log("user.recipes", user.recipes);
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    loadRecipes();
  };

  const quantity = () => {
    user.recipes.map((recipe) => {
      recipe.qty.map();
    });
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div>
      <center>
        <h1 style={{ color: "white" }}>{user.name}'s Shopping List</h1>
      </center>
      <ShoppingList
        handleSubmitBtn={handleSubmitBtn}
        userName={user.userName}
      ></ShoppingList>
      <ul>
        {Array.isArray(user.recipes) && user.recipes.length
          ? user.recipes.map((recipe) =>
              recipe.ingredients.map((item, index) =>
                index === 0 ? (
                  <li className="list-group-item">
                    <h1>{recipe.name}</h1>
                  </li>
                ) : (
                  <li className="list-group-item">
                    <Checkbox onChange={onChange}>
                      {item} {recipe.qty[index]} {recipe.units[index]}
                    </Checkbox>
                  </li>
                )
              )
            )
          : console.log("Array is empty")}
      </ul>
    </div>
  );
}

export default Shopping;
