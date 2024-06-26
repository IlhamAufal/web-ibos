import { Container, Row, Col } from "react-bootstrap";
// import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import icnoProgram1 from "./asset/iconProgram1.png";
import icnoProgram2 from "./asset/iconProgram2.png";
import icnoProgram3 from "./asset/iconProgram3.png";
import "./imanStyle.css";

const programIman = () => {
  return (
    <Container>
      <div className="textBoxAbuabu">
        <div className="mySubMenu1 mb-8 mt-4">Program Bidang Iman</div>
        <Row style={{ marginBlock: "20px" }}>
          <Col className="col-auto">
            <div style={{ margin: "20px 0 40px 50px" }}>
              <div className="redBackground"></div>
              <div
                style={{
                  position: "relative",
                  zIndex: "2",
                  margin: "0 0 40px 30px",
                }}
              >
                <img src={icnoProgram1} className="radiusImg" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-9">
              <h4
                style={{
                  textAlign: "justify",
                  fontWeight: "bold",
                  margin: "30px 0 10px 20px",
                }}
              >
                Majelis Telekomuniasi Selular Takwa
              </h4>
            </div>
            <div className="w-3/4 ml-5">
            Majelis Telekomuniasi Selular Takwa (MTT) adalah organisasi berbadan hukum perkumpulan yang menaungi seluruh kegiatan kerohanian Islam pada perusahaan dan karyawan PT Telekomunikasi Selular (Telkomsel) MTT mempunyai kegiatan di bidang keagamaan, sosial, dan kemanusian.
            </div>
          </Col>
        </Row>
        <Row style={{ marginBlock: "40px", position: "relative" }}>
          <Col className="col-9">
            <div>
              <h4
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  margin: "30px 0 10px 20px",
                }}
              >
                Persekutuan Doa Telkomsel
              </h4>
            </div>
            <div
              className="w-3/4 mr-5"
              style={{ textAlign: "justify", marginLeft: "230px" }}
            >
              Persekutuan Doa Telkomsel adalah wadah bagi karyawan Kristiani Telkomsel yang dibentuk dengan tujuan sebagai pemersatu umat Kristiani Telkomsel dalam melaksanakan kegiatan kerohanian dan pelayanan dalam berbagai aspek kehidupan dengan selalu berpegang pada Firman Tuhan dan peraturan Perusahaan.
            </div>
          </Col>
          <Col className="col-3">
            <div
              style={{
                backgroundColor: "red",
                width: "150px",
                height: "200px",
                borderRadius: "50px 0 0 50px",
                position: "absolute",
                zIndex: "1",
                paddingLeft: "15%",
                marginLeft: "5%",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                zIndex: "2",
                margin: "20px 0 40px 30px",
              }}
            >
              <img
                src={icnoProgram2}
                style={{
                  borderRadius: "0 50px 0 50px ",
                  position: "relative",
                  width: "200px",
                  height: "200px",
                }}
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBlock: "20px" }}>
          <Col className="col-auto">
            <div style={{ margin: "20px 0 40px 50px" }}>
              <div className="redBackground"></div>
              <div
                style={{
                  position: "relative",
                  zIndex: "2",
                  margin: "0 0 40px 30px",
                }}
              >
                <img src={icnoProgram3} className="radiusImg" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-9">
              <h4
                style={{
                  textAlign: "justify",
                  fontWeight: "bold",
                  margin: "30px 0 10px 20px",
                }}
              >
                Forum Hindu Telkomsel
              </h4>
            </div>
            <div className="w-3/4 ml-5">
            Forum Hindu Telkomsel (FHT) Forum Hindu Telkomsel sebagai bagian dari kegiatan Iman, Budaya,Olahraga, dan Sosial (IBOS) dibentuk berdasarkan Keputusan Direksi No.026/2006 perihal Pelaksanaan Pembinaan Iman, Budaya Olahraga dan Kegiatan Sosial.
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default programIman;
