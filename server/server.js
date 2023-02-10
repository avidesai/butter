const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://butteradmin:Getbutter11@cluster0.rmifeot.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const db = client.db("butter");
    const collection = db.collection("users");
    collection.find({}).toArray(function(err, data) {
       if (err) {
          console.log(err);
       } else {
          console.log(data);
       }
       client.close();
    });
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
