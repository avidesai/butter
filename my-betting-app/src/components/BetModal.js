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
            <form onSubmit={handleBetAmount}>
                <label>
                    Enter bet amount:
                    <input type="number" name="betAmount" min="1" required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}


export default BetModal;