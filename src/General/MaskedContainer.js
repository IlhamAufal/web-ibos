import React from "react";
import { Container } from "react-bootstrap";
import imgMask from "../KomunitasPage/asset/IBOS profile poster.png";

const MaskedContainer = ({ children }) => {
  return (
    <Container
      style={{
        position: "relative",
        overflow: "hidden",
        width: "1600px",
        height: "620px",
      }}
    >
      <img
        src={imgMask}
        alt="Mask"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </Container>
  );
};

export default MaskedContainer;
