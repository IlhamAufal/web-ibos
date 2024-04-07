import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "./PopUp";
import "../style/landingpage.css";

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "30px",
        borderRadius: "20px",
        margin: "auto",
        marginBottom: "50px",
        marginTop: "350px",
        maxWidth: "1400px",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        <div className="mySubMenu1" style={{ marginBottom: "30px" }}>
          Dokumentasi
        </div>
          <div className="d-flex flex-wrap" style={{maxHeight:'600px', maxWidth:'1200px'}}>
            <Link to="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                />
            </Link>

           <Link to="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                />
            </Link>

           <Link to="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                />
            </Link>

           <Link to="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                />
            </Link>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
            />
        </div>
        <div style={{ marginLeft: "43%" }}>
          <PopUp />
        </div>
      </Container>
    </div>
  );
};

export default Documentation;
