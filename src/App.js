import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./General/NavigationBar";
import Footer from "./General/Footer";
import LandingPage from "./pages/landingpage";
import NewsPage from "./pages/newsPage";
import NewsList from "./pages/NewsList";
import UploadNews from "./pages/uploadNews";
import DonasiPage from "./pages/DonasiPage";
import NotFoundPage from "./pages/NotFoundPage";
import KomunitasPage from "./pages/KomunitasPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import "./General/general.css";

// import ImanPage from "./pages/imanpage";
import BudayaPage from "./pages/BudayaPage";
import OlahragaPage from "./pages/OlahragaPage";
import SosialPage from "./pages/SosialPage";

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
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/uploadnews" element={<UploadNews />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/donasi" element={<DonasiPage />} />
          <Route path="/komunitas" element={<KomunitasPage />} />
          {/* <Route path="/iman" element={<ImanPage />} /> */}
          <Route path="/olahraga" element={<OlahragaPage />} />
          <Route path="/budaya" element={<BudayaPage />} />
          <Route path="/sosial" element={<SosialPage />} />
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
