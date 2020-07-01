import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Button } from "antd";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ShoppingList(props) {
  return (
    <form className="shopping">
      <div className="form-group">
        <center>
          <Button
            type="primary"
            onClick={props.handleSubmitBtn}
            className="btn btn-success"
          >
            Shopping List
          </Button>
        </center>
      </div>
    </form>
  );
}

export default ShoppingList;
