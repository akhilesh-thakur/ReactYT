// Navbar.js
import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">PortX</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/weather" className="text-white">
            Weather App
          </Link>
          <Link to="/bigcard" className='text-white'>Bigcard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

