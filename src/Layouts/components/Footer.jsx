import React from "react";
import "../Styles/Footer.scss";
import CopyRight from "../assets/CopyRight.svg";

const Footer = () => {
  return (
    <div className="auth_footer">
      <div className="footer_body">
        <div className="footer_links">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Legal Notice
          </a>
        </div>
        <div className="copyright">
          <img src={CopyRight} alt="" />
          <p>2023</p>
          <p>TrackPay</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
