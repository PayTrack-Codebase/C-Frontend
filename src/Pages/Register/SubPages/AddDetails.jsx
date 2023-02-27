import React, { useEffect, useState } from "react";
import ButtonComponent from "../../../Components/Button";
import InputComponent from "../../../Components/InputComponent";

const AccountDetails = ({ setProgress }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyType, setComapanyType] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [btnDisabled, setBtnDisabled] = useState("");

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      companyName !== "" &&
      companyType !== "" &&
      password !== "" &&
      password === password1
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [
    firstName,
    lastName,
    email,
    companyName,
    companyType,
    password,
    password1,
  ]);

  const HandleSubmit = () => {
    setProgress(2);
  };
  return (
    <div className="account_details">
      <div className="names">
        <div style={{ width: "47%" }}>
          <InputComponent
            type="text"
            value={firstName}
            onChange={setFirstName}
            label="FirstName"
          />
        </div>
        <div style={{ width: "47%" }}>
          <InputComponent
            type="text"
            value={lastName}
            onChange={setLastName}
            label="FirstName"
          />
        </div>
      </div>
      <InputComponent
        type="email"
        value={email}
        onChange={setEmail}
        label="Email"
      />

      <InputComponent
        type="text"
        label="Company Name "
        value={companyName}
        onChange={setCompanyName}
      />

      <InputComponent
        type="text"
        label="Company Type "
        value={companyType}
        onChange={setComapanyType}
      />

      <InputComponent
        type="password"
        label="Password"
        value={password}
        onChange={setPassword}
      />

      <InputComponent
        type="password"
        label="Confirm Password "
        value={password1}
        onChange={setPassword1}
      />

      <ButtonComponent
        disabled={btnDisabled}
        text="Continue"
        onClickHandler={HandleSubmit}
      />
    </div>
  );
};

export default AccountDetails;
