import React from "react";
import MyCarousel from "../LandingPage/MyCarousel";
import BoxNews from "../LandingPage/BoxNews";
import About from "../LandingPage/About";
import Category from "../LandingPage/Category";
import Atasan from "../LandingPage/Atasan";

const Landing = () => {
  return (
    <div className="landing-container">
      <div>
        {/* <Intro /> */}
        <MyCarousel />
        <div>
          <div className="mySubMenu font-bold" style={{fontSize:'20px'}} >
            Updated News
          </div>
          <BoxNews />

          <div className="myAbout font-bold" style={{fontSize:'45px'}}>
            Everything about IBOS
          </div>
          <About />
        </div>
        <div className="customSpacing"></div>
        <Category />
        <Atasan/>
      </div>
    </div>
  );
};

export default Landing;
