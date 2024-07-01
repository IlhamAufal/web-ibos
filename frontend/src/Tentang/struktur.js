import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Struktur from "./asset/organisasiIbos.png";
import "./tentangStyle.css";

const sejarah = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <h5
        className="mySubMenu1"
        style={{ marginBlock: "auto", fontWeight: "bold" }}
      >
        Sturuktur IBOS
      </h5>
      <div
        className="bg-white mt-4"
        style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Row>
          <img src={Struktur} style={{ maxHeight: "400px", width: "auto" }} />
        </Row>
      </div>
    </Container>
  );
};

export default sejarah;
