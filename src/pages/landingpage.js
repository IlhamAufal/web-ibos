import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MyCarousel from '../components/MyCarousel';
import BoxNews from '../components/BoxNews';
import About from '../components/About';
import Footer from '../components/Footer';
import '../style/landingpage.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div>
        {/* <Intro /> */}
        <MyCarousel />
      <div>
        <h5 className="mySubMenu"><b>Updated News</b></h5>
        <BoxNews />
        {/* <Category /> */}
        <h5 className="myAbout"><b>Tentang IBOS</b></h5>
        <About />
      </div>
      <div className="customSpacing"></div>
    </div></div>
  );
}

export default Landing;
