import React from "react";
import logo from "../asset/logo-dark.jpg";
import telkomsel from "../asset/Telkomsel.png";
import iconX from "../asset/icon-twitter.png";
import iconFB from "../asset/icon-facebook.png";
import iconIG from "../asset/icon-instagram.png";
import iconYT from "../asset/icon-youtube.png";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="myFooter">
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" className="myFooter-img" />
          <Row style={{ marginTop: "40px" }}>
            <Col>
              <div className="nav-group">
                <ul>
                  <div className="link-header" style={{ whiteSpace: "nowrap" }}>
                    <span className="header-title">
                      <b>Support Us</b>
                    </span>
                  </div>
                  <li className="list-item" style={{ paddingTop: "5px" }}>
                    <a href="">Contact</a>
                  </li>
                  <li className="list-item">
                    <a href="">Faq</a>
                  </li>
                  <li className="list-item">
                    <a href="">Location</a>
                  </li>
                  <li className="list-item">
                    <a href="">Product</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="nav-group">
                <ul>
                  <div className="link-header" style={{ whiteSpace: "nowrap" }}>
                    <span className="header-title">
                      <b>Support Us</b>
                    </span>
                  </div>
                  <li className="list-item" style={{ paddingTop: "5px" }}>
                    <a href="">Contact</a>
                  </li>
                  <li className="list-item">
                    <a href="">Faq</a>
                  </li>
                  <li className="list-item">
                    <a href="">Location</a>
                  </li>
                  <li className="list-item">
                    <a href="">Product</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col>
              <div className="nav-group">
                <ul>
                  <div className="link-header" style={{ whiteSpace: "nowrap" }}>
                    <span className="header-title">
                      <b>Follow Us</b>
                    </span>
                  </div>
                  <li
                    className="list-item"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconFB}
                      alt=""
                      style={{ marginRight: "5px", height: "28px" }}
                    />
                    <a href="#">IbosTelkomsel</a>
                  </li>
                  <li
                    className="list-item"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconX}
                      alt="Icon"
                      style={{ marginRight: "5px", height: "28px" }}
                    />
                    <a href="#">@IbosTelkomsel</a>
                  </li>
                  <li
                    className="list-item"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconIG}
                      alt="Icon"
                      style={{ marginRight: "5px", height: "28px" }}
                    />
                    <a href="#">IbosTelkomsel</a>
                  </li>
                  <li
                    className="list-item"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconYT}
                      alt="Icon"
                      style={{ marginRight: "5px", height: "28px" }}
                    />
                    <a href="#">IbosTelkomsel</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <p style={{ marginLeft: "1200px", fontSize: "13px" }}>Powered By</p>
        <img
          src={telkomsel}
          alt=""
          style={{ width: "122px", height: "30px", marginLeft: "1250px" }}
        />
      </Container>
    </footer>
  );
};

export default Footer;
