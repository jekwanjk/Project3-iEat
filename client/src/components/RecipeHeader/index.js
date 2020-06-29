import React from "react";

function RecipeHeader(props) {
  console.log("PROPS", props);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3 text-center">iEat</h1>
        <h2 className=" text-center">Welcome {props.userName}</h2>
      </div>
    </div>
  );
}

export default RecipeHeader;
