import { Container, Row, Col } from "react-bootstrap";
import program1 from "./asset/program1.png";
import program2 from "./asset/program2.png";
import program3 from "./asset/program3.png";
import "../BudayaPage/budayaStyle.css";

const programBudaya = () => {
  return (
    <Container>
      <div className="textBoxAbuabu">
        <div className="mySubMenu1 mb-8 mt-4">Rincian Program Budaya</div>
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
                <img src={program2} className="radiusImg" />
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
                Paduan Suara
              </h4>
            </div>
            <div className="w-3/4 ml-5">
              Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
              tellus libero porttitor viverra nisi. Nunc nunc vestibulum
              suspendisse ultricies etiam elementum netus. Iaculis consequat
              amet hac quis purus arcu ligula. Sapien augue congue tincidunt
              risus leo scelerisque. A cursus tortor auctor non in sem
              scelerisque integer. Turpis enim est ut massa. Tortor mi lobortis
              maecenas phasellus. Semper ut.
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
                Band
              </h4>
            </div>
            <div
              className="w-3/4 mr-5"
              style={{ textAlign: "justify", marginLeft: "230px" }}
            >
              Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
              tellus libero porttitor viverra nisi. Nunc nunc vestibulum
              suspendisse ultricies etiam elementum netus. Iaculis consequat
              amet hac quis purus arcu ligula. Sapien augue congue tincidunt
              risus leo scelerisque. A cursus tortor auctor non in sem
              scelerisque integer. Turpis enim est ut massa. Tortor mi lobortis
              maecenas phasellus. Semper ut.
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
                src={program3}
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
                <img src={program1} className="radiusImg" />
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
                Tari Tradisional
              </h4>
            </div>
            <div className="w-3/4 ml-5">
              Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
              tellus libero porttitor viverra nisi. Nunc nunc vestibulum
              suspendisse ultricies etiam elementum netus. Iaculis consequat
              amet hac quis purus arcu ligula. Sapien augue congue tincidunt
              risus leo scelerisque. A cursus tortor auctor non in sem
              scelerisque integer. Turpis enim est ut massa. Tortor mi lobortis
              maecenas phasellus. Semper ut.
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default programBudaya;
