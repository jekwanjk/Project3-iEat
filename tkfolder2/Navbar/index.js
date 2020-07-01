import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"; 


function Navbar() {
   return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }
			     >
             Home
            </Link>
          </li>
        <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
			     >
             Login 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/recipes"
              className={
                 window.location.pathname === "/recipes"
                  ? "nav-link active"
                  : "nav-link"
              }
			     >
             Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shopping"
              className={
                window.location.pathname === "/shopping"
                  ? "nav-link active"
                  : "nav-link"
              }
			     >
             Shopping List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;