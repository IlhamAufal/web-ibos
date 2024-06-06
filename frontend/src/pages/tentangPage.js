import React from "react";
import Peraturan from "../Tentang/peraturan";
import Sejarah from "../Tentang/sejarah";
import InputNewsDetail from "../UploadNews/InputNewsDetail";
import { Container } from "react-bootstrap";

const tentang = () => {
  return (
    <div className="bg-gray-300">
      <Sejarah />
      <Peraturan />
    </div>
  );
};

export default tentang;
