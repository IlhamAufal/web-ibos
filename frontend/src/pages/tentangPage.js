import React from "react";
import Peraturan from "../Tentang/peraturan";
import Sejarah from "../Tentang/sejarah";

const tentang = () => {
  return (
    <div className="bg-gray-100">
      <Sejarah />
      <Peraturan />
    </div>
  );
};

export default tentang;
