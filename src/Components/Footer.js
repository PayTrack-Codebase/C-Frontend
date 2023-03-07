import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Trust us to track your loan process and payments</h2>
        <button className="btn">
          <Link to="getStarted" className="link">
            Get Started
          </Link>
        </button>

        <div className="logo-div">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="nav-links-div">
          <div className="nav-links">
            <h4>Company</h4>
            <Link to="mission" className="link">
              Our mission
            </Link>
            <Link to="customer-page" className="link">
              Our customer
            </Link>
            <Link to="team" className="link">
              Our Team
            </Link>
            <Link to="faq" className="link">
              FAQs
            </Link>
          </div>
          <div className="nav-links">
            <h4>Products</h4>
            <Link to="solutions" className="link">
              Loan Tacking System
            </Link>
            <Link to="pricing" className="link">
              QR Payment System
            </Link>
            <Link to="customers" className="link">
              Pricing
            </Link>
            <Link to="about" className="link">
              Partners
            </Link>
          </div>
          <div className="nav-links">
            <h4>Solutions</h4>
            <Link to="solutions" className="link">
              Financial Industries
            </Link>
            <Link to="pricing" className="link">
              SMEs
            </Link>
            <Link to="customers" className="link">
              Banks
            </Link>
          </div>
          <div className="nav-links">
            <h4>Contact Us</h4>
            <Link to="solutions" className="link">
              Contact Us
            </Link>
            <Link to="pricing" className="link">
              Login
            </Link>
            <Link to="customers" className="link">
              Get Started
            </Link>
          </div>
        </div>
        <div className="footer-last">
          <div>
            <p>TrackPay</p>
            <Link to="solutions" className="link">
              Terms of service
            </Link>
            <Link to="solutions" className="link">
              Privacy Policy
            </Link>
            <Link to="solutions" className="link">
              Products
            </Link>
          </div>
          <div>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
