import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ShoppingList from "../components/ShoppingList";

function Shopping() {
  console.log("Shopping");
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("useEffect");
    // getCurrentUser();
    API.getUserInfo()
      .then((res) => {
        console.log("Shopping getCurrentUser - res.data", res.data);
        setUser({
          calories: res.data.calories,
          city: res.data.calories,
          dietRestrictions: res.data.dietRestrictions,
          dietType: res.data.dietType,
          email: res.data.email,
          name: res.data.name,
          password: res.data.password,
          recipes: res.data.recipes,
          state: res.data.state,
          zipCode: res.data.zipCode,
          _id: res.data._id
        });
        console.log("setUser - user", user);
      })
      .catch((err) => {
        console.log("getCurrentUser", err);
        window.location.replace("/login");
      });
  }, []);

  const handleSubmitBtn = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>{user.name}'s Shopping List</h1>
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
                    {item} {recipe.qty[index]} {recipe.units[index]}
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
