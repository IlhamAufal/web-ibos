import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./General/general.css";
import NavigationBar from "./General/NavigationBar";
import Footer from "./General/Footer";
import LandingPage from "./pages/landingpage";
import NewsPage from "./pages/newsPage";
import UploadNews from "./pages/uploadNews";
import IbadahPage from "./pages/IbadahPage";
import OlahragaPage from "./pages/OlahragaPage";
import NotFoundPage from "./pages/NotFoundPage";
import BudayaPage from "./pages/BudayaPage";
import KomunitasPage from "./pages/KomunitasPage";

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
          <Route path="/komunitas" element={<KomunitasPage />} />
          <Route path="/ibadah" element={<IbadahPage />} />
          <Route path="/olahraga" element={<OlahragaPage />} />
          <Route path="/budaya" element={<BudayaPage />} />
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
