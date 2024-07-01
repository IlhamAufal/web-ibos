import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RincianKomunitas from "./RincianKomunitas";
import axios from "axios";

const PendaftaranAnggota = () => {
  const [file, setFile] = useState(null);
  const [nama, setNama] = useState("");
  const [bidang, setBidang] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jadwal, setJadwal] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("bidang", bidang);
    formData.append("alamat", alamat);
    formData.append("file", file);
    formData.append("jadwal", jadwal);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload/komunitas",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div style={{ margin: "20px 0 50px 0" }}>
        <div
          className="mySubMenu1"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "80px",
          }}
        >
          Pendaftaran Komunitas
        </div>
        <div
          className="mySubMenu"
          style={{
            width: "400px",
            fontWeight: "bold",
            borderLeft: "20px solid black",
          }}
        >
          Rincian Komunitas
        </div>
        <Row>
          <Col style={{ margin: "30px 0 0 50px" }}>
            <div
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px",
              }}
            >
              <RincianKomunitas />
            </div>
          </Col>

          {/* Penguploadan File PDF */}
          <Col className="col-auto mt-4">
            <div
              style={{
                marginLeft: "25px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <Row>
                <div
                  className="form-group font-semibold"
                  style={{ marginBottom: "20px", width: "auto" }}
                >
                  <label htmlFor="uploadPDF1" className="text-sm">
                    Upload Aturan Organisasi
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF1"
                    onChange={handleFileChange}
                  />
                </div>
              </Row>
              <Row>
                <div
                  className="form-group font-semibold"
                  style={{ marginBottom: "20px", width: "auto" }}
                >
                  <label htmlFor="uploadPDF2" className="text-sm">
                    Upload Susunan Kepengurusan
                  </label>
                  <caption className="d-flex text-red-600 text-sm">
                    meliputi penasehat, pembina, pengawas, dan pengurus.
                  </caption>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF2"
                    onChange={handleFileChange}
                  />
                </div>
              </Row>
              <Row>
                <div
                  className="form-group font-semibold"
                  style={{ marginBottom: "20px", width: "auto" }}
                >
                  <label htmlFor="uploadPDF3" className="text-sm">
                    Upload Berita Acara Pendirian
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF3"
                    onChange={handleFileChange}
                  />
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PendaftaranAnggota;
