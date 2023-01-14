import React, { useState } from 'react';
import './MyWalletContainer.css';

function MyWalletContainer() {
  const [balance, setBalance] = useState(1000); // example starting balance
  const [cash, setCash] = useState(500); // example starting cash
  const [bettingPower, setBettingPower] = useState(1500); // example starting betting power

  return (
    <div className="my-wallet-container">
      <h2>My Wallet</h2>
      <div className="wallet-info">
        <div className="balance">
          <h3>Balance</h3>
          <p>{balance}</p>
          <div className="button-stack">
            <button onClick={() => setBalance(balance + 100)}>Deposit</button>
            <button onClick={() => setBalance(balance - 100)}>Withdraw</button>
          </div>
        </div>
        <div className="cash">
          <h3>Cash</h3>
          <p>{cash}</p>
        </div>
        <div className="betting-power">
          <h3>Betting Power</h3>
          <p>{bettingPower}</p>
        </div>
      </div>
    </div>
  );
}

export default MyWalletContainer;