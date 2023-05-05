import React from "react";
import { Link } from "react-router-dom";
import introimg from "../assets/intro-image.svg";
import intro from "../assets/intro.svg";
import line from "../assets/line.svg";
import qrshop from "../assets/qrShop.svg";
import subimg1 from "../assets/fastCom.svg";
import subimg2 from "../assets/CC.svg";
import "./Styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="intro-section">
        <div className="info-div">
          <h1>
            <span>Tracking Loans</span> made easy for companies offering them.
          </h1>
          <p>
            A full-stack tracking solution - built majorly to track loans and
            monitor offered to individuals companies and SME’s. All supported by
            dedicated teams, with expertise in every major market.
          </p>
        </div>
        <div className="image-div">
          <img src={introimg} alt=""></img>
        </div>
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

          <h2>Get control and visibility over every loan requested</h2>
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
          <h2>Make payments easy using our QR apps</h2>
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

      <div className="section4">
        <h2 className="section4-h2">Here's why our customers love us</h2>
        <p className="section4-p">
          We handle financial activities in a very easy and simple manner.
        </p>
        <div className="section4-child">
          <div>
            <img src={subimg1} alt=""></img>
            <h4>Fast and secure method of loan tracking and disbursement</h4>
            <p>
              We offer a fast and secure method of loan tracking disbursements
              which could be done through digital platform using blockchain
              technology.
            </p>
          </div>
          <div>
            <img src={subimg2} alt=""></img>
            <h4>Strong team of dedicated experts under one roof</h4>
            <p>
              Having all the experts under one roof allows for efficient
              communication, easy collaboration and faster decision-making
              process.
            </p>
          </div>
          <div>
            <img src={subimg1} alt=""></img>
            <h4>Real-time updates on loan tracking and transactions made</h4>
            <p>
              We provide real-time information on loan balances, payments and
              transactions enabling users have complete visibility into their
              loan status.
            </p>
          </div>
          <div>
            <img src={subimg2} alt=""></img>
            <h4>Expertise and dedicated customer support</h4>
            <p>
              Our customer support team is focused solely on providing
              assistance to customers, ensuring that their queries and concerns
              are addressed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
