import React from "react";
import './landingpage.css'; // Pastikan path ke file CSS benar
import { Container,Row, Col } from "react-bootstrap";
import pfp1 from "./asset/pfp1.svg"; // Perbaiki sintaks import

const Atasan = () => {
    return (
        <div style={{ backgroundColor: '#600606', padding: '90px 50px'}}>
    <Container>
    <Row className="justify-content-center d-flex">
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp1} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <div className="font-bold" style={{ color: 'white' }}>Name</div>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto'}}>
            <img src={pfp1} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <div className="font-bold" style={{ color: 'white' }}>Name</div>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp1} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <div className="font-bold" style={{ color: 'white' }}>Name</div>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp1} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <div className="font-bold" style={{ color: 'white' }}>Name</div>
        </Col>
    </Row>
    <Row>
        <div style={{color:'white', marginTop:'70px', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit</div>
    </Row>
</Container>
</div>

    );
}

export default Atasan;
