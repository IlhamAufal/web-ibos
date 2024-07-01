import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./donasiStyle.css";
import img1 from "./asset/blackBox.svg";

const blackBox = () => {
  return (
    <div className="relative bg-black/60 d-flex justify-content-end mt-12">
      {" "}
      <img className="d-block w-50" src={img1} />
      <div
        style={{
          position: "absolute",
          color: "white",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(5, 5, 7, 9) 45%, transparent)",
        }}
      >
        <div
          style={{
            maxWidth: "45%",
            margin: "70px 0 0 60px",
            textAlign: "justify",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bolder",
              marginBottom: "20px",
            }}
          >
            Berbagi bersama IBOS
          </h2>
          <p>
            Berlandaskan budaya AKHLAK, Tflyers insan IBOS senantiasa peduli
            kepada sesama khususnya di lingkungan terdekat seperti donasi kepada
            karyawan yang meninggal atau tertimpa musibah (kebakaran, bencana
            alam), kepada para OB, driver, security (donasi hari raya, sakit,
            kematian, bea siswa pendidikan anak, dll).{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default blackBox;
