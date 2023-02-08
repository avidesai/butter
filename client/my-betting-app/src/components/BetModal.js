import React from 'react';
import './BetModal.css';

const BetModal = ({ isOpen, closeModal, handleBetAmount, data }) => {
  const { title, price } = data;
  return (
    <div className={`modal-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className={`modal-content ${isOpen ? 'is-open' : ''}`}>
            <button onClick={closeModal} className="modal-close-button">X</button>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <div className="bottom-part">
              <p>Enter bet amount:</p>
              <input type="number" name="betAmount" min="1" required className="bet-amount-input" />
              <button type="submit">Submit</button>
            </div>
        </div>
    </div>
  );
}


export default BetModal;