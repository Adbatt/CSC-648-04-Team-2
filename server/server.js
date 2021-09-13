// imports
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const mongo_connection = process.env.MONGO_URI;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongo_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get('/api/v1/test', (req, res) => {
    res.json({message: 'it works'});
});

app.listen(port, () => {console.log(`Listening on ${port}`)});