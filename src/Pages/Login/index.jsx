import React from "react";
import "./Style/index.scss";
import Logo from "./assets/Logo.svg";
import Google from "./assets/Google.svg";
import Microsoft from "./assets/Microsoft.svg";
import InputComponent from "../../Components/InputComponent";

const Login = () => {
  return (
    <div className="login">
      <div className="login_header">
        <img src={Logo} alt="" />
      </div>
      <div className="login_body">
        <InputComponent type="email" label="Email" />

        <InputComponent type="password" label="Password" />
        <div className="forgot_password">Forgot Password?</div>

        <button id="button">Login</button>

        <div className="divider">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <div className="ouath">
          <div className="ouath_button">
            <div>
              <img src={Google} alt="" />
            </div>

            <p>Login using Google </p>
          </div>

          <div className="ouath_button">
            <div>
              <img src={Microsoft} alt="" />
            </div>

            <p>Login using Microsoft </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
