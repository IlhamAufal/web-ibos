import React from "react";
import "../NewsPage/newsStyle.css";
import RealNews from "../NewsPage/RealNews";
import RelatedNews from "../NewsPage/RelatedNews";
import { useNavigate } from "react-router-dom";
import uploadNews from "../pages/uploadNews";

const NewsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/uploadNews");
  };

  return (
    <div className="landing-container">
      {/* <div className='redCircle' style={{marginLeft:'95%', marginTop:'10px'}}></div>
      <div className='redCircle' style={{marginLeft:'88%', opacity:'70%'}}></div> */}
      <div className="row no-gutters">
        <div className="col-auto">
          <RealNews />
        </div>
        <div className="col" style={{ zIndex: "1" }}>
          <RelatedNews />
        </div>
      </div>
      <div style={{ justifyContent: "center" }}>
        <button className="buttonTulisArtikel" onClick={handleClick}>
          Tulis Artikel
        </button>
        <div className="redBoxDown"></div>
      </div>
    </div>
  );
};

export default NewsPage;
