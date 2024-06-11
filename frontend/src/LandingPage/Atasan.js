import React from "react";
import "./landingpage.css";
import { Container, Row, Col } from "react-bootstrap";
import pfp1 from "./asset/pfp1.svg";
import pfp2 from "./asset/pfp2.svg";
import pfp3 from "./asset/pfp3.svg";
import pfp4 from "./asset/pfp4.svg";

const Atasan = () => {
  return (
    <div
      style={{
        backgroundColor: "#600606",
        padding: "90px 50px",
        marginTop: "100px",
        color: "white",
      }}
    >
      <h2 className="text-center font-bold">Apa Kata Mereka?</h2>
      <Container>
        <Row
          className="justify-content-center d-flex"
          style={{ marginTop: "100px" }}
        >
         {data.map((d, index) => (
  <Col
    key={index}
    className="col-auto text-center"
    style={{ marginInline: "50px" }}
  >
    <img
      src={d.img}
      alt={d.name}
      style={{
        borderRadius: "50%",
        marginBottom: "20px",
        height: "200px",
      }}
    />
    <h4 className="font-bold">{d.name}</h4>
  </Col>
))}

          
        </Row>
        <Row>
          <div
            style={{ color: "white", marginTop: "70px", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            conDuis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatuExcepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit
          </div>
        </Row>
      </Container>
    </div>
  );
};

const data =[{
  img:pfp1,
  name:'Name 1'
},
{
  img:pfp2,
  name:'Name 2'
},
{
  img:pfp3,
  name:'Name 3'
},
{
  img:pfp4,
  name:'Name 4'
}]

export default Atasan;
