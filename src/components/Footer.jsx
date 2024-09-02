import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use Link and useLocation from react-router-dom

const Footer = () => {
  const location = useLocation();

  // Check if the current page is the password manager page
  const isPasswordManagerPage = location.pathname === '/app';

  return (
    <>
      <footer className={`bg-[#111827] text-white py-8 w-full ${!isPasswordManagerPage ? 'fixed bottom-0' : ''} `}>



        <div className="container mx-auto px-8 flex md:flex-col md:flex-row lp:justify-evenly items-center">
          {/* Logo and Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://th.bing.com/th/id/OIG3.DJ0n.qROg9928iem0eYo?w=1024&amp;h=1024&amp;rs=1&amp;pid=ImgDetMain"
              alt="Pass OP Logo"
              width="60"
              height="60"
              className="mr-3"
            />
            <span className="font-extrabold text-2xl">
              <span className='text-[#00ff00]'>&lt;</span>
              <span>Pass</span>
              <span className='text-[#00ff00]'> OP</span>
              <span className='text-[#00ff00]'>/&gt;</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lp:flex-row gap-5 lp:gap-20 lp:ml-64 lp:text-lg  mx-auto w-[60%] lp:w-full text-center">
            <Link to="/" className="hover:text-[#00ff00]">Home</Link>
            <Link to="/about-us" className="hover:text-[#00ff00]">About</Link>
            <Link to="/our-services" className="hover:text-[#00ff00]">Services</Link>
            <Link to="/contact-us" className="hover:text-[#00ff00]">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                width="30"
                height="30"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="Twitter"
                width="30"
                height="30"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Pass OP. All rights reserved.</p>
          <p>Created & Designed with ❤️ by <i>Jay Badgujar</i></p>
        </div>
      </footer>

    </>
  );
};

export default Footer;
