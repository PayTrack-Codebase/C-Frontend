import React from "react";
import "./index.scss"

const InputComponent = ({ type, label, value, onChange }) => {
  return (
    <div className="form_control">
      <label>
        {label} <span>*</span>
      </label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}/>
      {/* <p></p> */}
    </div>
  );
};

export default InputComponent;
