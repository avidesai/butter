import React, {useState} from 'react';
import './HomePage.css'

import Navbar from './Navbar';
import BettingGrid from './BettingGrid';
import UserPage from './UserPage';
import MyBets from './MyBets';
import MyWallet from './MyWallet';

function HomePage() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isUserPage, setIsUserPage] = useState(false);
  const [isBetsPage, setIsBetsPage] = useState(false);
  const [isWalletPage, setIsWalletPage] = useState(false); 
  return (
    <div className="HomePage">
      <div className="container">
        <Navbar setIsHomePage={setIsHomePage} setIsBetsPage={setIsBetsPage} setIsWalletPage={setIsWalletPage}  setIsUserPage={setIsUserPage} />
      </div>
      <div className="container">
        {isHomePage ? <HomePage /> : isBetsPage ? <MyBets /> : isWalletPage ? <MyWallet /> : isUserPage ? <UserPage /> : <BettingGrid />}
      </div>
    </div>
  );
}
export default HomePage;