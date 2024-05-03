import React from "react";
import CabangOlahraga from "../OlahragaPage/CabangOlahraga";
import BannerOlahraga from "../OlahragaPage/bannerOlahraga";
import Pendahuluan from "../OlahragaPage/pendahuluan";

const IbadahPage = () => {
  return (
    <div>
      <BannerOlahraga />
      <Pendahuluan />
      <CabangOlahraga />
      {/* <Documentation /> */}
    </div>
  );
};

export default IbadahPage;
