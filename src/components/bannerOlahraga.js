import React from "react";
import { Container } from "react-bootstrap";
import banner from "../asset/bannerOlahraga.svg";
import "../style/landingpage.css";

const BannerOlahraga = () => {
  return (
    <div
      className="intro position-relative"
      style={{ marginBottom: "180px", marginTop: "100px" }}
    >
      <div className="relative h-screen">
        <div
          className="position-absolute text-overlay"
          style={{
            color: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <h1 className="title" style={{ letterSpacing: "10px" }}>
            OLAHRAGA
          </h1>
        </div>
        <img
          className="d-block w-auto"
          src={banner}
          style={{
            marginTop: "75px",
            height: "620px",
            width: "1400px",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default BannerOlahraga;
