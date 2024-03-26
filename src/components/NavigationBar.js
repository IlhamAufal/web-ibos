import React from "react";
import { Nav, Container, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';
import logoDark from "../asset/logo-dark.jpg";

const NavigationBar = () => {
  return (
    <div className="myNB">
      <Navbar variant='dark'>
        <Container>
          <NavbarBrand><img src={logoDark} width="50%" height="50%"/></NavbarBrand>
          <Nav>
            <NavLink className="">Home</NavLink>
            <NavLink>News</NavLink>
            <NavLink>Event</NavLink>
            <NavLink>Komunitas</NavLink>
            <NavLink>Tentang</NavLink>
            <button className="myButton">Login</button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;