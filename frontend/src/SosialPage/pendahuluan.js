import { Col, Container, Row } from "react-bootstrap";
import imgSocial from "./asset/imgSocial.png";
import "./sosialStyle.css";

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
      <Row className="mt-4">
        <Col className="col-3">
          <div
            style={{
              backgroundColor: "#001A41",
              width: "200px",
              height: "200px",
              borderRadius: "0 50px 0 50px",
              position: "absolute",
              zIndex: "1",
              marginTop: "30px",
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
              src={imgSocial}
              style={{
                borderRadius: "0 50px 0 50px",
                position: "relative",
                width: "auto",
                height: "200px",
              }}
            />
          </div>
        </Col>
        <Col>
          <div className="w-4/5 text-justify">
            <h3 className="font-bold mb-3">Deskripsi Bidang</h3>
            <p>
            IBOS Bidang Sosial mendorong keterlibatan karyawan dalam kegiatan sosial baik melalui program CSR Perseroan (corporate social responsibility) maupun program ESR Karyawan (employee social responsibility).  Program kolaborasi  antara program sosial karyawan dengan Perusahaan (CSR) dalam wadah Telkomsel Employee  Volunteerism. Karyawan dapat berpartisipasi dalam berbagai program CSR seperti Internet Baik, Bakti Negeriku, Terra, Telkomsel Siaga.
{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default pendahuluan;
