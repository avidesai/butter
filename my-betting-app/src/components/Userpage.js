import React, { useState } from 'react';
import './UserPage.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import MyBets from './MyBets';
import MyWallet from './MyWallet';
import BettingGrid from './BettingGrid';

function UserPage() {
    const [isHomePage, setIsHomePage] = useState(false);
    const [isUserPage, setIsUserPage] = useState(false);
    const [isBetsPage, setIsBetsPage] = useState(false);
    const [isWalletPage, setIsWalletPage] = useState(false); 
  const [activeBets, setActiveBets] = useState([
    { betId: 1, betType: 'Horse Racing', betAmount: 50, profitLoss: -10 },
    { betId: 2, betType: 'Soccer', betAmount: 100, profitLoss: 25 },
    { betId: 3, betType: 'Basketball', betAmount: 75, profitLoss: -5 }
  ]);
  const [pastBets, setPastBets] = useState([
    { betId: 4, betType: 'Football', betAmount: 50, profitLoss: 10 },
    { betId: 5, betType: 'Baseball', betAmount: 100, profitLoss: -25 },
    { betId: 6, betType: 'Hockey', betAmount: 75, profitLoss: 15 }
  ]);

  return (
    <div className="user-page-container">
      <div className= "container">
        <div className="container">
            <Navbar setIsHomePage={setIsHomePage} setIsBetsPage={setIsBetsPage} setIsWalletPage={setIsWalletPage}  setIsUserPage={setIsUserPage} />
        </div>
        <div className="container">
            {isHomePage ? <HomePage /> : isBetsPage ? <MyBets /> : isWalletPage ? <MyWallet /> : isUserPage ? <UserPage /> : <BettingGrid />}
        </div>
      </div>
    </div>
  );
}

export default UserPage;