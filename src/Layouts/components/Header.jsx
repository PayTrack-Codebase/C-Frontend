import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.scss";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="auth_header">
      <div className="content">
        <p>Don’t have an account?</p>
        <button onClick={() => navigate("/auth/register")}>Get Started </button>
      </div>
    </div>
  );
};

export default Header;
