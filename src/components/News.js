import React from 'react';
import thumbnail from '../asset/thumbnail-news.png'
import { Container } from 'react-bootstrap';

const BlogCard = () => {
  return (
    <Container>
    <a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{marginLeft:'200px', marginTop:'25px', width: '300vh', height: '35vh', textDecoration: 'none', fontSize: '20px'}}>
  <img className="object-cover w-1/3 rounded-l-lg" src={thumbnail} style={{width: '294px', marginLeft:'20px'}} />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black" style={{whiteSpace: 'nowrap'}}>Noteworthy technology acquisitions 2021</h5>
    <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>
</a>



    </Container>
  );
}

export default BlogCard;