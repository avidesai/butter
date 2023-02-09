const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({
        name: "John Smith",
        balance: 1000,
        cash: 500,
        karma: 250
    })
})

app.listen(4000, () => { console.log("Server started on port 4000") })
