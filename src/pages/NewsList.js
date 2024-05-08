import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NewsCard from "../NewsPage/NewsCard";
import "../NewsPage/newsStyle.css";

const NewsList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/uploadNews");
  };

  return (
    <div>
      <Container className="text-white font-bold d-flex" style={{ marginBlock: '90px', borderRadius: '0 0 0 60px', background: 'linear-gradient(to left, #00327B, #000000)' }}>
        <div style={{ margin: '80px 0 80px 25px', fontSize: '30px'}}>Daftar Berita & Acara</div>
      </Container>
      <NewsCard/>
    </div>
  );
};

export default NewsList;
