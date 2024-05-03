import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logoDark from "../asset/logo-dark.jpg";
import "./general.css";

const NavigationBar = () => {
  return (
    <div className="myNB fixed-top">
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logoDark} width="50%" height="50%" />
          </Navbar.Brand>
          <Nav className="me-auto" style={{ color: "white", gap: "20px" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="News">
              <NavDropdown.Item href="#">All</NavDropdown.Item>
              <NavDropdown.Item href="#">Ibadah</NavDropdown.Item>
              <NavDropdown.Item href="#">Budaya</NavDropdown.Item>
              <NavDropdown.Item href="#">Olahraga</NavDropdown.Item>
              <NavDropdown.Item href="#">Sosial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/uploadNews">
                Tulis Artikel
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Event</Nav.Link>
            <Nav.Link href="#">Donasi</Nav.Link>
            <Nav.Link href="">Tentang IBOS</Nav.Link>
          </Nav>
          <button
            className="text-sm myButton"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
