import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import NavbarNew from "./components/NavbarNew";
import ServicesNew from "./pages/ServicesNew";
import Sales from "./pages/Sales";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg">
        <NavbarNew />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesNew />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
