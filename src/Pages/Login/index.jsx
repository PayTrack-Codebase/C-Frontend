import React, { useEffect, useState } from "react";
import "./Style/index.scss";
import Logo from "../../assets/logo2.svg";
import Google from "./assets/Google.svg";
import Microsoft from "./assets/Microsoft.svg";
import Error from "./assets/Error.svg";
import InputComponent from "../../Components/InputComponent";
import ButtonComponent from "../../Components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && password.length > 3) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);


  return (
    <div className="login">
      <div className="login_header">
        <img src={Logo} alt="" />
      </div>
      {false && (
        <div className="error_card">
          <img src={Error} alt="" />
          <p>Incorrect login details</p>
        </div>
      )}
      <div className="login_body">
        <InputComponent
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
        />

        <InputComponent
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <div className="forgot_password">Forgot Password?</div>

        <ButtonComponent text="Continue" disabled={btnDisabled} />

        <div className="divider">
          <hr />
          <p>OR</p>
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
