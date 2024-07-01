import { Col, Container, Row } from "react-bootstrap";
import imgCulture from "./asset/imgCulture.png";

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
              src={imgCulture}
              alt=""
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
              IBOS Bidang Budaya sebagai agen budaya perusahaan dan budaya
              nasional bertujuan untuk memajukan kebudayaan sebagai aset Bangsa
              dan Perusahaan dengan berasas pada pemajuan kebudayaan dengan
              memperhatikan keberagaman dan kelokalan. Komunitas IBOS Bidang
              Budaya antara lain Paduan Suara, Band, Tari Tradisional, Tari
              Modern, Toys Community, dan Sketsa.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default pendahuluan;
