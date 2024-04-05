import React from "react";
import thumbnail from "../asset/thumbnail-news.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RelatedNews from "./RelatedNews";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col style={{ marginRight: "250px" }}>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
          <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
          <div className="myNews">
            <a
              href="#"
              className="flex w-full"
              onClick={() => navigate("/news")}
              style={{ textDecoration: "none" }}
            >
              <img
                className="object-cover rounded-lg"
                src={thumbnail}
                style={{
                  height: "120px",
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "13px",
                }}
              />
              <div className="flex flex-col p-4 leading-normal">
                <h6 className="font-bold text-black-900 dark:text-black ">
                  Noteworthy technology acquisitions 2021
                </h6>
                <p className="font-normal text-sm text-gray-700 text-justify">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
        </Col>
        {/* <Col>
          <RelatedNews />
        </Col> */}
      </Row>
    </Container>
  );
};

export default BlogCard;
