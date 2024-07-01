import React from "react";
import BannerSosial from "../SosialPage/bannerSosial";
import ProgramSosial from "../SosialPage/programSosial";
import Pendahuluan from "../SosialPage/pendahuluan";
import Dokumentasi from "../SosialPage/dokumentasiSosial";
import "../SosialPage/sosialStyle.css";

const BudayaPage = () => {
  return (
    <div>
      <BannerSosial />
      <Pendahuluan />
      <ProgramSosial />
      <Dokumentasi />
    </div>
  );
};

export default BudayaPage;
