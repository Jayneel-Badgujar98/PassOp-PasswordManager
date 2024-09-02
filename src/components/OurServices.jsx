import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-[1000px] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="bg-[#48587cc5] text-black py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
            Our Services
          </h1>
          <ul className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed space-y-4 mb-8 md:mb-12">
            <li>🔐 Secure Password Storage</li>
            <li>🛠 Password Generation</li>
            <li>🔄 Multi-Device Sync</li>
            <li>🛡 Two-Factor Authentication (2FA)</li>
            <li>💾 Encrypted Vault Backup</li>
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

export default OurServices;
