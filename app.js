const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/wikiAppDB",
                 {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res) => {
  res.send("hello world");
})

app.listen(3000, () => {
  console.log("running on port 3000");
})