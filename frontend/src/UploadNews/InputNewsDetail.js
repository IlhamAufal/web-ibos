import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";

const Checkbox = () => {
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
      <label className="form-check-label text-muted text-sm" htmlFor="Checkbox">
        Saya menyatakan bahwa data yang saya berikan adalah benar
      </label>
    </div>
  );
};

const InputNewsDetail = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [file, setFile] = useState(null);
  const [lokasi, setLokasi] = useState("");
  const [kategori, setKategori] = useState("Iman");
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // bikin pratinjau gambar
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    formData.append("tanggal", tanggal);
    formData.append("file", file);
    formData.append("lokasi", lokasi);
    formData.append("kategori", kategori);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      style={{ width: "1000px", marginBottom: "50px", position: "relative" }}
    >
      <form>
        <div className="form-group font-bold" style={{ marginBottom: "20px" }}>
          <label htmlFor="judulBerita">Judul Berita</label>
          <input
            type="text"
            className="form-control"
            id="judulBerita"
            placeholder="Masukkan judul berita"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="form-group font-bold" style={{ marginBottom: "20px" }}>
          <label htmlFor="deskripsiBerita">Deskripsi Berita</label>
          <textarea
            className="form-control"
            id="deskripsiBerita"
            rows="4"
            placeholder="Masukkan deskripsi berita"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex">
          <div
            className="form-group font-bold"
            style={{ marginBottom: "20px", width: "45%" }}
          >
            <label htmlFor="tanggalKejadian">Tanggal Kejadian</label>
            <input
              type="date"
              className="form-control"
              id="tanggalKejadian"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
          <div
            className="form-group font-bold"
            style={{ marginBottom: "50px", marginLeft: "10%", width: "45%" }}
          >
            <label htmlFor="lokasiKejadian">Lokasi Kejadian</label>
            <input
              type="text"
              className="form-control"
              id="lokasiKejadian"
              placeholder="Masukkan Lokasi Kejadian"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            />
          </div>
        </div>
        <div
          className="form-group font-bold"
          style={{ marginBottom: "20px", width: "45%" }}
        >
          <label htmlFor="gambarkejadian">Foto Kejadian</label>
          <input
            type="file"
            className="form-control form-control-lg"
            accept=".jpg, .jpeg, .png, .svg"
            id="gambarkejadian"
            onChange={handleFileChange}
          />
        </div>
        {previewImage && (
          <div
            className="mb-4 d-flex justify-content-center"
            style={{
              border: "dashed grey 4px",
              width: "500px",
              margin: "auto",
            }}
          >
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "100%", height: "auto", maxHeight: "300px" }}
            />
          </div>
        )}
        <div className="form-group font-bold" style={{ marginBottom: "50px" }}>
          <label htmlFor="kategoriBerita">Kategori Berita</label>
          <select
            className="form-control"
            id="kategoriBerita"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option>Iman</option>
            <option>Budaya</option>
            <option>Olahraga</option>
            <option>Sosial</option>
          </select>
        </div>

        <div className="form-group font-bold">
          <label>Ceklist</label>
          <Checkbox />
        </div>
        <button
          className="myButton"
          type="button"
          style={{
            margin: "20px auto",
            display: "block",
            padding: "10px 20px",
          }}
          onClick={handleSubmit}
        >
          Unggah
        </button>
      </form>
    </Container>
  );
};

export default InputNewsDetail;
