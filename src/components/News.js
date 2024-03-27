import React from 'react';
import thumbnail from '../asset/thumbnail-news.png'
import { Container } from 'react-bootstrap';

const BlogCard = () => {
  return (
    <Container>
      <div className='myNews-overlay'></div>
  <div className="myNews">
    <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
    <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
    <div className="flex flex-col p-4 leading-normal">
      <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black" style={{whiteSpace: 'nowrap'}}>Noteworthy technology acquisitions 2021</h5>
      <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
  </a>
  </div>

  <div className='myNews-overlay' style={{marginTop:'25.5px'}}></div>
  <div className="myNews">
    <a href="#" className="flex w-full" style={{textDecoration: 'none'}}>
    <img className="object-cover rounded-lg" src={thumbnail} style={{height:'150px',width: '294px', marginLeft:'20px', marginTop:'13px'}} />
    <div className="flex flex-col p-4 leading-normal">
      <h5 className="text-xl font-bold tracking-tight text-black-900 dark:text-black" style={{whiteSpace: 'nowrap'}}>Noteworthy technology acquisitions 2021</h5>
      <p className="font-normal text-sm text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
  </a>
  </div>

{/* tambahan buat hover */}
{/* <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
    <img src="/retro-shoe.jpg" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div> */}

    </Container>
  );
}

export default BlogCard;