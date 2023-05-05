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
import login from "../assets/login.svg";
import QrCarousel from "../Components/QrCarousel";
import review1 from "../assets/png/Team1.png";
import review2 from "../assets/png/Team2.png";
import review3 from "../assets/png/Team3.png";
import "./Styles/home.css";

const Qr = () => {
  const data = [
    {
      id: 1,
      image: review1,
      name: "Chinyere Sabdat",
      occupation: "Business Owner",
      description:
        "I have been using this QR payment system for a while now and I am really impressed. I just send a picture of my QR to my customers and they make payments easy. Thank you TrackPay.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 2,
      image: review2,
      name: "Efe Chibike",
      occupation: "Business Owner",
      description:
        "As a business owner, I can’t recommend this QR payment system enough. It’s been a game-changer for my business. It also gives my customers more payment options and flexibility.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 3,
      image: review3,
      name: "Chimamanda Akerele",
      occupation: "Business Owner",
      description:
        "I was hesitant to try a QR payment system because i thought it might be complicated for my business. But it was actually easy. I love hoe my customers just need my QR code to make payments.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 4,
      image: review1,
      name: "Chinyere Sabdat",
      occupation: "Business Owner",
      description:
        "I have been using this QR payment system for a while now and I am really impressed. I just send a picture of my QR to my customers and they make payments easy. Thank you TrackPay.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 5,
      image: review2,
      name: "Efe Chibike",
      occupation: "Business Owner",
      description:
        "As a business owner, I can’t recommend this QR payment system enough. It’s been a game-changer for my business. It also gives my customers more payment options and flexibility.",
      location: "Lagos, Nigeria.",
    },
    {
      id: 6,
      image: review3,
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
            <Link to="/trackpaytechnologies.com/auth/register" className="link">
              Get Started
            </Link>
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
          Our QR-code payment system works perfectly with every type and mode of
          businesses in Nigeria.
        </p>
        <div className="mini-flex">
          <div>
            <img src={mini1} alt="icon"></img>
            <h3>Retail Outlet</h3>
            <p>
              Merchants can display thier unique QR code in their store,
              allowing customers to easily and securely complete transactions.
            </p>
          </div>
          <div>
            <img src={mini2} alt="icon"></img>
            <h3>Transportation Fares.</h3>
            <p>
              Easily scan and pay for transport fares while on the go with
              worrying about network or transfer delays.
            </p>
          </div>
          <div>
            <img src={mini3} alt="icon"></img>
            <h3>Small and Medium Enterprises.</h3>
            <p>
              A solution like this helps SMEs to build and grow thier businesses
              by making transfer processes fast, safe and reliable.
            </p>
          </div>
          <div>
            <img src={mini4} alt="icon"></img>
            <h3>E-Commerce Sites</h3>
            <p>
              A digital store? no problem as the system has the ability to scan
              QR codes sent as an image to your phone.
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
                Easily carry out transactions by creating a unique QR code in
                which your customers can easily scan and pay for goods and
                services.
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
              An all in one app where you can securely manage and monitor your
              payments with ease and efficiency.
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
            <h1 className="list-heading">
              Start accessing payments in less than 10 minutes
            </h1>
            <div className="list1">
              <div className="number">
                <p className="num">1</p>
              </div>
              <div>
                <p className="desc-head">Create an account</p>
                <p className="desc">
                  Sign up for an account on TrackPay with your name, email
                  address, phone number and business details.
                </p>
              </div>
            </div>

            <div className="list1">
              <div className="number">
                <p className="num">2</p>
              </div>
              <div>
                <p className="desc-head">Setup QR payment codes.</p>
                <p className="desc">
                  Create your unique QR payment codes for products, donations
                  and subscriptions to accept payments from anyone.
                </p>
              </div>
            </div>

            <div className="list1">
              <div className="number">
                <p className="num">3</p>
              </div>

              <div>
                <p className="desc-head">Accept payments.</p>
                <p className="desc">
                  Share your QR payment codes with your customers via social
                  networks and more to start accepting payments.
                </p>
              </div>
            </div>
            <button className="btn">
              <Link
                to="//trackpaytechnologies.com/auth/register"
                className="link"
              >
                Get Started
              </Link>
            </button>
          </div>
          <div className="img">
            <img src={login} alt="pics"></img>
          </div>
        </div>
      </div>
      <QrCarousel data={data} />
      <section className="getting-started">
        <h1 className="gt-heading">Getting Started</h1>
        <div className="GT-parent">
          <div className="GT-flex1">
            <h1>Talk to our sales team</h1>
            <p>
              Find out which of our products fit your business needs and get all
              your questions answered.
            </p>
            <Link to="/trackpaytechnologies.com/contact" className="btn">
              Contact sales
            </Link>
          </div>
          <div className="GT-flex2">
            <h1>Talk to our support team</h1>
            <p>
              Get access to helpful tips, articles and FAQs to get the most out
              of Track Pay.
            </p>
            <Link to="/trackpaytechnologies.com/contact" className="btn">
              Visit our support center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qr;
