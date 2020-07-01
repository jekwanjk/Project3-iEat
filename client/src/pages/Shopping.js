import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ShoppingList from "../components/ShoppingList";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

function Shopping() {
  // const [user, setUser] = useState({
  //   name: "Amanda",
  //   dietRestrictions: "peanuts",
  //   calories: 2000,
  //   dietType: "Gluten Free",
  //   recipes: []
  // });
  const [user, setUser] = useState({
    name: "",
    dietRestrictions: "",
    calories: 0,
    dietType: "",
    recipes: []
  });

  useEffect(() => {
    console.log("useEffect");
    getCurrentUser();
  }, []);

  useEffect(() => {
    console.log("useEffect");
    loadRecipes();
  }, []);

  const getCurrentUser = () => {
    API.getUserInfo(user)
      .then((res) => {
        console.log("getCurrentUser - res.data", res.data);
        setUser({ ...user, ...res.data });
      })
      .catch((err) => {
        console.log("getCurrentUser", err);
        window.location.replace("/login");
      });
  };

  const loadRecipes = () => {
    API.getRecipes(user)
      .then((res) => {
        createRecipies(res.data[0].recipes);
      })
      .catch((err) => console.log("loadRecipes ERROR", err));
  };

  const createRecipies = (recipes) => {
    setUser({ ...user, recipes: [...recipes] });
    console.log("createRecipe - user recipes", user.recipes);
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    getCurrentUser();
    loadRecipes();
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
