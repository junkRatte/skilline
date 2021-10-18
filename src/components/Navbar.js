import React, { useState } from "react";
import logo from "../images/logo-nav.svg";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuClass = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Skilline logo" />
        </div>
        <div className="menu">
          <div
            className={`menu-icon ${openMenu ? "menu-icon-open" : null}`}
            onClick={toggleMenuClass}
          >
            <span className="menu-icon-span-one"></span>
            <span className="menu-icon-span-two"></span>
            <span className="menu-icon-span-three"></span>
          </div>

          <div className={`menu-list ${openMenu ? "open-menu" : "close-menu"}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
            <div className="account-buttons">
              <a href="#" className="account-buttons-login">Login</a>
              <a href="#" className="account-buttons-register">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
