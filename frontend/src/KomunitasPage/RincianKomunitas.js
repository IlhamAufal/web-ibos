import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const data=[{
  label:'Nama Komunitas',
  placeholder:'Masukkan Nama Komunitas'},
  {
  label:'Alamat Sekretariat',
  placeholder:'Masukkan Alamat Sekretariat'
}]

const RincianKomunitas = () => {
  return (
    <div
      className="form-group font-bold ml-2"
      style={{ marginBottom: "20px", maxWidth: "40%"}}
    >
      <Row style={{ width: "250%", padding:'20px 20px 0 20px'}}>
        <Col>
                <label htmlFor="exampleFormControlInput1" ty>Nama Komunitas</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder='Masukkan Nama Komunitas'
                />
                </Col>
        <Col>
                <label htmlFor="exampleFormControlInput1" ty>Bidang </label>
                <select class="form-control" id="exampleFormControlSelect1">
            <option>Iman</option>
            <option>Budaya</option>
            <option>Olahraga</option>
            <option>Sosial</option>
          </select>
                </Col>
      </Row>
      <Row style={{ width: "250%", marginBlock: "20px", padding:'20px 20px 0 20px'}}>
                <label htmlFor="exampleFormControlInput1" ty>Alamat Sekretariat</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder='Masukkan Alamat Sekretariat'
                />
                </Row>
      <Row style={{ width: "250%", marginBlock: "20px", padding:'20px 20px 40px 20px'}}>
        <label >Jadwal Kegiatan</label>
        <Col>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>Senin</option>
            <option>Selasa</option>
            <option>Rabu</option>
            <option>Kamis</option>
            <option>Jumat</option>
          </select>
          </Col>
        <Col>
            <input
              type="time"
              className="form-control"
              id="exampleFormControlInput2"
            />
          </Col>
      </Row>
    </div>
  );
};

export default RincianKomunitas;
