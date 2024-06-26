import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./tentangStyle.css";

const sejarah = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <h5
        className="mySubMenu1"
        style={{ marginBlock: "auto", fontWeight: "bold" }}
      >
        Sejarah IBOS
      </h5>
      <Row
        className="bg-white mt-4"
        style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Col>
          <ul style={{ listStyleType: "square" }}>
            <li>
              1997: Mulai berdiri organisasi karyawan yang dipelopori Majelis
              Talim Telkomsel.
            </li>
            <li>
              2000: Pertama kali pengukuhan Badan Pengurus Kegiatan Sosial,
              Olahraga, Kerohanian, dan Kesenian (KD.03/2000). Terdapat 15
              komunitas, yaitu kerohanian (Islam, Kristen, dan Hindu), olahraga
              (tenis meja, catur, tenis lapangan, beladiri, bulu tangkis, sepak
              bola, bola voli, basket, golf, dan kebugaran/SKJ), sosial, dan
              kesenian.
            </li>
            <li>
              2004: Pergantian kepengurusan Kegiatan Non Kedinasan
              (KD.025/2004).
            </li>
            <li>
              2006: Kebijakan tentang Pembinaan Kegiatan Iman, Budaya, Olahraga,
              dan Kegiatan Sosial (KD.026/2006). Penetapan sistem rasio sesuai
              jumlah umat beragama untuk Penghargaan Perjalanan Kerohanian yang
              pertama kali sejak program ini mulai berjalan di tahun 2002
              (KD.001/2002).
            </li>
            <li>
              2008: Penyempurnaan kebijakan Penghargaan Perjalanan Kerohanian
              (KD.035/2008).
            </li>
            <li>2017: KD.032/2017 tentang amandemen KD.026/2006.</li>
            <li>
              2021: Nota Dinas Direktur HCM No.138/2021 tentang Tim Transformasi
              Kegiatan Iman, Budaya, Olahraga, dan Sosial.
            </li>
            <li>
              2022: PR.020/2022 tentang Tata Kelola Kegiatan Iman, Budaya,
              Olahraga, dan Sosial (IBOS).
            </li>
          </ul>
          <p>
            Sesuai dengan pembangunan budaya Perusahaan (AKHLAK dan ACTION),
            maka Perseroan mempunyai tanggung jawab untuk membangun Karyawan
            dari aspek rasio, raga, roh, dan rasa (4R). Perseroan memandang
            pembinaan Karyawan di luar lingkup pekerjaan merupakan tanggung
            jawab untuk menumbuhkan keseimbangan antara pekerjaan dengan
            kehidupan pribadi secara moral dan sosial. Oleh karenanya Perseroan
            mewadahinya dalam bentuk kegiatan Iman, Budaya, Olahraga, dan Sosial
            (IBOS).
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default sejarah;
