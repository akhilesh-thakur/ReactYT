// Navbar.js
import React, { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // drop down function
  const [isdrop, setdrop] = useState(false);

  const useDrop = () => {
    setdrop(!isdrop);
  };

  const useDrop2 = () => {
    setdrop(isdrop);
  };

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
          <Link to="/bigcard" className="text-white">
            Bigcard
          </Link>
          <Link to="/tictactoe" className="text-white">
            Tic-Tac-Toe
          </Link>
          <div className="text-white daywise">
            <div className="nav-item" onClick={useDrop}>
              Day Wise
              {isdrop && (
                <div className="dropdown bg-gray-800">
                  <Link to="/daywise/day8" className="dropdown-item">
                    Day8 - NewsPhobia
                  </Link>
                  <Link to="/daywise/day9" className="dropdown-item">
                    Day9 - NewsAPI
                  </Link>
                  <Link to="/daywise/day10" className="dropdown-item">
                    Day10 - UpdateNewsAPI
                  </Link>
                  <Link to="/daywise/day11" className="dropdown-item">
                  Day11 - NewsByCat
                  </Link>
                  <Link to="/daywise/day12" className="dropdown-item">
                    Day 12 - Fb
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
