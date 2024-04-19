import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style/landingpage.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/landingpage";
import NewsPage from "./pages/newsPage";
import UploadNews from "./pages/uploadNews";
import IbadahPage from "./pages/IbadahPage";
import OlahragaPage from "./pages/OlahragaPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="poppins">
      <div>
        <NavigationBar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/uploadnews" element={<UploadNews />} />
          <Route path="/ibadah" element={<IbadahPage />} />
          <Route path="/olahraga" element={<OlahragaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <div className="myFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
