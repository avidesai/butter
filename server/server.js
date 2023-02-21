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

app.get("/api", (req, res) => {
    res.json({
        name: "John Smith",
        balance: 1000,
        cash: 500,
        karma: 250
    })
})


app.listen(4000, () => { console.log("Server started on port 4000") })
