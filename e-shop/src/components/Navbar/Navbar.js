import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-li navbar-m">
          <Link to="/" className="navbar-a">
            Home
          </Link>
        </li>
        <li className="navbar-li navbar-m">
          <Link to="#" className="navbar-a">
            About
          </Link>
        </li>
        <li className="navbar-li navbar-m">
          <Link to="#" className="navbar-a">
            Shop
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="#" className="navbar-a">
            Help
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/Cart" className="navbar-a navbar-btn">
            <i className="fas fa-shopping-cart"></i> &nbsp;Your Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
