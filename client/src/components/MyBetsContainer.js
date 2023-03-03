import './MyBetsContainer.css';
import SocialFeed from './SocialFeed';
import React from 'react';

const MyBetsContainer = () => {
    const leaderboard = [  { id: 1, playerName: "Bear 🐻", dateStarted: "01/22", totalBetsMade: 15, monthlyProfitLoss: "27,890" },  { id: 2, playerName: "Fox 🦊", dateStarted: "09/21", totalBetsMade: 10, monthlyProfitLoss: "17,345" },  { id: 3, playerName: "Dog 🐶", dateStarted: "04/20", totalBetsMade: 8, monthlyProfitLoss: "14,525" },  { id: 4, playerName: "Cat 🐱", dateStarted: "11/19", totalBetsMade: 5, monthlyProfitLoss: "9,955" },  { id: 5, playerName: "Parrot 🦜", dateStarted: "05/19", totalBetsMade: 3, monthlyProfitLoss: "8,435" }];
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
      <div className='social-feed-section'>
        <h1 className="social-feed-title">Social Feed</h1>
        <SocialFeed />
      </div>
    </div>
  );
}

export default MyBetsContainer;