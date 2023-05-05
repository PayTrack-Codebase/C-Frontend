import React from "react";
import { Link } from "react-router-dom";
import introimg from "../assets/intro-image.svg";
import intro from "../assets/product-section2.svg";
import line from "../assets/line.svg";
import newsletter from "../assets/newsletter.svg";
import qrshop from "../assets/qrShop.svg";
import phone from "../assets/phone-icon.svg";
import email from "../assets/email-icon.svg";
import location from "../assets/location-icon.svg";
import "./Styles/home.css";

const Product = () => {
  return (
    <div>
      <div className="intro-section">
        <div className="info-div">
          <h1>
            At <span>TrackPay</span> , we provide two unique solutions for SME’s
            and businesses.
          </h1>
          <p>
            We are focused in helping small and medium scale businesses thrive
            and success in the Nigerian economy providing the necessary tools
            and techniques needed.
          </p>
        </div>

        <div className="image-div">
          <img src={introimg} alt=""></img>
        </div>
      </div>

      <div className="product-heading">
        <h1>Our Products</h1>
        <p>
          As a technology company in the financial sector, our aim is to provide
          world class solutions and applications that caters to the needs of our
          customers.
        </p>
      </div>
      <div className="section2">
        <div className="image-div">
          <img src={intro} alt=""></img>
        </div>
        <div className="section2-content">
          <div className="withline">
            <div className="withLine">
              <img src={line} alt=""></img>
              <h3>LOAN TRACKING SYSTEMS</h3>
            </div>
          </div>

          <h2>
            A product design to grant both SME’s and financials institutions
            great flexibility and security
          </h2>
          <p>
            Our loan tracking system automates the loan management process and
            provides real-time updates about the status of loans. The system
            helps lenders to keep track of loan applications, disbursements,
            repayments, and other loan-related activities. This helps lenders to
            make informed decisions, increase efficiency, and reduce errors and
            manual effort.
          </p>
          <button className="btn">
            <Link to="/loan" className="link">
              Learn More
            </Link>
          </button>
        </div>
      </div>

      <div className="section3">
        <div className="section3-content">
          <div className="withLine">
            <img src={line} alt=""></img>
            <h3>QR CODE PAYMENT SYSTEMS</h3>
          </div>
          <h2>
            An application that helps to facilitate fast, easy and secure
            payment between business owners and customers
          </h2>
          <p>
            Our QR Code payment system create an avenue for easy, fast and
            secure mode of payment by just scanning the business qr code which
            then automatically connects you to our payment gateway and you
            seamlessly pay for your goods or services.
          </p>
          <button className="btn">
            <Link to="/qr" className="link">
              Learn More
            </Link>
          </button>
        </div>
        <div className="image-div">
          <img src={qrshop} alt=""></img>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-flex">
          <div className="newsletter-flex-image">
            <img src={newsletter} alt=""></img>
          </div>
          <div className="newsletter-flex-content">
            <h1 className="content-head">Our Newletter</h1>
            <h2>Subscribe Now</h2>
            <p>Don’t miss out on our new developments and product offers.</p>
            <div className="input-div">
              <input type="email" placeholder="Enter Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="support">
        <div className="support-content">
          <div className="talk-content">
            <h1>Have a talk with our awesome team</h1>
          </div>

          <div className="support-media-div">
            <div className="support-media-container">
              <div className="media-one">
                <div>
                  <img src={phone} alt="Phone-icon" />
                </div>
                <div>
                  <h1>Call</h1>
                  <p>+2349072475658</p>
                </div>
              </div>
              <div className="media-two">
                <div>
                  <img src={email} alt="email-icon" />
                </div>
                <div>
                  <h1>Email</h1>
                  <p>trackpaytechnology@gmail.com</p>
                </div>
              </div>
              <div className="media-3">
                <div>
                  <img src={location} alt="location-icon" />
                </div>
                <div>
                  <h1>Location</h1>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <p className="footer-desc">
              Our mission is to help your business grow financilly. You can
              consult anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
