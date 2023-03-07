import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import qrimg from "../assets/qrcode-img.svg";
import loan1 from "../assets/loan1.svg";
import loan2 from "../assets/loan2.svg";
import mini1 from "../assets/qr-mini1.svg";
import mini2 from "../assets/qr-mini2.svg";
import mini3 from "../assets/qr-mini3.svg";
import mini4 from "../assets/qr-mini4.svg";
import login from "../assets/login.svg";
import subimg2 from "../assets/CC.svg";
import "./Styles/home.css";
import Footer from "../Components/Footer";

const Qr = () => {
  return (
    <div>
      <Header />
      <div className="intro-section">
        <div className="info-div">
          <h3>QR PAYMENT SYSTEM</h3>
          <h1>QR Code Payment: Quick, secure and convienient.</h1>
          <p>
            Provide a secure and easy way to pay for goods and services using QR
            payments instead of using the traditional payment methods.
          </p>
          <button>
            <Link className="link">Get Started</Link>
          </button>
        </div>

        <div className="image-div-qr">
          <img src={qrimg} alt=""></img>
        </div>
      </div>

      <div className="mini-vw">
        <h3>QR PAYMENT SYSTEM</h3>
        <h1>Payments made easy the TrackPay way.</h1>
        <div className="mini-flex">
          <div>
            <img src={mini1} alt="icon"></img>
            <h3>Retail Outlet</h3>
            <p>
              Merchants can display QR codes in their store, allowing customers
              to easily and securely complete transactions.
            </p>
          </div>
          <div>
            <img src={mini2} alt="icon"></img>
            <h3>Transportation Fares</h3>
            <p>
              Merchants can display QR codes in their store, allowing customers
              to easily and securely complete transactions.
            </p>
          </div>
          <div>
            <img src={mini3} alt="icon"></img>
            <h3>Small and Medium Enterprises</h3>
            <p>
              Merchants can display QR codes in their store, allowing customers
              to easily and securely complete transactions.
            </p>
          </div>
          <div>
            <img src={mini4} alt="icon"></img>
            <h3>E-Commerce Sites</h3>
            <p>
              Merchants can display QR codes in their store, allowing customers
              to easily and securely complete transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="section2-heading">
        <p className="head">BENEFITS</p>
        <h2>QR payment made easy for every business.</h2>

        <div className="section2">
          <div className="image-div">
            <img src={loan1} alt=""></img>
          </div>
          <div className="section2-content">
            <h4 className="intro1">
              Customers can easily make transactions to your account using our
              system.
            </h4>
            <p className="intro2">
              Our loan tracking system automates the loan management process and
              provides real-time updates about the status of loans.
            </p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3-content">
          <h4 className="intro1">
            Easy setup required, affordable plans for the service.
          </h4>
          <p className="intro2">
            Our loan tracking system automates the loan management process and
            provides real-time updates about the status of loans.
          </p>
        </div>
        <div className="image-div">
          <img src={loan2} alt=""></img>
        </div>
      </div>

      <div className="lastSection">
        <div className="head">
          <h3>HOW DOES IT WORK</h3>
          <h1>Four steps to QR payment systems</h1>
        </div>

        <div className="ls-div">
          <div className="list">
            <div className="list1">
              <p className="number">1</p>
              <p className="desc">Create an account.</p>
            </div>
            <div className="list2">
              <p className="number">2</p>
              <p className="desc">Set up the QR payment for your business.</p>
            </div>
            <div className="list3">
              <p className="number">3</p>
              <p className="desc">Start using the service.</p>
            </div>
          </div>
          <div className="img">
            <img src={login}></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qr;
