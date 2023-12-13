// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';


import Home from '../day5_routes/Home/Home';
import Bigcard from '../day1/Bigcard'
import Weather from '../Day6/Weather';
import Game from '../Day7/TicTacToe'
import RenderNewsCard from '../day8/RenderNewsCard';
import RenderNewsAPIcard from '../day9/RenderNewsAPIcard';

const Routes1 = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/bigcard" element={<Bigcard/>} />
        <Route path="/tictactoe" element={<Game/>} />
        <Route path='/daywise/day8' element={<RenderNewsCard/>} />
        <Route path='/daywise/day9' element={<RenderNewsAPIcard/>} />
      </Routes>
    </Router>
  );
};

export default Routes1;
