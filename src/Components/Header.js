import React from "react";
import { Link } from "react-router-dom";
import logo from "../Svg assets/Logo.svg";
import "./Style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <div className="logo-div">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="nav-links">
          <Link className="link">Solutions</Link>
          {/* <div className="pop-over">
            <Link>Loan Tracking Sytem</Link>
            <Link> QR Code Payment System</Link>
          </div> */}
          <Link to="pricing" className="link">
            Pricing
          </Link>
          <Link to="customers" className="link">
            Customers
          </Link>
          <Link to="about" className="link">
            About us
          </Link>
        </div>

        <div className="buttons">
          <Link to="login" className="btn-link">
            Login
          </Link>
          <button className="btn">
            <Link to="getStarted" className="link">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
