import React from "react";
import Downloadable from "../Tentang/downloadable";
import InputNewsDetail from "../UploadNews/InputNewsDetail";
import { Container } from "react-bootstrap";

const tentang = () => {
  return (
    <div className="bg-gray-300">
      <div
        className="mySubMenu1 mb-4 w-1/3"
        style={{ height: "40px", marginTop: "100px" }}
      >
        <h5 style={{ marginBlock: "auto", fontWeight:'bold'}}>Peraturan IBOS</h5>
      </div>
      <Downloadable/>
    </div>
  );
};

export default tentang;
