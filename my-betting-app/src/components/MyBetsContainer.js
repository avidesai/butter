import './MyBetsContainer.css';
import React, { useState } from 'react';

const MyBetsContainer = () => {
    const [activeBets, setActiveBets] = useState([    { id: 1, bet: "Team A to win", profitLoss: "+$50" },    { id: 2, bet: "Team B to win", profitLoss: "-$20" },    { id: 3, bet: "Draw", profitLoss: "+$10" },  ]);
    const [pastBets, setPastBets] = useState([    { id: 4, bet: "Team C to win", profitLoss: "+$75" },    { id: 5, bet: "Team D to win", profitLoss: "-$5" },    { id: 6, bet: "Draw", profitLoss: "+$30" },  ]);
  return (
    <div className="my-bets-container">
      <h1>Bets</h1>
      <div className="table-wrapper">
        <div className="active-bets-container">
          <h2>Active</h2>
          <table>
            <thead>
              <tr>
                <th>Bet</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {activeBets.map(bet => (
                <tr key={bet.id}>
                  <td>{bet.bet}</td>
                  <td>{bet.profitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="past-bets-container">
          <h2>Previous</h2>
          <table>
            <thead>
              <tr>
                <th>Bet</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {pastBets.map(bet => (
                <tr key={bet.id}>
                  <td>{bet.bet}</td>
                  <td>{bet.profitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
      </div>
    </div>
  );
}

export default MyBetsContainer;