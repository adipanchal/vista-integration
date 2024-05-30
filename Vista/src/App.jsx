import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Services from "./Pages/Services/Services.jsx";
import About from "./Pages/About/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import ThankYou from "./Pages/ThankYou.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Privacy from "./Pages/Privacy.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import Admin from "./Pages/Admin.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin" || location.pathname === "/admin-dashboard";

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="admin" element={<AdminLogin />} />
        <Route path="admin-dashboard" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
