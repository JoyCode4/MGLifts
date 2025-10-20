import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg">
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
