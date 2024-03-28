import React from 'react';
import thumbnail from '../asset/thumbnail-news.png';
import { Container, Row, Col } from 'react-bootstrap'; // Impor Row dan Col dari react-bootstrap

const BlogCard = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className='myNews-overlay' style={{marginTop:'25px'}}></div>
          <div className="myNews">
            <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
              <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
              <div className="flex flex-col p-4 leading-normal">
                <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>
          <div className='myNews-overlay' style={{marginTop:'25.5px'}}></div>
          <div className="myNews">
            <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
              <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
              <div className="flex flex-col p-4 leading-normal">
                <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>
        </Col>
        <Col>
        <div className='myNews-overlay' style={{marginTop:'25px'}}></div>
          <div className="myNews">
            <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
              <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
              <div className="flex flex-col p-4 leading-normal">
                <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>
          <div className='myNews-overlay' style={{marginTop:'25.5px'}}></div>
          <div className="myNews">
            <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
              <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
              <div className="flex flex-col p-4 leading-normal">
                <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogCard;
