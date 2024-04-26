import React from "react";
import MyCarousel from "../LandingPage/MyCarousel";
import BoxNews from "../LandingPage/BoxNews";
import About from "../LandingPage/About";
import "../style/landingpage.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div>
        {/* <Intro /> */}
        <MyCarousel />
        <div>
          <h5 className="mySubMenu">
            <b>Updated News</b>
          </h5>
          <BoxNews />
          {/* <Category /> */}
          <h5 className="myAbout">
            <b>Tentang IBOS</b>
          </h5>
          <About />
        </div>
        <div className="customSpacing"></div>
      </div>
    </div>
  );
};

export default Landing;
