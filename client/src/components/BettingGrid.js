import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './BettingGrid.css';
import BetModal from './BetModal';
import Clock from '../images/clock.png';

const BET_OPTIONS = [
{ title: "Emmy's 2023 Winner", price: 22342 },
{ title: "Best Album of 2022", price: 9527 },
{ title: "Is Leonardo DiCaprio's Relationship Acceptable?", price: 127833 },
{ title: "⚠️ Will Trump Get Impeached? ⚠️", price: 2391 },
{ title: "Is COVID-19 a man made virus?", price: 19935 },
{ title: "Best Movie to Watch on a Rainy Day", price: 1234 },
];

const BettingGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [timeLeft, setTimeLeft] = useState(moment().startOf('day').seconds(9000).format('H:mm'));

const handleBetAmount = (e) => {
  e.preventDefault();
};

const openModal = (title, price) => {
  setModalOpen(true);
  setModalData({ title, price });
};

const closeModal = () => {
  setModalOpen(false);
};

useEffect(() => {
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
    {BET_OPTIONS.map(option => (
      <div className="tile" key={option.title}>
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div>
        <h3>{option.title}</h3>
        <div className="tile-footer">
          <h4>{option.price.toLocaleString()}</h4>
          <button onClick={() => openModal(option.title, option.price)}>Place Bet</button>
        </div>
      </div>
    ))}
  </div>
);
};

export default BettingGrid;