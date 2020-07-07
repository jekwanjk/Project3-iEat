import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Spoonacular from "../utils/Spoonacular";
import RecipeHeader from "../components/RecipeHeader";
import RecipeItem from "../components/RecipeItem";
import { Row, Col } from "antd";

function Recipes() {
  // Spoonacular API Key
<<<<<<< HEAD
  const spoonacularAPI = "2d13159a314a4238847fdf4bfd83f551";
=======

  const spoonacularAPI = "c0bc5164377044b48b416664d2929c72";

>>>>>>> 64d7164bb10bf462278e2f1b93838b02c5efc723

  // userData holds inputted fields from sign up form
  // const [userData, setUserData] = useState({
  //   name: "Amanda",
  //   dietRestrictions: "peanuts",
  //   calories: 2000,
  //   dietType: "Gluten Free",
  //   recipes: []
  // });

  const styles = {
    backgroundColor: {
      background: "#fff"
    }
  };

  const [userData, setUserData] = useState({
    name: "",
    dietRestrictions: "",
    calories: 0,
    dietType: "",
    recipes: []
  });

  // Array of recipe ids, title, sourceURL
  const idTitleSourceURL = [];

  // Array of objects with id, img, ingredients, qty, and units
  const imgIngredients = [];

  let finalRecipes = [];

  // Final recipes array of objects with id, title, sourceURL, img, ingredients, qty, and units
  const [finalRecipesDOM, setFinalRecipesDOM] = useState([]);

  useEffect(() => {
    /* -------------------------------------------------------
    TODO: CALL BACK END TO GET USER DATA - NOT WORKING
    ---------------------------------------------------------*/

    // TODO: Call backend to get the user data
    API.getUserInfo()
      .then((res) => {
        console.log("User info", res);
        setUserData({
          name: res.data.name,
          dietRestrictions: res.data.dietRestrictions,
          calories: res.data.calories,
          dietType: res.data.dietType
        });
      })
      .catch((err) => {
        console.log(err);
        window.location.replace("/login");
      });

    console.log(JSON.stringify(userData));

    /* -------------------------------------------------------
    TODO: CALL BACK END TO GET RECIPES FOR SPECIFIC USER
    
    If user has recipes, display those recipes. 
    If not, got ahead and make the API call
    ---------------------------------------------------------*/

    // Get all recipes from Spoonacular API
    getAllRecipes(
      userData.dietRestrictions,
      userData.calories,
      userData.dietType,
      spoonacularAPI
    );
  }, []);

  // Set Spoonacular API res.data to originalRecipes variable
  function getAllRecipes(dietRestrictions, calories, dietType, apiKey) {
    Spoonacular.getRecipes(dietRestrictions, calories, dietType, apiKey)
      .then((res) => {
        console.log(res);

        // Get ids, name of day, recipe name, info URL, and summary for all Monday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.monday.meals[i].id,
            title: res.data.week.monday.meals[i].title,
            sourceUrl: res.data.week.monday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Tuesday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.tuesday.meals[i].id,
            title: res.data.week.tuesday.meals[i].title,
            sourceUrl: res.data.week.tuesday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Wednesday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.wednesday.meals[i].id,
            title: res.data.week.wednesday.meals[i].title,
            sourceUrl: res.data.week.wednesday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Thursday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.thursday.meals[i].id,
            title: res.data.week.thursday.meals[i].title,
            sourceUrl: res.data.week.thursday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Friday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.friday.meals[i].id,
            title: res.data.week.friday.meals[i].title,
            sourceUrl: res.data.week.friday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Saturday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.saturday.meals[i].id,
            title: res.data.week.saturday.meals[i].title,
            sourceUrl: res.data.week.saturday.meals[i].sourceUrl
          });
        }

        // Get ids, name of day, recipe name, info URL, and summary for all Sunday
        for (let i = 0; i < 3; i++) {
          idTitleSourceURL.push({
            id: res.data.week.sunday.meals[i].id,
            title: res.data.week.sunday.meals[i].title,
            sourceUrl: res.data.week.sunday.meals[i].sourceUrl
          });
        }
        console.log(idTitleSourceURL);
      })
      .then(() => {
        console.log("getting id, img, ingredients, qty, and units");
        getRecipeImgIngredients().then((response) => {
          console.log("after getting recipe img, ingredients, etc");
          console.log("RESPONSE", response);

          let resData = response;

          // Find the corresponding ids in the response array of objects with the mealsIdsTitleSource object
          // Add the title and source URL to the response object

          setTimeout(function () {
            for (let i = 0; i < resData.length; i++) {
              for (let j = 0; j < idTitleSourceURL.length; j++) {
                if (idTitleSourceURL[j].id === resData[i].id) {
                  console.log("MATCH");
                  resData[i]["name"] = idTitleSourceURL[j].title;
                  resData[i]["sourceUrl"] = idTitleSourceURL[j].sourceUrl;
                }
              }
            }
            finalRecipes = resData;
            console.log("FINAL DATA: ");
            console.log(finalRecipes);

            setFinalRecipesDOM(finalRecipes);
            console.log("FINAL DATA FOR DOM set");
            /* -------------------------------------------------------
                TODO: SEND FINAL DATA TO DATABASE 
            ---------------------------------------------------------*/
            storeRecipes();
          }, 3500);
        });
      })
      .catch((err) => console.log(err));
  }

  // Get recipe images and ingredients
  function getRecipeImgIngredients() {
    return new Promise(function (resolve, reject) {
      for (let i = 0; i < idTitleSourceURL.length; i++) {
        let queryURLImgs =
          "https://api.spoonacular.com/recipes/" +
          idTitleSourceURL[i].id +
          "/information?apiKey=" +
          spoonacularAPI;

        Spoonacular.getImgIngredients(queryURLImgs).then((res) => {
          console.log(res);
          let ingredients = [];
          let qty = [];
          let units = [];

          for (let i = 0; i < res.data.extendedIngredients.length; i++) {
            ingredients.push(res.data.extendedIngredients[i].name);
            qty.push(res.data.extendedIngredients[i].measures.us.amount);
            units.push(res.data.extendedIngredients[i].measures.us.unitLong);
          }

          imgIngredients.push({
            id: idTitleSourceURL[i].id,
            img: res.data.image,
            ingredients: ingredients,
            qty: qty,
            units: units
          });
        });
      }
      resolve(imgIngredients);
    });
  }

  /* -------------------------------------------------------
                TODO: SEND FINAL DATA TO DATABASE 
    ---------------------------------------------------------*/

  function storeRecipes() {
    console.log("Store recipes");

    // userData.recipes = finalRecipes;
    setUserData({ ...userData, recipes: finalRecipes });

    API.recordRecipes(userData)
      .then((res) => {
        console.log("Recipes added to database!");
        console.log(res.data.name);
        console.log(res.data.recipes[0]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={styles.backgroundColor}>
      {/* <RecipeHeader userName={userData.name}></RecipeHeader> */}
      {/* //TODO: wait until user is defined to add name to page */}
      {userData != [] ? (
        <RecipeHeader userName={userData.name}></RecipeHeader>
      ) : (
        <p>User doesn't exist</p>
      )}
      <h3 className="text-center">Meal Plan For The Week</h3>
      <hr></hr>
      <br></br>
      <Row type="flex">
        {finalRecipesDOM != [] ? (
          finalRecipesDOM.map((recipe, index) => (
            <Col
              key={parseInt(recipe.id + 1)}
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
            >
              <center>
                <RecipeItem
                  img={recipe.img}
                  name={recipe.name}
                  source={recipe.sourceUrl}
                  key={index}
                ></RecipeItem>
              </center>
              <br />
            </Col>
          ))
        ) : (
          <p>Loading Recipes...</p>
        )}
      </Row>
    </div>
  );
}

export default Recipes;
