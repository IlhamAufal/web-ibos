import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const RincianKomunitas = () =>{
    return(
        <div className="form-group font-bold" style={{ marginBottom: "20px", maxWidth:'40%'}}>
  <Row style={{width:'250%', marginBlock:'20px'}}>
    <Col>
      <label htmlFor="exampleFormControlInput1">Nama Program</label>
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
  <Row style={{width:'250%', marginBlock:'20px'}}>
    <Col>
      <label htmlFor="exampleFormControlInput1">Nomor Identitas Karyawan</label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Nomor Identitas Karyawan"
      />
    </Col>
    <Col>
      <label htmlFor="exampleFormControlInput1">Jenis Kelamin</label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Jenis Kelamin Karyawan"
      />
    </Col>
  </Row>
  <Row style={{width:'250%', marginBlock:'20px'}}>
  <Col >
  <div className="form-group font-bold" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1">Deskripsi Komunitas</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Masukkan deskripsi komunitas"
          ></textarea>
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


          
    )
}

export default RincianKomunitas;