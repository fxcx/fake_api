const express = require("express");


const app = express();


app.get("/data", (req, res) => {
  // Leer todos los datos desde tu archivo JSON y responder con ellos
  const data = require("./db.json");
  res.json(data);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;