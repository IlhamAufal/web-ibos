import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logoo from '../asset/IBOS profile poster.png';
import logo1 from '../asset/logo1.png';
import logo2 from '../asset/logo2.png';
import logo3 from '../asset/logo3.png';
import { Container, Row, Col} from 'react-bootstrap';

function About() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center',marginTop: '10px', marginBottom: '25px' }}>
      
      <Card style={{ width: '610px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.418)'}}>
        <Card.Body>
          <Card.Title><b>Card Title</b></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
      <Card style={{ width: '610px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.418)'}}>
        <Card.Body>
          <Card.Title><b>Card Title</b></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

</div>

      <div className='myAbout-director' style={{ marginTop: '10px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto', display: 'flex' }}>
        <div className="image-container" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginLeft: '90px', marginTop: '40px', position: 'relative' }}>
          <img src={logoo} className="image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '2', background: 'black', borderRadius: '5px', padding: '5px 20px' }}>
            <h5 style={{ color: 'white', margin: '0' }}>Test</h5>
          </div>
        </div>
        <p style={{ color: 'white', marginLeft: '40px', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>

      {/* Logo IBOS */}
      <div>
  <div className='mySubMenu1'>
    <h5 style={{ marginTop: '6px' }}>Makna dan Arti Logo IBOS?</h5>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card style={{ width: '18rem', margin: '0 20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.418)', height: '450px' }}>
      <Card.Img variant="top" src={logo1} />
      <Card.Body style={{ background: 'red', color: 'white' }}>
        <Card.Title><b>Para Insan Telkomsel</b></Card.Title>
        <Card.Text style={{ fontSize: '13px', paddingBottom: '20px' }}>
          Melambangkan kesatuan, kegembiraan, kesehatan, dan saling peduli terhadap 
          sesama yang sejalan dengan semangat Living AKHLAK thru Telkomsel DigiLife ACTION
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '0 20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.418)', height: '450px' }}>
      <Card.Img variant="top" src={logo2} style={{height:'188px'}}/>
      <Card.Body style={{ background: 'red', color: 'white' }}>
        <Card.Title><b>Siluet Portal Telkomsel</b></Card.Title>
        <Card.Text style={{ fontSize: '13px', paddingBottom: '20px' }}>
          Berpola batik sebagai identitas budaya Indonesia yang melambangkan optimisme terhadap 
          masa depan yang lebih baik dan portal melambangkan Telkomsel siap membuka peluang untuk semua lini kehidupan
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '0 20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.418)', height: '450px' }}>
      <Card.Img variant="top" src={logo3} />
      <Card.Body style={{ background: 'red', color: 'white' }}>
        <Card.Title><b>Tanda Centang</b></Card.Title>
        <Card.Text style={{ fontSize: '13px', paddingBottom: '20px' }}>
          Pengejawantahan semangat untuk mencapai visi IBOS ”Menuju Insan Telkomsel paripurna yang 
          beriman dan bertaqwa, berakhlak mulia, sehat jasmani, dan peduli”
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  {/* Logo IBOS */}

  {/* Pilar IBOS */}
  <div className='mySubMenu1'>
    <h5 style={{ marginTop: '6px' }}>Pengertian Pilar IBOS</h5>
  </div>
  <Card style={{ height: '500px', width: '1200px', marginLeft: '19vh' }}>
    <Card.Img variant="top" style={{ width: '1200px' }} />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    {/* Pilar IBOS */}

    {/* Peraturan IBOS */}
  <div className='mySubMenu1' style={{justifyContent:'center'}}><h5 style={{marginTop:'6px'}}>Peraturan IBOS</h5></div>
</div>
  );
}

export default About;
