import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RincianKomunitas from "./RincianKomunitas";

const PendaftaranAnggota = () => {
  return (
    <Container>
      <div style={{ margin: "20px 0 50px 0" }}>
        <div
          className="mySubMenu1"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "80px",
          }}
        >
          Pendaftaran Komunitas
        </div>
        <div
          className="mySubMenu"
          style={{
            width: "400px",
            fontWeight: "bold",
            borderLeft: "20px solid black",
          }}
        >
          Rincian Komunitas
        </div>
        <Row>
          <Col className="col-3" style={{ marginLeft: "30px" }}>
            <uploadImage />
          </Col>
          <Col className="textBoxAbuabu" style={{ margin: "30px 0 o 50px" }}>
            <div style={{ marginLeft: "25px" }}>
              <RincianKomunitas />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PendaftaranAnggota;
