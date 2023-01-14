import React from 'react';
import './Navbar.css';

function Navbar({setIsUserPage, setIsHomePage}) {

  const handleClick = () => {
    setIsUserPage(true);
  }

  return (
    <nav className="floating-navbar">
        <div className="navbar-left">
          <p>butter.</p>
        </div>
        <div className="navbar-right">
            <div className="navbar-buttons">
              <button>&#128235;</button>
              <button>&#128176;</button>
              <button onClick={handleClick}>&#129337;</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;