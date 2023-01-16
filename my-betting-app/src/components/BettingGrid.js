import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './BettingGrid.css';
import BetModal from './BetModal';
import Clock from '../images/clock.png';


const BettingGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [timeLeft, setTimeLeft] = useState(moment().startOf('day').seconds(9000).format('H:mm'));

    const handleBetAmount = (e) => {
      e.preventDefault();
      const {title, price} = modalData;
      // code to handle bet amount with title and price
    }
    
    const openModal = (title, price) => {
      setModalOpen(true);
      setModalData({ title, price });
    }
    
    const closeModal = () => {
    setModalOpen(false);
    }

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
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div>
        <h3>Emmy's 2023 Winner</h3>
        <div className="tile-footer">
          <h4>$22,342</h4>
          <button onClick={() => openModal("Emmy's 2023 Winner", "$22,342")}>Place Bet</button>
        </div>
      </div>
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>Best Album to Blast on a Saturday Night</h3>
        <div className="tile-footer">
          <h4>$9,527</h4>
          <button onClick={() => openModal("Best Album to Blast on a Saturday Night", "$9,527")}>Place Bet</button>
        </div>
      </div>
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>Most Emotional End of an Era</h3>
        <div className="tile-footer">
          <h4>$127,833</h4>
          <button onClick={() => openModal("Most Emotional End of an Era", "$127,833")}>Place Bet</button>
        </div>
      </div>
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>⚠️ It’s time to be honest ⚠️</h3>
        <div className="tile-footer">
          <h4>$2,391</h4>
          <button onClick={() => openModal("⚠️ It’s time to be honest ⚠️", "$2,391")}>Place Bet</button>
        </div>
      </div>
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>Can we trust the golden globes again?</h3>
        <div className="tile-footer">
          <h4>$19,935</h4>
          <button onClick={() => openModal("Can we trust the golden globes again?", "$19,935")}>Place Bet</button>
        </div>
      </div>
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>Golden Globes Winner</h3>
        <div className="tile-footer">
          <h4>$12,184</h4>
          <button onClick={() => openModal("Emmy's 2023 Winner", "$22,342")}>Place Bet</button>
        </div>
      </div>
    </div>
  );
}

export default BettingGrid;