import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import moment from 'moment';

import './BettingGrid.css';
import BetModal from './BetModal';
import Clock from '../images/clock.png';

const BettingGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
      setBetOptions(prevState => {
        return prevState.map(option => {
          const endTime = moment(option['end-time']);
          const now = moment();
          const duration = moment.duration(endTime.diff(now));
          const timeLeft = duration.as('milliseconds');
          let formattedTimeLeft;
          if (timeLeft <= 0) {
            formattedTimeLeft = "0:00";
          } else {
            const hoursLeft = Math.floor(duration.asHours());
            const daysLeft = Math.floor(duration.asDays());
            const minutesLeft = duration.minutes();
            const secondsLeft = duration.seconds();
            if (daysLeft > 0) {
              formattedTimeLeft = `${daysLeft} days`;
            }
            else {
              formattedTimeLeft = `${hoursLeft} hours`;
            }
           
          }
          return {
            ...option,
            timeLeft: formattedTimeLeft
          };
        });
      });
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
            <p className='emoji' dangerouslySetInnerHTML={{ __html: option.emoji }}></p>
            <p className="timer">{option.timeLeft} left</p>
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
