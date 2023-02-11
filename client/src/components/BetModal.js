import React, { useState } from 'react';
import './BetModal.css';

const BetModal = ({ isOpen, closeModal, handleBetAmount, data }) => {
  const { title, price, choices } = data;
  const [selectedOption, setSelectedOption] = useState();
  const isOptionSelected = selectedOption !== undefined;

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className={`modal-content ${isOpen ? 'is-open' : ''}`}>
        <div className="modal-header">
          <button onClick={closeModal} className="bet-modal-close-button">X</button>
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <h4>{price}</h4>
          {choices && choices.length > 0 && (
            <div className="choice-container">
              {choices.map((choice, index) => (
                <div key={index} className="choice-selection">
                  <input
                    type="radio"
                    id={`choice-${index}`}
                    name={title}
                    value={choice}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={`choice-${index}`}>{choice}</label>
                </div>
              ))}
            </div>
          )}
          <form onSubmit={handleBetAmount} className="entry-form">
            <input
              type="number"
              name="betAmount"
              min="1"
              required
              className="bet-amount-input"
              placeholder="Enter bet amount"
            />
            <button type="submit" disabled={!isOptionSelected} onClick={closeModal}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
