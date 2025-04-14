import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ เพิ่ม Footer
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-black">
  <Navbar />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </main>
  <Footer />
</div>
    </Router>
  );
}

export default App;