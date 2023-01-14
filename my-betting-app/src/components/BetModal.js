import React from 'react';
import './BetModal.css';

const BetModal = ({ isOpen, closeModal, handleBetAmount }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">
              X
            </button>
            <form onSubmit={handleBetAmount}>
              <label>
                Enter bet amount:
                <input type="number" name="betAmount" min="1" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BetModal;