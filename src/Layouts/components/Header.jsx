import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="auth_header">
      {pathname === "/auth/login" ? (
        <div className="content">
          <p>Don’t have an account?</p>
          <button onClick={() => navigate("/auth/register")}>
            Get Started{" "}
          </button>
        </div>
      ) : (
        <div className="content">
          <p>Already have an account?</p>
          <button onClick={() => navigate("/auth/login")}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
