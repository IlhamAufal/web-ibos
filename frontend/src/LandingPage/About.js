import React from "react";
import Card from "react-bootstrap/Card";
import logo1 from "./asset/logo1.png";
import logo2 from "./asset/logo2.png";
import logo3 from "./asset/logo3.png";
import { Container, Row, Col } from "react-bootstrap";
import pfp from "./asset/pfp.svg";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import "./landingpage.css";

function About() {
  return (
    <div id="tentang" style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={{ marginBlock: "50px" }}>
          <Row className="d-flex justify-content-center">
            <Col className="col-3">
              <div
                style={{
                  backgroundColor: "#001A41",
                  width: "250px",
                  height: "250px",
                  borderRadius: "0 50px 0 50px",
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "20px",
                }}
              ></div>
              <div
                style={{
                  position: "relative",
                  zIndex: "2",
                  margin: "0 0 40px 30px",
                }}
              >
                <img
                  src={imgBasket}
                  style={{
                    borderRadius: "0 50px 0 50px",
                    position: "relative",
                    width: "250px",
                    height: "250px",
                  }}
                />
              </div>
            </Col>
            <Col className="col-6">
              <div
                style={{
                  margin: "30px 0 0 10%",
                  textAlign: "left",
                  textAlign: "justify",
                }}
              >
                <div
                  style={{
                    color: "red",
                    fontSize: "45px",
                    fontWeight: "bold",
                  }}
                >
                  Apa itu IBOS ?
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus viverra in
                  adipiscing enim eu habitasse morbi imperdiet. Ornare dui non
                  suspendisse massa. Et purus nibh blandit ipsum. Sed habitant
                  dolor aliquet sit tellus pulvinar eu erat nibh. Tellus
                  vestibulum ut nisi quis lectus dignissim. Volutpat ac
                  consequat natoque at convallis ut lectus fames morbi
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
          marginBottom: "25px",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row
            className="d-flex justify-content-center"
            style={{ gap: "100px" }}
          >
            <Col className="col-6">
              <div
                style={{
                  margin: "30px 0 0 10%",
                  textAlign: "left",
                  textAlign: "justify",
                }}
              >
                <div
                  style={{
                    color: "red",
                    fontSize: "45px",
                    fontWeight: "bold",
                  }}
                >
                  Apa itu IBOS ?
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus viverra in
                  adipiscing enim eu habitasse morbi imperdiet. Ornare dui non
                  suspendisse massa. Et purus nibh blandit ipsum. Sed habitant
                  dolor aliquet sit tellus pulvinar eu erat nibh. Tellus
                  vestibulum ut nisi quis lectus dignissim. Volutpat ac
                  consequat natoque at convallis ut lectus fames morbi
                </p>
              </div>
            </Col>
            <Col className="col-3">
              <div
                style={{
                  backgroundColor: "red",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50% 40% 0 0",
                  position: "absolute",
                  zIndex: "1",
                  marginLeft: "100px",
                  padding: "100px",
                }}
              ></div>
              <div
                style={{
                  position: "relative",
                  zIndex: "2",
                  margin: "30px 0 40px 30px",
                }}
              >
                <img
                  src={imgBasket}
                  style={{
                    borderRadius: "0 50px 0 50px",
                    margin: "20px 20px 0 0",
                    position: "relative",
                    width: "250px",
                    height: "250px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="myAbout-director">
        <div
          className="image-container"
          style={{
            width: "200px",
            height: "200px",
            overflow: "hidden",
            borderRadius: "50%",
            marginLeft: "90px",
            marginTop: "40px",
            position: "relative",
          }}
        >
          <img
            src={pfp}
            className="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              zIndex: "2",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            transform: "translateX(calc(-167% - 10px))",
            zIndex: "1",
            background: "black",
            borderRadius: "5px",
            padding: "10px",
            height: "40px",
            top: "79%",
          }}
        >
          <h5 style={{ color: "white" }}>Name</h5>
        </div>

        <p
          style={{
            color: "white",
            marginLeft: "20px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "60%",
            alignItems: "center",
            textAlign: "justify",
          }}
        >
          “Lorem ipsum dolor sit amet consectetur. Risus cras risus nec vel eu
          amet scelerisque malesuada curabitur. Sed senectus natoque feugiat
          odio. Purus eget amet bibendum ornare. Auctor lacinia enim cursus
          donec nibh posuere enim auctor ac. Ultricies faucibus ut dignissim
          convallis vitae. Tellus tellus quisque purus proin elementum massa.
          Hac mi enim pellentesque ridiculus in maecenas sem fermentum sit.
          Turpis parturient ut dignissim eu. Ultrices interdum commodo tristique
          risus. Non hendrerit accumsan sed urna.”
        </p>
      </div>

      {/* Logo IBOS */}
      <div>
        <div
          className="mySubMenu1"
          style={{ marginTop: "60px", marginBottom: "30px" }}
        >
          <h5 style={{ margin: "auto" }}>Makna dan Arti Logo IBOS?</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              width: "18rem",
              margin: "0 20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.418)",
              height: "400px",
            }}
          >
            <Card.Img variant="top" src={logo1} style={{ height: "188px" }} />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Para Insan Telkomsel</b>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "13px",
                  paddingBottom: "20px",
                  textAlign: "justify",
                }}
              >
                Melambangkan makna kesatuan, kegembiraan, kesehatan, dan saling
                peduli terhadap sesama yang sejalan dengan semangat Living
                AKHLAK thru Telkomsel DigiLife ACTION
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              margin: "0 20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.418)",
              height: "400px",
            }}
          >
            <Card.Img variant="top" src={logo2} style={{ height: "188px" }} />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Siluet Portal Telkomsel</b>
              </Card.Title>
              <Card.Text style={{ fontSize: "13px", textAlign: "justify" }}>
                Berpola batik sebagai identitas budaya oleh bangsa Indonesia
                yang melambangkan optimisme terhadap masa depan yang lebih baik
                dan portal melambangkan Telkomsel siap membuka peluang untuk
                semua lini kehidupan
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              margin: "0 20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.418)",
              height: "400px",
            }}
          >
            <Card.Img variant="top" src={logo3} />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Tanda Centang</b>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "13px",
                  paddingBottom: "20px",
                  textAlign: "justify",
                }}
              >
                Pengejawantahan semangat untuk mencapai visi IBOS ”Menuju Insan
                Telkomsel paripurna yang beriman dan bertaqwa, berakhlak mulia,
                sehat jasmani, dan peduli”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Samnbutan Direktur */}
      </div>
      <div
        className="font-bold"
        style={{
          textAlign: "center",
          fontSize: "24px",
          paddingBlock: "70px",
          marginTop: "40px",
          letterSpacing: "4px",
        }}
      >
        {" "}
        BIDANG
      </div>
    </div>
  );
}

export default About;
