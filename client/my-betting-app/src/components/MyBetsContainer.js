import './MyBetsContainer.css';
import React, { useState } from 'react';

const MyBetsContainer = () => {
    const [activeBets, setActiveBets] = useState([    { id: 1, bet: "Emmy's 2023", profitLoss: "+50" },    { id: 2, bet: "Super Bowl 2022", profitLoss: "-20" },    { id: 3, bet: "Grammy's 2023", profitLoss: "+40" },  ]);
    const [pastBets, setPastBets] = useState([    { id: 4, bet: "Golden Globes 2023", profitLoss: "+75" },    { id: 5, bet: "Taylor Swift", profitLoss: "-5" },    { id: 6, bet: "Barack Obama", profitLoss: "+30" },  ]);
    const leaderboard = [  { id: 1, playerName: "🐻 Bear", dateStarted: "01/22", totalBetsMade: 15, monthlyProfitLoss: "27,890" },  { id: 2, playerName: "🦊 Fox", dateStarted: "09/21", totalBetsMade: 10, monthlyProfitLoss: "17,345" },  { id: 3, playerName: "🐶 Dog", dateStarted: "04/20", totalBetsMade: 8, monthlyProfitLoss: "14,525" },  { id: 4, playerName: "🐱 Cat", dateStarted: "11/19", totalBetsMade: 5, monthlyProfitLoss: "9,955" },  { id: 5, playerName: "🦜 Parrot", dateStarted: "05/19", totalBetsMade: 3, monthlyProfitLoss: "8,435" }];
  return (
    <div className="my-bets-container">
      <div className="leaderboard-section">
        <h1>Leaderboard</h1>
        <div className="leaderboard-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Date Started</th>
                <th>Lifetime Bets</th>
                <th>Monthly Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(player => (
                <tr key={player.id}>
                  <td className="player-name">{player.playerName}</td>
                  <td>{player.dateStarted}</td>
                  <td>{player.totalBetsMade}</td>
                  <td className="profit-loss">{player.monthlyProfitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bets-section">
        <h1>My Bets</h1>
        <div className="my-bets-table-wrapper">
          <div className="active-bets-container">
            <h3>Active</h3>
            <table>
              <thead>
                <tr>
                  <th className="bet-name">Bet</th>
                  <th>Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {activeBets.map(bet => (
                  <tr key={bet.id}>
                    <td>{bet.bet}</td>
                    <td className="profit-loss">{bet.profitLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="past-bets-container">
            <h3>Previous</h3>
            <table>
              <thead>
                <tr>
                  <th className="bet-name">Bet</th>
                  <th>Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {pastBets.map(bet => (
                  <tr key={bet.id}>
                    <td>{bet.bet}</td>
                    <td className="profit-loss">{bet.profitLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default MyBetsContainer;