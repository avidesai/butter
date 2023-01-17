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
  const handleUser = () => {
    setIsBetsPage(false);
    setIsHomePage(false);
    setIsWalletPage(false);
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
              <button onClick={handleBets}>&#128100;</button>
              <button onClick={handleWallet}>&#128176;</button>
              <button onClick={handleUser}>&#128640;</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;