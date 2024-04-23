import React from "react";
import BannerBudaya from "../components/bannerBudaya";
import Documentation from "../components/Documentation";
import { Container, Row, Col } from "react-bootstrap";
import imgBasket from '../asset/imgBasket.png'

const BudayaPage = () => {
  return (
    <div>
      <BannerBudaya />
      <div className="mySubMenu"></div>
      <Container style={{ marginBlock: "40px", position: "relative" }}>
          <Row>
            <Col className="col-3">
            <div style={{
    backgroundColor: '#001A41',
    width: '200px',
    height: '200px',
    borderRadius: '0 50px 0 50px',
    position: 'absolute',
    zIndex: '1',
    marginTop: '20px'
}}></div>
              <div
                style={{
                  position: "relative",
                  zIndex: "2",
                  margin: "0 0 40px 30px",
                }}
              >
                <img src={imgBasket} style={{
    borderRadius: '0 50px 0 50px',
    position: 'relative',
    width: '70%',
    height: '200px'
}} />
              </div>
            </Col>
            </Row>
            </Container>
            <Container>
            <div className="mySubMenu1 mb-4 mt-4">Program Divisi Budaya</div>
<div className="textBoxAbuabu">
  <Row style={{marginBlock:'20px'}}>
    <Col className="col-auto" >
  <div style={{ margin: '20px 0 40px 50px' }}>
    <div className="redBackground"></div>
    <div
      style={{
        position: "relative",
        zIndex: "2",
        margin: "0 0 40px 30px"
      }}
    >
      <img src={imgBasket} className="radiusImg" />
    </div>
  </div></Col>
  <Col >
  <div className="col-9">
  <h4 style={{ textAlign: "justify", fontWeight: "bold", margin:'30px 0 0 20px'}}>Basket</h4>
  </div>
  <div className="textBoxAbuabu">
                Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
                tellus libero porttitor viverra nisi. Nunc nunc vestibulum
                suspendisse ultricies etiam elementum netus. Iaculis consequat
                amet hac quis purus arcu ligula. Sapien augue congue tincidunt
                risus leo scelerisque. A cursus tortor auctor non in sem
                scelerisque integer. Turpis enim est ut massa. Tortor mi
                lobortis maecenas phasellus. Semper ut.
              </div></Col>
  </Row>
</div>
      </Container>
    </div>
  );
};

export default BudayaPage;
