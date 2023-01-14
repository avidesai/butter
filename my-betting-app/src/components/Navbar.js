import React from 'react';
import './Navbar.css';

function Navbar({setIsBetsPage, setIsWalletPage, setIsUserPage, setIsHomePage}) {

  const handleBets = () => {
    setIsBetsPage(true);
  }
  const handleWallet = () => {
    setIsWalletPage(true);
  }
  const handleUser = () => {
    setIsUserPage(true);
  }
  const handleHomeClick = () => {
    setIsHomePage(true);
    setIsBetsPage(false);
    setIsWalletPage(false);
    setIsUserPage(false);
  }

  return (
    <nav className="floating-navbar">
        <div className="navbar-left">
          <button onClick={handleHomeClick}>butter.</button>
        </div>
        <div className="navbar-right">
            <div className="navbar-buttons">
              <button onClick={handleBets}>&#128640;</button>
              <button onClick={handleWallet}>&#128176;</button>
              <button onClick={handleUser}>&#128100;</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;