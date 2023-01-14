import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './BettingGrid.css';
import Clock from '../images/clock.png';


const BettingGrid = () => {
  const [timeLeft, setTimeLeft] = useState(moment().startOf('day').seconds(9000).format('H:mm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(moment().startOf('day').seconds(9000).subtract(1, 'seconds').format('H:mm'));
    }, 1000);
    return () => clearInterval(interval);
    }, []);
  return (
    <div className="betting-grid">
      <div className="tile">
        <div className="tile-timer">
          <img src={Clock} alt=""/>
          <p className="timer">{timeLeft} left</p>
        </div> 
        <h3>Emmy's 2023 Winner</h3>
        <div className="tile-footer">
          <h4>$22,342</h4>
          <button>Place Bet</button>
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
          <button>Place Bet</button>
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
          <button>Place Bet</button>
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
          <button>Place Bet</button>
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
          <button>Place Bet</button>
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
          <button>Place Bet</button>
        </div>
      </div>
    </div>
  );
}

export default BettingGrid;