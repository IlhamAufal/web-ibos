import React from 'react';
import logo from '../asset/logo-dark.jpg';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="myFooter">
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} style={{ marginLeft: '10vh', height:'100px' }} alt="Logo" />
          <div className="nav-group col-md-4 col-sm-4">
            <div className="link-header">
              <span className="header-title">Support Us</span>
            </div>
            <ul>
              <li className="list-item">
                <a href="">Contact</a>
              </li>
              <li className="list-item">
                <a href="">Faq</a>
              </li>
              <li className="list-item">
                <a href="">Location</a>
              </li>
              <li className="list-item">
                <a href="">Product</a>
              </li>
              <li className="list-item">
                <a href="/telkomsel-orbit">Internet Rumah</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
