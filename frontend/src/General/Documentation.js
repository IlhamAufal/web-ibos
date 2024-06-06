import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
    ></div>
  );
};

export default Documentation;
