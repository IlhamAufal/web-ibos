import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";
import "../style/gallery-grid.css"; // Pastikan path-nya sesuai dengan lokasi file CSS
import park from "../asset/park.jpg";
import bridge from "../asset/bridge.jpg";
import coast from "../asset/coast.jpg";
import tunnel from "../asset/tunnel.jpg";
import rails from "../asset/rails.jpg";
import traffic from "../asset/traffic.jpg";
import rocks from "../asset/rocks.jpg";
import benches from "../asset/benches.jpg";
import sky from "../asset/sky.jpg";

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "20px",
        margin: "auto",
        marginBottom: "50px",
        marginTop: "350px",
        maxWidth: "1400px",
      }}
    >
      <Container>
      <link rel="stylesheet" href="gallery-grid.css" />
      <div className="container gallery-container">
        <div className="tz-gallery">
        <div className="mySubMenu1" style={{ marginBottom: "30px", maxWidth:'50%'}}>
          Dokumentasi
        </div>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={park}>
                <img src={park} alt="Park" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={bridge}>
                <img src={bridge} alt="Bridge" />
              </a>
            </div>
            <div className="col-sm-12 col-md-4">
              <a className="lightbox" href={tunnel}>
                <img src={tunnel} alt="Tunnel" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={coast}>
                <img src={coast} alt="Coast" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={rails}>
                <img src={rails} alt="Rails" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={traffic}>
                <img src={traffic} alt="Traffic" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={rocks}>
                <img src={rocks} alt="Rocks" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={benches}>
                <img src={benches} alt="Benches" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href={sky}>
                <img src={sky} alt="Sky" />
              </a>
            </div>
          </div>
        </div>
      </div>
        {/* <div style={{ marginLeft: "43%" }}>
          <PopUp />
        </div> */}
      </Container>
    </div>
  );
};

export default Documentation;
