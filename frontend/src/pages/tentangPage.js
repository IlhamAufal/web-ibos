import React from "react";
import Peraturan from "../Tentang/peraturan";
import Sejarah from "../Tentang/sejarah";
import VisiMisi from "../Tentang/visiMisi";
import Strategi from "../Tentang/strategi";
import Struktur from "../Tentang/struktur";

const tentang = () => {
  return (
    <div className="bg-gray-100">
      <Sejarah />
      <VisiMisi />
      <Strategi />
      <Struktur />
      <Peraturan />
    </div>
  );
};

export default tentang;
