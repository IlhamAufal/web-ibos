import { Container } from "react-bootstrap";
import poster from '../asset/IBOS profile poster.png';

const Intro = () => {
  return (
    <div className="intro position-relative" style={{paddingTop: '25vh'}} >
      <img 
        src={poster} 
        alt="IBOS Poster" 
        className="img-fluid position-absolute" 
        style={{ height: '75vh', width: 'auto' }}
      />
      <Container className="position-absolute text-overlay" style={{ textAlign: "center"}}>
        <h1 className="title">IBOS COMMUNITY</h1>
      </Container>
    </div>
  );
};

export default Intro;
