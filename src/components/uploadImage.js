import React from "react";
import { Container } from "react-bootstrap";

const uploadImage = () => {
  const displaySelectedImage = (event, elementId) => {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        selectedImage.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  return (
    <div>
      <Container style={{ marginBottom: "20px" }}>
        <div
          className="mb-4 d-flex justify-content-center"
          style={{ border: "dashed grey 4px", width: "500px", margin: "auto" }}
        >
          <img
            id="selectedImage"
            src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
          />
        </div>
        <div className="d-flex justify-content-center">
          <label htmlFor="customFile1">
            <span className=" myButton">Pilih Gambar</span>
            <input
              type="file"
              className="form-control d-none"
              id="customFile1"
              onChange={(event) => displaySelectedImage(event, "selectedImage")}
            />
          </label>
        </div>
      </Container>
    </div>
  );
};

export default uploadImage;
