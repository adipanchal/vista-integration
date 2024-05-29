import { useState } from "react";
import "./App.css";
import Contact from "./Pages/Contact/Contact.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Services from "./Pages/Services/Services.jsx";
import About from "./Pages/About/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./Pages/ThankYou.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Privacy from "./Pages/Privacy.jsx";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Router  >
      <ScrollToTop/>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
