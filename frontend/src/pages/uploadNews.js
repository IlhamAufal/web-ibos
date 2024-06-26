import { React } from "react";
import InputNewsDetail from "../UploadNews/InputNewsDetail";
import "../UploadNews/UNStyle.css";
import { Container } from "react-bootstrap";

const uploadNews = () => {
  return (
    <div>
      <div
        className="mySubMenu1"
        style={{ height: "40px", width: "1000px", marginTop: "100px" }}
      >
        <h5 style={{ marginBlock: "auto" }}>Unggah Berita Baru</h5>
      </div>
      <Container>
        <label
          class="form-label font-bold"
          for="customFile"
          style={{ marginLeft: "11.5%", marginTop: "40px" }}
        >
          Masukkan Detail Berita
          <caption class="d-flex">
            Masukkan detail terkait berita yang anda pilih
          </caption>
        </label>
        <InputNewsDetail />
      </Container>
    </div>
  );
};

export default uploadNews;
