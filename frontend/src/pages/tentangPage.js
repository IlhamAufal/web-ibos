import React from "react";
import Peraturan from "../Tentang/peraturan";
import Sejarah from "../Tentang/sejarah";
import SejarahKomunitas from "../Tentang/sejarahKomunitas";

const tentang = () => {
  return (
    <div className="bg-gray-100">
      <Sejarah />
      <SejarahKomunitas/>
      <Peraturan />
    </div>
  );
};

export default tentang;
