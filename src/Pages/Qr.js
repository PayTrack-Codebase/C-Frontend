import React from "react";
import { Link } from "react-router-dom";
import qrimg from "../assets/Qrcode-img.png";
import mini1 from "../assets/qr-mini1.svg";
import mini2 from "../assets/qr-mini2.svg";
import mini3 from "../assets/qr-mini3.svg";
import mini4 from "../assets/qr-mini4.svg";
import qrImgOne from "../assets/qr-code-img.png";
import loan2 from "../assets/loan2.svg";
import line from "../assets/line.svg";
import login from "../assets/Qrphone.png";
import QrCarousel from "../Components/QrCarousel";
import "./Styles/home.css";

const Qr = () => {
  const data = [
    {
      id: 1,
      name: "Chinyere Sabdat",
      occupation: "Business Owner",
      description:
        "I have been using this QR payment system for a while now and I am really impressed. I just send a picture of my QR to my customers and they make payments easy. Thank you TrackPay.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 2,
      name: "Efe Chibike",
      occupation: "Business Owner",
      description:
        "As a business owner, I can’t recommend this QR payment system enough. It’s been a game-changer for my business. It also gives my customers more payment options.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 3,
      name: "Chimamanda Akerele",
      occupation: "Business Owner",
      description:
        "I was hesitant to try a QR payment system because i thought it might be complicated for my business. But it was actually easy. I love hoe my customers just need my QR code to make payments.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 4,
      name: "Chinyere Sabdat",
      occupation: "Business Owner",
      description:
        "I have been using this QR payment system for a while now and I am really impressed. I just send a picture of my QR to my customers and they make payments easy. Thank you TrackPay.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 5,
      name: "Efe Chibike",
      occupation: "Business Owner",
      description:
        "As a business owner, I can’t recommend this QR payment system enough. It’s been a game-changer for my business. It also gives my customers more payment options.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 4,
      name: "Chimamanda Akerele",
      occupation: "Business Owner",
      description:
        "I was hesitant to try a QR payment system because i thought it might be complicated for my business. But it was actually easy. I love hoe my customers just need my QR code to make payments.",
      location: "Lagos, Nigeria.",
    },
  ];

  return (
    <div>
      <div className="intro-section">
        <div className="info-div">
          <div className="withLine-QR">
            <img src={line} alt=""></img>
            <h3 className="loan-head">QR PAYMENT SYSTEM</h3>
          </div>
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
        <div className="withline-gb">
          <div className="withLine">
            <img src={line} alt=""></img>
            <h3>QR-CODE PAYMENT</h3>
          </div>
        </div>
        <h1 className="mini-w-h">Payments made easy the TrackPay way.</h1>
        <p className="mini-w-p">
          Our QR payment system handles works perfectly with every businesses in
          Nigeria.
        </p>
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

      <div className="benefits-QR">
        <div className="section2-heading">
          <div className="withline-gb">
            <div className="withLine">
              <img src={line} alt=""></img>
              <h3>BENEFITS</h3>
            </div>
          </div>
          <h2 className="mini-w-h">
            Loan Tracking built to be evolutionary and secured
          </h2>

          <div className="section2">
            <div className="image-div">
              <img src={qrImgOne} alt=""></img>
            </div>
            <div className="section2-content">
              <h4 className="intro1">
                Transactions can be made easily using your unique QR code.
              </h4>
              <p className="intro2">
                The ability to halt invalid transactions before they are made is
                a very important tool for lenders to ensure that loans requested
                are used for the intended purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="section3-content">
            <h4 className="intro1">
              Manage your payments easily in one place.
            </h4>
            <p className="intro2">
              Collabrating with banks would be a very helpful way for startups
              to access the funding they need to launch and grow their
              businesses.
            </p>
          </div>
          <div className="image-div">
            <img src={loan2} alt=""></img>
          </div>
        </div>
      </div>

      <div className="lastSection">
        <div className="ls-div">
          <div className="list">
            <div className="withline-QR">
              <div className="withLine">
                <img src={line} alt=""></img>
                <h3>HOW IT WORKS</h3>
              </div>
            </div>

            <div className="list1">
              <p className="number">1</p>
              <div>
                <p className="desc-head">Create an account</p>
                <p className="desc">
                  Sign up for an account on TrackPay with your name, email
                  address, phone number and business details.
                </p>
              </div>
            </div>

            <div className="list1">
              <p className="number">2</p>
              <div>
                <p className="desc-head">Setup QR payment codes.</p>
                <p className="desc">
                  Create your unique QR payment codes for products, donations
                  and subscriptions to accept payments from anyone.
                </p>
              </div>
            </div>

            <div className="list1">
              <p className="number">3</p>
              <div>
                <p className="desc-head">Accept payments.</p>
                <p className="desc">
                  Share your QR payment codes with your customers via social
                  networks and more to start accepting payments.
                </p>
              </div>
            </div>
            <button className="btn">Get Started</button>
          </div>
          <div className="img">
            <img src={login} alt="pics"></img>
          </div>
        </div>
      </div>
      <QrCarousel data={data} />
    </div>
  );
};

export default Qr;
