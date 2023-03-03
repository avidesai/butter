import React, { useState } from 'react';
import HomePage from './HomePage';
import Navbar from './Navbar';
import UserPage from './UserPage';
import MyBets from './MyBets';
import MyWalletContainer from './MyWalletContainer.js';


function MyWallet() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isUserPage, setIsUserPage] = useState(false);
  const [isBetsPage, setIsBetsPage] = useState(false);
  const [isWalletPage, setIsWalletPage] = useState(false); 
  // useState hook to store the data for active and past bets
  return (
    <div className="MyWallet">
      <div className="container">
        <Navbar setIsHomePage={setIsHomePage} setIsBetsPage={setIsBetsPage} setIsWalletPage={setIsWalletPage}  setIsUserPage={setIsUserPage} />
      </div>
      <div className="container">
        {isHomePage ? <HomePage /> : isBetsPage ? <MyBets /> : isWalletPage ? <MyWallet /> : isUserPage ? <UserPage /> : <MyWalletContainer />}
      </div>
    </div>
  );
}

export default MyWallet;