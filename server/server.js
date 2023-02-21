const express = require('express');
const mysql = require('mysql');
const app = express();

app.get("/api", (req, res) => {
    res.json({
        name: "John Smith",
        balance: 1000,
        cash: 500,
        karma: 250
    })
})

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase'
});

app.get('/api/bet-options', (req, res) => {
    pool.query('SELECT * FROM bet_options', (error, results, fields) => {
      if (error) {
        res.status(500).json({ message: 'Error retrieving data from database' });
      } else {
        res.json(results);
      }
    });
  });
  

app.listen(4000, () => { console.log("Server started on port 4000") })
