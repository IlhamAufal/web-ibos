import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './donasiStyle.css'
import thumbnail from './asset/percobaanNews.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselCards = () => {
  const kategori = 'kategori';
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Row style={{margin:'60px'}}>
      <div className="kategori mb-4">{kategori}</div>
        <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
          {data.map((d, index) => (
            <Col key={index}>
              <a href="*" style={{ textDecoration: 'none' }}>
              <div className="bg-white text-black rounded-xl shadow-2xl" style={{ maxHeight: 'auto' }}>
              <div className="h-auto w-auto" style={{ overflowX: 'hidden' }}> 
  <img src={d.img} style={{ borderRadius: '30px 30px 0 0', height: '100%', width: '100%' }}/> 
</div>
                <div className="flex flex-col p-6">
                  <p className="text-xl font-semibold">{d.name.toUpperCase()}</p>
                  <p className="text-justify text-sm">{d.review}</p>
                </div>
              </div>
              </a>
            </Col>
          
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ filter: 'invert(100%)', position: 'absolute', top: '65%', left: '10px', zIndex: 1, cursor: 'pointer'}}
    >

    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{  filter: 'invert(100%)', position: 'absolute', top: '65%', right: '10px', zIndex: 1, cursor: 'pointer' }}
    >
      
    </div>
  );
};


const data = [
  {
    name: 'john morgan',
    img: thumbnail,
    review: 'Lorem ipsum dolor sit amet consectetur. Lacus viverra in adipiscing enim eu habitasse morbi imperdiet. '
  },
  {
    name: 'john morgan',
    img: thumbnail,
    review: 'Lorem ipsum dolor sit amet consectetur. Lacus viverra in adipiscing enim eu habitasse morbi imperdiet. '
  },
  {
    name: 'john morgan',
    img: thumbnail,
    review: 'Lorem ipsum dolor sit amet consectetur. Lacus viverra in adipiscing enim eu habitasse morbi imperdiet. '
  },
  {
    name: 'john morgan',
    img: thumbnail,
    review: 'Lorem ipsum dolor sit amet consectetur. Lacus viverra in adipiscing enim eu habitasse morbi imperdiet. '
  },
  {
    name: 'john morgan',
    img: thumbnail,
    review: 'Lorem ipsum dolor sit amet consectetur. Lacus viverra in adipiscing enim eu habitasse morbi imperdiet. '
  }
];

export default CarouselCards;
