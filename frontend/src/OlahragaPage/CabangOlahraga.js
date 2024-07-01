import React from "react";
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

import imgBasket from "./asset/imgBasket.png";
import imgAikido from "./asset/imgAikido.png";
import imgLari from "./asset/imgLari.png";
import imgVoli from "./asset/imgVoli.png";
import imgBadminton from "./asset/imgBadminton.png";
import imgCardio from "./asset/imgCardio.png";
import imgCatur from "./asset/imgCatur.png";
import imgFutsal from "./asset/imgFutsal.png";
import imgGym from "./asset/imgGym.png";
import imgKaratedo from "./asset/imgKaratedo.png";
import imgMuayThai from "./asset/imgMuayThai.png";
import imgPanahan from "./asset/imgPanahan.png";
import imgSepakbola from "./asset/imgSepakbola.png";
import imgTaekwondo from "./asset/imgTaekwondo.png";
import imgTenis from "./asset/imgTennis.png";
import imgTenisMeja from "./asset/imgTennisMeja.png";
import imgYoga from "./asset/imgYoga.png";

import { Col, Container, Row } from "react-bootstrap";
import "./olahragaStyle.css";

const CabangOlahraga = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        marginBottom: "30px",
      }}
    >
      Cabang Olahraga
      <div
        className="mt-5 justify-center font-bold"
        style={{ fontSize: "16px", marginTop: "150px" }}
      >
        <button style={{ marginInline: "10px" }}>
          <img src={Aerobik} className="iconCabang mb-2" />
          Aerobik
        </button>
        <button style={{ marginInline: "10px" }}>
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
      </div>
      <div
        className="mt-4 justify-center"
        style={{ fontSize: "16px", marginBottom: "150px" }}
      >
        <button style={{ marginInline: "10px" }}>
          <img src={Panahan} className="iconCabang mb-2" />
          Panahan
        </button>
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
      <Container>
        <div className="textBoxAbuabu" style={{ backgroundColor: "#FBC995" }}>
          <div className="mySubMenu1 mb-8 mt-4" style={{ fontSize: "25px" }}>
            Rincian Program Olahraga
          </div>
          {data1.map((d, index) => (
            <Row key={index} style={{ marginBlock: "20px" }}>
              {index % 2 === 0 ? (
                // Sisi Kiri
                <>
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
                        <img src={d.gambar} className="radiusImg" />
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
                        {d.program}
                      </h4>
                    </div>
                    <div className="w-3/4 ml-5">{d.deskripsi}</div>
                  </Col>
                </>
              ) : (
                // Sisi Kanan
                <>
                  <Col className="col-9">
                    <div>
                      <h4
                        style={{
                          textAlign: "right",
                          fontWeight: "bold",
                          margin: "30px 0 10px 20px",
                        }}
                      >
                        {d.program}
                      </h4>
                    </div>
                    <div
                      className="w-3/4 mr-5"
                      style={{ textAlign: "justify", marginLeft: "230px" }}
                    >
                      {d.deskripsi}
                    </div>
                  </Col>
                  <Col className="col-3">
                    <div
                      style={{
                        backgroundColor: "red",
                        width: "100px",
                        height: "200px",
                        borderRadius: "50px 0 0 50px",
                        position: "absolute",
                        zIndex: "1",
                        paddingLeft: "15%",
                        marginLeft: "3%",
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
                        src={d.gambar}
                        style={{
                          borderRadius: "0 50px 0 50px ",
                          position: "relative",
                          width: "200px",
                          height: "200px",
                        }}
                      />
                    </div>
                  </Col>
                </>
              )}
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

const data1 = [
  {
    program: "Aikido",
    gambar: imgAikido,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Atletik - Lari",
    gambar: imgLari,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Bola Basket",
    gambar: imgBasket,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Bola Voli",
    gambar: imgVoli,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Bulutangkis",
    gambar: imgBadminton,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Cardio – Poundfit",
    gambar: imgCardio,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Gym",
    gambar: imgGym,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Karatedo",
    gambar: imgKaratedo,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Muaythai",
    gambar: imgMuayThai,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Panahan",
    gambar: imgPanahan,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Sepakbola",
    gambar: imgSepakbola,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Taekwondo",
    gambar: imgTaekwondo,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Tenis Lapangan",
    gambar: imgTenis,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Tenis Meja",
    gambar: imgTenisMeja,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Yoga",
    gambar: imgYoga,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Catur",
    gambar: imgCatur,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
  {
    program: "Futsal",
    gambar: imgFutsal,
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet suscipit ac in tellus libero porttitor viverra nisi. Nunc nunc vestibulum suspendisse ultricies etiam elementum netus. Iaculis consequat amet hac quis purus arcu ligula. Sapien augue congue tincidunt risus leo scelerisque. A cursus tortor auctor non in sem scelerisque integer.",
  },
];

export default CabangOlahraga;
