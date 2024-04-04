import React from 'react';
import '../style/landingpage.css';
import '../style/newspage.css';
import RealNews from '../components/RealNews';
import RelatedNews from '../components/RelatedNews';
import { useNavigate } from "react-router-dom";


const NewsPage = () => {
  return (
    <div className="landing-container">
      <div className="row no-gutters">
        <div className="col">
          <RealNews/>
        </div>
        <div className="col">
          <RelatedNews/>
        </div>
        <button onClick={useNavigate} className='tulisArtikel'>Tulis Artikel</button>
      </div>
    </div>
  );
}


export default NewsPage;
