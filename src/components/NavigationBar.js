import React from "react";
import { Nav, Container, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';
import logoDark from "../asset/logo-dark.jpg";

const NavigationBar = () => {
  return (
    <div className="myNB fixed-top">
      <Navbar variant='dark'>
        <Container>
          <NavbarBrand><img src={logoDark} alt="Logo" width="50%" height="50%" /></NavbarBrand>
          <Nav className="me-auto" style={{ color: 'white' }}>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">Event</Nav.Link>
            <Nav.Link href="#">Komunitas</Nav.Link>
            <Nav.Link href="#">Tentang</Nav.Link>
          </Nav>
          <button className="text-sm myButton myButtonHover">Login</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
