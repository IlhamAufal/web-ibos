import React from 'react';
import '../style/landingpage.css';
import '../style/newspage.css';
import RealNews from '../components/RealNews';
import RelatedNews from '../components/RelatedNews';

const NewsPage = () => {
  return (
    <div className="landing-container">
      <RealNews/>
      <RelatedNews />
    </div>
  );
}

export default NewsPage;
