import React from "react";
import "./index.scss";

const ButtonComponent = ({ disabled = true, text, onClickHandler }) => {
  return (
    <div>
      <button id="button" disabled={disabled} onClick={() => onClickHandler()}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
