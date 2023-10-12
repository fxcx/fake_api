// Add Express
const express = require("express");
const PRODUCT = require("./data.js");
// Initialize Express
const app = express();

// Create GET request
app.get("/", (_req, res) => {
  res.send("Express on Vercel");
});

app.get("/productos", (_req, res) => {
  const productos = PRODUCT.acompañamiento;
  res.json(productos);
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;