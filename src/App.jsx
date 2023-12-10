// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/day5_routes/Navbar';
import Home from './components/day5_routes/Home/Home';
import About from './components/day5_routes/About';
import Contact from './components/day5_routes/Contact';
import Bigcard from './components/day1/Bigcard'
import Weather from './components/Day6/Weather';
import Game from './components/Day7/TicTacToe'

const App = () => {
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
      </Routes>
    </Router>
  );
};

export default App;
