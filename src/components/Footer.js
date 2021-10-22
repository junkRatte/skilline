import React from "react";
import logo from "../images/logo-footer.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} />
        <span></span>
        <p>
          Virtual Class
          <br />
          for Zoom
        </p>
      </div>
      <div className="footer-form">
        <h3>Subscribe to get our Newsletter</h3>
        <form>
          <input
            className="email-input"
            placeholder="Your Email"
            type="email"
          />
          <input className="submit-button" value="Submit" type="submit" />
        </form>
      </div>
      <div className="footer-copyright">
        <ul>
          <li>
            <a href="#">Carreers</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <p>&copy; 2021 Class Technologies Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
