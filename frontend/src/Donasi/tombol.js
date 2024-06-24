import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import flatDonation from "../Donasi/asset/flatDonation.svg";
// import flatZakat from "../Donasi/asset/flatZakat.svg";
// import flatRelawan from "../Donasi/asset/flatRelawan.svg";
import flatGalangDana from "../Donasi/asset/flatGalangDana.svg";
import "./donasiStyle.css";

const Tombol = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => (window.location.href = "/#")}
          >
            <div className="icon-box">
              <img
                src={flatDonation}
                style={{ marginBottom: "20px", height: "80px" }}
              />
              Donasi
            </div>
          </button>
        </Col>
        <Col>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => (window.location.href = "/#")}
          >
            <div className="icon-box">
              <img
                src={flatGalangDana}
                style={{ marginBottom: "20px", height: "80px" }}
              />
              Galang Dana
            </div>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Tombol;
