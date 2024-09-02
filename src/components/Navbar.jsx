// src\components\Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const rightSideRef = useRef(null);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    // Close menu when clicking outside of the menu and right side area
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && !rightSideRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="bg-[#7e3b3b19] flex justify-around lp:justify-evenly items-center px-7 py-3 sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4 sticky z-0 top-0">
        <img 
          height="60px"
          width="60px"
          src="https://th.bing.com/th/id/OIG3.DJ0n.qROg9928iem0eYo?w=1024&amp;h=1024&amp;rs=1&amp;pid=ImgDetMain"
          alt="logo"
        />
        <div className="logo font-extrabold text-2xl lp:whitespace-nowrap">
          <span className="text-[#00ff00]">&lt;</span>
          <span>Pass</span>
          <span className="text-[#00ff00]"> OP</span>
          <span className="text-[#00ff00]">/&gt;</span>
        </div>
      </div>

      {/* Desktop Menu Links */}
      <ul className="hidden lpnav:flex lpnav:gap-40 lpnav:ml-80">
        <li className="flex items-center gap-4">
          <Link
            className={`hover:font-bold flex items-center gap-4 ${activeLink === '/' ? 'border-b-4 border-black shadow-text-white' : ''}`}
            to="/"
            onClick={() => handleLinkClick('/')}
          >
            <lord-icon
              src="https://cdn.lordicon.com/wmwqvixz.json"
              trigger="hover"
              style={{ width: '30px', height: '30px' }} // Adjust icon size
            />
            Home
          </Link>
        </li>
        <li className="flex items-center gap-4 lp:whitespace-nowrap">
          <Link
            className={`hover:font-bold flex items-center gap-4 ${activeLink === '/about-us' ? 'border-b-4 border-black shadow-text-white' : ''}`}
            to="/about-us"
            onClick={() => handleLinkClick('/about-us')}
          >
            <lord-icon
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              style={{ width: '30px', height: '30px' }}
            />
            About Us
          </Link>
        </li>
        <li className="flex items-center gap-4 lp:whitespace-nowrap">
          <Link
            className={`hover:font-bold flex items-center gap-4 ${activeLink === '/our-services' ? 'border-b-4 border-black shadow-text-white' : ''}`}
            to="/our-services"
            onClick={() => handleLinkClick('/our-services')}
          >
            <lord-icon
              src="https://cdn.lordicon.com/depeqmsz.json"
              trigger="hover"
              style={{ width: '30px', height: '30px' }}
            />
            Our Services
          </Link>
        </li>
        <li className="flex items-center gap-4 lp:whitespace-nowrap">
          <Link
            className={`hover:font-bold flex items-center gap-4 ${activeLink === '/contact-us' ? 'border-b-4 border-black shadow-text-white' : ''}`}
            to="/contact-us"
            onClick={() => handleLinkClick('/contact-us')}
          >
            <lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="hover"
              style={{ width: '30px', height: '30px' }}
            />
            Contact Us
          </Link>
        </li>
      </ul>

      {/* GitHub Logo */}
      {/* <div className="hidden lp:flex items-center">
        <img className="invert"
          width="40px"
          height="40px"
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt="GitHub Logo"
        />
      </div> */}

      {/* Mobile Menu Button */}
      <div className="lp:hidden flex">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-20 p-3"
        >
          <span className={`material-symbols-outlined transition-transform duration-300 text-3xl ${menuOpen ? 'hidden' : 'block'}`}>
            menu
          </span>
        </button>

        {/* Right Side Area for Closing Menu */}
        <div
          ref={rightSideRef}
          className="fixed top-0 right-0 w-[30%] h-full invisible "
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-[70%] h-full bg-gradient-to-r from-slate-800 to-blue-800 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}
        >
          {/* Close Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-black text-3xl p-2"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Logo and Name */}
          <div className="flex items-center p-5 text-white">
            <img src="https://th.bing.com/th/id/OIG3.DJ0n.qROg9928iem0eYo?w=1024&amp;h=1024&amp;rs=1&amp;pid=ImgDetMain" alt="Website Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold text-black">
              <span className="text-[#00ff00]">&lt;</span>
              <span>Pass</span>
              <span className="text-[#00ff00]"> OP</span>
              <span className="text-[#00ff00]">/&gt;</span>
            </h1>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col p-10 space-y-7 text-white">
            <Link className={`flex items-center gap-4 hover:bg-blue-600 hover:shadow-md rounded-lg py-3 px-5 transition duration-300 text-lg font-semibold ${activeLink === '/' ? 'border-b-4 border-white' : ''}`} to="/" onClick={() => handleLinkClick('/')}>
              <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" style={{ width: '30px', height: '30px' }} />
              Home
            </Link>
            <Link className={`flex items-center gap-4 hover:bg-blue-600 hover:shadow-md rounded-lg py-3 px-5 transition duration-300 text-lg font-semibold ${activeLink === '/about-us' ? 'border-b-4 border-white' : ''}`} to="/about-us" onClick={() => handleLinkClick('/about-us')}>
              <lord-icon src="https://cdn.lordicon.com/hrjifpbq.json" trigger="hover" style={{ width: '30px', height: '30px' }} />
              About Us
            </Link>
            <Link className={`flex items-center gap-4 hover:bg-blue-600 hover:shadow-md rounded-lg py-3 px-5 transition duration-300 text-lg font-semibold ${activeLink === '/our-services' ? 'border-b-4 border-white' : ''}`} to="/our-services" onClick={() => handleLinkClick('/our-services')}>
              <lord-icon src="https://cdn.lordicon.com/depeqmsz.json" trigger="hover" style={{ width: '30px', height: '30px' }} />
              Our Services
            </Link>
            <Link className={`flex items-center gap-4 hover:bg-blue-600 hover:shadow-md rounded-lg py-3 px-5 transition duration-300 text-lg font-semibold ${activeLink === '/contact-us' ? 'border-b-4 border-white' : ''}`} to="/contact-us" onClick={() => handleLinkClick('/contact-us')}>
              <lord-icon src="https://cdn.lordicon.com/srsgifqc.json" trigger="hover" style={{ width: '30px', height: '30px' }} />
              Contact Us
            </Link>

            <div className='absolute bottom-20 text-bold text-md text-[#000] '>Created & Designed With ❤ <span className="font-extrabold text-[#31f031]">&lt;PassOP /&gt;</span> <i className='text-md'>by Jay Badgujar</i></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
