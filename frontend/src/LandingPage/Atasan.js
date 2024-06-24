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
        <div
          className="justify-content-center"
          style={{ marginTop: "70px" }}
        >
          {data.map((d, index) => (
            <Row
              key={index}
              className="col-auto text-center"
              style={{ marginInline: "50px", marginBottom:'50px'}}
            >
              <Col className="col-auto">
                <img
                  src={d.img}
                  alt={d.name}
                  style={{
                    borderRadius: "50%",
                    marginBottom: "20px",
                    maxHeight: "200px",
                    maxWidth:"200px",
                    autoFit:"cover"
                  }}
                />
                <h5 className="font-semibold">{d.name}</h5>
                <label>{d.position}</label>
              </Col>
              <Col>
                <div
                  style={{
                    color: "white",
                    marginTop: "70px",
                    marginInline:'40px',
                    textAlign: "justify",
                  }}
                >
                  " {d.text} "
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

const data = [
  {
    img: pfp1,
    name: "Herdin Hasibuan",
    position:"Ketua Umum MTT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp2,
    name: "Kristian W.A. Nugroho",
    position:"Ketua Umum Persekutuan Doa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp3,
    name: "I Gede Pongki Witraguna",
    position:"Ketua Umum Forum Hindu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp4,
    name: "I Putu Yoga Semadi",
    position:"Ketua Bidang Budaya",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp5,
    name: "Lukman Hakim",
    position:"Ketua Bidang Olahraga",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp6,
    name: "Ketua Bidang Sosial",
    position:"Andry Priyo Santoso",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
];

export default Atasan;
