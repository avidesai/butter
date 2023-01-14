import React, {useState} from 'react';
import './App.css'

import Navbar from './components/Navbar';
import BettingGrid from './components/BettingGrid';
import UserPage from './components/UserPage';

function App() {
  const [isUserPage, setIsUserPage] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Navbar setIsUserPage={setIsUserPage} />
      </div>
      <div className="container">
        {isUserPage ? <UserPage /> : <BettingGrid /> }
      </div>
    </div>
  );
}


export default App;
