import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const RincianAnggota = () => {
  return (
    <div
      className="form-group font-bold"
      style={{ marginBottom: "20px", maxWidth: "40%" }}
    >
      <Row style={{ width: "250%", marginBlock: "20px" }}>
        <Col>
          <label htmlFor="exampleFormControlInput1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email Anggota"
          />
        </Col>
        <Col>
          <label htmlFor="exampleFormControlInput1">Nomor Telepon</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nomor Telepon Anggota"
          />
        </Col>
      </Row>
      <Row style={{ width: "250%", marginBlock: "20px" }}>
        <Col>
          <label htmlFor="exampleFormControlInput1">
            Nomor Identitas Karyawan
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nomor Identitas Karyawan"
          />
        </Col>
        <Col>
          <div className="form-group font-bold" style={{ marginBottom: "50px" }}>
          <label htmlFor="exampleFormControlInput1">Jenis Kelamin</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pria</option>
            <option>Wanita</option>
          </select>
        </div>
        </Col>
      </Row>
      <Row style={{ width: "250%", marginBlock: "20px" }}>
        <Col>
          <div
            className="form-group font-bold"
            style={{ marginBottom: "20px" }}
          >
            <label htmlFor="exampleFormControlInput2">
              Tempat, Tanggal Lahir
            </label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Tempat Lahir"
                style={{ flex: 1, marginRight: "10px", width: "100%" }}
              />
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput2"
                style={{ flex: 1, width: "100%" }}
              />
            </div>
          </div>
        </Col>
        <Col>
          <label htmlFor="exampleFormControlInput1">Alamat</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Alamat Karyawan"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RincianAnggota;
