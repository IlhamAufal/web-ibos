import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import kasus from '../Donasi/asset/kasus.svg'
import LinkAja from '../Donasi/asset/LinkAja.png'
import Konten from "../Donasi/konten";

import '../Donasi/donasiStyle.css'

function CheckExample() {
  return (
    <Form>
      <div key={`default-checkbox`} className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Check
          type={'checkbox'}
          id={`default-checkbox`}
          label={
            <> 
            <div className="d-flex font-bold ">
              <img src={LinkAja} alt="Link Aja" style={{ marginInline: '10px', maxHeight: '50px' }} />
              Link Aja!
            </div>
            </> 
          }
        />
      </div>
    </Form>
  );
}
  

const DonasiCase = () => {
  return (
    <div style={{marginBlock:'100px'}}>
        <div className=" text-white font-bold text-center w-3/4" style={{marginInline:'auto', marginBottom:'50px', backgroundColor:'red', fontSize:'35px'}}>Donasi anda sangat berarti bagi mereka!</div>
        <Container>
        <Row>
            <Col className="col-auto">
                <img src={kasus} style={{borderRadius:'30px', maxHeight:'400px', marginRight:'20px'}}/>
            </Col>
            <Col>
                <h1 className="font-bold">Lorem Ipsum Dolor</h1>
                <p className="text-justify w-5/6">Lorem ipsum dolor sit amet consectetur. Et amet mauris imperdiet magna. Vestibulum consectetur et dignissim netus interdum. Tempor quam massa lorem in. At hendrerit aenean diam sodales proin tincidunt commodo sed. Tempor lectus aliquet ut risus consectetur aliquam sed condimentum. Libero netus lorem fames at. Ac tristique sodales nulla tincidunt integer lectus libero mauris malesuada. In sed donec iaculis amet tempus tortor sociis euismod pellentesque. Ut ultrices cursus ullamcorper semper diam sit. Risus eget et et auctor dapibus lectus facilisis.</p>
                <div className="d-flex flex-nowrap gap-2 mb-4">
                <div className="kategori" style={{maxWidth:'120px'}}>Sosial</div>
                <div className="kategori" style={{maxWidth:'120px'}}>Budaya</div>
                </div>
                <div className="font-bold text-lg">Donasi Terkumpul:</div>
                <ProgressBar striped now={60} variant="danger" className="mb-3"/>
                (Rp 700.000 /Rp 1.000.000 )
                
            </Col>
        </Row>
        <Row className="mt-5">
<div className="flex font-bold text-center kategori mb-4">Metode Pembayaran</div>
            <CheckExample/>
        </Row>
        </Container>

        <div className="mb-4 text-center font-bold" style={{marginTop:'150px',fontSize:'25px'}}>Kunjungi juga kasus lainnya!</div>
        <Konten/>
    </div>
  );
};

export default DonasiCase;
