const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({
        name: "Mr. Butter",
        balance: 1000,
        cash: 500
    })
})

app.listen(4000, () => { console.log("Server started on port 4000") })
