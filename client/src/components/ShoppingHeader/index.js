import React from "react";

function ShoppingHeader(props) {
  console.log("PROPS", props);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3 text-center">iEat</h1>
      </div>
    </div>
  );
}

export default ShoppingHeader;
