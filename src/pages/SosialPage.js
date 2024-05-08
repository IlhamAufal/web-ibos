import React from "react";
import BannerSosial from "../SosialPage/bannerSosial";
import ProgramSosial from "../SosialPage/programSosial";
import Pendahuluan from "../SosialPage/pendahuluan";
import Documentation from "../General/Documentation";
import { Container, Row, Col } from "react-bootstrap";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import "../SosialPage/sosialStyle.css";

const BudayaPage = () => {
  return (
    <div>
      <BannerSosial />
      <Pendahuluan />
      <ProgramSosial />
    </div>
  );
};

export default BudayaPage;
