import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MyCarousel from '../components/MyCarousel';
import News from '../components/News';
import About from '../components/About';
import Footer from '../components/Footer';
import '../style/landingpage.css';

const NewsPage = () => {
  return (
    <div className="landing-container">
      <div>
        <h5 className="mySubMenu"><b>Updated News</b></h5>
        <News />
        {/* <Category /> */}
        <h5 className="myAbout"><b>Tentang IBOS</b></h5>
        <About />
      </div>
      <div className="customSpacing"></div>
      <div className="myFooter">
        <Footer />
      </div>
    </div>
  );
}

export default NewsPage;
