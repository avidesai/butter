import React from 'react';
import './BettingGrid.css';

const BettingGrid = () => {
  return (
    <div className="betting-grid">
      <div className="tile">
        <h3>Emmy's 2023 Winner</h3>
        <h4>$22,342</h4>
        <button>Place Bet</button>
      </div>
      <div className="tile">
        <h3>Best Album to Blast on a Saturday Night</h3>
        <h4>$9,527</h4>
        <button>Place Bet</button>
      </div>
      <div className="tile">
        <h3>Most Emotional End of an Era</h3>
        <h4>$127,833</h4>
        <button>Place Bet</button>
      </div>
      <div className="tile">
        <h3>⚠️ It’s time to be honest ⚠️</h3>
        <h4>$2,391</h4>
        <button>Place Bet</button>
      </div>
      <div className="tile">
        <h3>Can we trust the golden globes again?</h3>
        <h4>$19,935</h4>
        <button>Place Bet</button>
      </div>
      <div className="tile">
        <h3>Golden Globes Winner</h3>
        <h4>$12,184</h4>
        <button>Place Bet</button>
      </div>
    </div>
  );
}

export default BettingGrid;