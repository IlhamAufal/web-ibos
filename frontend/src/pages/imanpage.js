import React from "react";
import BannerIman from "../ImanPage/bannerIman";
import ProgramIman from "../ImanPage/programIman";
import Pendahuluan from "../ImanPage/pendahuluan";
import Dokumentasi from "../ImanPage/dokumentasiIman";
import "../ImanPage/imanStyle.css";

const BudayaPage = () => {
  return (
    <div>
      <BannerIman />
      <Pendahuluan />
      <ProgramIman />
      <Dokumentasi/>
    </div>
  );
};

export default BudayaPage;
