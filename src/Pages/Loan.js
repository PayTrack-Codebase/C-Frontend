import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import loanimg from "../assets/loanTrackingImg.svg";
import loan1 from "../assets/loan1.svg";
import loan2 from "../assets/loan2.svg";
import loan3 from "../assets/loan3.svg";
import subimg2 from "../assets/CC.svg";
import "./Styles/home.css";
import Footer from "../Components/Footer";

const Loan = () => {
  return (
    <div>
      <Header />
      <div className="intro-section">
        <div className="info-div">
          <h3 className="loan-head">LOAN TRACKING SYSTEMS</h3>
          <h1>Loan tracking system for financial industries.</h1>
          <p>
            Provide a secure and easy way to pay for goods and services using QR
            payments instead of using the traditional payment methods.
          </p>
          <button>
            <Link className="link">Get Started</Link>
          </button>
        </div>

        <div className="image-div-loan">
          <img src={loanimg} alt=""></img>
        </div>
      </div>

      <div className="section2-heading">
        <p className="head">BENEFITS</p>
        <h2>Loan Tracking built to be evolutionary and secured</h2>
        <div className="section2">
          <div className="image-div">
            <img src={loan1} alt=""></img>
          </div>
          <div className="section2-content">
            <h4 className="intro1">
              Ability to halt transactions in case of breach of loan contracts
            </h4>
            <p className="intro2">
              The ability to halt invalid transactions before they are made is a
              very important tool for lenders to ensure that loans requested are
              used for the intended purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3-content">
          <h4 className="intro1">
            Collaborate with banks to easily give out loans to SMEs or startups.
          </h4>
          <p className="intro2">
            Collabrating with banks would be a very helpful way for startups to
            access the funding they need to launch and grow their businesses.
          </p>
        </div>
        <div className="image-div">
          <img src={loan2} alt=""></img>
        </div>
      </div>
      
      <div className="section2">
        <div className="image-div">
          <img src={loan3} alt=""></img>
        </div>
        <div className="section2-content">
          <h4 className="intro1">
            Ability to monitor and track processes involved for loan
            applications.
          </h4>
          <p className="intro2">
            Collaboraring with banks would be a very helpful way for startups to
            access the funding they need to launch pr grown theor businesses
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loan;
