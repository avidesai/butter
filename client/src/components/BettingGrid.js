import React, { useState, useEffect } from 'react';
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
    const fetchBetOptions = async () => {
      try {
        const response = await fetch('/api/getBetOptions');
        const data = await response.json();
        setBetOptions(data);
      } catch (error) {
        console.error(error);
        setBetOptions([
          {
            title: "Emmy's Best Comedy Series 🎭",
            price: 22342,
            choices: ["Barry", "Ted Lasso", "Curb Your Enthusiasm", "Schitt's Creek"]
          },
          {
            title: "Best Album of 2022 🎶",
            price: 9527,
            choices: ["Renaissance by Beyoncé", "Ramona Park Broke My Heart by Vince Staples", "Un Verano Sin Ti by Bad Bunny", "The Slow Rush by Tame Impala"]
          },
          {
            title: "Is Leonardo DiCaprio's Relationship Acceptable? 🔥",
            price: 127833,
            choices: ["Yes", "No"]
          },
          {
            title: "Will Trump Get Impeached? 🍑",
            price: 2391,
            choices: ["Yes", "No"]
          },
          {
            title: "Is COVID-19 a man made virus? 🦠",
            price: 19935,
            choices: ["Yes", "No"]
          },
          {
            title: "Best Movie to Watch on a Rainy Day ☔",
            price: 1234,
            choices: ["The Breakfast Club", "Ferris Bueller's Day Off", "Forrest Gump", "The Shawshank Redemption"]
          },
        ]);
      }
    };

    fetchBetOptions();

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
            <button onClick={() => openModal(option.title, option.price, option.choices)}>Place Bet</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BettingGrid;