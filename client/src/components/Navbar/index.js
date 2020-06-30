import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumd} from 'antd';


const {Header} = Layout;
const SubMenu = Menu.SubMenu;

class Navbar extends React.Component {
   render() { 
   return(
      <Header> 
   

   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
   <Menu.Item key="1">Recipes</Menu.Item>
   <Menu.Item key="2">Shopping list</Menu.Item>
   <Menu.Item key="3">Stores</Menu.Item>
 </Menu>

</Header>
) 
}}
export default Navbar;
