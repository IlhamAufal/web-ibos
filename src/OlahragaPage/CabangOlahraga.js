import React from "react";
import "./olahragaStyle.css";
import Aerobik from "./asset/iconCabang/Aerobik.svg";
import Badminton from "./asset/iconCabang/Badminton.svg";
import Basket from "./asset/iconCabang/Basket.svg";
import Beladiri from "./asset/iconCabang/Beladiri.svg";
import Catur from "./asset/iconCabang/Catur.svg";
import Gym from "./asset/iconCabang/Gym.svg";
import Lari from "./asset/iconCabang/Lari.svg";
import Panahan from "./asset/iconCabang/Panahan.svg";
import Sepakbola from "./asset/iconCabang/Sepakbola.svg";
import TenisMeja from "./asset/iconCabang/Tenis table.svg";
import Tennis from "./asset/iconCabang/Tennis.svg";
import Volley from "./asset/iconCabang/Volley.svg";
import Yoga from "./asset/iconCabang/Yoga.svg";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import { Col, Container, Row } from "react-bootstrap";

// const svgs = {
//     Aerobik: require("../asset/banner1.svg"),
//     Badminton: require("../asset/banner2.svg"),
//     Basket: require("../asset/banner3.svg"),
//   };

const CabangOlahraga = () => {
  return (
    <div
      className="font-bold"
      style={{ textAlign: "center", fontSize: "24px", marginBottom: "30px" }}
    >
      Cabang Olahraga
      <div className="mt-5 justify-center" style={{fontSize:'16px'}}>
        <button style={{ marginInline: "10px" }}>
          <img src={Aerobik} className="iconCabang mb-2" />
          Aerobik
        </button>
        <button style={{ marginInline: "10px"}}>
          <img src={Badminton} className="iconCabang mb-2 ml-2" />
          Badminton
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Basket} className="iconCabang mb-2" />
          Basket
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Beladiri} className="iconCabang mb-2" />
          Beladiri
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Catur} className="iconCabang mb-2" />
          Catur
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Gym} className="iconCabang mb-2" />
          Gym
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Lari} className="iconCabang mb-2" />
          Lari
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Panahan} className="iconCabang mb-2" />
          Panahan
        </button>
      </div>
      <div className="mt-4 justify-center" style={{fontSize:'16px'}}>
        <button style={{ marginInline: "10px" }}>
          <img src={Sepakbola} className="iconCabang mb-2" />
          Sepakbola
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Sepakbola} className="iconCabang mb-2" />
          Futsal
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={TenisMeja} className="iconCabang mb-2" />
          Tenis Meja
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Tennis} className="iconCabang mb-2" />
          Tenis
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Volley} className="iconCabang mb-2" />
          Voli
        </button>
        <button style={{ marginInline: "10px" }}>
          <img src={Yoga} className="iconCabang mb-2" />
          Yoga
        </button>
      </div>
      {/* Rincian Tiap Cabang */}
      <div
        style={{
          backgroundColor: "#FED4A6",
          marginBlock: "50px",
          padding: "20px 0 40px 0",
        }}
      >
        <div className="mySubMenu1" style={{ fontSize: "20px" }}>
          Rincian Tiap Cabang
        </div>
        <Container style={{ marginBlock: "40px", position: "relative" }}>
          <Row>
            <Col className="col-3">
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
            </Col>
            <Col>
              <h4 style={{ textAlign: "left", fontWeight: "bold" }}>Basket</h4>
              <div className="textBoxAbuabu">
                Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
                tellus libero porttitor viverra nisi. Nunc nunc vestibulum
                suspendisse ultricies etiam elementum netus. Iaculis consequat
                amet hac quis purus arcu ligula. Sapien augue congue tincidunt
                risus leo scelerisque. A cursus tortor auctor non in sem
                scelerisque integer. Turpis enim est ut massa. Tortor mi
                lobortis maecenas phasellus. Semper ut.
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginBlock: "40px", position: "relative" }}>
          <Row>
            <Col>
              <h4
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Basket
              </h4>
              <div className="textBoxAbuabu">
                Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in
                tellus libero porttitor viverra nisi. Nunc nunc vestibulum
                suspendisse ultricies etiam elementum netus. Iaculis consequat
                amet hac quis purus arcu ligula. Sapien augue congue tincidunt
                risus leo scelerisque. A cursus tortor auctor non in sem
                scelerisque integer. Turpis enim est ut massa. Tortor mi
                lobortis maecenas phasellus. Semper ut.
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
                  src={imgBasket}
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
        </Container>
      </div>
    </div>
  );
};

export default CabangOlahraga;
