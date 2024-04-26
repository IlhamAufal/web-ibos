import React from "react";
import { Container } from "react-bootstrap";
import banner from "./asset/bannerIbadah.svg";
import "../style/landingpage.css";

const BannerIbadah = () => {
  return (
    <div className="intro position-relative">
      <div className="relative h-screen">
        <img
          className="d-block w-auto h-80 "
          src={banner}
          style={{
            marginTop: "75px",
            height: "780px",
            width: "1400px",
            zIndex: 2,
          }}
        />
        <div
          className="position-absolute text-overlay"
          style={{
            marginLeft: "45%",
            textAlign: "center",
            zIndex: 1,
            top: "60%",
          }}
        >
          <h1 className="title" style={{ letterSpacing: "10px" }}>
            IBADAH
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerIbadah;
