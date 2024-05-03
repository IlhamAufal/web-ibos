import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check">
      <input
        style={{ borderWidth: "3px" }}
        className="form-check-input"
        type="checkbox"
        id="Checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

const InputNewsDetail = () => {
  return (
    <Container
      style={{ width: "1000px", marginBottom: "50px", position: "relative" }}
    >
      <form>
        <div className="form-group font-bold" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleFormControlInput1">Judul Berita</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Masukkan judul berita"
          />
        </div>
        <div className="form-group font-bold" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1">Deskripsi Berita</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Masukkan deskripsi berita"
          ></textarea>
        </div>
        <div className="d-flex">
          <div
            className="form-group font-bold"
            style={{ marginBottom: "20px", width: "45%" }}
          >
            <label htmlFor="exampleFormControlInput2">Tanggal Kejadian</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <div
            className="form-group font-bold"
            style={{ marginBottom: "50px", marginLeft: "10%", width: "45%" }}
          >
            <label htmlFor="exampleFormControlInput1">Lokasi Kejadian</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Masukkan Lokasi Kejadian"
            />
          </div>
        </div>
        <div className="form-group font-bold" style={{ marginBottom: "50px" }}>
          <label for="exampleFormControlSelect1">3. Kategori Berita</label>
          <caption className="text-muted d-flex">
            Pilih salah satu dari 4 Kategori
          </caption>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Iman</option>
            <option>Budaya</option>
            <option>Olahraga</option>
            <option>Sosial</option>
          </select>
        </div>

        {/* Ini kalo mau pake checkbox */}
        {/* <div className="form-group font-bold" style={{ marginBottom: "30px" }}>
          <label>3. Kategori Berita</label>
          <div>
            <Container className="d-flex">
              <Checkbox />
              <label className="text-sm mr-5" htmlFor="Checkbox">
                Ibadah
              </label>
              <Checkbox />
              <label className=" text-sm mr-5" htmlFor="Checkbox">
                Budaya
              </label>
              <Checkbox />
              <label className=" text-sm mr-5" htmlFor="Checkbox">
                Olahraga
              </label>
              <Checkbox />
              <label className=" text-sm mr-5" htmlFor="Checkbox">
                Sosial
              </label>
            </Container>
          </div>
        </div> */}
        <div className="form-group font-bold">
          <label>4. Ceklist</label>
          <div className="d-flex">
            <Checkbox />
            <label
              className="form-check-label text-muted text-sm"
              htmlFor="Checkbox"
            >
              Saya menyatakan bahwa data yang berikan adalah benar
            </label>
          </div>
        </div>
        <button
          className="myButton"
          style={{
            margin: "80px 50% 0 50%",
            paddingInline: "40px",
          }}
        >
          Unggah
        </button>
      </form>
    </Container>
  );
};

export default InputNewsDetail;
