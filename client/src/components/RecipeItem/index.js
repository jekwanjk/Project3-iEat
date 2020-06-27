import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Button } from "antd";

const { Meta } = Card;

function RecipeItem() {
  return (
    <Card
      style={{ width: 400 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <h3>Header</h3>
      <center>
        <Button>
          <a href="http://www.google.com">Default Button</a>
        </Button>
      </center>
    </Card>
  );
}

export default RecipeItem;
