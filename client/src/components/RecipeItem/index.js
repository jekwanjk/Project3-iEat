import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Button } from "antd";

const { Meta } = Card;

function RecipeItem(props) {
  return (
    <Card style={{ width: 350 }} cover={<img alt="Recipe" src={props.img} />}>
      <h5>{props.name}</h5>
      <center>
        <Button>
          <a href={props.source}> View Recipe</a>
        </Button>
      </center>
    </Card>
  );
}

export default RecipeItem;
