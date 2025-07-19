import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ เพิ่ม Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";
import Customer from "./pages/Customer";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTopButton from "./components/ScrollToTopButton"; // ✅
import CookieConsent from "./components/CookieConsent";
import Analytics from "./components/Analytics";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-black">
  <Navbar />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/service/:serviceType" element={<ServiceDetail />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </main>
  <Footer />
  <ScrollToTopButton /> {/* ✅ วางตรงนี้ */}
  <CookieConsent /> {/* ✅ เพิ่ม Cookie Consent */}
  <Analytics /> {/* ✅ เพิ่ม Analytics */}
</div>
    </Router>
  );
}

export default App;