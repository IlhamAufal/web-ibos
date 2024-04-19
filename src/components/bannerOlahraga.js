import React from "react";
import { Container } from "react-bootstrap";
import banner from "../asset/bannerOlahraga.svg";
import "../style/landingpage.css";

const BannerOlahraga = () => {
  return (
    <div className="intro position-relative">
      <div className="relative h-screen">
        <img
          className="d-block w-auto h-80"
          src={banner}
          style={{ marginTop: "75px", height: "780px", width: "1400px" }}
        />
      </div>
    </div>
  );
};

export default BannerOlahraga;
