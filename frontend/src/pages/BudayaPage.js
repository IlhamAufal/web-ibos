import React from "react";
import BannerBudaya from "../BudayaPage/bannerBudaya";
import ProgramBudaya from "../BudayaPage/programBudaya";
import Pendahuluan from "../BudayaPage/pendahuluan";
import Dokumentasi from "../BudayaPage/dokumentasiBudaya";
// import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import "../BudayaPage/budayaStyle.css";

const BudayaPage = () => {
  return (
    <div>
      <BannerBudaya />
      <Pendahuluan />
      <ProgramBudaya />
      <Dokumentasi/>
    </div>
  );
};

export default BudayaPage;
