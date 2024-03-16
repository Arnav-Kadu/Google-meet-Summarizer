import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Meet Summarizer</Link> 
      <ul>
        <li><Link to="/">Summaries</Link></li>
        <li><Link to="/summarize-transcript">Summarize Transcript</Link></li>
        <li><Link to="/summarize-recording">Summarize Recording</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
