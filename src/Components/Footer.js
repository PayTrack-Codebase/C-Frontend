import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import CopyRight from "../assets/copyright.svg";
import "./Style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Trust us to track your loan process and payments</h2>
        <button className="btn">
          <Link to="/trackpaytechnologies.com/auth/register" className="link">
            Get Started
          </Link>
        </button>

        <div className="logo-div">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="nav-links-div">
          <div className="nav-links">
            <h4>Company</h4>
            <Link to="/trackpaytechnologies.com/about" className="link">
              Our mission
            </Link>
            <Link to="/trackpaytechnologies.com/contact" className="link">
              Our customer
            </Link>
            <Link to="/trackpaytechnologies.com/about" className="link">
              Our Team
            </Link>
            <Link to="/trackpaytechnologies.com/loan" className="link">
              FAQs
            </Link>
          </div>
          <div className="nav-links">
            <h4>Products</h4>
            <Link to="/trackpaytechnologies.com/loan" className="link">
              Loan Tacking System
            </Link>
            <Link to="/trackpaytechnologies.com/QR" className="link">
              QR Payment System
            </Link>
            <Link to="/trackpaytechnologies.com/contact" className="link">
              Pricing
            </Link>
            <Link to="/trackpaytechnologies.com/about" className="link">
              Partners
            </Link>
          </div>
          <div className="nav-links">
            <h4>Solutions</h4>
            <Link to="/trackpaytechnologies.com/product" className="link">
              Financial Industries
            </Link>
            <Link to="/trackpaytechnologies.com/product" className="link">
              SMEs
            </Link>
            <Link to="/trackpaytechnologies.com/products" className="link">
              Banks
            </Link>
          </div>
          <div className="nav-links">
            <h4>Contact Us</h4>
            <Link to="/trackpaytechnologies.com/contact" className="link">
              Contact Us
            </Link>
            <Link to="/trackpaytechnologies.com/auth/login" className="link">
              Login
            </Link>
            <Link to="/trackpaytechnologies.com/auth/register" className="link">
              Get Started
            </Link>
          </div>
        </div>
        <div className="footer-last">
          <div>
            <div>
              <img src={CopyRight} alt="" />
              <p>TrackPay</p>
            </div>

            <Link to="/trackpaytechnologies.com" className="link">
              Terms of service
            </Link>
            <Link to="/trackpaytechnologies.com" className="link">
              Privacy Policy
            </Link>
          </div>
          <div className="socials">
            <img src={instagram} alt="logo"></img>
            <img src={facebook} alt="logo"></img>
            <img src={twitter} alt="logo"></img>
            <img src={linkedin} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
