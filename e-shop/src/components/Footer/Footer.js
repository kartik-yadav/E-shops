import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-ul">
          <li className="footer-li footer-m">
            <Link to="/" className="footer-a">
              Home
            </Link>
          </li>
          <li className="footer-li footer-m">
            <Link to="#" className="footer-a">
              About
            </Link>
          </li>
          <li className="footer-li footer-m">
            <Link to="#" className="footer-a">
              Shop
            </Link>
          </li>
          <li className="footer-li">
            <Link to="#" className="footer-a">
              Help
            </Link>
          </li>
        </ul>
        <p>&copy; YourCompanyName</p>
      </div>
    </div>
  );
};

export default Footer;
