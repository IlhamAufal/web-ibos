import React from "react";
import { Nav, Container, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';
import logoDark from "../asset/logo-dark.jpg";

const NavigationBar = () => {
  return (
    <div className="myNB">
      <Navbar variant='dark'>
        <Container>
          <NavbarBrand><img src={logoDark} width="50%" height="50%"/></NavbarBrand>
          <Nav style={{marginRight:'200px'}}>
            <NavLink style={{marginRight:'20px'}}>Home</NavLink>
            <NavLink style={{marginRight:'20px'}}>News</NavLink>
            <NavLink style={{marginRight:'20px'}}>Event</NavLink>
            <NavLink style={{marginRight:'20px'}}>Komunitas</NavLink>
            <NavLink style={{marginRight:'20px'}}>Tentang</NavLink>
          </Nav>
          <button className="myButton myButtonHover">Login</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;