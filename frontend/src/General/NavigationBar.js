import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logoDark from "../asset/logo-dark.jpg";
import "./general.css";

// const scrollToSection = (sectionId) => {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

const NavigationBar = () => {
  return (
    <div className="myNB fixed-top">
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logoDark} alt='' width="50%" height="50%" />
          </Navbar.Brand>
          <Nav className="me-auto" style={{ color: "white", gap: "20px" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="News & Event">
              <NavDropdown.Item href="#">All</NavDropdown.Item>
              <NavDropdown.Item href="#">Iman</NavDropdown.Item>
              <NavDropdown.Item href="#">Budaya</NavDropdown.Item>
              <NavDropdown.Item href="#">Olahraga</NavDropdown.Item>
              <NavDropdown.Item href="#">Sosial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/uploadNews">
                Tulis Artikel
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Komunitas">
            <NavDropdown.Item href="/iman">MTT</NavDropdown.Item>
              <NavDropdown.Item href="/iman">Persekutuan Doa</NavDropdown.Item>
              <NavDropdown.Item href="/iman">Forum Hindu</NavDropdown.Item>
              <NavDropdown.Item href="/budaya">Budaya</NavDropdown.Item>
              <NavDropdown.Item href="/olahraga">Olahraga</NavDropdown.Item>
              <NavDropdown.Item href="/sosial">Sosial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pendaftaran">
              <NavDropdown.Item href="/iman">Anggota</NavDropdown.Item>
              <NavDropdown.Item href="/budaya">Komunitas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tentang">Tentang IBOS</Nav.Link>

            {/* Ini yang Scroll
            <Nav.Link onClick={() => scrollToSection("tentang")}>
              Tentang IBOS
            </Nav.Link> */}


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
