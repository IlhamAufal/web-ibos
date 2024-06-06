import React from "react";
import Carousel from "react-bootstrap/Carousel";
import news1 from "./asset/news1.png";
import news2 from "./asset/news2.png";
import news3 from "./asset/news3.png";
import "./landingpage.css";

function MyCarousel() {
  return (
    <div>
      <Carousel>
        {data.map((d, index) => (
          <Carousel.Item
            key={index}
            style={{ height: "80vh", marginTop: "75px" }}
          >
            <div className="relative h-screen bg-black/60">
              <img className="d-block w-100" src={d.img} />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 5)20% , transparent)",
                }}
              ></div>
            </div>
            <Carousel.Caption style={{ marginBottom: "50px" }}>
              <h3 className="text-left font-bold">
                <span style={{ color: "red" }}> {d.first}</span> {d.label}
              </h3>
              <p className="text-left font-bold">{d.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

const data = [
  {
    img: news1,
    first: "First",
    label: " slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: news2,
    first: "Second",
    label: " slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: news3,
    first: "Third",
    label: " slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];

export default MyCarousel;
