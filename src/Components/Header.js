import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Style/header.css";
import { useState } from "react";

const Header = () => {
  const [clicked, setclicked] = useState(false);

  const handleclick = () => {
    document.getElementById("pop-over").style.display = "flex";
    setclicked(true);
    console.log("test");
  };
  return (
    <div className="header">
      <div className="header-section">
        <div className="logo-div">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <div className="nav-links">
          <Link className="link">
            <Link className="link" clicked={clicked} onClick={handleclick}>
              Solutions
            </Link>
            <div className="pop-over" id="pop-over">
              <Link to="/loan" className="plink">
                Loan Tracking Sytem
              </Link>
              <Link to="/qr" className="plink">
                {" "}
                QR Code Payment System
              </Link>
            </div>
          </Link>

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
          <Link to="/auth/login" className="btn-link">
            Login
          </Link>
          <button className="btn">
            <Link to="/auth/register" className="link">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
