import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./Styles/index.scss";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
