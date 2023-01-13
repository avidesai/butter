import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="floating-navbar">
        <div className="navbar-left">
            <div className="navbar-text">butter.</div>
        </div>
        <div className="navbar-right">
            <div className="navbar-buttons">
                <button>&#128235;</button>
                <button>&#128176;</button>
                <button>&#129337;</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;