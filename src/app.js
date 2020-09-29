const express = require("express");
const { callbackify } = require("util");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Bonjour tout le monde");
});

app.listen(3000, function () {
  console.log(Example app listening at http://localhost:3000);
});