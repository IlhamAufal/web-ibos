import React from "react";
import "../NewsPage/newsStyle.css";
import RealNews from "../NewsPage/RealNews";
import RelatedNews from "../NewsPage/RelatedNews";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const NewsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/uploadNews");
  };

  return (
    <>
      <Row>
        <Col className="col-7 mr-5">
          <div className="redBox"></div>
          <RealNews />
        </Col>
        <Col className="col-auto" style={{ maxWidth: "450px" }}>
          <RelatedNews />
        </Col>
      </Row>
      <button className="buttonTulisArtikel" onClick={handleClick}>
        Tulis Artikel
      </button>
      <div className="redBoxDown"></div>
    </>
  );
};

export default NewsPage;
