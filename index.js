// Add Express
const express = require("express");
// Initialize Express
const app = express();
const PRODUCT = require("./data.js");

// Create GET request
app.get("/api", (_req, res) => {
  res.send("Express Vercel");
});

app.get("/acompaniamiento", (_req, res) => {
  const productos = PRODUCT.acompañamiento
  res.json(productos);
});
app.get("/postres", (_req, res) => {
  const productos = PRODUCT.postres
  res.json(productos);
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;