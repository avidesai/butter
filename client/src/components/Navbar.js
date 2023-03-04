import React from 'react';
import './Navbar.css';

function Navbar({setIsBetsPage, setIsWalletPage, setIsUserPage, setIsHomePage}) {

  const handleBets = () => {
    setIsBetsPage(true);
    setIsHomePage(false);
    setIsWalletPage(false);
    setIsUserPage(false);
  }
  const handleWallet = () => {
    setIsBetsPage(false);
    setIsHomePage(false);
    setIsWalletPage(true);
    setIsUserPage(false);
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
          <button onClick={handleHomeClick}>
            <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9c7.png" alt="butter" />
            butter.
          </button>
        </div>
        <div className="navbar-right">
            <div className="navbar-buttons">
              <button onClick={handleHomeClick}>&#127920;</button>
              <button onClick={handleBets}>&#127758;</button>
              <button onClick={handleWallet}>&#128100;</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;