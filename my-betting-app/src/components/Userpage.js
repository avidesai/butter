import React, { useState } from 'react';
import Navbar from './Navbar';

function UserPage() {
    const [user, setUser] = useState({
        name: 'John Doe',
        balance: '$100',
        bets: [
            { id: 1, date: '01/01/2022', game: 'Soccer', bet: '$10', outcome: 'Won' },
            { id: 2, date: '01/05/2022', game: 'Basket', bet: '$20', outcome: 'Lost' },
            { id: 3, date: '01/10/2022', game: 'Tennis', bet: '$15', outcome: 'Won' }
        ]
    });

    function handleDeposit(e) {
        e.preventDefault();
        // code to handle deposit
    }

    function handleWithdraw(e) {
        e.preventDefault();
        // code to handle withdraw
    }
    return(
        <Navbar />
    );
}