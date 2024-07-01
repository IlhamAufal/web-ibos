import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import kasus from "../Donasi/asset/donasiCase.png";
import LinkAja from "../Donasi/asset/LinkAja.png";
import qris from "../Donasi/asset/qris.svg";
import Konten from "../Donasi/konten";

import "../Donasi/donasiStyle.css";

function PilihanPembayaran() {
  return (
    <Form>
      <Form.Group>
        <Row className="mb-3" key={`radio-linkaja`}>
          <Col className="col-auto">
            <Form.Check
              type="radio"
              id="radio-linkaja"
              name="paymentOption"
              label={
                <div className="d-flex font-bold">
                  <img
                    src={LinkAja}
                    alt="Link Aja"
                    style={{ marginInline: "10px", maxHeight: "50px" }}
                  />
                  Link Aja!
                </div>
              }
            />
          </Col>
          <Col className="col-4">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nominal Pembayaran</Form.Label>
                <Form.Control type="int" placeholder="masukkan nominal" />
                <div className="text-xs muted text-red-500">
                  jumlahkan donasi dengan tambahan digit 11 di akhir
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col style={{ marginLeft: "150px" }}>
            <Row>
              <img
                src={qris}
                alt=""
                style={{ maxHeight: "200px", marginBottom: "30px" }}
              />
            </Row>
            <Row>
              <p>
                Donasi melalui LinkAja mulai tanggal xxxxx sd xxxxxxxx,
                transfer/emoney dikirim ke nomor 0811xxxxxx, jumlah donasi
                dengan tambahan digit 11 di akhir, misal Rp250.011,-.
              </p>
            </Row>
          </Col>
        </Row>
        {/* <Row className="mb-3" key={`radio-lainnya`}>
            <Form.Check
              type="radio"
              id="radio-lainnya"
              name="paymentOption"
              label={
                <div className="d-flex font-bold">
                  Lainnya
                </div>
              }
            />
        </Row> */}
      </Form.Group>
    </Form>
  );
}

const DonasiCase = () => {
  return (
    <div style={{ marginBlock: "100px" }}>
      <div
        className=" text-white font-bold text-center w-3/4"
        style={{
          marginInline: "auto",
          marginBottom: "50px",
          backgroundColor: "red",
          fontSize: "35px",
        }}
      >
        Donasi anda sangat berarti bagi mereka!
      </div>
      <Container>
        <Row>
          <Col className="col-auto">
            <img
              src={kasus}
              style={{
                borderRadius: "30px",
                maxHeight: "400px",
                marginRight: "20px",
              }}
            />
          </Col>
          <Col>
            <h1 className="font-bold">Donasi Sepatu Pelajar Papua</h1>
            <p className="text-justify w-5/6">
              TFlyers, masih ingat dengan Program Donasi Sepatu Pelajar Papua?
              Itu loh program yang mengajak para pelanggan untuk berdonasi
              dengan menukarkan Telkomsel Poin-nya. Hasil donasinya akan
              diberikan dalam bentuk sepatu sekolah dengan desain yang super
              cakep dan nyaman kepada adik-adik pelajar di Papua. Nah, Ka Rusel
              mau update tentang program ini! Program Donasi Sepatu Pelajar
              Papua sudah berada dalam tahap produksi di pabrik Polos Made By
              You! Yuk tonton selengkapnya behind the scene produksi sepatu
              pelajar ini dengan donasi di sini. Jangan lupa untuk share ke
              media sosialmu juga ya, TFlyers!.
            </p>
            <div className="font-bold text-lg">Donasi Terkumpul:</div>
            <ProgressBar striped now={60} variant="danger" className="mb-3" />
            (Rp 700.000 /Rp 1.000.000 )
          </Col>
        </Row>
        <Row className="mt-5">
          <div className="flex font-bold text-center kategori mb-4">
            Metode Pembayaran
          </div>
          <PilihanPembayaran />
          <div className="d-flex justify-center items-center mt-4">
            <button className="myButton" style={{ width: "120px" }}>
              Kirim
            </button>
          </div>
        </Row>
      </Container>

      <div
        className="mb-4 text-center font-bold"
        style={{ marginTop: "150px", fontSize: "25px" }}
      >
        Kunjungi juga kasus lainnya!
      </div>
      <Konten />
    </div>
  );
};

export default DonasiCase;
