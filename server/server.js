// imports
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {console.log(`Listening on ${port}`)});