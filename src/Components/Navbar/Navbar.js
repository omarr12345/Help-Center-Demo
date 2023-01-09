import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={require("../../assets/argaam-plus-en.png")}
          className="argaam-icon"
        />
      </Link>
    </div>
  );
}

export default Navbar;
