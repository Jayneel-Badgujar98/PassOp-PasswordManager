import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <>
    <div className="absolute top-0 z-[-2] h-[1000px] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className='nospace text-wrap sticky top-28 text-bold text-[#000] flex justify-end m-7 sm:m-[100px] md:m-[100px]'>Created & Designed With ❤ <span className="font-extrabold text-[#31f031]">&lt;PassOP /&gt;</span> <i className='text-md'>by Jayneel Badgujar</i></div>
    <section className= "h-[100vh] text-center py-20 sm:py-10">
      <h1 className="text-5xl sm:text-xl sm:bg-white font-extrabold mb-6">Welcome to PassOp</h1>
      <p className="text-xl md:text-md mb-8 md:whitespace-wrap md:break-normal">Manage your passwords efficiently and securely with PassOp.</p>
      <button
        onClick={handleGetStarted}
        className="bg-[#00ff00] px-8 py-3 rounded-full text-black font-bold border-2 border-black hover:border-white hover:bg-[#0c570cbd] hover:text-[#00ff00] "
      >
        Get Started
      </button>
    </section>
    </>
  );
};

export default Home;
