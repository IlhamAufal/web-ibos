import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./tentangStyle.css";

const sejarah = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <h5
        className="mySubMenu1"
        style={{ marginBlock: "auto", fontWeight: "bold" }}
      >
        Visi dan Misi IBOS
      </h5>
      <Row
        className="bg-white mt-4"
        style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div>
          <h5>Visi</h5>
          <p>
            “Menuju insan Telkomsel paripurna yang beriman dan bertaqwa,
            berakhlak mulia, sehat jasmani, dan peduli”.
          </p>
        </div>
        <h5>Misi</h5>
        <ul style={{ listStyle: "square" }}>
          <li>
            Menyelenggarakan kegiatan iman, budaya, olahraga, dan sosial (IBOS)
            secara sukarela dari, oleh, dan untuk Karyawan.
          </li>
          <li>
            Mengelola penyelenggaraan kegiatan IBOS dalam suatu wadah organisasi
            yang demokratis dan memiliki tata kelola yang baik.
          </li>
          <li>
            Mendukung pembangunan sumberdaya manusia Perseroan yang mencakup
            aspek roh, rasio, raga, dan rasa (4R) dalam bentuk kegiatan-kegiatan
            IBOS yang sejalan dengan visi, misi dan budaya perusahaan Perseroan.
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default sejarah;
