import React from "react";
import thumbnail from "./asset/thumbnail-event.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BoxEvent = () => {
  const navigate = useNavigate();
  return (
<Container>
  <Row className='d-flex justify-content-center'>
    {data.map((d, index) => (
      <Col key={index} md={5} className="mb-4 d-flex justify-content-center">
        <div className="myNews-overlay" style={{marginTop:'25px'}}></div>
        <div className="myNews">
          <a
            href="#"
            className="flex w-full"
            onClick={() => navigate("/news")}
            style={{ textDecoration: "none" }}
          >
            <img
              className="object-cover rounded-lg"
              src={d.img}
              style={{
                height: "120px",
                width: "300px",
                marginLeft: "20px",
                marginTop: "13px",
              }}
            />
            <div className="flex flex-col p-4 leading-normal">
              <h6 className="font-bold text-black-900 dark:text-black">
                {d.title}
              </h6>
              <p className="font-normal text-sm text-gray-700 text-justify">
                {d.description}
              </p>
            </div>
          </a>
        </div>
      </Col>
    ))}
  </Row>
</Container>
  );
};

const data = [
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    img: thumbnail,
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  }
]

export default BoxEvent;
