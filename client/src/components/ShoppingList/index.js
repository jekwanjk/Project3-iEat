import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ShoppingList(props) {
  return (
    <form className="shopping">
      <div className="form-group">
        <button
          type="submit"
          onClick={props.handleSubmitBtn}
          className="btn btn-success"
        >
          Shopping List
        </button>
      </div>
    </form>
  );
}

export default ShoppingList;
