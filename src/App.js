import React from 'react';
import './App.css';
import './style/landingpage.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import MyCarousel from './components/MyCarousel';
import Category from './components/Category';
import Footer from './components/Footer';
import News from './components/News';

function App() {
  return (
    <div className="poppins">
      <div className="myBG">
        <NavigationBar />
        {/* <Intro /> */}
        <MyCarousel />
      </div>
      <div>
        <h5 className="mySubMenu" style={{ marginTop: '20.8vh' }}><b>Updated News</b></h5>
        <News />
        <Category />
        <h5 className="myAbout"><b>Tentang IBOS</b></h5>
      </div>
      <div className="customSpacing"></div>
      <div className="myFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
