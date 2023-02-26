import React, { useEffect, useState } from "react";
import ButtonComponent from "../../../Components/Button";

const AddService = ({ setProgress }) => {
  const [service, setService] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (service !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [service]);

  const HandleSubmit = () => {
    setProgress(1);
  };

  return (
    <div className="add_service">
      <div className="form">
        <div className="question">
          <h6>Which solution are you registering for?</h6>
          <span>*</span>
        </div>

        <p>
          TrackPay offers both Loan Tracking Systems for financial companies,
          also QR payment systems for SMEs and Start ups.
        </p>

        <select
          placeholder="Select Service...."
          onChange={(e) => setService(e.currentTarget.value)}
        >
          <option value=""> Select Service....</option>
          <option value="Loan Tracking System"> Loan Tracking System</option>
          <option value="QR Payment System"> QR Payment System</option>
        </select>
      </div>
      <ButtonComponent
        text="Continue"
        onClickHandler={HandleSubmit}
        disabled={btnDisabled}
      />
    </div>
  );
};

export default AddService;
