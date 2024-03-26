import React from 'react';
import logo from '../asset/logo-dark.jpg';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="myFooter">
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} style={{height:'100px', marginRight:'100px' }}/>
          <div className="nav-group col-md-4 col-sm-4" style={{}}>
            <ul>
            <div className="link-header">
              <span className="header-title"><b>Support Us</b></span>
            </div>
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
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
