import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import './MyWalletContainer.css';

function MyWalletContainer() {
  const [showModal, setShowModal] = useState(true);
  const [activeBets, setActiveBets] = useState([{ id: 1, bet: "No active bets", profitLoss: "-" }]);
  const [pastBets, setPastBets] = useState([{ id: 1, bet: "No past bets", profitLoss: "-" }]);
  const [balance, setBalance] = useState(0);
  const [profitloss, setProfitLoss] = useState(0);
  const [karma, setKarma] = useState(0);
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const toggleModal = () => setShowModal(!showModal);
  const [formType, setFormType] = React.useState("Login");

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const db = getDatabase();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        get(ref(db, `user-accounts/${user.uid}`)).then((snapshot) => {
          const data = snapshot.val();
          setName(`${data.firstName} ${data.lastName}`);
          setKarma(data.karma);
          setBalance(data.balance);
          setProfitLoss(data.profitLoss);
          setActiveBets(data.activeBets);
          setPastBets(data.pastBets);
          // Set website state to "logged in"
          toggleModal();
        });
      }).catch((error) => {
        console.log("Error logging in: ", error);
      });
  };  

  const handleCreateAccount = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const db = getDatabase();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, `user-accounts/${user.uid}`), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          karma: 0,
          balance: 500,
          profitLoss: 0,
          activeBets: [{ id: 1, bet: "No active bets", profitLoss: "-" }],
          pastBets: [{ id: 1, bet: "No past bets", profitLoss: "-" }]
        }).then(() => {
          console.log("User account created successfully");
          setFormType("Login");
          setErrorMessage(''); // reset error message
          event.target.reset(); // Clear form fields
        }).catch((error) => {
          console.log("Error creating user account: ", error);
        });
      });
  };

  return (
    <div className="my-wallet-container">
      <h1>Welcome <span className="purple-name">{name}</span> &#129412;</h1>
      <div className="karma-box">
        <p className="karma-balance">
        &#128293;	{karma} karma
        </p>
      </div>
      {/* Show the modal only if showModal is true */}
      {showModal && (
         <div className="modal-wrapper">
         <div className="modal">
           <button onClick={toggleModal} className="wallet-modal-close-button">X</button>
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
             <form onSubmit={handleLogin}>
               <input type="email" placeholder="Email" name="email" />
               <input type="password" placeholder="Password" name="password" />
               <button type="submit">Submit</button>
             </form>
           ) : (
            <form onSubmit={handleCreateAccount}>
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <input type="password" placeholder="Confirm Password" name="confirmPassword" />
              {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>}
              <button type="submit">Submit</button>
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
        <div className="pnl">
          <h3>Total Profit / Loss</h3>
          <p className="dollars">{profitloss}</p>
        </div>
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
  );
}

export default MyWalletContainer;
