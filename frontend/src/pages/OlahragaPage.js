import React from "react";
import CabangOlahraga from "../OlahragaPage/CabangOlahraga";
import BannerOlahraga from "../OlahragaPage/bannerOlahraga";
import Pendahuluan from "../OlahragaPage/pendahuluan";
import Jadwal from "../OlahragaPage/Jadwal";

const OlahragaPage = () => {
  return (
    <div>
      <BannerOlahraga />
      <Pendahuluan />
      <CabangOlahraga />
      <Jadwal />
    </div>
  );
};

export default OlahragaPage;
