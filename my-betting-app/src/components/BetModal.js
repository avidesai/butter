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
            <p>Enter bet amount:</p>
            <div className="button input"></div>
            <input type="number" name="betAmount" min="1" required />
            <button type="submit">Submit</button>
        </div>
    </div>
  );
}


export default BetModal;