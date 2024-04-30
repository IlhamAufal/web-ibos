import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './donasiStyle.css'
import img1 from "./asset/blackBox.svg";

const blackBox = () =>{
    return(
<Container style={{ marginBlock: '100px', position: 'relative' }}>
  <div className="relative bg-black/60 d-flex justify-content-end"> {/* Tambahkan justify-content-end */}
    <img className="d-block w-50" src={img1}/>
    <div
      className="overlay"
      style={{
        position: "absolute",
        color:'white',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, rgba(5, 5, 7, 9) 45%, transparent)",
      }}
    >
      <div style={{maxWidth:'45%', margin:'70px 0 0 60px', textAlign:'justify'}}>
      <h2 style={{fontSize:'40px', fontWeight:'bolder', marginBottom:'20px'}}>Berbagi bersama IBOS</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Enim ultricies massa elit egestas sed. Tristique pretium bibendum ante condimentum sit sed proin scelerisque aliquam. Tellus aliquam phasellus vitae et platea morbi urna cursus adipiscing. In eu fringilla egestas ac. Et arcu posuere at aliquet faucibus etiam sit viverra. </p>
      </div>
    </div>
  </div>
</Container>

    )
}

export default blackBox;