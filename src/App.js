import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import './style/landingpage.css';
import LandingPage from './pages/landingpage.js';
import NewsPage from './pages/newsPage.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
