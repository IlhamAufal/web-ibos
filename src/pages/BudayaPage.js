import React from "react";
import BannerBudaya from "../BudayaPage/bannerBudaya";
import ProgramBudaya from "../BudayaPage/programBudaya";
import Pendahuluan from "../BudayaPage/pendahuluan";
import Documentation from "../General/Documentation";
import { Container, Row, Col } from "react-bootstrap";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import "../BudayaPage/budayaStyle.css";

const BudayaPage = () => {
  return (
    <div>
      <BannerBudaya />
      <Pendahuluan />
      <ProgramBudaya />
    </div>
  );
};

export default BudayaPage;
