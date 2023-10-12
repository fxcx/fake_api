// Add Express
const express = require("express");
const cors = require("cors")
// Initialize Express
const app = express();
const PRODUCT = require("./data.js");

app.use(cors())
// Create GET request
app.get("/productos", (_req, res) => {
  const allProducts = [...PRODUCT.acompañamiento, ...PRODUCT.postres];
  res.json(allProducts);
});

app.get("/acompaniamiento", (_req, res) => {
  const productos = PRODUCT.acompañamiento
  return res.json(productos);
});
app.get("/postres", (_req, res) => {
  const productos = PRODUCT.postres
 return res.json(productos);
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;