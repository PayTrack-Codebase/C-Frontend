import React, { useEffect, useState } from "react";
import ButtonComponent from "../../../Components/Button";
import InputComponent from "../../../Components/InputComponent";

const UploadDocuments = () => {
  const [cac, setCac] = useState("");
  const [nin, setNin] = useState("");
  const [btnDisabled, setBtnDisabled] = useState("");

  useEffect(() => {
    if (cac !== "" && nin !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [cac, nin]);

  const HandleSubmit = () => {
    alert("done")
  };
  return (
    <div className="upload">
      <InputComponent type="text" value={cac} onChange={setCac} label="CAC" />

      <InputComponent type="text" label="NIN " value={nin} onChange={setNin} />

      <ButtonComponent
        disabled={btnDisabled}
        text="Create Account"
        onClickHandler={HandleSubmit}
      />

      <div className="info">
        Note: Your information are secure with us and we won’t use your
        information for anything other than verification of your TrackPay
        account.
      </div>
    </div>
  );
};

export default UploadDocuments;
