import React from "react";
import { Container } from "react-bootstrap";
import banner from "./asset/IBOS profile poster.png";
import "./komunitasStyle.css";
import MaskedContainer from "../General/MaskedContainer"; // Sesuaikan dengan path komponen MaskedContainer Anda

const BannerIbadah = () => {
  return (
    <MaskedContainer>
      <div className="intro position-relative">
        <div className="relative h-screen">
          <img
            className="d-block h-80"
            src={banner}
            style={{
              marginTop: "260px",
              height: "605px",
              width: "100%",
              zIndex: 2,
            }}
            alt="IBOS Profile Poster"
          />
          <div
            className="position-absolute text-overlay"
            style={{
              textAlign: "center",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="title" style={{ letterSpacing: "10px" }}>
              IBOS COMMUNITY
            </h1>
          </div>
        </div>
      </div>
    </MaskedContainer>
  );
};

export default BannerIbadah;
