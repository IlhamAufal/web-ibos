import { Col, Container, Row } from "react-bootstrap";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";

const pendahuluan = () => {
  return (
    <Container
      style={{
        marginBlock: "40px",
        position: "relative",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <Row>
        <Col className="col-3">
          <div
            style={{
              backgroundColor: "#001A41",
              width: "200px",
              height: "200px",
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
                width: "70%",
                height: "200px",
              }}
            />
          </div>
        </Col>
        <Col>
          <div className="w-4/5 text-justify">
            <h3 className="font-bold mb-3">Deskripsi Bidang</h3>
            <p>
              Tagline “Gelanggang Semangat Pemenang”, IBOS Bidang Olahraga
              membangun semangat Tflyers yang kompetitif dan bertekad kuat dalam
              meraih kemenangan. Bagi para pemenang sejati, gelanggang bukan
              hanya tempat pertandingan fisik, tetapi juga tempat tumbuhnya
              nilai-nilai kejujuran dan sportivitas, disiplin, ketangguhan,
              mental juara, dan persaudaraan/kebersamaan yang kesemuanya sejalan
              dengan budaya perusahaan kita, nilai-nilai utama AHLAK dan
              perilaku kerja ACTION. Olahraga yang teratur dan terukur akan
              meningkatkan kesehatan dan kebugaran serta gairah dalam bekerja.
              Mari berolahraga dan bergabung dalam 17 komunitas cabang olahraga
              (cabor) sesuai minat Tflyers. Yang berminat dalam olahraga
              beladiri dapat mengikuti cabor aikido, karatedo, taekwondo,
              muaythai, atau panahan. Yang suka kebugaran dapat mengikuti cabor
              lari, cardio-poundfit, gym, atau yoga. Demikian juga berbagai
              cabor yang populer seperti sepakbola, futsal, bulutangkis, bola
              voli, bola basket, tenis meja, tenis lapangan, atau catur.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default pendahuluan;
