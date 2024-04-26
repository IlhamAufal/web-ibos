import React from "react";
import "../style/landingpage.css";
import "../NewsPage/newspage.css";
import RealNews from "../NewsPage/RealNews";
import RelatedNews from "../NewsPage/RelatedNews";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {
  return (
    <div className="landing-container">
      {/* <div className='redCircle' style={{marginLeft:'95%', marginTop:'10px'}}></div>
      <div className='redCircle' style={{marginLeft:'88%', opacity:'70%'}}></div> */}
      <div className="row no-gutters">
        <div className="col">
          <RealNews />
        </div>
        <div className="col">
          <RelatedNews />
        </div>
      </div>
      <div style={{ justifyContent: "center" }}>
        <button className="tulisArtikel" onClick={useNavigate}>
          Tulis Artikel
        </button>
        <div className="redBoxDown"></div>
      </div>
    </div>
  );
};

export default NewsPage;
