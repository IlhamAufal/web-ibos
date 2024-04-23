import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RincianKomunitas from "./RincianKomunitas";
import uploadImage from "./uploadImage";

const PendaftaranAnggota = () => {
    return (
        <div style={{margin: '20px 0 50px 0'}}>
            <div className='mySubMenu1' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginBottom:'80px'}}>Pendaftaran Komunitas</div>
            <div className="mySubMenu" style={{ width: '400px', marginLeft: '80px', fontWeight: 'bold', borderLeft: '20px solid black' }}>Rincian Komunitas</div>
        <Container>
        <Row>
            <Col className='col-3' style={{marginLeft:'30px'}}>
                <uploadImage/>
            </Col>
        <Col style={{margin:'30px 0 0 50px'}}>
            <RincianKomunitas/>
        </Col>
        </Row>
        </Container>
        </div>
    );
}

export default PendaftaranAnggota;