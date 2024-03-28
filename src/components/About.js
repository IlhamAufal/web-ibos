import React from 'react';
import Card from 'react-bootstrap/Card';
import logoo from '../asset/IBOS profile poster.png';

function About() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginRight: '20px', marginTop: '10px', marginBottom: '25px' }}>
        <Card style={{ width: '610px', marginRight: '5px' }}>
          <Card.Body>
            <Card.Title><b>Card Title</b></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '610px', marginLeft: '15px' }}>
          <Card.Body>
            <Card.Title><b>Card Title</b></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className='myAbout-director' style={{ marginTop: '10px', marginBottom: '20px', display: 'flex' }}>
        <div className="image-container" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginLeft: '90px', marginTop: '40px', position: 'relative' }}>
          <img src={logoo} className="image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '2', background: 'black', borderRadius: '5px', padding: '5px 20px' }}>
            <h5 style={{ color: 'white', margin: '0' }}>Test</h5>
          </div>
        </div>
        <p style={{ color: 'white', marginLeft: '40px', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      <div className='mySubMenu1'><h5 style={{marginTop:'6px'}}>Makna dan Arti Logo IBOS?</h5>
      </div>
    </div>
  );
}

export default About;
