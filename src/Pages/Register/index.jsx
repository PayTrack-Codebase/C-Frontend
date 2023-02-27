import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import Indicator1 from "./assets/Indicator1.svg";
import Indicator2 from "./assets/Indicator2.svg";
import Indicator3 from "./assets/Indicator3.svg";
import "./Style/index.scss";
import AccountDetails from "./SubPages/AddDetails";
import AddService from "./SubPages/AddService";
import UploadDocuments from "./SubPages/Upload";

const Register = () => {
  const [progress, setProgress] = useState(2);
  const [heading, setHeading] = useState("Create My Account");

  useEffect(() => {
    switch (progress) {
      case 0:
        setHeading("Create My Account");
        break;
      case 1:
        setHeading("Account Details");
        break;
      case 2:
        setHeading("Upload Documents");
        break;
      default:
        setHeading("Create My Account");
        break;
    }
  }, [progress]);

  return (
    <div className="register">
      <div className="register_header">
        <img src={Logo} alt="" />
      </div>

      <div className="page_indicator">
        <img
          src={
            progress === 0
              ? Indicator1
              : progress === 1
              ? Indicator2
              : Indicator3
          }
          alt=""
        />
      </div>

      <div className="header_text">
        <h5>{heading}</h5>

        <p>
          Join the thousands of financial companies using TrackPay for their
          businesses.
        </p>
      </div>

      {progress === 0 ? (
        <AddService setProgress={setProgress} />
      ) : progress === 1 ? (
        <AccountDetails setProgress={setProgress} />
      ) : (
        <UploadDocuments />
      )}
    </div>
  );
};

export default Register;
