import React from "react";
import "./landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import pfp from "./asset/pfp.png";
import pfp1 from "./asset/pfp1.png";
import pfp2 from "./asset/pfp2.png";
import pfp3 from "./asset/pfp3.png";
import pfp4 from "./asset/pfp4.png";
import pfp5 from "./asset/pfp5.png";
import pfp6 from "./asset/pfp6.png";

const data = [
  {
    img: pfp1,
    name: "Herdin Hasibuan",
    position: "Ketua Umum MTT",
  },
  {
    img: pfp2,
    name: "Kristian W.A. Nugroho",
    position: "Ketua Umum Persekutuan Doa",
  },
  {
    img: pfp3,
    name: "I Gede Pongki Witraguna",
    position: "Ketua Umum Forum Hindu",
  },
  {
    img: pfp4,
    name: "I Putu Yoga Semadi",
    position: "Ketua Bidang Budaya",
  },
  {
    img: pfp5,
    name: "Lukman Hakim",
    position: "Ketua Bidang Olahraga",
  },
  {
    img: pfp6,
    name: "Andry Priyo Santoso",
    position: "Ketua Bidang Sosial",
  },
];

const Atasan = () => {
  return (
    <div
      style={{
        backgroundColor: "#600606",
        padding: "90px 50px",
        marginTop: "100px",
        color: "white",
      }}
    >
      <h2 className="text-center font-bold">Pengurus IBOS</h2>
      <Container>
        <div className="justify-content-center" style={{ marginTop: "70px" }}>
          {Array.from({ length: 2 }, (_, rowIndex) => (
            <Row
              key={rowIndex}
              className="text-center"
              style={{ marginBottom: "50px" }}
            >
              {data.slice(rowIndex * 3, rowIndex * 3 + 3).map((d, colIndex) => (
                <Col
                  key={colIndex}
                  className="col-4 d-flex flex-column align-items-center"
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    style={{
                      borderRadius: "50%",
                      marginBottom: "20px",
                      maxHeight: "200px",
                      maxWidth: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="font-semibold">{d.name}</h5>
                  <label>{d.position}</label>
                </Col>
              ))}
            </Row>
          ))}
          <Row className="justify-content-center">
            <Col className="col-auto text-center">
              <div
                style={{
                  width: "150px",
                  height: "200px",
                  overflow: "hidden",
                  margin: "20px 50px 20px 80px",
                }}
              >
                <img
                  src={pfp}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <div>
                “Tflyers Insan IBOS, dalam bekerja kita perlu mengelola waktu
                dan energi untuk kehidupan pekerjaan dan pribadi (work-life
                balance) dengan baik agar tetap sehat, bugar, dan bersemangat
                sehingga dapat menjaga dan meningkatkan produktivitas kerja kita
                secara berkelanjutan. IBOS memfasilitasi kita semua dalam
                berbagai komunitas di bidang Iman, Budaya, Olahraga, dan Sosial.
                Yuk gabung di IBOS. Ramein kegiatannya. Rapihkan juga organisasi
                pengelolaannya.”
                <p className="font-semibold italic mt-4">
                  - Helmi Wahidi (Koordinator/Caretaker Presidium IBOS)
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Atasan;
