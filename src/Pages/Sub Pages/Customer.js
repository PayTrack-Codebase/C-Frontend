import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../Styles/subpage.css";
import { useState, useEffect } from "react";

const Customer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [companyType, setComapanyType] = useState("");
  // const [password, setPassword] = useState("");
  // const [password1, setPassword1] = useState("");
  const [btnDisabled, setBtnDisabled] = useState("");

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== ""
      // companyName !== "" &&
      // companyType !== "" &&
      // password !== "" &&
      // password === password1
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [
    firstName,
    lastName,
    email,
    // companyName,
    // companyType,
    // password,
    // password1,
  ]);

  // const HandleSubmit = () => {
  //   setProgress(2);
  // };
  return (
    <div>
      <Header />
      <div className="customer-content-flex">
        <div className="content-one">
          <h3>CONTACT US</h3>
          <h1>Contact our support team</h1>
          <p>Got a question? Want to learn more about us? Get in touch.</p>
        </div>

        <div className="content-two">
          <h3 className="Hcontact">Contact support by phone</h3>
          <div className="contact-num-div">
            <p>Support number</p>
            <p className="num">+234 808 547 2417</p>
          </div>
          <h3>Submit your inquiry</h3>
          <p>
            Kindly fill this form with your details about your inquiries and we
            would respond shortly.
          </p>
          <div className="content-names">
            <div>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={setFirstName}
                label="FirstName"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={setLastName}
                label="LastName"
              />
            </div>
          </div>
          <div className="content-mail">
            <label> Email</label>
            <input
              type="email"
              value={email}
              onChange={setEmail}
              label="Email"
            />
          </div>
          <div className="content-phone">
            <label>Phone Number</label>
            <input
              type="number"
              value={firstName}
              onChange={setFirstName}
              label="PhoneNumber"
            />
          </div>
          <div className="content-how">
            <label>How did you hear about us?</label>
            <input />
          </div>
          <div className="content-text">
            <label>Your Inquiry</label>
            <textarea className="text"></textarea>
          </div>
          <div>
            <input className="checkbox" type="checkbox" />
            <label className="checkbox-text">
              Check this box to receive marketing updates about Trackpay’s
              products, services, events and content.
            </label>
          </div>
          <div>
            <button className="btn">Submit</button>
            <p className="belowBtn">By submitting this form, i acknowledged the Privacy Policy</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer;
