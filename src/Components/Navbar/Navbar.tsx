import React from "react";
import NavbarLogo from "../../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar-section-div">
      <div className="nav-bar-parent-div">
        <div className="nav-logo-div">
          <img src={NavbarLogo} alt="finsweet logo" />
        </div>

        <div className="nav-content-div">
          <div className="nav-links-div">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="nav-bar-line"></div>

          <div className="nav-contact-div">
            <div>
              <i className="fa fa-phone" id="call-icon" aria-hidden="true"></i>
            </div>
            <ul>
              <li>Road Assistance</li>
              <li>1800 265 24 52</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
