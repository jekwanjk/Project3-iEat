import React from "react";

function RecipeHeader(props) {
  console.log("PROPS", props);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <center>
          <h1 id="logo">
            <i className="fas fa-utensils"></i> iEat
          </h1>
        </center>
        <h2 className=" text-center">Welcome {props.userName}</h2>
      </div>
    </div>
  );
}

export default RecipeHeader;
