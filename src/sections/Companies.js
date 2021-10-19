import React from "react";
import googleLogo from "../images/google-logo.svg";
import netflixLogo from "../images/netflix-logo.svg";
import airbnbLogo from "../images/airbnb-logo.svg";
import amazonLogo from "../images/amazon-logo.svg";
import grabLogo from "../images/grab-logo.svg";
import FacebookLogo from "../components/FacebookLogo";

function Companies() {
  return (
    <div className="companies-section">
      <h2>Trusted by 5,000+ Companies Worldwide</h2>
      <div className="company-logos">
        <img src={googleLogo} alt="A logo of Google" />
        <img src={netflixLogo} alt="A logo of Netflix" />
        <img src={airbnbLogo} alt="A logo of AirBnb" />
        <img src={amazonLogo} alt="A logo of Amazong" />
        <FacebookLogo />
        <img src={grabLogo} alt="A logo of Grab" />
      </div>
    </div>
  );
}

export default Companies;
