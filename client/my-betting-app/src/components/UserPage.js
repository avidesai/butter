import React, { useState } from 'react';
import './UserPage.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import MyBets from './MyBets';
import MyWallet from './MyWallet';

function UserPage() {
  const [currentPage, setCurrentPage] = useState('home');

    return(
      <div className="user-page-container">
        <div className= "container">
          <div className="container">
              <Navbar setCurrentPage={setCurrentPage} />
          </div>
          <div className="container">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'bets' && <MyBets />}
            {currentPage === 'wallet' && <MyWallet />}
          </div>
        </div>
      </div>
    );
}

export default UserPage;