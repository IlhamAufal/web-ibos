import React from "react";
import './landingpage.css';
import { Container,Row, Col } from "react-bootstrap";
import pfp1 from "./asset/pfp1.svg";
import pfp2 from "./asset/pfp2.svg";
import pfp3 from "./asset/pfp3.svg";
import pfp4 from "./asset/pfp4.svg";

const Atasan = () => {
    return (
        <div style={{ backgroundColor: '#600606', padding: '90px 50px', marginTop:'100px', color: 'white'}}>
            <h2 className="text-center font-bold">Lorem Ipsum</h2>
    <Container>
    <Row className="justify-content-center d-flex" style={{marginTop:'100px'}}>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp1} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <h4 className="font-bold">Name</h4>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto'}}>
            <img src={pfp2} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <h4 className="font-bold">Name</h4>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp3} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <h4 className="font-bold" >Name</h4>
        </Col>
        <Col className="col-auto text-center" style={{ marginInline: '50px', maxWidth: 'auto' }}>
            <img src={pfp4} style={{ borderRadius: '50%', marginBottom: '20px', height:'200px'}} />
            <h4 className="font-bold" >Name</h4>
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
