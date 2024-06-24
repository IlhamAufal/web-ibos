import React from "react";
import thumbnail from "./asset/thumbnail-event.png";
import thumbnail1 from "./asset/thumbnail1.png";
import thumbnail2 from "./asset/thumbnail2.png";
import thumbnail3 from "./asset/thumbnail3.png";
import thumbnail4 from "./asset/thumbnail4.png";
import thumbnail5 from "./asset/thumbnail5.png";
import thumbnail6 from "./asset/thumbnail6.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BoxEvent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {data.map((d, index) => (
          <Col
            key={index}
            md={5}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
            <div className="myNews">
              <a
                href="#"
                className="flex w-full"
                onClick={() => navigate("/news")}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="object-cover rounded-lg"
                  src={d.img}
                  style={{
                    height: "120px",
                    width: "300px",
                    marginLeft: "20px",
                    marginTop: "13px",
                  }}
                />
                <div className="flex flex-col p-4 leading-normal">
                  <h6 className="font-bold text-black-900 dark:text-black">
                    {d.title}
                  </h6>
                  <p className="font-normal text-sm text-gray-700 text-justify">
                    {d.description}
                  </p>
                </div>
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const data = [
  {
    title: "44 Tflyers Penerima Program Penghargaan",
    img: thumbnail1,
    description:
      "Karyawan terpilih penerima program IBOS - Penghargaan Perjalanan Kerohanian tahun 2022..",
  },
  {
    title: "MTT Adakan Kegiatan Donor Darah",
    img: thumbnail2,
    description:
      "Kegiatan bersama antara komunitas MTT, Persekutuan Doa",
  },
  {
    title: "Memperingati Hari Bati Adyaksa, BUMN selenggarakan Seni Tari & Musik",
    img: thumbnail3,
    description:
      "Selain seni musik terdapat komunitas Tari Tradisional yang berpartisipasi dalam berbagai event.",
  },
  {
    title: "Pemeringatan Hari Olahraga Nasional 2023",
    img: thumbnail4,
    description:
      "komunitas olahraga juga menyelenggarakan perhelatan internal seperti pertandingan antar direktorat, latihan bersama.",
  },
  {
    title: "Olahraga saat ini terdiri dari 17 komunitas cabang olahraga.",
    img: thumbnail5,
    description:
      "Bidang Olahraga menyelenggarakan agenda perhelatan tahunan seperti HUT Telkomsel dan BUMN Fest serta perhelatan tiga tahunan Olympiasel.",
  },
  {
    title: "Toys for Charity",
    img: thumbnail6,
    description:
      " program CSR Perusahaan, karyawan juga berpartisipasi dalam kegiatan kepedulian sosial dan lingkungan.",
  },
];

export default BoxEvent;
