import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import BettingGrid from './components/BettingGrid';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
      </div>
      <div className="container">
        <BettingGrid />
      </div>
    </div>
  );
}

export default App;
