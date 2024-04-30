import React from "react";
import BannerDonasi from "../Donasi/bannerDonasi";
import BlackBox from "../Donasi/blackBox";
import img1 from "../Donasi/asset/blackBox.svg";
import { Col, Container, Row } from "react-bootstrap";
import Tombol from "../Donasi/tombol";
import Konten from "../Donasi/konten";

const DonasiPage = () => {
  return (
    <div>
      <BannerDonasi />
      <div style={{fontSize:'28px', margin:'100px 0 50px 0', textAlign:'center', fontWeight:'bold'}}>Selamat Datang di Halaman Kebaikan</div>
      
      <Tombol/>

{/* Berbagi bersama IBOS */}
      <BlackBox/>
      <Konten/>
      
      {/* <Documentation /> */}
    </div>
  );
};

export default DonasiPage;