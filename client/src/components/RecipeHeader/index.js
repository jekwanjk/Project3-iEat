import React from "react";

function RecipeHeader(props) {
  console.log("PROPS", props);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3 text-center">iEat</h1>
        <p className="lead text-center">Welcome {props.userName}</p>
      </div>
    </div>
  );
}

export default RecipeHeader;
