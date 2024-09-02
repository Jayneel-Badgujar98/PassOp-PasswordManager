import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-[100vh] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="bg-[#111827] text-black py-20 md:py-32 mb-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            About PassOp
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
            PassOp is your trusted password manager that simplifies secure password management. Our mission is 
            to protect your online accounts with robust encryption and ensure that you never struggle with 
            forgotten passwords again. Join us in keeping your digital life secure.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-[#00ff00] px-6 md:px-8 py-3 rounded-full text-black font-bold border-2 border-black hover:border-white hover:bg-[#0c570cbd] hover:text-[#00ff00] transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

