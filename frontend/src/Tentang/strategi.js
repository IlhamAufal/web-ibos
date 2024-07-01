import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import strategi from "./asset/strategyHouseIbos.png";
import "./tentangStyle.css";

const sejarah = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <h5
        className="mySubMenu1"
        style={{ marginBlock: "auto", fontWeight: "bold" }}
      >
        Strategi dan Tujuan IBOS
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
          <h5>Strategi</h5>
          <Col>
            <p>
              Strategi tertuang dalam bentuk Strategy House IBOS yang terdiri
              dari unsur pokok visi dan strategi Human Capital Management (HCM),
              kebijakan, visi dan misi IBOS, serta pilar kegiatan IBOS.
            </p>
          </Col>
          <Col>
            <img src={strategi} style={{ maxHeight: "200px" }} />
          </Col>
        </Row>
        <Row>
          <h5>Tujuan</h5>
          <ul style={{ listStyle: "square" }}>
            <li>
              Terwujudnya tata kelola kegiatan yang baik berdasarkan nilai-nilai
              dan standar yang berlaku dalam pelaksanaan kegiatan di bidang
              iman, budaya, olahraga, dan sosial.
            </li>
            <li>
              Sebagai sarana bagi Karyawan untuk mengekspresikan dan melatih
              diri dalam bidang-bidang yang tidak terkait langsung dengan bisnis
              Perseroan sehingga dapat meningkatkan kualitas hidup Karyawan yang
              bersangkutan dan keseimbangan antara pola hidup dan bekerja.
            </li>
          </ul>
        </Row>
      </div>
    </Container>
  );
};

export default sejarah;
