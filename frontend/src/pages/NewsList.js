import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewsCard from "../NewsPage/NewsCard";
import iconSearch from "../NewsPage/asset/iconSearch.svg";
import "../NewsPage/newsStyle.css";

const NewsList = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Container
        className="text-white font-bold d-flex"
        style={{
          marginBlock: "90px",
          borderRadius: "0 0 0 60px",
          background: "linear-gradient(to left, #00327B, #000000)",
        }}
      >
        <div style={{ margin: "80px 0 80px 25px", fontSize: "30px" }}>
          Daftar Berita & Acara
        </div>
      </Container>

      {/* Search Box */}
      <div>
        <input
          className="d-flex search-box justify-center"
          placeholder="Masukkan kata kunci"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>

      <NewsCard query={query} />
    </div>
  );
};

export default NewsList;
