import React from 'react';

const BetModal = ({isOpen, closeModal, handleBetAmount}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Enter Bet Amount</h3>
        <form>
          <input type="number" placeholder="Enter amount" onChange={handleBetAmount}/>
        </form>
        <button onClick={closeModal}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default BetModal;
