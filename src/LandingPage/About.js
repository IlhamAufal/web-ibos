import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logoo from "./asset/IBOS profile poster.png";
import logo1 from "./asset/logo1.png";
import logo2 from "./asset/logo2.png";
import logo3 from "./asset/logo3.png";
import { Container, Row, Col } from "react-bootstrap";
import Category from "./Category";
import pfp from "./asset/pfp.svg";
("");

function About() {
  return (
    <div style={{ marginBlock: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col className="col-6">
              <div
                style={{
                  color: "red",
                  margin: "30px 0 0 30%",
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>
                  Definisi
                  <div
                    style={{
                      letterSpacing: "5px",
                      fontSize: "45px",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    IBOS
                  </div>
                </h3>
              </div>
            </Col>
            <Col>
              <Card
                style={{
                  width: "610px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.418)",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <b>Card Title</b>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
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
          <Row>
            <Col>
              <Card
                style={{
                  width: "610px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.418)",
                  marginLeft: "5%",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <b>Card Title</b>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-6">
              <div
                style={{
                  color: "red",
                  margin: "30px 0 0 30%",
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>
                  Definisi
                  <div
                    style={{
                      letterSpacing: "5px",
                      fontSize: "45px",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    IBOS
                  </div>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="myAbout-director"
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
        }}
      >
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
            <Card.Img variant="top" src={logo1} />
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
        {/* Logo IBOS */}
      </div>
      <div
        className="font-bold"
        style={{
          textAlign: "center",
          fontSize: "24px",
          paddingBlock: "70px",
          marginTop: "40px",
        }}
      >
        {" "}
        Kategori
      </div>
      <Category />
    </div>
  );
}

export default About;
