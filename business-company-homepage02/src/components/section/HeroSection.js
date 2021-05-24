import React from "react";
import "./HeroSection.css";
// import mp4 from "../../videos/video-1.mp4";

import Button from "../button/Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src={mp4} autoPlay loop muted /> */}
      <img src="images/img-home.jpg" alt="" />
      <h1>SPORT GYM FITNESS CENTER</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          get started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          watch trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
