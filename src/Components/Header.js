import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Style/header.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <div className="logo-div">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <div className="nav-links">
          <Link className="link">Products</Link>
          <Menu className="link">
            <MenuButton width="fit-content" height="25px" className="link">Solutions</MenuButton>
            <MenuList className="pop-over">
              <MenuItem>
                {" "}
                <Link to="/loan" className="plink">
                  Loan Tracking Sytem
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/qr" className="plink2">
                  {" "}
                  QR Code Payment System
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Link to="/" className="link">
            Company
          </Link>
          <Link to="/" className="link">
            Resources
          </Link>
        </div>

        <div className="buttons">
          <button className="btn">
            <Link to="/customer" className="link">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
