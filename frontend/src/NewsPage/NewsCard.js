import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import thumbnail1 from "./asset/thumbnail1.png";
import thumbnail2 from "./asset/thumbnail2.png";
import thumbnail3 from "./asset/thumbnail3.png";
import thumbnail4 from "./asset/thumbnail4.png";
import thumbnail5 from "./asset/thumbnail5.png";
import thumbnail6 from "./asset/thumbnail6.png";
import thumbnail7 from "./asset/thumbnail7.png";
import thumbnail8 from "./asset/thumbnail8.png";
import thumbnail9 from "./asset/thumbnail9.png";
import thumbnail10 from "./asset/thumbnail10.png";
import "./newsStyle.css";

const NewsCard = ({ query }) => {
  const data = [
    {
      title: "Kenalan sama Semua Motor OK",
      img: thumbnail1,
      description:
        "Yuk kenalan sama 'semua motor oke' biar tahu komunitas motor di Jabar yang ramah.",
    },
    {
      title: "Mari Mengajarkan Disiplin dan Kerjasama",
      img: thumbnail2,
      description:
        "Telkomsel FC Jateng-DIY jadi wadah Tflyers buat salurkan hobi olahraga.",
    },
    {
      title: "Kolaborasi Membawa Prestasi",
      img: thumbnail3,
      description:
        "Ajang perlombaan seni, budaya, dan olahraga 2023 tahunan digelar oleh BUMN.",
    },
    {
      title: "Gabung Bersama Halobrompt!",
      img: thumbnail4,
      description:
        "Buat pecinta gowes, jangan lupa ikut Halobrompt buat gowes rutin sebulan sekali.",
    },
    {
      title: "Salurkan Hobi Futsal di Telkomsel FC",
      img: thumbnail5,
      description:
        "Jangan ngaku pecinta futsal kalau kamu nggak gabung di komunitas IBOS.",
    },
    {
      title: "Ayo Gabung Aikido!",
      img: thumbnail6,
      description:
        "Telkomsel punya komunitas beladiri asal jepang yang bisa diikuti di TSO Jakarta Lt.6",
    },
    {
      title: "Bareng Telkomsel Cardio & Dance",
      img: thumbnail7,
      description:
        "Mau cari olahraga yang nyenengin tapi tetep bisa bakar banyak kalori?",
    },
    {
      title: "Turnamen Table Tennis 2023",
      img: thumbnail8,
      description:
        "Buat Tflyers yang suka main tenis meja, ada turnamen dari IBOS loh.. khusus buat internal aja.",
    },
    {
      title: "Pengumuman Pemenang Tanding Tenis Lapangan",
      img: thumbnail9,
      description: "Mau tahu siapa yang menang pertandingan tenis lapangan?",
    },
    {
      title: "Tari Kolosal Harmoni Indonesia",
      img: thumbnail10,
      description: "Mau tahu hasil seleksi Hari Adhibayaksa?",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Container style={{ marginBottom: "80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
          rowGap: "40px",
        }}
      >
        {filteredData.map((d, index) => (
          <a href="#" style={{ textDecoration: "none" }} key={index}>
            <div className="cardNews-overlay">
              <Card className="cardNews">
                <Card.Img
                  variant="top"
                  src={d.img}
                  style={{
                    height: "150px",
                    width: "auto",
                    overflowY: "hidden",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="bg-slate-100">
                  <Card.Title>
                    <b>{d.title}</b>
                  </Card.Title>
                  <Card.Text>{d.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default NewsCard;
