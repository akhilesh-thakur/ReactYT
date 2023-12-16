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
import Spinner from '../day10/Spinner';
import TopHeadlinesMain from '../day11/TopHeadlinesMain';
import Fb from '../day11/Fb';

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
        <Route path='/daywise/day10' element={<><h1 className=' text-white font-bold p-5 text-2xl'>This feature were added in the previous component(day9)</h1><Spinner/></>} />

        <Route path='/daywise/day11' element={<TopHeadlinesMain/>} >
        </Route>

        {/* other page starts here */}
        <Route path='/daywise/day12' element={<Fb/>} />
      </Routes>
    </Router>
  );
};

export default Routes1;
