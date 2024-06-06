import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imgIbadah from "./asset/bannerIbadah.svg";
import imgOlahraga from "./asset/bannerOlahraga.svg";
import imgSosial from "./asset/bannerSosial.svg";
import imgBudaya from "./asset/bannerBudaya.svg";

function Category() {
  const navigate = useNavigate();
  return (
    <Container className="container-category mb-4">
      <Row>
        <Col xs={3}>
          <a href="/ibadah" className="flex">
            <div className="masked-image-overlay">
              <div className="centered-text">IBADAH</div>{" "}
            </div>
          </a>
          <img className="masked-image" src={imgIbadah} />
        </Col>
        <Col xs={3}>
          <a href="#" className="flex" onClick={() => navigate("/budaya")}>
            <div className="masked-image-overlay">
              <div className="centered-text">BUDAYA</div>{" "}
            </div>
          </a>

          <img className="masked-image" src={imgBudaya} />
        </Col>
        <Col xs={3}>
          <a href="#" className="flex" onClick={() => navigate("/olahraga")}>
            <div className="masked-image-overlay">
              <div className="centered-text">OLAHRAGA</div>{" "}
            </div>
          </a>

          <img className="masked-image" src={imgOlahraga} />
        </Col>
        <Col xs={3}>
          <a href="#" className="flex" onClick={() => navigate("/sosial")}>
            <div className="masked-image-overlay">
              <div className="centered-text">SOSIAL</div>{" "}
            </div>
          </a>

          <img className="masked-image" src={imgSosial} />
        </Col>
      </Row>
    </Container>
  );
}

export default Category;
