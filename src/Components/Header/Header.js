import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={{ color: "white", fontSize: "20px" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: "white", fontSize: "20px" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ color: "white", fontSize: "20px" }} to="/login">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
