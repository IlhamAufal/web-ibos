import React from "react";
import { Nav, Container, Navbar, NavLink, NavbarBrand, NavDropdown} from 'react-bootstrap';
import logoDark from "../asset/logo-dark.jpg";

const NavigationBar = () => {
  return (
    <div className="myNB fixed-top">
      <Navbar variant='dark'>
      <Container>
        <Navbar.Brand><img src={logoDark} alt="Logo" width="50%" height="50%" /></Navbar.Brand>
        <Nav className="me-auto" style={{ color: 'white' }}>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">News</Nav.Link>
          <Nav.Link href="#">Event</Nav.Link>
          <NavDropdown title="Komunitas">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Tentang IBOS</Nav.Link>
        </Nav>
        <button className="text-sm myButton myButtonHover">Login</button>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBar;
