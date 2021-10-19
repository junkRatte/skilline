import React from "react";
import landingImg from "../images/header-pic.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-container-background">
        <div className="landing-image">
          <img src={landingImg} />
        </div>
      </div>
      <div className="landing-container-content">
        <div className="landing-title">
          <h1>
            <span>Studying</span> Online is now
            <br />
            much easier
          </h1>
          <p>
            Skilline is an interesting platform that will teach
            <br />
            you in a more interactive way
          </p>
          <div className="landing-buttons">
            <a href="#" className="join-button">
              Join for free
            </a>
            <a href="#" className="video-button">
              Watch how it works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
