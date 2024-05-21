import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import newsimg from "./asset/dummy.png";
import "./newsStyle.css";

const NewsCard = () => {
  return (
    <Container style={{ marginBottom: "80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
          gap: "20px",
        }}
      >
        {data.map((d, index) => (
          <a href="#" style={{ textDecoration: "none" }}>
            <div key={index} className="cardNews-overlay">
              <Card className="cardNews">
                <Card.Img
                  variant="top"
                  src={d.img}
                  style={{
                    maxHeight: "200px",
                    width: "auto",
                    overflowY: "hidden",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="bg-slate-100">
                  <Card.Title>
                    <b>{d.title}</b>
                  </Card.Title>
                  <Card.Text>{d.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
};

const data = [
  {
    title: "Card Title",
    img: newsimg,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    title: "Card Title",
    img: newsimg,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    title: "Card Title",
    img: newsimg,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    title: "Card Title",
    img: newsimg,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  {
    title: "Card Title",
    img: newsimg,
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
];

export default NewsCard;
