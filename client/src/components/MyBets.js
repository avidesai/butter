import React, { useState } from 'react';

import HomePage from './HomePage';
import Navbar from './Navbar';
import UserPage from './UserPage';
import MyWallet from './MyWallet';
import MyBetsContainer from './MyBetsContainer';


function MyBets() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isUserPage, setIsUserPage] = useState(false);
  const [isBetsPage, setIsBetsPage] = useState(false);
  const [isWalletPage, setIsWalletPage] = useState(false); 
  // useState hook to store the data for active and past bets
  return (
    <div className="MyBets">
      <div className="container">
        <Navbar setIsHomePage={setIsHomePage} setIsBetsPage={setIsBetsPage} setIsWalletPage={setIsWalletPage}  setIsUserPage={setIsUserPage} />
      </div>
      <div className="container">
        {isHomePage ? <HomePage /> : isBetsPage ? <MyBets /> : isWalletPage ? <MyWallet /> : isUserPage ? <UserPage /> : <MyBetsContainer />}
      </div>
    </div>
  );
}

export default MyBets;