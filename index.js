
const express = require("express");
const cors = require("cors")

const app = express();
const PRODUCT = require("./data.js");

app.use(cors())
// Create GET request

app.get("/productos", (_req, res) => {
  const allProducts = [
    ...PRODUCT.acompañamiento,
    ...PRODUCT.postres,
    ...PRODUCT.cafeteria,
    ...PRODUCT.vinos,
    ...PRODUCT.cervezas,
    ...PRODUCT.bebidas,
    ...PRODUCT.menuInfantil,
    ...PRODUCT.menuPrincipal
  ];
 return res.json(allProducts);
});

app.get("/acompaniamiento", (_req, res) => {
  const productos = PRODUCT.acompañamiento
  return res.json(productos);
});
app.get("/postres", (_req, res) => {
  const productos = PRODUCT.postres
 return res.json(productos);
});
app.get("/vinos", (_req, res) => {
  const productos = PRODUCT.vinos
 return res.json(productos);
});
app.get("/cervezas", (_req, res) => {
  const productos = PRODUCT.cervezas
 return res.json(productos);
});
app.get('/bebidas',(_req, res) => {
  const productos = PRODUCT.bebidas
  return res.json(productos)
})
app.get('/menuInfantil',(_req, res) => {
  const productos = PRODUCT.menuInfantil
  return res.json(productos);
})
app.get('/menuPrincipal',(_req, res) => {
  const productos = PRODUCT.menuPrincipal
  return res.json(productos);
})

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;