import React, { useState, useEffect } from 'react';
import './MyWalletContainer.css';

function MyWalletContainer() {
  const [showModal, setShowModal] = useState(true);
  const [activeBets, setActiveBets] = useState([    { id: 1, bet: "Emmy's 2023", profitLoss: "+50" },    { id: 2, bet: "Super Bowl 2022", profitLoss: "-20" },    { id: 3, bet: "Grammy's 2023", profitLoss: "+40" },  ]);
  const [pastBets, setPastBets] = useState([    { id: 4, bet: "Golden Globes 2023", profitLoss: "+75" },    { id: 5, bet: "Taylor Swift", profitLoss: "-5" },    { id: 6, bet: "Barack Obama", profitLoss: "+30" },  ]);
  const [balance, setBalance] = useState(0);
  const [cash, setCash] = useState(0);
  const [karma, setKarma] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        // Set the values from the API response
        setBalance(data.balance);
        setCash(data.cash);
        setName(data.name);
        setKarma(data.karma);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const toggleModal = () => setShowModal(!showModal);
  const [formType, setFormType] = React.useState("Login");

  return (
    <div className="my-wallet-container">
      <h1>Welcome, {name}!</h1>
      <div className="karma-box">
        <p className="karma-balance">
        &#128293;	{karma} Karma
        </p>
      </div>
      {/* Show the modal only if showModal is true */}
      {showModal && (
         <div className="modal-wrapper">
         <div className="modal">
           <button onClick={toggleModal} className="modal-close-button">X</button>
           <h2>Log In / Create Account</h2>
           {/* centered toggle */}
           <div className="form-toggle">
             <button
               className={formType === "Login" ? "active" : ""}
               onClick={() => setFormType("Login")}
             >
               Log In
             </button>
             <button
               className={formType === "Create Account" ? "active" : ""}
               onClick={() => setFormType("Create Account")}
             >
               Create Account
             </button>
           </div>
           {/* form for login/create account */}
           {formType === "Login" ? (
             <form>
               <input type="email" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <button type="submit" onClick={toggleModal}>
                 Submit
               </button>
             </form>
           ) : (
             <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
               <input type="email" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <input type="password" placeholder="Confirm Password" />
               <button type="submit" onClick={toggleModal}>
                 Submit
               </button>
             </form>
           )}
         </div>
       </div>
      )}
      <div className="wallet-info">
        <div className="balance">
          <h3>Balance</h3>
          <p>{balance}</p>
          <div className="button-stack">
            <button onClick={() => setBalance(balance + 100)}>Deposit</button>
            <button onClick={() => setBalance(balance - 100)}>Withdraw</button>
          </div>
        </div>
        <div className="cash">
          <h3>Cash</h3>
          <p className="dollars">{cash}</p>
        </div>
      </div>
      <div className="bets-section">
        <div className="my-bets-table-wrapper">
          <div className="active-bets-container">
            <h3>Active Bets</h3>
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
            <h3>Past Bets</h3>
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

export default MyWalletContainer;
