import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import moment from 'moment';

import './BettingGrid.css';
import BetModal from './BetModal';
import Clock from '../images/clock.png';

const BettingGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [timeLeft, setTimeLeft] = useState(moment().startOf('day').seconds(9000).format('H:mm'));
  const [betOptions, setBetOptions] = useState([]);

  const handleBetAmount = (selectedOption, betAmount) => {
    console.log(`Selected option: ${selectedOption}, Bet amount: ${betAmount}`);
  };

  const openModal = (title, price, choices) => {
    setModalOpen(true);
    setModalData({ title, price, choices});
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const dbRef = ref(getDatabase(), 'live-bets');

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setBetOptions(data);
    });

    const interval = setInterval(() => {
      setTimeLeft(moment().startOf('day').seconds(9000).subtract(1, 'seconds').format('H:mm'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="betting-grid">
      <BetModal 
          isOpen={modalOpen} 
          closeModal={closeModal} 
          handleBetAmount={handleBetAmount} 
          data={modalData}
        />
      {betOptions.map(option => (
        <div className="tile" key={option.title}>
          <div className="tile-timer">
            <img src={Clock} alt=""/>
            <p className="timer">{timeLeft} left</p>
          </div>
          <h3>{option.title}</h3>
          <div className="tile-footer">
            <h4>{Number(option.price).toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}</h4>
            <button onClick={() => openModal(option.title, option.price, option.choices)}>Bet</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BettingGrid;
