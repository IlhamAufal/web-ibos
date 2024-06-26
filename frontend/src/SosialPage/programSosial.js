import { Container, Row, Col } from "react-bootstrap";
import iconProgram1 from "./asset/iconProgram1.png";
import iconProgram2 from "./asset/iconProgram2.png";
import iconProgram3 from "./asset/iconProgram3.png";
import iconProgram4 from "./asset/iconProgram4.png";
import "../SosialPage/sosialStyle.css";

const programSosial = () => {
  return (
    <Container>
      <div className="textBoxAbuabu" style={{ backgroundColor: "#FBC995" }}>
        <div className="mySubMenu1 mb-8 mt-4">Program Divisi Sosial</div>
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
                <img src={iconProgram1} className="radiusImg" />
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
                Baktiku Negeriku
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
                Internet Baik
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
                src={iconProgram2}
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
                <img src={iconProgram3} className="radiusImg" />
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
                Terra
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
                Telkomsel Siaga
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
                src={iconProgram4}
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
      </div>
    </Container>
  );
};

export default programSosial;
