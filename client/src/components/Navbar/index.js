import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumd } from "antd";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class Navbar extends React.Component {
  render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[window.location.pathname]}
        >
          <Menu.Item key="1">
            <Link to="/recipes">Recipes</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/shopping">Shopping list</Link>
          </Menu.Item>
          <Menu.Item key="3">Stores</Menu.Item>
          <Menu.Item style={{ float: "right" }} key="4">
            <Link to="/logout">Log Out</Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="5">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="6">
            <Link to="/login">Sign In </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default Navbar;
