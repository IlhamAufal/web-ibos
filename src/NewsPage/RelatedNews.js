import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thumbnail from "./asset/thumbnail-news.png";
import "./newsStyle.css";

const RelatedNews = () => {
  return (
    <div className="myBG">
      <div className="container-column">
        <div style={{ display: "flex", marginTop: "170px" }}>
          <div
            style={{
              width: "auto",
              height: "calc(100vh - 40px)",
              overflowY: "auto",
              justifyContent: "right",
            }}
          >
            <Container>
              <div class="overflow-hidden">
              <div className="relatedNews">Related News</div>
<Row>
  {data.map((d, index) => (
    <Col key={index}>
      <div className="miniNews">
        <a
          href="#"
          className="flex w-full"
          onClick={() => navigate("/news")}
          style={{ textDecoration: "none" }}>
          <img
            src={d.img}
            style={{ height: "100px", width: "auto", borderRadius: "10px" }}
          />
          <div className="flex p-2 leading-normal">
            <h5 className="text-sm font-bold dark:text-black">
              {d.description}
            </h5>
          </div>
        </a>
      </div>
    </Col>
  ))}
</Row>
              </div>
            </Container>
          </div>
          <div
            style={{
              width: "calc(20% - 10px)",
              height: "100vh",
              marginRight: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const data=[
  {
    img:thumbnail,
    description:'Noteworthy technology acquisitions 2021'
  },
  {
    img:thumbnail,
    description:'Noteworthy technology acquisitions 2021'
  },
  {
    img:thumbnail,
    description:'Noteworthy technology acquisitions 2021'
  },
  {
    img:thumbnail,
    description:'Noteworthy technology acquisitions 2021'
  }
]

export default RelatedNews;
