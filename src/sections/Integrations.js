import React from "react";
import OneDriveLogo from "../images/onedrive-logo.png";
import DropBoxLogo from "../images/dropbox-logo.png";
import GoogleDriveLogo from "../images/googledrive-logo.png";
import TLogo from "../images/t-logo.png";

function Integrations() {
  return (
    <div className="integrations-section">
      <div className="integrations-section-logos">
        <div className="logos-grid">
          <img src={OneDriveLogo} />
          <img src={DropBoxLogo} />
          <img src={GoogleDriveLogo} />
          <img src={TLogo} />
        </div>
      </div>
      <div className="integrations-section-description">
        <div className="line-text">
          <span></span>
          <h2>Integrations</h2>
        </div>
        <h3>
          200+ educational tools and
          <br />
          platform <span>integrations</span>
        </h3>
        <p>
          Schoology has every tool your classroom needs and comes
          pre-integrated with more than 200+ tools, student information
          systems (SIS) and education platforms.
        </p>
        <a href="#">See All Integrations</a>
      </div>
    </div>
  );
}

export default Integrations;
