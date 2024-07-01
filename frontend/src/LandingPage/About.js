import React from "react";
import Card from "react-bootstrap/Card";
import logo1 from "./asset/logo1.png";
import logo2 from "./asset/logo2.png";
import logo3 from "./asset/logo3.png";
import logoUtama from "./asset/logoUtama.svg";
import { Container, Row, Col } from "react-bootstrap";
// import pfp from "./asset/pfp.png";
// import strategi from "./asset/strategyHouseIbos.png";
// import organisasi from "./asset/organisasiIbos.png";
import about0 from "./asset/about0.png";
import about1 from "./asset/about1.png";
import "./landingpage.css";

function About() {
  return (
    <div id="tentang" style={{ marginTop: "40px" }}>
      <Container
        style={{
          marginBlock: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="col-3">
            <div className="blue-square"></div>
            <div
              style={{
                position: "relative",
                zIndex: "2",
                margin: "0 0 40px 30px",
              }}
            >
              <img className="imgBasket1" alt="" src={about0} />
            </div>
          </Col>
          <Col className="col-6">
            <div
              style={{
                margin: "30px 0 0 10%",
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
                Karyawan membentuk berbagai organisasi komunitas di bidang Iman,
                Budaya, Olahraga, dan Sosial, yang secara mandiri
                menyelenggarakan kegiatan rutinnya dan perhelatan internal
                komunitas.Selanjutnya dengan musyawarah dan mufakat, para
                Pengurus komunitas mendirikan organisasi IBOS sebagai wadah
                koordinasi dan kolaborasi antar komunitas, dengan Perusahaan,
                maupun eksternal. IBOS juga menyelenggarakan dan mengordinir
                kegiatan/perhelatan berskala nasional/internasional.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          marginBlock: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row className="d-flex justify-content-center" style={{ gap: "100px" }}>
          <Col className="col-6">
            <div
              style={{
                margin: "30px 0 0 10%",
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
                IBOS untuk siapa?
              </div>
              <p>
                Organisasi komunitas dan IBOS didirikan dari, oleh, dan untuk
                karyawan secara sukarela dengan prinsip musyawarah dan mufakat
                serta tata kelola yang baik. Perusahaan dalam hal ini diwakili
                fungsi HCM memberikan pembinaan, perijinan, dan bantuan
                fasilitas serta dukungan anggaran kegiatan kepada organisasi
                komunitas dan IBOS.
              </p>
            </div>
          </Col>
          <Col className="col-3">
            <div className="red-circle"></div>
            <div
              style={{
                position: "relative",
                zIndex: "2",
                margin: "30px 0 40px 30px",
              }}
            >
              <img className="imgBasket" alt="" src={about1} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Ucapan Koordinator */}
      {/* <div className="myAbout-director">
        <Col className="col-auto justify-center">
          <div
            style={{
              width: "150px",
              height: "200px",
              overflow: "hidden",
              margin: "20px 50px 20px 80px",
            }}
          >
            <img src={pfp} alt="" />
          </div>
          <div
            className="text-white font-bold text-center"
            style={{ fontSize: "20px" }}
          >
            Helmi Wahidi
          </div>
          <caption className="text-white d-flex">
            Koordinator/Caretaker Presidium IBOS
          </caption>
        </Col>

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
          “Tflyers Insan IBOS, dalam bekerja kita perlu mengelola waktu dan
          energi untuk kehidupan pekerjaan dan pribadi (work-life balance)
          dengan baik agar tetap sehat, bugar, dan bersemangat sehingga dapat
          menjaga dan meningkatkan produktivitas kerja kita secara
          berkelanjutan. IBOS memfasilitasi kita semua dalam berbagai komunitas
          di bidang Iman, Budaya, Olahraga, dan Sosial. Yuk gabung di IBOS.
          Ramein kegiatannya. Rapihkan juga organisasi pengelolaannya.”
        </p>
      </div> */}

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
            marginBlock: "50px",
            maxHeight: "100px",
          }}
        >
          <img src={logoUtama} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "13px",
            textAlign: "justify",
          }}
        >
          <Card className="card-logo">
            <Card.Img
              variant="top"
              alt=""
              src={logo1}
              style={{ height: "188px" }}
            />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Para Insan Telkomsel</b>
              </Card.Title>
              <Card.Text
                style={{
                  paddingBottom: "40px",
                }}
              >
                Melambangkan makna kesatuan, kegembiraan, kesehatan, dan saling
                peduli terhadap sesama yang sejalan dengan semangat Living
                AKHLAK thru Telkomsel DigiLife ACTION
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-logo">
            <Card.Img
              variant="top"
              alt=""
              src={logo2}
              style={{ height: "188px" }}
            />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Siluet Portal Telkomsel</b>
              </Card.Title>
              <Card.Text>
                Berpola batik sebagai identitas budaya oleh bangsa Indonesia
                yang melambangkan optimisme terhadap masa depan yang lebih baik
                dan portal melambangkan Telkomsel siap membuka peluang untuk
                semua lini kehidupan
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-logo">
            <Card.Img variant="top" alt="" src={logo3} />
            <Card.Body style={{ background: "red", color: "white" }}>
              <Card.Title style={{ marginBottom: "10px" }}>
                <b>Tanda Centang</b>
              </Card.Title>
              <Card.Text
                style={{
                  paddingBottom: "40px",
                }}
              >
                Pengejawantahan semangat untuk mencapai visi IBOS ”Menuju Insan
                Telkomsel paripurna yang beriman dan bertaqwa, berakhlak mulia,
                sehat jasmani, dan peduli”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Pengelompokan Bidang  */}
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
