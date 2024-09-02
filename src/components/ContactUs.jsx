import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-[100vh] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="bg-[#111827] text-white py-12 md:py-20 lg:py-32 mb-12 md:mb-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            We’d love to hear from you! Reach out to us for any queries or support.
          </p>
          <ul className="text-base md:text-lg mb-8 md:mb-12">
            <li className="mb-3 md:mb-4">📧 Email: <a href="mailto:support@passop.com" className="text-blue-400 hover:underline">support@passop.com</a></li>
            <li className="mb-3 md:mb-4">📞 Phone: +91 91234 56789</li>
            <li className="mb-3 md:mb-4">📍 Address: Plot-No-38 Jbuilding behind Phoenix Mall, Old Sangvi, Pune- 424002</li>
          </ul>
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

export default ContactUs;
