const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

// Create a new connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Hawaii11',
  database: 'bet_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Query the database to retrieve the BET_OPTIONS data
async function getBetOptions() {
  const [rows, fields] = await pool.query('SELECT * FROM BET_OPTIONS');
  return rows;
}

app.get('/api/getBetOptions', async (req, res) => {
  try {
    const betOptions = await getBetOptions();
    res.json(betOptions);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/createUserAccount', async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const balance = 500;
    const bettingPower = 500;
    const karma = 50;
    const activeBets = '';
    const pastBets = '';

    // Insert the new record into the USER_ACCOUNTS table
    const [result] = await pool.execute(
      `INSERT INTO USER_ACCOUNTS (first_name, last_name, email, password, balance, betting_power, karma, active_bets, past_bets)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, password, balance, bettingPower, karma, activeBets, pastBets]
    );    

    // Log the contents of the USER_ACCOUNTS table
    const [rows] = await pool.execute('SELECT * FROM USER_ACCOUNTS');
    console.log(rows);

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});


app.get("/api", (req, res) => {
    res.json({
        name: "John Smith",
        balance: 1000,
        cash: 500,
        karma: 250
    })
})


app.listen(4000, () => { console.log("Server started on port 4000") })
