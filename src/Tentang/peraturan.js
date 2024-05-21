import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./tentangStyle.css";

// kumpulan dkoumen
import dokumen1 from "../IbosDocument/IBOS KD 003-2000 Pengurus IBOS 2000.pdf";
import dokumen2 from "../IbosDocument/IBOS KD 023-2003 PPK 2003-2004.pdf";
import dokumen3 from "../IbosDocument/IBOS KD 025-2004 Pengurus IBOS 2004.pdf";
import dokumen4 from "../IbosDocument/IBOS KD 026-2006 Juklak Kegiatan 2013.pdf";
import dokumen5 from "../IbosDocument/IBOS KD 026-2006 Pelaksanaan Pembinaan IBOS.pdf";
import dokumen6 from "../IbosDocument/IBOS KD 035-2008 Amandemen KD 026-2006.pdf";
import dokumen7 from "../IbosDocument/IBOS KR 032-2017 Iman Budaya dan Olah Raga.pdf";
import dokumen8 from "../IbosDocument/IBOS Nodin 56-2024 Tim PPK 2024.pdf";
import dokumen9 from "../IbosDocument/IBOS Nodin 112-2023 Tim PPK 2023.pdf";
import dokumen10 from "../IbosDocument/IBOS Nodin 138-2021 Tim Transformasi BOS.pdf";
import dokumen11 from "../IbosDocument/IBOS Nodin 246-2023 Pedoman Kegiatan IBOS.pdf";
import dokumen12 from "../IbosDocument/IBOS Nodin 247-2023 Rencana Kegiatan dan Anggaran.pdf";
import dokumen13 from "../IbosDocument/IBOS Nodin 3899-2023 Tim Koordinasi IBOS.pdf";
import dokumen14 from "../IbosDocument/IBOS PR 020-2022 Tata Kelola IBOS.pdf";
import LogoIbos from "../IbosDocument/logoIBOS.rar";

const download = (source) => {
  data.forEach((d) => {
    const link = document.createElement("a");
    link.href = source;
    link.download = d.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

const FILE_URL = "http://localhost:3000/file_zip.zip";
const downloadFileAtURL = (url) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const Peraturan = () => {
  return (
    <Container>
      <div
        className="mySubMenu1 mb-4 w-1/3"
        style={{ height: "40px", marginTop: "100px" }}
      >
        <h5 style={{ marginBlock: "auto", fontWeight: "bold" }}>
          Peraturan IBOS
        </h5>
      </div>

      {data.map((d, index) => (
        <div key={index} style={{ textDecoration: "none" }}>
          <div
            className="bg-white justify-content-center"
            style={{ borderRadius: "25px" }}
          >
            <Row className="d-flex mt-3">
              <Col className="col-9">
                <label
                  className="form-label font-bold"
                  htmlFor="customFile"
                  style={{
                    marginLeft: "14%",
                    marginBlock: "20px",
                    color: "red",
                    fontSize: "20px",
                  }}
                >
                  {d.fileName}
                </label>
              </Col>
              <Col>
                <button onClick={() => download(d.source)} className="button">
                  Download
                </button>
              </Col>
            </Row>
          </div>
        </div>
      ))}
      <div
        className="bg-white justify-content-center"
        style={{ borderRadius: "25px" }}
      >
        <Row className="d-flex mt-3">
          <Col className="col-9">
            <label
              className="form-label font-bold"
              htmlFor="customFile"
              style={{
                marginLeft: "14%",
                marginBlock: "20px",
                color: "red",
                fontSize: "20px",
              }}
            >
              Download Arsip Logo IBOS
            </label>
          </Col>
          <Col>
            <button
              onClick={() => downloadFileAtURL(LogoIbos)}
              className="button"
            >
              Download
            </button>{" "}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const data = [
  {
    fileName: "IBOS KD 003-2000 Pengurus IBOS 2000",
    source: dokumen1,
  },
  {
    fileName: "IBOS KD 023-2003 PPK 2003-2004",
    source: dokumen2,
  },
  {
    fileName: "IBOS KD 025-2004 Pengurus IBOS 2004",
    source: dokumen3,
  },
  {
    fileName: "IBOS KD 026-2006 Juklak Kegiatan 2013",
    source: dokumen4,
  },
  {
    fileName: "IBOS KD 026-2006 Pelaksanaan Pembinaan IBOS",
    source: dokumen5,
  },
  {
    fileName: "IBOS KD 035-2008 Amandemen KD 026-2006",
    source: dokumen6,
  },
  {
    fileName: "IBOS KR 032-2017 Iman Budaya dan Olah Raga",
    source: dokumen7,
  },
  {
    fileName: "IBOS Nodin 56-2024 Tim PPK 2024",
    source: dokumen8,
  },
  {
    fileName: "IBOS Nodin 112-2023 Tim PPK 2023",
    source: dokumen9,
  },
  {
    fileName: "IBOS Nodin 138-2021 Tim Transformasi BOS",
    source: dokumen10,
  },
  {
    fileName: "IBOS Nodin 246-2023 Pedoman Kegiatan IBOS",
    source: dokumen11,
  },
  {
    fileName: "IBOS Nodin 247-2023 Rencana Kegiatan dan Anggaran",
    source: dokumen12,
  },
  {
    fileName: "IBOS Nodin 3899-2023 Tim Koordinasi IBOS",
    source: dokumen13,
  },
  {
    fileName: "IBOS PR 020-2022 Tata Kelola IBOS",
    source: dokumen14,
  },
];

export default Peraturan;
