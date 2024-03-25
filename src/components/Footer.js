import React from 'react';
import logo from '../asset/logo-dark.jpg';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-6" style={{ color: 'white' }}>
      <Container>
        <div>
          <img src={logo} ></img>
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>Contact: info@example.com</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
