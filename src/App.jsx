import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';        // Corrected path
import Footer from './components/Footer';        // Corrected path
import Home from './components/Home';            // Corrected path
import AboutUs from './components/AboutUs';      // Corrected path
import OurServices from './components/OurServices';  // Corrected path
import ContactUs from './components/ContactUs';  // Corrected path
import Manager from './components/Manager';      // Corrected path

function App() {
  return (
    <>
     <div className="absolute top-0 z-[-2] h-fit w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      <Navbar />
      {/* Routes configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/app" element={<Manager />} />
      </Routes>
      <Footer />

</div>
    </>
  );
}

export default App;
