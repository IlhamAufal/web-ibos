import React from 'react';
import logo from '../asset/logo-dark.jpg';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" style={{ color: 'white' }}>
  <Container style={{ maxWidth: '1200px' }}>
    <div style={{ display: 'flex', alignItems: 'left' }}>
      <img src={logo} style={{ marginRight: '100px', flexShrink: '0px'}} />
      <div style={{ marginLeft: 'auto', left:'fix' }}>
        <p>© 2024 Your Company. All rights reserved.</p>
        <p>Contact: info@example.com</p>
      </div>
    </div>
  </Container>
</footer>

  );
};

export default Footer;
