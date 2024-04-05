import React from "react";
import { Container } from "react-bootstrap";
import banner from '../asset/bannerIbadah.svg';
import '../style/landingpage.css';

const BannerIbadah = () => {
  return (
    <div className="intro position-relative" style={{marginTop: '20vh'}} >
      <div className="relative h-screen" style={{ marginTop: '75px', height:'603px', width:'1440px'}}>
        <img
          className="d-block w-auto h-80"
          src={banner}
        />
      </div>
    </div>
  );
};

export default BannerIbadah;
