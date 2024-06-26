import { React, setFile } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RincianKomunitas from "./RincianKomunitas";
import UploadImage from "../UploadNews/uploadImage";

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile);
};

const PendaftaranAnggota = () => {
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

          {/* Penguploadan FIle PDF */}
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
                  <label htmlFor="uploadPDF" className="text-sm">
                    Upload Aturan Organisasi
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF"
                    onChange={handleFileChange}
                  />
                </div>
              </Row>
              <Row>
                <div
                  className="form-group font-semibold"
                  style={{ marginBottom: "20px", width: "auto" }}
                >
                  <label htmlFor="uploadPDF" className="text-sm">
                    Upload Susunan Kepengurusan
                  </label>
                  <caption className="d-flex text-red-600 text-sm">
                    meliputi penasehat, pembina, pengawas, dan pengurus.
                  </caption>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF"
                    onChange={handleFileChange}
                  />
                </div>
              </Row>
              <Row>
                <div
                  className="form-group font-semibold"
                  style={{ marginBottom: "20px", width: "auto" }}
                >
                  <label htmlFor="uploadPDF" className="text-sm">
                    Upload Berita Acara Pendirian
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="uploadPDF"
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
