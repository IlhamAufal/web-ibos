import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);
  const imgTitle = "Title";
  const imgDescription =
    "Testasdasdasdadadasdasdasdasdasdadadadasdasdasdasdasdasdsadasdasdas";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          borderRadius: "40px",
        }}
      >
        Selengkapnya
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ fontFamily: "poppins", maxHeight: "auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Dokumentasi</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "10px" }}>
          <div style={{ maxWidth: "100%", margin: "auto" }}>
            <h4>
              <b>{imgTitle}</b>
            </h4>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
            />
            <p
              className="row-4"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {imgDescription}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
