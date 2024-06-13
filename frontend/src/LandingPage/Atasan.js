import React from "react";
import "./landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import pfp1 from "./asset/pfp1.svg";
import pfp2 from "./asset/pfp2.svg";
import pfp3 from "./asset/pfp3.svg";
import pfp4 from "./asset/pfp4.svg";

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
                    height: "200px",
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
    name: "Name 1",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp2,
    name: "Name 2",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp3,
    name: "Name 3",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp4,
    name: "Name 4",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp1,
    name: "Name 5",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    img: pfp2,
    name: "Name 6",
    position:"position",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
];

export default Atasan;
