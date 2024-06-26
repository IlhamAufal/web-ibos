import React from "react";
import "./landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import pfp1 from "./asset/pfp1.png";
import pfp2 from "./asset/pfp2.png";
import pfp3 from "./asset/pfp3.png";
import pfp4 from "./asset/pfp4.png";
import pfp5 from "./asset/pfp5.png";
import pfp6 from "./asset/pfp6.png";

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
      <h2 className="text-center font-bold">Apa Kata Mereka?</h2>
      <Container>
      <div className="justify-content-center" style={{ marginTop: "70px" }}>
        {Array.from({ length: 2 }, (_, rowIndex) => (
          <Row
            key={rowIndex}
            className="text-center"
            style={{ marginBottom: "50px" }}
          >
            {data
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((d, colIndex) => (
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
            <div className="text-center text-white" style={{marginBlock:'20px', maxWidth:'50%'}}>"Komunitas Tenis Meja Telkomsel kembali menghadirkan kompetisi antar karyawan, Internal Telkomsel Table Tennis 2023. Kompetisi ini diselenggarakan pada 21-31 Agustus 2023 yang diikuti 54 peserta."
            <p className="font-semibold italic mt-4">- Suhandi (Ketua Komunitas Tenis Meja)</p></div>
            
          </Row>
  
      </div>
    </Container>
    </div>
  );
};

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
    name: "Ketua Bidang Sosial",
    position: "Andry Priyo Santoso",
  },
];

export default Atasan;
