// SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './news.css'

const SideComp = () => {
  return (
    <div className="sidebar bg-slate-800 w-64 h-full fixed ">
      <ul>
        <li><Link to="/contact">Technology</Link></li>
        <li><Link to="/contact">Bihar</Link></li>
        <li><Link to="/contact">Science</Link></li>
        <li><Link to="/contact">Entertainment</Link></li>
        <li><Link to="/about">Politics</Link></li>
        <li><Link to="/contact">Education</Link></li>
        <li><Link to="/contact">Business</Link></li>
        <li><Link to="/">Sports</Link></li>
        <li><Link to="/contact">Tourism</Link></li>
        <li><Link to="/contact">World</Link></li>
      </ul>
    </div>
  );
};

export default SideComp;
