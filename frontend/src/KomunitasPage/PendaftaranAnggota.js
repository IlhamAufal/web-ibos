import React from "react";
import pfp from "./asset/pfp.svg";
import { Col, Container, Row } from "react-bootstrap";
import RincianAnggota from "./RincianAnggota";

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
          Pendaftaran Anggota Komunitas
        </div>
        <div
          className="mySubMenu"
          style={{
            width: "400px",
            fontWeight: "bold",
            borderLeft: "20px solid black",
          }}
        >
          Identitas Karyawan
        </div>
        <Row>
          <Col className="col-3" style={{ marginLeft: "30px" }}>
            <div>
              <img
                src={pfp}
                style={{
                  borderRadius: "50%",
                  height: "190px",
                  margin: "50px 0 30px 20%",
                }}
              />
              <div className="font-bold" style={{ textAlign: "center" }}>
                Name
              </div>
              <div style={{ textAlign: "center" }}>Job Position</div>
            </div>
          </Col>
          <Col className="textBoxAbuabu" style={{ margin: "30px 0 0 50px" }}>
            <div style={{ marginLeft: "25px" }}>
              <RincianAnggota />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PendaftaranAnggota;
