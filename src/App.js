import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './style/landingpage.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './components/About';
// import Cursor from './components/Cursor';
import LandingPage from './pages/landingpage';
import NewsPage from './pages/newsPage';
import UploadNews from './pages/uploadNews.js';
import IbadahPage from './pages/ibadahpage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='poppins'>
        {/* <Cursor/> */}
      <div>
        <NavigationBar />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/uploadnews' element={<UploadNews />} />
          <Route path='/ibadah' element={<IbadahPage />}/>
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
      <div className="myFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
