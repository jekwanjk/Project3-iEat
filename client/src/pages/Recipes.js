import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Spoonacular from "../utils/Spoonacular";
import RecipeHeader from "../components/RecipeHeader";
import RecipeItem from "../components/RecipeItem";
import { Row, Col } from "antd";

function Recipes() {
  // userData holds inputted fields from sign up form
  const [userData, setUserData] = useState({
    name: "Amanda",
    dietRestrictions: "peanuts",
    calories: 2000,
    dietType: "Gluten Free"
  });

  // Array of recipe ids, title, sourceURL
  const idTitleSourceURL = [];

  // Array of objects with id, img, ingredients, qty, and units
  const imgIngredients = [];

  // Final recipes array of objects with id, title, sourceURL, img, ingredients, qty, and units
  let finalRecipes = [];

  useEffect(() => {
    /* -------------------------------------------------------
    TODO: CALL BACK END TO GET USER DATA 
    ---------------------------------------------------------*/

    // TODO: Call backend to get the user data
    // API.getUserInfo()
    //     .then((res) => SET USER DATA)
    //     .catch((err) => console.log(err));

    console.log(JSON.stringify(userData));

    // Get all recipes from Spoonacular API
    getAllRecipes(
      userData.dietRestrictions,
      userData.calories,
      userData.dietType
    );
  }, []);

  // Set Spoonacular API res.data to originalRecipes variable
  function getAllRecipes(dietRestrictions, calories, dietType) {
    Spoonacular.getRecipes(dietRestrictions, calories, dietType)
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
            /* -------------------------------------------------------
                TODO: SEND FINAL DATA TO DATABASE 
                - ingredients, qty, and units are all arrays - must 
                make them to string so that they can be passed to 
                the database
            ---------------------------------------------------------*/
          }, 2000);
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
          "/information?apiKey=e4dd8c896acb49c3a477774ef868e953";

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

  return (
    <div>
      <RecipeHeader userName={userData.name}></RecipeHeader>
      <h3 className="text-center">Meal Plan For The Week</h3>
      <hr></hr>
      <br></br>
      <h3 className="text-center">Day 1</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            {/* <RecipeItem
              img={finalRecipes[0].img}
              name={finalRecipes[0].name}
              source={finalRecipes[0].sourceUrl}
            ></RecipeItem> */}
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 2</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 3</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 4</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 5</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 6</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>

      <br></br>
      <h3 className="text-center">Day 7</h3>
      <br></br>
      <Row type="flex">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <center>
            <RecipeItem></RecipeItem>
          </center>
        </Col>
      </Row>
    </div>
  );
}

export default Recipes;
