import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
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

        <div className="mb-nav-links">
          <Menu className="link">
            <MenuButton
              width="fit-content"
              color="White"
              height="50px"
              className="link"
              fontSize="xx-large"
            >
              <HiMenu />
            </MenuButton>
            <MenuList className="pop-over">
              <MenuItem>
                {" "}
                <Link to="/" className="plink">
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/loan" className="plink">
                  Products
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/loan" className="plink">
                  Company
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/qr" className="plink2">
                  {" "}
                  Resources
                </Link>
              </MenuItem>

              <MenuDivider />
              <MenuGroup fontWeight="medium" fontSize="16px" title="Solutions">
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
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>

        <div className="nav-links">
          <Link className="link">Products</Link>
          <Menu className="link">
            <MenuButton width="fit-content" height="25px" className="link">
              Solutions
            </MenuButton>
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
          <Link to="/about" className="link">
            About Us
          </Link>
        </div>

        <div className="buttons">
          <button className="btn">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
