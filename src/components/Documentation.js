import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/landingpage.css';

const Documentation = () => {

  return (
    <div style={{backgroundColor:'chocolate', padding:'20px', borderRadius:'20px', margin:'40px'}}>
    <Container style={{maxWidth:'80%'}}>
        <div className='mySubMenu1' style={{marginBottom:'30px'}}>Dokumentasi</div>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <Link to='/'>
        <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        className="w-100 shadow-1-strong rounded mb-4"/>
        </Link>

        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          className="w-100 shadow-1-strong rounded mb-4"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          className="w-100 shadow-1-strong rounded mb-4"
        />

        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          className="w-100 shadow-1-strong rounded mb-4"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          className="w-100 shadow-1-strong rounded mb-4"
        />

        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          className="w-100 shadow-1-strong rounded mb-4"
        />
      </div>
      <div className='myButton text-center' style={{width:'20%', margin:'auto', border:'none'}}>
        Selengkapnya
        </div>
    </div>
    </Container>
    </div>
  );
}

export default Documentation;
