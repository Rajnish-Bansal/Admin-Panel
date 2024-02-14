import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

function menu(props) {
  return (
    <div className="nav-div">
      <h1 className="heading">Admin Panel</h1>
      <div className="nav-list">
        <Link to={"Create"}>
          <div className="nav-item create">Create Item</div>
        </Link>
        <Link to={"/List"}>
          
          <div className="nav-item list">View List</div>
        </Link>
      </div>

      <div className="login-nav">
        <Link to={"/"}>
          <div className="nav-item list">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default menu;
