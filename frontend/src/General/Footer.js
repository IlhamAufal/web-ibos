import React from "react";
import logo from "../asset/logo-dark.jpg";
import telkomsel from "../asset/Telkomsel.png";
import iconFB from "../asset/icon-facebook.png";
import iconIG from "../asset/icon-instagram.png";
import iconYT from "../asset/icon-youtube.png";
import iconEmail from "../asset/icon-email.png";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="myFooter" style={{ paddingBottom: "40px" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" className="myFooter-img" />
          <Row style={{ marginTop: "40px" }}>
            {/* <Col>
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
            </Col> */}

            <Col className="mt-4">
              <div className="nav-group">
                <div className="link-header" style={{ whiteSpace: "nowrap" }}>
                  <span className="header-title">
                    <b>Sekretariat IBOS</b>
                  </span>
                  <p className="mt-2">Telkomsel Sport Center, Lantai 6, TSO</p>
                </div>
              </div>
            </Col>
            <Col className="col-auto mt-4">
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
                    <a href="#">IBOSTelkomsel</a>
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
                    <a href="#">IBOSTelkomsel</a>
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
                    <a href="#">IBOSTelkomsel</a>
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
                      src={iconEmail}
                      alt="Icon"
                      style={{ marginRight: "5px", height: "28px", filter: 'invert(100%)'}}
                    />
                    <a href="@IBOS-l@telkomsel.co.id">
                      @IBOS-l@telkomsel.co.id
                    </a>
                  </li>

                  <li
                    className="list-item"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className="mr-2">Milist: </div>
                    <a href="IBOS@telkomsel.co.id">IBOS@telkomsel.co.id</a>
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
