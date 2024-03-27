import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import news1 from '../asset/news1.png'
import news2 from '../asset/news2.png'
import news3 from '../asset/news3.png'

function MyCarousel(){
  return(
    <div>
    <Carousel>
      <Carousel.Item style={{height:'90vh', marginTop:'75px'}}>
      <div className="relative h-screen bg-black/60">
        <img
          className="d-block w-100 "
          src={news1}
        /></div>
        <Carousel.Caption style={{marginBottom:'50px'}}>
          <h3 className="text-left" >First slide label</h3>
          <p className="text-left">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height:'90vh', marginTop:'75px'}}>
        <img
          className="d-block w-100"
          src={news2}
        />
        <Carousel.Caption style={{marginBottom:'50px'}}>
          <h3 className="text-left">First slide label</h3>
          <p className="text-left">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height:'90vh', marginTop:'75px'}}>
        <img
          className="d-block w-100"
          src={news3}
        />
        <Carousel.Caption style={{marginBottom:'50px'}}>
          <h3 className="text-left">First slide label</h3>
          <p className="text-left">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default MyCarousel;